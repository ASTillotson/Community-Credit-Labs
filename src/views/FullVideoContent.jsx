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

class FullVideoContent extends Component {
    state = {
        isOpen: false,
        seen: false,
        videoEmbeddingCode: null,
        enteredVideo: false
    };
    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    };
    fileSelectedHandler = event => {
        this.setState({ videoEmbeddingCode: this.textInput.value, isOpen: false, enteredVideo: true });
    };

    createDangerousHTML = () => {
        return {__html: this.state.videoEmbeddingCode}
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
                                    <Link to='/admin/videocapcontent'>
                                        <Button className='btn-previous' >
                                            <img src={previous} width="20px" height="20px" alt="..." />
                                        </Button>
                                    </Link>
                                </div>
                            </Col>

                            <Col md={10}>
                                <div className="container-window">
                                    {this.state.enteredVideo ? <div dangerouslySetInnerHTML={this.createDangerousHTML()}/> : <Button onClick={(e) => this.setState({ isOpen: true })} bsStyle="info" >
                                        Upload Video
                                    </Button>}
                                    <Uploader isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                                        <div className="video-uploader">
                                            <div className="uploader-title">
                                                <label>UPLOAD VIDEO</label>
                                                <hr />
                                            </div>
                                            <p className="input-descript">Paste the embedded code below</p>
                                            {/* <input type="file" className="custom-file-input" onChange={this.fileselectedHandler} /> */}
                                            <input type="String" ref={(input) => this.textInput = input}/>
                                            <hr />
                                            <Row>
                                                <Col md={8}>
                                                    <p>NOTE: All files should be less than 4.0 GB</p>
                                                </Col>
                                                <Col md={4}>
                                                    <Button bsStyle="info" pullRight onClick={this.fileSelectedHandler}>
                                                        Upload
                                                    </Button>
                                                </Col>
                                            </Row>
                                            
                                        </div>
                                    </Uploader>
                                </div>
                            </Col>

                            <Col md={1}>
                                <div className="next">
                                    <Link to='/admin/fullimagecontent'>
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
export default FullVideoContent;