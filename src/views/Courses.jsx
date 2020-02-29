import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import Tabs from "react-bootstrap/lib/Tabs";
import Tab from "react-bootstrap/lib/Tab";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import course1 from "assets/img/codingdojo.JPG";
import course2 from "assets/img/jfs.png";
import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
    dataBar,
    optionsBar,
    responsiveBar,
    legendBar
} from "variables/Variables.jsx";

class Courses extends Component {

    render() {
        return (
            <div className="course-content">
                <Button bsStyle="info" pullRight fill type="submit">
                    + New Course
                </Button>
                <div className="course-tabs">
                    <Tabs defaultActiveKey="Courses">
                        <Tab eventKey="Courses" title="Active Courses">
                            <Grid fluid>
                                <Row>
                                    <Col md={4}>
                                        <Card
                                            id="chartActivity"
                                            title="Course1"
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
                                                </div>
                                            }
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Card
                                            id="chartActivity"
                                            title="Course3"
                                            category="Published: YYYY-MM-DD"
                                            stats="Active"
                                            statsIcon="fa fa-check"
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