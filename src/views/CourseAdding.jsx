import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
                                ncols={["col-md-10 course-label"]}
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
                        <Col md={12} className="new-card">
                            <Card
                                title="Section 1"
                                content={
                                    <div className='section'>
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
                                                        </div>
                                                        <div className="course-templates">
                                                            <Grid fluid>
                                                                <Row>
                                                                    <Col md={2}>

                                                                        <a><img src={template1}></img></a>
                                                                        <label>IMAGE WITH TEXT</label>

                                                                    </Col>

                                                                    <Col md={2}>

                                                                        <a><img src={template2}></img></a>
                                                                        <label>FULLSCREEN VIDEO</label>

                                                                    </Col>
                                                                    <Col md={2}>

                                                                        <a><img src={template3}></img></a>
                                                                        <label>VIDEO WITH CAPTION</label>

                                                                    </Col>
                                                                    <Col md={2}>

                                                                        <a><img src={template4}></img></a>
                                                                        <label>FULLSCREEN IMAGE</label>

                                                                    </Col>

                                                                    <Col md={2}>

                                                                        <a><img src={template5}></img></a>
                                                                        <label>TEXT</label>

                                                                    </Col>
                                                                    <Col md={2}>

                                                                        <a><img src={template6}></img></a>
                                                                        <label>NUMBER LIST</label>

                                                                    </Col>
                                                                </Row>
                                                            </Grid>
                                                        </div>
                                                        <hr />
                                                        <Link to='/admin/addcourse'>
                                                            <Button bsStyle="info" pullRight fill >
                                                                + ADD PAGE
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </PopUp>
                                            </div>
                                            <FormInputs
                                                ncols={["col-md-10"]}
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
                                        <p>Images with text</p>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
                <Link to='/admin/courseoutline'>
                    <Button bsStyle="info" pullRight fill type="submit" >
                        Create Course
                    </Button>
                </Link>
            </div>
        );
    }
}

export default CourseAdding;
