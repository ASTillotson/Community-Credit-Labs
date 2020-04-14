import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { Link } from 'react-router-dom';
import next from "assets/img/next.png";
import previous from "assets/img/previous.png";
import Uploader from "components/PopUp/Uploader.jsx"

class FullImageContent extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    state = {
        isOpen: false,
        seen: false,
        file: null,
    };

    handleChange(event){
        this.setState({
            file:URL.createObjectURL(event.target.files[0])
        })
    }
    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    };

    render() {
        const locState = this.props.location.state;
        const sectionIndex = locState.sectionIndex;
        const pageIndex = locState.pageIndex;
        const course = JSON.parse(JSON.stringify(locState.course)); //deep clone

        let imgSrc;
        const page = course.sections[sectionIndex].pages[pageIndex];
        if (this.state.file) {
            page.contents[0] = {            
                content: this.state.file,
                contentType: 'image',
            };
            imgSrc = this.state.file;
        } else {
            // check if the file is set already
            if (page.contents.length > 0) {
                imgSrc = page.contents[0].content;
            }
        }

        return (
            <div className="course-content">
                <div className="course-tabs">
                    <h4>Section 1: Introduction | Page 1
                    <Link to={{ pathname: '/admin/courseoutline', state:course}}>
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
                                <div className="container-window" id="div-1">
                                    <Button onClick={(e) => this.setState({ isOpen: true })} bsStyle="info" className="upload-btn" >
                                        Upload Image
                                    </Button>
                                    <Uploader isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                                        <div className="image-uploader">
                                            <div className="uploader-title">
                                                <label>UPLOAD IMAGE</label>
                                                <hr />
                                            </div>
                                            <input type="file" className="custom-file-input" onChange={this.handleChange}/>
                                            <hr />
                                            <Row>
                                                <Col md={8}>
                                                    <p>NOTE: All files should be less than 4.0 GB</p>
                                                </Col>
                                                <Col md={4}>
                                                    <Button
                                                        bsStyle="info" pullRight onClick={(e) => this.setState({ isOpen: false })}>
                                                        Upload
                                                    </Button>
                                                </Col>
                                            </Row>
                                            
                                        </div>
                                    </Uploader>
                                    <img className="img-upload" src={imgSrc}/>
                                </div>
                            </Col>

                            <Col md={1}>
                                <div className="next">
                                    <Link to='/admin/fulltextcontent'>
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
export default FullImageContent;