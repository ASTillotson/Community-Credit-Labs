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
import course from "../assets/img/course.png";

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
                {
                    name: "Section1",
                    pages: [
                        {
                            contents: [{ content: "", contentType: "image" }, {content: "asdfaf", contentType: "text" }],
                            name: "Page 1",
                            template: "IMAGE WITH TEXT"
                        },
                        {
                            contents: { content: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ze0kq-ROeaU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', contentType: "video" },
                            name: "Page 2",
                            template: "FULLSCREEN VIDEO"
                        },
                        {
                            contents: [{ content: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ze0kq-ROeaU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', contentType: "video" },{content: "asdfqwfv", contentType: "text"}],
                            name: "Page 3",
                            template: "VIDEO WITH CAPTION"
                        },
                        {
                            contents: { content: '', contentType: "image" },
                            name: "Page 4",
                            template: "FULLSCREEN IMAGE"
                        },
                        {
                            contents: { content: "asdfasdfasdfasdf", contentType: "text" },
                            name: "Page 5",
                            template: "TEXT"
                        },
                        {
                            contents: { content: {answerOne:"quer",answerTwo:"quer",answerThree:"quer",answerFour: "quer",checkOne:true,checkTwo:true,checkThree:true,checkFour:true,theQuestion:"quer"}, contentType: "quiz" },
                            name: "Page 6",
                            template: "QUIZ CONTENT"
                        },
                        {
                            contents: [{ content: ["blob:http://localhost:3000/3df38fbb-5c5a-4105-943f-59898549abf5", null, "blob:http://localhost:3000/42260ea3-31cf-41ef-ab14-d7dac873cfaa"], contentType: "image" },{content: "qwerqwerqwer", contentType: "text"}],
                            name: "Page 7",
                            template: "IMAGES WITH TEXT"
                        },
                        {
                            contents: [{ content: [null, "blob:http://localhost:3000/3df38fbb-5c5a-4105-943f-59898549abf5", null], contentType: "image" },{content: "qwerqwerqwer", contentType: "text"}],
                            name: "Page 8",
                            template: "HORIZONTAL IMAGES WITH TEXT"
                        },]
                },
                {
                    name: "Section2",
                    pages: [
                        {
                            contents: [],
                            name: "Page 1",
                            template: "IMAGE WITH TEXT"
                        }]
                }
            ]
        };
        const course = JSON.parse(JSON.stringify(courseUnreadable));
        //const course = _.cloneDeep(courseUnreadable);
        console.log(course.sections[0].pages[0].template);
        course.sections[0].pages[0].template === "FULLSCREEN VIDEO" ?
            this.setState({ renderTarget: <Redirect push to={{ pathname: '/user/fullvideopreview', state: { sectionIndex: 0, pageIndex: 0, course } }} /> })
            : (course.sections[0].pages[0].template === "VIDEO WITH CAPTION" ?
                this.setState({ renderTarget: <Redirect to={{ pathname: '/user/videocappreview', state: { sectionIndex: 0, pageIndex: 0, course } }} /> })
                : (course.sections[0].pages[0].template === "IMAGE WITH TEXT" ?
                    this.setState({ renderTarget: <Redirect to={{ pathname: '/user/imagecappreview', state: { sectionIndex: 0, pageIndex: 0, course } }} /> })
                    : (course.sections[0].pages[0].template === "HORIZONTAL IMAGES WITH TEXT" ?
                        this.setState({ renderTarget: <Redirect to={{ pathname: '/user/horizontalmultiimgspreview', state: { sectionIndex: 0, pageIndex: 0, course } }} /> })
                        : (course.sections[0].pages[0].template === "QUIZ CONTENT" ?
                            this.setState({ renderTarget: <Redirect to={{ pathname: '/user/quizpreview', state: { sectionIndex: 0, pageIndex: 0, course } }} /> })
                            : (course.sections[0].pages[0].template === "IMAGES WITH TEXT" ?
                                this.setState({ renderTarget: <Redirect to={{ pathname: '/user/multiimgcappreview', state: { sectionIndex: 0, pageIndex: 0, course } }} /> })
                                : (course.sections[0].pages[0].template === "FULLSCREEN IMAGE" ?
                                    this.setState({ renderTarget: <Redirect to={{ pathname: '/user/fullimagepreview', state: { sectionIndex: 0, pageIndex: 0, course } }} /> })
                                    :
                                    this.setState({ renderTarget: <Redirect to={{ pathname: '/user/fulltextpreview', state: { sectionIndex: 0, pageIndex: 0, course } }} /> })
                                )
                            )
                        )
                    )
                )
            );

    }

    render() {
        const renderTarget = this.state.renderTarget;
        if (renderTarget) {
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
                                            <div className="ct-chart course-img">
                                                <a className="img-holder switch-trigger" onClick={this.getCourse}>
                                                    <img src={course} alt="..." />

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