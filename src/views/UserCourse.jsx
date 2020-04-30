import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import { Grid, Row, Col } from "react-bootstrap";
import Tabs from "react-bootstrap/lib/Tabs";
import Tab from "react-bootstrap/lib/Tab";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
import course1 from "assets/img/codingdojo.JPG";
import course2 from "assets/img/jfs.png";
import edit from "assets/img/edit.png";
import _ from "lodash";

class UserCourse extends Component {
    constructor() {
        super();

        this.state = {
            renderTarget: null
        }
    }
    getCourse = () => {
        //backend function gets us a course object
        const courseUnreadable = {
            edited_at: "",
            name: "Course Name",
            sections: [
                {name:"section1", 
                pages: [
                    {contents: { content: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ze0kq-ROeaU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', contentType: "video"},
                    name: "",
                    template: "FULLSCREEN VIDEO"},
                    {contents: { content: course1, contentType: "image"},
                    name: "",
                    template:"FULLSCREEN IMAGE"},
                    {contents: { content: "asdfasdfasdfasdf", contentType: "text"},
                    name: "",
                    template: "TEXT"}]
                    }, 
                {name:"section2",
                pages: [
                    {contents: [],
                    name: "",
                    template: "IMAGE WITH TEXT"}]}]
        };
        const course = JSON.parse(JSON.stringify(courseUnreadable));
        //const course = _.cloneDeep(courseUnreadable);
        console.log(course.sections[0].pages[0].template);
                course.sections[0].pages[0].template === "FULLSCREEN VIDEO" ?
                this.setState({renderTarget: <Redirect push to={{ pathname: '/user/fullvideopreview', state: { sectionIndex: 0, pageIndex: 0, course } }}/>})
                    : (course.sections[0].pages[0].template === "VIDEO WITH CAPTION" ?
                    this.setState({renderTarget: <Redirect to={{ pathname: '/user/videocappreview', state: { sectionIndex: 0, pageIndex: 0, course} }}/>})
                        : (course.sections[0].pages[0].template === "IMAGE WITH TEXT" ?
                        this.setState({renderTarget: <Redirect to={{ pathname: '/user/imagecappreview', state: { sectionIndex: 0, pageIndex: 0, course } }}/>})
                            : (course.sections[0].pages[0].template === "HORIZONTAL IMAGES WITH TEXT" ?
                            this.setState({renderTarget: <Redirect to={{ pathname: '/user/horizontalmultiimgspreview', state: { sectionIndex: 0, pageIndex: 0, course } }}/>})
                                : (course.sections[0].pages[0].template === "QUIZ CONTENT" ?
                                this.setState({renderTarget: <Redirect to={{ pathname: '/user/quizpreview', state: { sectionIndex: 0, pageIndex: 0, course } }}/>})
                                    : (course.sections[0].pages[0].template === "IMAGES WITH TEXT" ?
                                    this.setState({renderTarget: <Redirect to={{ pathname: '/user/multiimgcappreview', state: { sectionIndex: 0, pageIndex: 0, course } }}/>})
                                        : (course.sections[0].pages[0].template === "FULLSCREEN IMAGE" ?
                                        this.setState({renderTarget: <Redirect to={{ pathname: '/user/fullimagepreview', state: { sectionIndex: 0, pageIndex: 0, course } }}/>})
                                            :
                                        this.setState({renderTarget: <Redirect to={{ pathname: '/user/fulltextpreview', state: { sectionIndex: 0, pageIndex: 0, course } }}/>})
                                        )
                                    )
                                )
                            )
                        )
                    );
        
    }

    render() {
        const renderTarget = this.state.renderTarget;
        if(renderTarget) {
            return renderTarget;
        } else {
            return (
                
                <div className="course-content">
                    <div className="course-tabs">
                    
                        <Grid fluid>
                            
                            <Row>
                                <Col md={4}>
                                    <Card
                                        id="chartActivity"
                                        title="Course1" //{`Section ${i + 1} - ${course.sections[i].name}`}
                                        category="Enrolled: YYYY-MM-DD"
                                        stats="Active"
                                        statsIcon="fa fa-check"
                                        content={
                                            <div className="ct-chart">
                                                <a className="img-holder switch-trigger" onClick={this.getCourse}>
                                                        <img src={course1} alt="..." />
                                                        
                                                </a>
                                            </div>
                                        }
                                    />
                                </Col>
                            </Row>
                        </Grid>

                    </div>
                </div>
            );
        }
    }
}
export default UserCourse;