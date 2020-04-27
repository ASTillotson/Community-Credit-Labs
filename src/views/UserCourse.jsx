import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from "react-bootstrap";
import Tabs from "react-bootstrap/lib/Tabs";
import Tab from "react-bootstrap/lib/Tab";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
import course1 from "assets/img/codingdojo.JPG";
import course2 from "assets/img/jfs.png";
import edit from "assets/img/edit.png";

class UserCourse extends Component {

    render() {
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
                                            <Link to='/user/coursetaking'>
                                                <a className="img-holder switch-trigger">
                                                    <img src={course1} alt="..." />
                                                </a>
                                            </Link>
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
export default UserCourse;