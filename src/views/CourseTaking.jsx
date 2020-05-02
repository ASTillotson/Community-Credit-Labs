import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import CourseSidebar from "components/Sidebar/CourseSidebar.jsx";
import ProgressBar from "components/ProgressBar/ProgressBar.jsx";
import { Button } from "react-bootstrap";
import previous from "assets/img/previous.png";
import next from "assets/img/next.png";

const course = [
    {
        name: 'Section 1: Introducing CCL',
        pages: [
            { name: 'Our Mission Statement' }, //pages
            { name: 'Our Co-Founders' },
        ],
    },
    {
        name: 'Section 2: Our Partners',
        pages: [
            { name: 'Jewish Family Services' },
            { name: 'Express Credit Union' },
            { name: 'UW Information School' },
            { name: 'Business Impact NW' },
            { name: 'Welcome Back center' },
            { name: 'Credit Builders Alliance' },
        ],
    },
    {
        name: 'Section 3: Quiz',
        pages: [
            { name: 'Quiz 1' },
            { name: 'Quiz 2' },
        ],
    },
];

class CourseTaking extends Component {
    constructor() {
        super();
        this.state = {
            percentage: 0
        }
    }

    render() {
        // console.log(course.reduce((sum, obj) => sum + obj.pages.length, 0)); //get how many pages in the entire course obj
        return (
            <div>
                <div className="course-content course-display">
                    <div className="course-tabs">
                        <h4>Introduction to Community Credit Lab</h4>
                        <p className="percentage">{Math.round(this.state.percentage)}%</p>
                        <React.Fragment>
                            <ProgressBar percentage={this.state.percentage} />
                        </React.Fragment>
                        <hr />
                    </div>
                    <div className="container">
                        <Grid fluid>
                            <Row>
                                <Col md={1}>
                                    <Button onClick={() => this.setState({ percentage: this.state.percentage - 100 / course.reduce((sum, obj) => sum + obj.pages.length, 0) })} className='btn-previous'>
                                        <img src={previous} width="20px" height="20px" alt="..." />
                                    </Button>
                                </Col>
                                <Col md={7}>
                                    <div className="container-window display-window">

                                        <h4>This is the course content.</h4>

                                    </div>
                                </Col>
                                <Col md={1}>
                                    <Button onClick={() => this.setState({ percentage: this.state.percentage + 100 / course.reduce((sum, obj) => sum + obj.pages.length, 0) })} className='btn-next'>
                                        <img src={next} width="20px" height="20px" alt="..." />
                                    </Button>
                                </Col>

                                <Col md={3}>
                                    <CourseSidebar course={course} />
                                </Col>
                            </Row>
                        </Grid>

                    </div>
                </div>
            </div >
        );
    }
}
export default CourseTaking;