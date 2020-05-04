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
        this.setState({ course })
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
                            <Button onClick={this._showSection} bsStyle="info" pullRight fill >
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
                <Link to='/admin/courses'>
                    <Button bsStyle="info" pullRight fill>
                        Publish
                    </Button>
                </Link>
                <Link to='/admin/courses'>
                    <Button bsStyle="info" pullRight fill>
                        Preview
                    </Button>
                </Link>
                <Link to='/admin/courses'>
                    <Button bsStyle="info" pullRight fill>
                        Save
                    </Button>
                </Link>
            </div>
        );
    }
}

export default CourseAdding;
