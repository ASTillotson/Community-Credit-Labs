
import React, { Component } from "react";
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import PopUp from "components/PopUp/PopUp.jsx";
import template1 from "assets/img/template1.JPG";
import template2 from "assets/img/template2.JPG";
import template3 from "assets/img/template3.JPG";
import template4 from "assets/img/template4.JPG";
import template5 from "assets/img/template5.JPG";
import template6 from "assets/img/template6.JPG";
import template7 from "assets/img/template7.JPG";

//import avatar from "assets/img/faces/face-3.jpg";

class CourseAdding extends Component {
    state = {
        seen: false
    };

    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    };
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <form>
                            <Button bsStyle="info" pullRight fill >
                                + New Section
                            </Button>
                            <FormInputs
                                ncols={["col-md-6"]}
                                properties={[
                                    {
                                        label: "Course Name:",
                                        type: "text",
                                        bsClass: "form-control",
                                        placeholder: "Course Name",

                                    }
                                ]}
                            />
                        </form>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Section 1"
                                content={
                                    <div>
                                        <form>
                                            <div>
                                                <Button onClick={(e) => this.setState({ isOpen: true })} bsStyle="info" pullRight fill >
                                                    + New Page
                                                </Button>
                                                <PopUp isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                                                    <div className="course-popup">
                                                    <div className="course-title">
                                                        <FormInputs
                                                            ncols={["col-md-12"]}
                                                            properties={[
                                                                {
                                                                    label: "Title Name:",
                                                                    type: "text",
                                                                    bsClass: "form-control",
                                                                    placeholder: "Title Name"
                                                                }
                                                            ]}
                                                        />
                                                        
                                                        <label>SELECT TEMPLATE</label>
                                                        <hr />
                                                        <Grid fluid>
                                                            <Row>
                                                                <Col md={2}>
                                                                    <img src={template1}></img>
                                                                </Col>

                                                                <Col md={2}>
                                                                    <img src={template2}></img>
                                                                </Col>
                                                                <Col md={2}>
                                                                    <img src={template3}></img>
                                                                </Col>
                                                                <Col md={2}>
                                                                    <img src={template4}></img>
                                                                </Col>

                                                                <Col md={2}>
                                                                    <img src={template5}></img>
                                                                </Col>
                                                                <Col md={2}>
                                                                    <img src={template6}></img>
                                                                </Col>
                                                            </Row>
                                                        </Grid>
                                                        </div>
                                                        <hr />
                                                        <Button bsStyle="info" pullRight fill >
                                                            + ADD PAGE
                                                        </Button>
                                                    </div>
                                                </PopUp>
                                            </div>
                                            <FormInputs
                                                ncols={["col-md-12"]}
                                                properties={[
                                                    {
                                                        label: "Section Name:",
                                                        type: "text",
                                                        bsClass: "form-control",
                                                        placeholder: "Section Name",
                                                        defaultValue: "Introduction"
                                                    }
                                                ]}
                                            />
                                        </form>
                                        <hr />

                                        {/* if user select a template, the following shows up */}
                                        <p>Page 1</p>
                                        <img src={template1} alt="..." />
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
                <Button bsStyle="info" pullRight fill type="submit">
                    Create Course
                </Button>
            </div>
        );
    }
}

export default CourseAdding;
