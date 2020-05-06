import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
    Grid,
    Row
} from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import Section from "components/Section/Section.jsx";
import _ from "lodash";
import { Card } from "components/Card/Card.jsx";
import amplify, { API, graphqlOperation, Storage } from 'aws-amplify'
import { createCourse, createSection, createPage, createContent } from 'graphql/mutations'
import uuid from 'react-uuid'

import config from '../aws-exports'

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = config

var tempcourse = {
    name: "tempcourse",
    sections: [
        {name: 'section1',
         pages: [
             {name: 'page1', template: 'IMAGE WITH TEXT', contents: []},
             {name: 'page2', template: 'FULLSCREEN VIDEO', contents: []},
             {name: 'page3', template: 'IMAGE WITH TEXT', contents: []}
         ] 
        },
        {name: 'section2',
        pages: [
            {name: 'page2.1', template: 'TEXT', contents: []},
            {name: 'page2.2', template: 'FULLSCREEN IMAGE', contents: []},
            {name: 'page2.3', template: 'QUIZ CONTENT', contents: []}
        ] 
       }
    ],
    edited_at: 'hello', 
    documents: []
}

class CourseAdding extends Component {
    constructor() {
        super();
        this.state = {
            loadPropState: false,
            course: {
                name: '',
                sections: [{
                    name: '',
                    pages: [],
                }],
                edited_at: '',
                documents: [],
            }
        }
    }

    
    // https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13

  // https://aws-amplify.github.io/docs/cli-toolchain/graphql#connection

  // https://dev.to/dabit3/graphql-tutorial-how-to-manage-image-file-uploads-downloads-with-aws-appsync-aws-amplify-hga
  


    _createContent = async () => {
        const course = this.state.course;
        console.log(course)
        let courseID = uuid()
        let sectionID = uuid()
        let tempContent = {content: "fjdlafjdal", contentType: "text", position: 0, id: uuid()}
        let tempCourseContent = {name: "tempcourse", id: courseID, status: 'DRAFT'}
        let tempSectionContent = {name: "tempsection1", id: sectionID, sectionCourseId: courseID}
        try {
          const data = await API.graphql(graphqlOperation(createCourse, { input: tempCourseContent }))
          const data2 = await API.graphql(graphqlOperation(createSection, { input: tempSectionContent }))
          console.log("i think it worked?")
          console.log(data)
          console.log(data2)
        } catch (err) {
          console.log(err)
        }
      }
    
      _processCourse() {
        // window.LOG_LEVEL='DEBUG'
        let course = this.state.course;
        if (course.name == "") {
          course.name = null;
        }
        let sections = course.sections;
        for (let i = 0; i < sections.length; i++) {
          if (sections[i].name == "") {
            sections[i].name = null;
          }
          let pages = sections[i].pages;
          for (let j = 0; j < pages.length; j++) {
            if (pages[j].name == "") {
              pages[j].name = null;
            }
          }
        }
        return course
      }
    
      _createCourse = async (status) => {
        const course = this._processCourse()
        console.log(course)
        console.log(status)
        let courseID = uuid()
        let courseInput = {name: course.name, id: courseID, status: status}
        try {
          const courseData = await API.graphql(graphqlOperation(createCourse, { input: courseInput }))
          let sections = course.sections;
          console.log(courseData)
          for (let i = 0; i < sections.length; i++) {
            let sectionID = uuid()
            let sectionInput = {name: sections[i].name, id: sectionID, sectionCourseId: courseID}
            const sectionData = await API.graphql(graphqlOperation(createSection, { input: sectionInput }))
            console.log(sections)
            console.log(sectionData)
            let pages = sections[i].pages;
            for (let j = 0; j < pages.length; j++) {
              let pageID = uuid()
              let pageInput = {name: pages[j].name, id: pageID, template: pages[j].template}
              const pageData = await API.graphql(graphqlOperation(createPage, { input: pageInput }))
              console.log(pages)
              console.log(pageData)
              let contents = pages[j].contents
              for (let k = 0; k < contents.length; k++) {
                let contentID = uuid()
                console.log(contents)
                if (contents[k].contentType == "image") {
                  let file = contents[k].contentFile
                  console.log(file)
                  const extension = file.name.split(".")[1]
                  const { type: mimeType } = file
                  const key = `images/${uuid()}.${extension}`
                  const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
                  contents[k].content = url
                  console.log(url)
                  await Storage.put(key, file, {contentType: mimeType})
                }
                let contentInput = {id: contentID, content: contents[k].content, contentType: contents[k].contentType, contentPageId: pageID}
    
                const contentData = await API.graphql(graphqlOperation(createContent, { input: contentInput }))
                console.log(contentData)
              }
            }
          }
        } catch (err) {
          console.log(err)
        }
      }

    popTempCourse = () => {
        console.log("hi")
        this.setState({ course: tempcourse }, () =>
        console.log(
          this.state
        )
      );
        console.log(this.state)
    }

