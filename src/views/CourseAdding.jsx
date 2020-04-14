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
            courseTitle: "",
            sectionTitles: [""]
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

    handleChangeSectionTitle = (key, sectionTitle) => {
        console.log(this.state)
        this.setState({sectionTitles: this.state.sectionTitles[key] = sectionTitle});
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
                    getSectionTitle={this.handleChangeSectionTitle}
                />
            );
        }
        console.log(this.state.optionsInSections);
        const courseCreateState = this.state.optionsInSections.map((selectedOptions) => ({Pages: selectedOptions.map(o => o.label)}));
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
