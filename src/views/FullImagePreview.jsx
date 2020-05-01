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
class FullImagePreview extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    state = {
        setImage: false,
        file: null,
    };
    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        const locState = this.props.location.state;
        const sectionIndex = locState.sectionIndex;
        const pageIndex = locState.pageIndex;
        // const course = JSON.parse(JSON.stringify(locState.course)); //deep clone
        const course = _.cloneDeep(locState.course);
        let imgSrc;
        const page = course.sections[sectionIndex].pages[pageIndex];
        if (page.contents.content && !this.state.setImage) {
            imgSrc = page.contents.content
            this.setState({ file: page.contents.content, setImage: true });
        }

        return (
            <div className="course-content">
                <div className="course-tabs">
                    <h4>Section {sectionIndex + 1} - {course.sections[sectionIndex].name} || Page {pageIndex + 1} - {course.sections[sectionIndex].pages[pageIndex].name}
                    <p className="percentage">{Math.round(this.state.percentage)}%</p>
                        <React.Fragment>
                            <ProgressBar percentage={this.state.percentage} />
                        </React.Fragment>
                    </h4>
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
                                                    <Button className='btn-previous'>
                                                        <img src={previous} width="20px" height="20px" alt="..." />
                                                    </Button>
                                                </Link>
                                            </div>
                                            : (course.sections[sectionIndex].pages[pageIndex - 1].template === "VIDEO WITH CAPTION" ?
                                                <div className="previous">
                                                    <Link to={{ pathname: '/user/videocappreview', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                        <Button className='btn-previous'>
                                                            <img src={previous} width="20px" height="20px" alt="..." />
                                                        </Button>
                                                    </Link>
                                                </div>
                                                : (course.sections[sectionIndex].pages[pageIndex - 1].template === "IMAGE WITH TEXT" ?
                                                    <div className="previous">
                                                        <Link to={{ pathname: '/user/imagecappreview', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                            <Button className='btn-previous'>
                                                                <img src={previous} width="20px" height="20px" alt="..." />
                                                            </Button>

                                                        </Link>
                                                    </div>
                                                    : (course.sections[sectionIndex].pages[pageIndex - 1].template === "QUIZ CONTENT" ?
                                                        <div className="previous">
                                                            <Link to={{ pathname: '/user/quizpreview', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                                <Button className='btn-previous'>
                                                                    <img src={previous} width="20px" height="20px" alt="..." />
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                        : (course.sections[sectionIndex].pages[pageIndex - 1].template === "HORIZONTAL IMAGES WITH TEXT" ?
                                                            <div className="previous">
                                                                <Link to={{ pathname: '/user/horizontalmultiimgs', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                                    <Button className='btn-previous'>
                                                                        <img src={previous} width="20px" height="20px" alt="..." />
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                            : (course.sections[sectionIndex].pages[pageIndex - 1].template === "IMAGES WITH TEXT" ?
                                                                <div className="previous">
                                                                    <Link to={{ pathname: '/user/multiimgcappreview', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                                        <Button className='btn-previous'>
                                                                            <img src={previous} width="20px" height="20px" alt="..." />
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                : (course.sections[sectionIndex].pages[pageIndex - 1].template === "FULLSCREEN IMAGE" ?
                                                                    <div className="previous">
                                                                        <Link to={{ pathname: '/user/fullimagepreview', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                                            <Button className='btn-previous'>
                                                                                <img src={previous} width="20px" height="20px" alt="..." />
                                                                            </Button>
                                                                        </Link>
                                                                    </div>
                                                                    :
                                                                    <div className="previous">
                                                                        <Link to={{ pathname: '/user/fulltextpreview', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                                            <Button className='btn-previous'>
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

                            <Col md={10}>
                                <div className="container-window">
                                    <img className="img-upload" src={imgSrc} />
                                </div>
                            </Col>
                            <Col md={3}>
                                    <CourseSidebar course={course.sections} />
                            </Col>
                            <Col md={1}>
                                {
                                    pageIndex !== course.sections[sectionIndex].pages.length - 1 && course.sections[sectionIndex].pages.length > 1 ?
                                        course.sections[sectionIndex].pages[pageIndex + 1].template === "FULLSCREEN VIDEO" ?
                                            <div className="next">
                                                <Link to={{ pathname: '/user/fullvideopreview', state: { sectionIndex, pageIndex: pageIndex + 1, course} }}>
                                                    <Button className='btn-next'>
                                                        <img src={next} width="20px" height="20px" alt="..." />
                                                    </Button>
                                                </Link>
                                            </div>
                                            : (course.sections[sectionIndex].pages[pageIndex + 1].template === "VIDEO WITH CAPTION" ?
                                                <div className="next">
                                                    <Link to={{ pathname: '/user/videocappreview', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                        <Button className='btn-next'>
                                                            <img src={next} width="20px" height="20px" alt="..." />
                                                        </Button>
                                                    </Link>
                                                </div>
                                                : (course.sections[sectionIndex].pages[pageIndex + 1].template === "IMAGE WITH TEXT" ?
                                                    <div className="next">
                                                        <Link to={{ pathname: '/user/imagecappreview', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                            <Button className='btn-next'>
                                                                <img src={next} width="20px" height="20px" alt="..." />
                                                            </Button>

                                                        </Link>
                                                    </div>
                                                    : (course.sections[sectionIndex].pages[pageIndex + 1].template === "HORIZONTAL IMAGES WITH TEXT" ?
                                                        <div className="next">
                                                            <Link to={{ pathname: '/user/horizontalmultiimgs', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                                <Button className='btn-next'>
                                                                    <img src={next} width="20px" height="20px" alt="..." />
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                        : (course.sections[sectionIndex].pages[pageIndex + 1].template === "QUIZ CONTENT" ?
                                                            <div className="next">
                                                                <Link to={{ pathname: '/user/quizpreview', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                                    <Button className='btn-next'>
                                                                        <img src={next} width="20px" height="20px" alt="..." />
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                            : (course.sections[sectionIndex].pages[pageIndex + 1].template === "IMAGES WITH TEXT" ?
                                                                <div className="next">
                                                                    <Link to={{ pathname: '/user/multiimgcappreview', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                                        <Button className='btn-next'>
                                                                            <img src={next} width="20px" height="20px" alt="..." />
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                : (course.sections[sectionIndex].pages[pageIndex + 1].template === "FULLSCREEN IMAGE" ?
                                                                    <div className="next">
                                                                        <Link to={{ pathname: '/user/fullimagepreview', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                                            <Button className='btn-next'>
                                                                                <img src={next} width="20px" height="20px" alt="..." />
                                                                            </Button>
                                                                        </Link>
                                                                    </div>
                                                                    :
                                                                    <div className="next">
                                                                        <Link to={{ pathname: '/user/fulltextpreview', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                                            <Button className='btn-next'>
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
                        </Row>
                    </Grid>

                </div>
            </div>

        );
    }
}
export default FullImagePreview;