    loadPropsCourse = () => {
        if (this.props.location.state) {
            if (this.props.location.state.loadPropState) {
                this.props.location.state.loadPropState = false;
                this.setState({ loadPropState: false, course: this.props.location.state.course })
            }
        }

    }
    handleCourseName = (event) => {
        // const course = JSON.parse(JSON.stringify(this.state.course)); //deep clone
        const course = _.cloneDeep(this.state.course);
        course.name = event.target.value;
        this.setState({ course });
    };
    handleSectionName = (i, name) => {
        // const course = JSON.parse(JSON.stringify(this.state.course)); //deep clone
        const course = _.cloneDeep(this.state.course);
        course.sections[i].name = name;
        this.setState({ course });
    };

    _showSection = () => {
        // const course = JSON.parse(JSON.stringify(this.state.course)); //deep clone
        const course = _.cloneDeep(this.state.course);
        course.sections = (course.sections || []).concat([{
            name: '',
            pages: [],
        }]);
        this.setState({ course });
    };

    handlePageAdded = (i, label, name) => {
        // i in sections array
        // label = template in page obj
        // const course = JSON.parse(JSON.stringify(this.state.course)); //deep clone
        const course = _.cloneDeep(this.state.course);
        course.sections[i].pages.push({
            // new page obj
            name,
            template: label,
            contents: [],
        });
        this.setState({ course }, () =>
        console.log(
          this.state
        ));
    }
    handlePageDeleted = (sectionIndex, pageIndex) => {
        // i in sections array
        // label = template in page obj
        // const course = JSON.parse(JSON.stringify(this.state.course)); //deep 
        const course = _.cloneDeep(this.state.course);
        course.sections[sectionIndex].pages.splice(pageIndex, 1);
        this.setState({ course });
    }
    handleSectionDeleted = (i) => {
        // const course = JSON.parse(JSON.stringify(this.state.course)); //deep clone //_.deepCopy(this.state.course)
        const course = _.cloneDeep(this.state.course);
        course.sections.splice(i, 1);
        this.setState({ course });
    }

    handleFileChange(event) {
        const course = _.cloneDeep(this.state.course);
        // course.documents = URL.createObjectURL(event.target.files[0]);      
        // course.documents = [...this.state.course.documents, ...event.target.files];
        course.documents = [...event.target.files];
        this.setState({ course });
    }

    render() {
        // console.log(this.state.course.documents[0].name);
        this.loadPropsCourse();
        const sections = this.state.course.sections.map((section, sectionIndex) =>
            <Section
                title={`Section ${sectionIndex + 1}`}
                sectionNumber={sectionIndex}
                section={section}
                course={_.cloneDeep(this.state.course)}
                onPageAdded={(template, name) => this.handlePageAdded(sectionIndex, template, name)}
                onPageDeleted={(pageIndex) => this.handlePageDeleted(sectionIndex, pageIndex)}
                onSectionDeleted={() => this.handleSectionDeleted(sectionIndex)}
                onSectionNameChange={(name) => this.handleSectionName(sectionIndex, name)}
            />);

        let uploadedFiles = null;
        if (this.state.course.documents.length) {
            uploadedFiles = this.state.course.documents.map((document) => document.name).join(', ');
            // docName = this.state.course.documents[0].name
        }

        return (
            <div className="content add-content">
                <Grid fluid>
                    <Row>
                        <form>
                        <Button onClick={this.popTempCourse} bsStyle="info" pullRight fill style={{zIndex: 1}}>
                                + Temp Course
                            </Button>
                            <Button onClick={this._showSection} bsStyle="info" pullRight fill style={{zIndex: 1}}>
                                + New Section
                            </Button>
                            <FormInputs
                                ncols={["col-md-10 course-label"]}
                                properties={[
                                    {
                                        label: "Course Name:",
                                        type: "text",
                                        bsClass: "form-control",
                                        placeholder: "Course Name",
                                        value: this.state.course.name,
                                        onChange: this.handleCourseName
                                    }
                                ]}
                            />
                        </form>
                    </Row>
                    {sections}
                </Grid>
                {/* <Link to={{ pathname: '/admin/courseoutline', state: this.state.course }}>
                    <Button bsStyle="info" pullRight fill type="submit" >
                        Create Course
                    </Button>
                </Link> */}
                <div className="document-upload">
                    <Card
                        title={<input type="file" className="custom-file-input" onChange={this.handleFileChange.bind(this)} multiple />}
                        content={
                            <p>Uploaded Files: {uploadedFiles}</p>
                        }
                    />
                </div>
                {/* <Link to='/admin/courses'> */}
                <Button bsStyle="info" pullRight fill onClick={this._createContent}>
                        Publish
                    </Button>
                {/* </Link> */}
                <Link to='/admin/courses'>
                    <Button bsStyle="info" pullRight fill>
                        Preview
                    </Button>
                </Link>
                {/* <Link to='/admin/courses'> */}
                <Button bsStyle="info" pullRight fill onClick={this._createCourse.bind(this, "DRAFT")}>
                        Save
                    </Button>
                {/* </Link> */}
            </div>
        );
    }
}

export default CourseAdding;
