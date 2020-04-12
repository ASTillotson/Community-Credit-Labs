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
import Section from "components/Section/Section.jsx";


//import avatar from "assets/img/faces/face-3.jpg";

class CourseAdding extends Component {
    constructor() {
        super();
        this.state = {
            showSection: 1,
            optionsInSections: [],
            courseTitle: "",
            
        }
    }
    _showSection = () => {
        this.setState({showSection: this.state.showSection + 1})
    }
    handlePageAdded = (i, selectedOption) => {
        const optionsInSections = [...this.state.optionsInSections];
        optionsInSections[i] = (optionsInSections[i] || []).concat([selectedOption]);
        this.setState({optionsInSections});
    }
    render() {
        const sections = [];
        for (let i = 0; i< this.state.showSection; i++){
            let selectedOptions = this.state.optionsInSections[i] || [];
            sections.push(
                <Section
                    title={`Section ${i + 1}`}
                    key={i}
                    selectedOptions={selectedOptions}
                    onPageAdded={(selectedOption) => this.handlePageAdded(i, selectedOption)}
                    getSectionTitle={""}
                />
            )
        }
        console.log(sections);
        const courseCreateState = this.state.optionsInSections.map((selectedOptions) => ({Title: "", Pages: selectedOptions.map(o => o.label)}));
        return (
            <div className="content add-content">
                <Grid fluid>
                    <Row>
                        <form>
                            <Button onClick={this._showSection} bsStyle="info" pullRight fill >
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
                                        onChange: (e) => { this.setState({ courseTitle: e.target.value });}

                                    }
                                ]}
                            />
                        </form>
                    </Row>
                    {sections}
                </Grid>
                <Link to={{ pathname: '/admin/courseoutline', courseTitle: this.state.courseTitle, courseOutline:courseCreateState}}>
                    <Button bsStyle="info" pullRight fill type="submit" >
                        Create Course
                    </Button>
                </Link>
            </div>
        );
    }
}

export default CourseAdding;
