import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { Link } from 'react-router-dom';
import next from "assets/img/next.png";
import previous from "assets/img/previous.png";
import Uploader from "components/PopUp/Uploader.jsx"

class VideoCapContent extends Component {
    state = {
        isOpen: false,
        videoEmbeddingCode: null,
        enteredVideo: false,
        text: null
    };
    inputText = event => {
        this.setState({ text: event.target.value });
    };
    fileSelectedHandler = event => {
        this.setState({ videoEmbeddingCode: this.textInput.value, isOpen: false, enteredVideo: true });
    };
    createDangerousHTML = () => {
        return { __html: this.state.videoEmbeddingCode }
    };

    render() {
        const locState = this.props.location.state;
        const sectionIndex = locState.sectionIndex;
        const pageIndex = locState.pageIndex;
        const course = JSON.parse(JSON.stringify(locState.course)); //deep clone

        let videoSrc;
        const page = course.sections[sectionIndex].pages[pageIndex];
        if (this.state.videoEmbeddingCode) {
            page.contents[0] = {            
                content: this.state.videoEmbeddingCode,
                contentType: 'video',
            };
            videoSrc = this.state.videoEmbeddingCode;
        } else {
            // check if the file is set already
            if (page.contents.length > 0) {
                videoSrc = page.contents[0].content;
            }
        }
        return (
            <div className="course-content">
                <div className="course-tabs">
                    <h4>Section 1: Introduction | Page 1
                    <Link to={{ pathname: '/admin/courseoutline', state: course }}>
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
                                    <Link to='/admin/fullvideocontent'>
                                        <Button className='btn-previous' >
                                            <img src={previous} width="20px" height="20px" alt="..." />
                                        </Button>
                                    </Link>
                                </div>
                            </Col>

                            <Col md={10}>
                                <div className="container-window video-cap" >
                                    <div className="video-part" id="div-1">
                                        <Row >
                                            <Col md={12}>
                                                {this.state.enteredVideo ? <div dangerouslySetInnerHTML={this.createDangerousHTML()} /> : <Button className="upload-btn" onClick={(e) => this.setState({ isOpen: true })} bsStyle="info" >
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
                                                        <input type="String" ref={(input) => this.textInput = input} />
                                                        <hr />
                                                        <Row>
                                                            <Col md={8}>
                                                                <p>NOTE: All files should be less than 4.0 GB</p>
                                                            </Col>
                                                            <Col md={4}>
                                                                <Button
                                                                    bsStyle="info" pullRight onClick={this.fileSelectedHandler}>
                                                                    Upload
                                                    </Button>
                                                            </Col>
                                                        </Row>

                                                    </div>
                                                </Uploader>
                                            </Col>
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
export default VideoCapContent;