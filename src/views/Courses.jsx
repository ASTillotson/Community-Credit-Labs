import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from "react-bootstrap";
import Tabs from "react-bootstrap/lib/Tabs";
import Tab from "react-bootstrap/lib/Tab";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
import course1 from "assets/img/codingdojo.JPG";
import course2 from "assets/img/jfs.png";
import more from "assets/img/more.png";

class Courses extends Component {

    render() {
        return (
            <div className="course-content">
                <Link to='/admin/addcourse'>
                    <Button bsStyle="info" pullRight fill type="submit">
                        + New Course
                    </Button>
                </Link>
                <div className="course-tabs">
                    <Tabs defaultActiveKey="Courses">
                        <Tab eventKey="Courses" title="Active Courses">
                            <Grid fluid>
                                <Row>
                                    <Col md={4}>
                                        <Card
                                            id="chartActivity"
                                            title="Course1" //{`Section ${i + 1} - ${course.sections[i].name}`}
                                            category="Published: YYYY-MM-DD"
                                            stats="Active"
                                            statsIcon="fa fa-check"
                                            content={
                                                <div className="ct-chart">
                                                    <a
                                                        className="img-holder switch-trigger"
                                                    // onClick={() => {
                                                    //     this.setState({ bgImage: imagine1 });
                                                    //     this.props.handleImageClick(imagine1);
                                                    // }}
                                                    >
                                                        <img src={course1} alt="..." />
                                                    </a>
                                                    <Link to='/admin/addcourse'>
                                                        <a><img className="more" src={more} /></a>
                                                    </Link>
                                                </div>
                                            }
                                        />
                                    </Col>

                                    <Col md={4}>
                                        <Card
                                            id="chartActivity"
                                            title="Course2"
                                            category="Published: YYYY-MM-DD"
                                            stats="Active"
                                            statsIcon="fa fa-check"
                                            content={
                                                <div className="ct-chart">
                                                    <a
                                                        className="img-holder switch-trigger"
                                                    // onClick={() => {
                                                    //     this.setState({ bgImage: imagine1 });
                                                    //     this.props.handleImageClick(imagine1);
                                                    // }}
                                                    >
                                                        <img src={course2} alt="..." />
                                                    </a>

                                                    <Link to='/admin/addcourse'>
                                                        <a><img className="more" src={more} /></a>
                                                    </Link>
                                                </div>
                                            }
                                        />
                                    </Col>
                                </Row>
                            </Grid>
                        </Tab>
                        <Tab eventKey="Draft" title="Draft Courses">
                            <Grid>
                                <Row>
                                    <Col md={4}>
                                        <Card
                                            id="chartActivity"
                                            title="Course1"
                                            category="Published: YYYY-MM-DD"
                                            stats="Draft"
                                            statsIcon="fa fa-refresh"
                                            content={
                                                <div className="ct-chart">
                                                    {/* <a
                                                        className="img-holder switch-trigger"
                                                        // onClick={() => {
                                                        //     this.setState({ bgImage: imagine1 });
                                                        //     this.props.handleImageClick(imagine1);
                                                        // }}
                                                    >
                                                        <img src={course1} alt="..." />
                                                    </a> */}
                                                </div>
                                            }
                                        />
                                    </Col>
                                </Row>
                            </Grid>
                        </Tab>
                        <Tab eventKey="Retired" title="Retired Courses">
                            <Grid>
                                <Row>
                                    <Col md={4}>
                                        <Card
                                            id="chartActivity"
                                            title="Course1"
                                            category="Published: YYYY-MM-DD"
                                            stats="Expired"
                                            statsIcon="fa fa-clock-o"
                                            content={
                                                <div className="ct-chart">
                                                    {/* <a
                                                        className="img-holder switch-trigger"
                                                        // onClick={() => {
                                                        //     this.setState({ bgImage: imagine1 });
                                                        //     this.props.handleImageClick(imagine1);
                                                        // }}
                                                    >
                                                        <img src={course1} alt="..." />
                                                    </a> */}
                                                </div>
                                            }
                                        />
                                    </Col>
                                </Row>
                            </Grid>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}
export default Courses;