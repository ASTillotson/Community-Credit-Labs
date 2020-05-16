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
            name: "Introduction to Community Credit Lab",
            sections: [
                {
                    name: "Section 1 : Introduction to CCL",
                    pages: [
                        {
                            contents: [{ content: "https://cdn.discordapp.com/attachments/697175176353415268/707395550542037032/unknown.png", contentType: "image" }, { content: "Community  Credit  Lab  exists  to  facilitate  access  to  affordablefinancial products and services for underserved communities.", contentType: "text" }],
                            name: "Page 1",
                            template: "IMAGE WITH TEXT"
                        },
                        {
                            contents: { content: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EhagRQtrzGE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', contentType: "video" },
                            name: "Page 2",
                            template: "FULLSCREEN VIDEO"
                        },
                        {
                            contents: [{ content: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EhagRQtrzGE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', contentType: "video" }, { content: "Our  partnerships  are  centered  on  removing  economic  barriers  andenabling  financial  stability.", contentType: "text" }],
                            name: "Page 3",
                            template: "VIDEO WITH CAPTION"
                        },
                        {
                            contents: { content: 'https://cdn.discordapp.com/attachments/697175176353415268/707395409735319552/unknown.png', contentType: "image" },
                            name: "Page 4",
                            template: "FULLSCREEN IMAGE"
                        },
                        {
                            contents: { content: "Credit  Discussions:  to  support  prospective  borrowers  effectively as they consider taking on debt; Consumer  Lending:  to  facilitate  access  to  affordable  financial products and services that improve economic and social wellbeing; and Credit Reporting: to build and improve credit scores.", contentType: "text" },
                            name: "Page 5",
                            template: "TEXT"
                        },
                        {
                            contents: [{ content: ["https://media.discordapp.net/attachments/697175176353415268/707397088559890432/unknown.png", "https://media.discordapp.net/attachments/697175176353415268/707397167186182184/unknown.png", "https://media.discordapp.net/attachments/697175176353415268/707397241752780870/unknown.png"], contentType: "image" }, { content: "All  partnership  ideas  to  help  build  credit  and  provide  affordableaccess to credit for underserved communities are welcome.", contentType: "text" }],
                            name: "Page 7",
                            template: "IMAGES WITH TEXT"
                        },
                        {
                            contents: [{ content: ["https://media.discordapp.net/attachments/697175176353415268/707397088559890432/unknown.png", "https://media.discordapp.net/attachments/697175176353415268/707397167186182184/unknown.png", "https://media.discordapp.net/attachments/697175176353415268/707397241752780870/unknown.png"], contentType: "image" }, { content: "The  Fair  Fight  Bond  Fund  (FFBF)  was  established  by  the  Washington  Immigrant  SolidarityNetwork (WAISN) in 2018 in response to the increase in immigrants detained at the NorthwestDetention Center in Tacoma, Washington. Immigrants detained are exposed to inhumane andunjust living conditions as they await their immigration proceedings (up to 4-years). The vastmajority of people are being detained for their desire to live and belong in the United States.The  FFBF  supports  people  who  cannot  afford  the  high  price  of  bonds.  The  FFBF  posts  bondand WAISN connects people to relevant legal and support services. As cases are closed, FFBFapplies for bond funds to be returned.", contentType: "text" }],
                            name: "Page 8",
                            template: "HORIZONTAL IMAGES WITH TEXT"
                        },
                        {
                            contents: { content: { answerOne: "Affordable credit", answerTwo: "Organizations", answerThree: "Programs", answerFour: "Workshops", checkOne: true, checkTwo: false, checkThree: false, checkFour: false, theQuestion: "CCL exists to facilitate access to ______ for underserved communities." }, contentType: "quiz" },
                            name: "Page 6",
                            template: "QUIZ CONTENT"
                        },]
                },
                {
                    name: "Section 2: Our Partners",
                    pages: [
                        {
                            contents: [{ content: "https://media.discordapp.net/attachments/697175176353415268/707396185249415228/unknown.png", contentType: "image" }, { content: "Community Credit Lab is partnering with Jewish Family Service of Seattle toprovide  access  to  0%  interest  loans  to  support  living  expenses  forcommunity members enrolled in the coding bootcamp with Coding Dojo.", contentType: "text" }],
                            name: "Page 1",
                            template: "IMAGE WITH TEXT"
                        },
                    ]
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

    getDemoCourse = () => {
        //backend function gets us a course object
        const courseUnreadable = {
            edited_at: "",
            name: "Introduction to Community Credit Lab",
            sections: [
                {
                    name: "Section 1 : Introducing CCL",
                    pages: [
                        {
                            contents: { content: "https://ccl985605d4e97c4fb7937ee5ca5d4907a2201726-prod.s3.amazonaws.com/public/images/contact.jpg", contentType: "image" }, 
                            name: "Who are we?",
                            template: "FULLSCREEN IMAGE"
                        },
                        {
                            contents: { content: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EhagRQtrzGE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', contentType: "video" },
                            name: "Our SVP Pitch",
                            template: "FULLSCREEN VIDEO"
                        },
                    ]
                },
                {
                    name: "Section 2: Quiz",
                    pages: [
                        {
                            contents: { content: { answerOne: "Affordable credit", answerTwo: "Organizations", answerThree: "Programs", answerFour: "Workshops", checkOne: true, checkTwo: false, checkThree: false, checkFour: false, theQuestion: "CCL exists to facilitate access to ______ for underserved communities." }, contentType: "quiz" },
                            name: "Quiz 1",
                            template: "QUIZ CONTENT"
                        },
                    ]
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
                                        title="Introduction to Community Credit Lab" //{`Section ${i + 1} - ${course.sections[i].name}`}
                                        category="Enrolled: 2020-05-15"
                                        stats="Active"
                                        statsIcon="fa fa-check"
                                        content={
                                            <div className="ct-chart course-img">
                                                <a className="img-holder switch-trigger" onClick={this.getDemoCourse}>
                                                    <img src={course} alt="..." />

                                                </a>
                                            </div>
                                        }
                                    />
                                </Col>
                                <Col md={4}>
                                    <Card
                                        id="chartActivity"
                                        title="Introduction to Our Partners" //{`Section ${i + 1} - ${course.sections[i].name}`}
                                        category="Enrolled: 2020-04-26"
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