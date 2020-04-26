import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import CourseSidebar from "components/Sidebar/CourseSidebar.jsx";

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
            { name: 'UW Information School' },//pages
            { name: 'Business Impact NW' },
            { name: 'Welcome Back center' },
            { name: 'Credit Builders Alliance' },
        ], 
    },
    {
        name: 'Section 3: Quiz',
        pages: [
            { name: 'Quiz 1' }], //pages
    },
];

class CourseTaking extends Component {

    render() {
        return (
            <div>
                <div className="course-content course-display">
                    <div className="course-tabs">
                        <h4>Introduction to Community Credit Lab</h4>
                        <hr />
                    </div>
                    <div className="container">
                        <Grid fluid>
                            <Row>
                                <Col md={9}>
                                    <div className="container-window display-window">
                                        <h4>This is the course content.</h4>
                                    </div>
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