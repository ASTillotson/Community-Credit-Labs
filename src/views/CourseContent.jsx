import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
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
import PopUp from "components/PopUp/PopUp.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

class CourseContent extends Component {
    render() {
        return (
            <div className="course-content">
                <div className="course-tabs">
                    <h3>Section 1: Introduction | Page 1
                        <Button bsStyle="info" pullRight fill type="submit">
                            BACK TO OUTLINE
                        </Button>
                    </h3>
                    <hr />
                </div>
                <div className="container">
                    <Grid fluid>
                        <Row>
                            <Col md={2}>
                                <Button bsStyle="info" type="submit">
                                    Previous
                                </Button>
                            </Col>

                            <Col md={8}>
                                <div className="container-window">
                                    <Button onClick={(e) => this.setState({ isOpen: true })} bsStyle="info" >
                                        Upload Video
                                    </Button>
                                    {/* <PopUp isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                                        <div className="course-popup">
                                            <div className="course-title">
                                                <label>UPLOAD VIDEO</label>
                                                <hr />
                                                <FormInputs
                                                    ncols={["col-md-12"]}
                                                    properties={[
                                                        {
                                                            type: "text",
                                                            bsClass: "form-control",
                                                        }
                                                    ]}
                                                />
                                                <label>NOTE: All files should be less than 4.0 GB</label>
                                                <hr />
                                            </div>
                                            <Button bsStyle="info" pullRight fill >
                                                UPLOAD
                                            </Button>
                                        </div>
                                    </PopUp> */}
                                </div>
                            </Col>

                            <Col md={2}>
                                <Button bsStyle="info" type="submit">
                                    Next
                                </Button>
                            </Col>
                        </Row>
                    </Grid>

                </div>
            </div>

        );
    }
}
export default CourseContent;