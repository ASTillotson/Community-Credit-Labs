import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import PopUp from "components/PopUp/PopUp.jsx";
import template1 from "assets/img/template1.JPG";
import template2 from "assets/img/template2.JPG";
import template3 from "assets/img/template3.JPG";
import template4 from "assets/img/template4.JPG";
import template5 from "assets/img/template5.JPG";
import template6 from "assets/img/template6.JPG";
import template8 from "assets/img/template8.JPG";
const templates = [
    {
        imgSrc: template1,
        label: "IMAGE WITH TEXT",
    },
    {
        imgSrc: template2,
        label: "FULLSCREEN VIDEO",
    },
    {
        imgSrc: template3,
        label: "VIDEO WITH CAPTION",
    },
    {
        imgSrc: template4,
        label: "FULLSCREEN IMAGE",
    },
    {
        imgSrc: template5,
        label: "TEXT",
    },
    {
        imgSrc: template6,
        label: "QUIZ CONTENT",
    },
    {
        imgSrc: template8,
        label: "IMAGES WITH TEXT",
    },
];

const templateMap = templates.reduce((result, item, index, array) => {
    const label = item.label;
    result[label] = item.imgSrc;
    return result;
}, {});

class Section extends Component {
    state = {
        isOpen: false,
        seen: false,
        selectedPage: null,
        name: '',
        sectionName: ''
    };

    handleChange = selectedPage => {
        this.setState({ selectedPage });
    };
    handleAddPage = () => {
        const state = this.state;
        if (state.selectedPage) {
            if (this.props.onPageAdded) {
                this.props.onPageAdded(state.selectedPage.label, this.state.name);
            }
            this.setState({
                isOpen: false,
                selectedPage: null,
                name: '',
            });
        }
    };

    handleDeletePage = (i) => {
        if (this.props.onPageDeleted) {
            this.props.onPageDeleted(i);
        }
    };

    handleDeleteSection = () => {
        if (this.props.onSectionDeleted) {
            this.props.onSectionDeleted();
        }
    };
    handlePageName = (event) => {
        this.setState({ name: event.target.value });
    };

    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    };
    render() {
        const renderSelected = this.props.section.pages.map((p, pageIndex) => (
            <Col md={3} key={pageIndex}>
                <Row>
                    <Col md={6}>
                        <p>{`Page ${pageIndex + 1} - ${p.name}`}</p>
                    </Col>
                    <Col md={6}>
                        <i className="fa fa-close" onClick={() => { this.handleDeletePage(pageIndex) }}></i>
                    </Col>
                </Row>
                <img className="templates-img" src={templateMap[p.template]}></img>
                <label className="templates-label">{p.template}</label>
            </Col>
        ));
        return (
            <Row>
                <Col md={12} className="new-card">
                    <Card
                        title={this.props.title}
                        content={
                            <div className='section'>
                                <form>
                                    <div>
                                        <Button onClick={(e) => this.setState({ isOpen: true })} bsStyle="info" pullRight fill >
                                            + New Page
                                        </Button>
                                        <Button bsStyle="info" className="btn-delete" onClick={this.handleDeleteSection}>Delete</Button>
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
                                                                placeholder: "Title Name",
                                                                value: this.state.name,
                                                                onChange: this.handlePageName
                                                            }
                                                        ]}
                                                    />
                                                    <label>SELECT TEMPLATE</label>
                                                    <hr />
                                                </div>
                                                <div className="course-templates">
                                                    <Grid fluid>
                                                        <Row>
                                                            {templates.map(t => <Col md={2} key={t.label}>
                                                                <a onClick={() => this.handleChange(t)}>
                                                                    <img style={this.state.selectedPage === t ? { border: '1px solid #1A8A9A' } : null} src={t.imgSrc}></img>
                                                                </a>
                                                                <label>{t.label}</label>
                                                            </Col>)}
                                                        </Row>
                                                    </Grid>
                                                </div>
                                                <hr />
                                                <Button bsStyle="info" pullRight fill onClick={this.handleAddPage}>
                                                    + ADD PAGE
                                                    </Button>
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
                                                value: this.state.sectionName,
                                                onChange: this.handleSectionName
                                            }
                                        ]}
                                    />
                                </form>
                                <hr />

                                {/* if user select a template, the following shows up */}
                                {renderSelected}
                            </div>
                        }
                    />
                </Col>
            </Row >
        )
    }
}
export default Section;