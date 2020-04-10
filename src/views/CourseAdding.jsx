import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
    Grid,
    Row
} from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import Section from "components/Section/Section.jsx";

class CourseAdding extends Component {
    constructor() {
        super();
        this.state = {
            showSection: 1,
            optionsInSections: [],
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
                />
            )
        }
        const courseCreateState = this.state.optionsInSections.map(selectedOptions => selectedOptions.map(o => o.label));
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

                                    }
                                ]}
                            />
                        </form>
                    </Row>
                    {sections}
                </Grid>
                <Link to={{ pathname: '/admin/courseoutline', state:courseCreateState}}>
                    <Button bsStyle="info" pullRight fill type="submit" >
                        Create Course
                    </Button>
                </Link>
            </div>
        );
    }
}

export default CourseAdding;
