import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import course1 from "assets/img/codingdojo.JPG";
import course2 from "assets/img/jfs.png";
import { Link } from 'react-router-dom';
import next from "assets/img/next.png";
import previous from "assets/img/previous.png";
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
import Uploader from "components/PopUp/Uploader.jsx"
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import upload from "assets/img/upload.png";

class MultiImgCapContent extends Component {
    constructor(props) {
        super(props)
        this.handleFileChange = this.handleFileChange.bind(this)
    }
    state = {
        isOpen: -1,
        files: [null, null, null],
        text: null,
    };
    handleFileChange(event) {
        if (this.state.isOpen > -1) {
            const newFiles = [...this.state.files]; //copy
            newFiles[this.state.isOpen] = URL.createObjectURL(event.target.files[0])
            this.setState({
                files: newFiles
            })
        }
    };
    inputText = event => {
        this.setState({ text: event.target.value });
    };

    render() {
        return (
            <div className="course-content">
                <div className="course-tabs">
                    <h4>Section 1: Introduction | Page 1
                    <Link to='/admin/courseoutline'>
                            <Button bsStyle="info" pullRight fill type="submit">
                                BACK TO OUTLINE
                            </Button>
                        </Link>
                    </h4>
                    <hr />
                </div>
                <div className="container">
                    <Grid fluid>
                        <Row>
                            <Col md={1}>
                                <div className="previous">
                                    <Link to='/admin/fulltextcontent'>
                                        <Button className='btn-previous' >
                                            <img src={previous} width="20px" height="20px" alt="..." />
                                        </Button>
                                    </Link>
                                </div>
                            </Col>

                            <Col md={10}>
                                <div className="container-window video-cap" >
                                    <div className="img-part" id="div-1">
                                        <Row >
                                            {this.state.files.map((f, idx) =>
                                                <Col md={4} key={idx}>
                                                    <Button onClick={(e) => this.setState({ isOpen: idx })} bsStyle="info" className="upload-btn uploads-btn">
                                                        Upload Image
                                                </Button>

                                                    <img className="img-upload" src={this.state.files[idx]} />
                                                </Col>
                                            )}
                                        </Row>
                                    </div>
                                    <div className="text-part" id="div-2">
                                        <Row >
                                            <Col md={12}>
                                                <textarea
                                                    className="text-input"
                                                    placeholder="Enter Text Here"
                                                    value={this.state.text}
                                                    onChange={this.inputText}
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Uploader isOpen={this.state.isOpen !== -1} onClose={(e) => this.setState({ isOpen: -1 })}>
                                <div className="video-uploader">
                                    <div className="uploader-title">
                                        <label>UPLOAD IMAGE</label>
                                        <hr />
                                    </div>
                                    <input type="file" className="custom-file-input" onChange={this.handleFileChange} />
                                    <hr />
                                    <Row>
                                        <Col md={8}>
                                            <p>NOTE: All files should be less than 4.0 GB</p>
                                        </Col>
                                        <Col md={4}>
                                            <Button
                                                bsStyle="info" pullRight onClick={(e) => this.setState({ isOpen: -1 })}>
                                                Upload
                                            </Button>
                                        </Col>
                                    </Row>

                                </div>
                            </Uploader>
                            <Col md={1}>
                                <div className="next">
                                    <Link to='/admin/fullvideocontent'>
                                        <Button className='btn-next' >
                                            <img src={next} width="20px" height="20px" alt="..." />
                                        </Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Grid>

                </div>
            </div>

        );
    }
}
export default MultiImgCapContent;