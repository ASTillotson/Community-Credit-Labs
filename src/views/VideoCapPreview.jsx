import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { Link } from 'react-router-dom';
import next from "assets/img/next.png";
import previous from "assets/img/previous.png";
import Uploader from "components/PopUp/Uploader.jsx";
import ProgressBar from "components/ProgressBar/ProgressBar.jsx";
import CourseSidebar from "components/Sidebar/CourseSidebar.jsx";
import _ from "lodash";
class VideoCapPreview extends Component {
    constructor() {
        super();
        // this.state = {
        //     percentage: 0
        // }
    }
    state = {
        setText: false,
        setVideo: false,
        videoEmbeddingCode: null,
        text: "",
    };

    createDangerousHTML = () => {
        return { __html: this.state.videoEmbeddingCode }
    };

    render() {
        const locState = this.props.location.state;
        const sectionIndex = locState.sectionIndex;
        const pageIndex = locState.pageIndex;
        const course = _.cloneDeep(locState.course);
        const page = course.sections[sectionIndex].pages[pageIndex];
        console.log(page);
        if (page.contents[0] && !this.state.setVideo) {
            this.setState({ videoEmbeddingCode: page.contents[0].content, setVideo: true});
        }
        if (page.contents[1] && !this.state.setText) {
            this.setState({ text: page.contents[1].content, setText: true})
        }
        let count = 0;
        let pageIdx;
        for (let s = 0; s <= sectionIndex; s++) {
            if (s == sectionIndex) {
                pageIdx = pageIndex 
            } else {
                pageIdx = course.sections[sectionIndex].pages.length
            }
            for (let p = 0; p < pageIdx; p++) {
                count++;
            }
        }
        let percentage = (count / course.sections.reduce((sum, obj) => sum + obj.pages.length, 0)) * 100;
        return (
            <div className="course-content course-display">
                <div className="course-tabs">
                    {/* <h4>Section {sectionIndex + 1} - {course.sections[sectionIndex].name} || Page {pageIndex + 1} - {course.sections[sectionIndex].pages[pageIndex].name} */}
                    <h4>{course.name}</h4>
                    <p className="percentage">{Math.round(percentage)}%</p>
                        <React.Fragment>
                            <ProgressBar percentage={percentage} />
                        </React.Fragment>
                    
                    <hr />
                </div>
                <div className="container">
                    <Grid fluid>
                        <Row>
                            <Col md={1}>
                                {
                                    pageIndex > 0 && course.sections[sectionIndex].pages.length > 1 ?
                                        course.sections[sectionIndex].pages[pageIndex - 1].template === "FULLSCREEN VIDEO" ?
                                            <div className="previous">
                                                <Link to={{ pathname: '/user/fullvideopreview', state: { sectionIndex, pageIndex: pageIndex - 1, course} }}>
                                                    <Button  className='btn-previous'>
                                                        <img src={previous} width="20px" height="20px" alt="..." />
                                                    </Button>
                                                </Link>
                                            </div>
                                            : (course.sections[sectionIndex].pages[pageIndex - 1].template === "VIDEO WITH CAPTION" ?
                                                <div className="previous">
                                                    <Link to={{ pathname: '/user/videocappreview', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                        <Button  className='btn-previous'>
                                                            <img src={previous} width="20px" height="20px" alt="..." />
                                                        </Button>
                                                    </Link>
                                                </div>
                                                : (course.sections[sectionIndex].pages[pageIndex - 1].template === "IMAGE WITH TEXT" ?
                                                    <div className="previous">
                                                        <Link to={{ pathname: '/user/imagecappreview', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                            <Button  className='btn-previous'>
                                                                <img src={previous} width="20px" height="20px" alt="..." />
                                                            </Button>

                                                        </Link>
                                                    </div>
                                                    : (course.sections[sectionIndex].pages[pageIndex - 1].template === "QUIZ CONTENT" ?
                                                        <div className="previous">
                                                            <Link to={{ pathname: '/user/quizpreview', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                                <Button  className='btn-previous'>
                                                                    <img src={previous} width="20px" height="20px" alt="..." />
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                        : (course.sections[sectionIndex].pages[pageIndex - 1].template === "HORIZONTAL IMAGES WITH TEXT" ?
                                                            <div className="previous">
                                                                <Link to={{ pathname: '/user/horizontalmultiimgspreview', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                                    <Button  className='btn-previous'>
                                                                        <img src={previous} width="20px" height="20px" alt="..." />
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                            : (course.sections[sectionIndex].pages[pageIndex - 1].template === "IMAGES WITH TEXT" ?
                                                                <div className="previous">
                                                                    <Link to={{ pathname: '/user/multiimgcappreview', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                                        <Button  className='btn-previous'>
                                                                            <img src={previous} width="20px" height="20px" alt="..." />
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                : (course.sections[sectionIndex].pages[pageIndex - 1].template === "FULLSCREEN IMAGE" ?
                                                                    <div className="previous">
                                                                        <Link to={{ pathname: '/user/fullimagepreview', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                                            <Button  className='btn-previous'>
                                                                                <img src={previous} width="20px" height="20px" alt="..." />
                                                                            </Button>
                                                                        </Link>
                                                                    </div>
                                                                    :
                                                                    <div className="previous">
                                                                        <Link to={{ pathname: '/user/fulltextpreview', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                                            <Button  className='btn-previous'>
                                                                                <img src={previous} width="20px" height="20px" alt="..." />
                                                                            </Button>
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        :
                                        <div className="previous"></div>
                                }
                            </Col>

                            <Col md={7}>
                                <div className="container-window video-cap display-window" >
                                    <div className="video-part" id="div-1">
                                        <Row >
                                            <Col md={12}>
                                                <div dangerouslySetInnerHTML={this.createDangerousHTML()} />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="text-part" id="div-2">
                                        <Row >
                                            <Col md={12}>
                                                <span>{this.state.text}</span>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            
                            <Col md={1}>
                                {
                                    pageIndex !== course.sections[sectionIndex].pages.length - 1 && course.sections[sectionIndex].pages.length > 1 ?
                                        course.sections[sectionIndex].pages[pageIndex + 1].template === "FULLSCREEN VIDEO" ?
                                            <div className="next">
                                                <Link to={{ pathname: '/user/fullvideopreview', state: { sectionIndex, pageIndex: pageIndex + 1, course} }}>
                                                    <Button  className='btn-next'>
                                                        <img src={next} width="20px" height="20px" alt="..." />
                                                    </Button>
                                                </Link>
                                            </div>
                                            : (course.sections[sectionIndex].pages[pageIndex + 1].template === "VIDEO WITH CAPTION" ?
                                                <div className="next">
                                                    <Link to={{ pathname: '/user/videocappreview', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                        <Button  className='btn-next'>
                                                            <img src={next} width="20px" height="20px" alt="..." />
                                                        </Button>
                                                    </Link>
                                                </div>
                                                : (course.sections[sectionIndex].pages[pageIndex + 1].template === "IMAGE WITH TEXT" ?
                                                    <div className="next">
                                                        <Link to={{ pathname: '/user/imagecappreview', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                            <Button  className='btn-next'>
                                                                <img src={next} width="20px" height="20px" alt="..." />
                                                            </Button>

                                                        </Link>
                                                    </div>
                                                    : (course.sections[sectionIndex].pages[pageIndex + 1].template === "HORIZONTAL IMAGES WITH TEXT" ?
                                                        <div className="next">
                                                            <Link to={{ pathname: '/user/horizontalmultiimgspreview', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                                <Button  className='btn-next'>
                                                                    <img src={next} width="20px" height="20px" alt="..." />
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                        : (course.sections[sectionIndex].pages[pageIndex + 1].template === "QUIZ CONTENT" ?
                                                            <div className="next">
                                                                <Link to={{ pathname: '/user/quizpreview', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                                    <Button  className='btn-next'>
                                                                        <img src={next} width="20px" height="20px" alt="..." />
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                            : (course.sections[sectionIndex].pages[pageIndex + 1].template === "IMAGES WITH TEXT" ?
                                                                <div className="next">
                                                                    <Link to={{ pathname: '/user/multiimgcappreview', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                                        <Button  className='btn-next'>
                                                                            <img src={next} width="20px" height="20px" alt="..." />
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                : (course.sections[sectionIndex].pages[pageIndex + 1].template === "FULLSCREEN IMAGE" ?
                                                                    <div className="next">
                                                                        <Link to={{ pathname: '/user/fullimagepreview', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                                            <Button  className='btn-next'>
                                                                                <img src={next} width="20px" height="20px" alt="..." />
                                                                            </Button>
                                                                        </Link>
                                                                    </div>
                                                                    :
                                                                    <div className="next">
                                                                        <Link to={{ pathname: '/user/fulltextpreview', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                                            <Button  className='btn-next'>
                                                                                <img src={next} width="20px" height="20px" alt="..." />
                                                                            </Button>
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        :
                                        <div className="next"></div>
                                }
                            </Col>
                            <Col md={3}>
                                    <CourseSidebar course={course.sections} />
                            </Col>
                        </Row>
                    </Grid>

                </div>
            </div>

        );
    }
}
export default VideoCapPreview;