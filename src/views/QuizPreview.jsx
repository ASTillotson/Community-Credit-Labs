import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { Link } from 'react-router-dom';
import next from "assets/img/next.png";
import previous from "assets/img/previous.png";
import ProgressBar from "components/ProgressBar/ProgressBar.jsx";
import CourseSidebar from "components/Sidebar/CourseSidebar.jsx";
import _ from "lodash";
class QuizPreview extends Component {

    state = {
        theQuestion: "",
        checkOne: false,
        checkTwo: false,
        checkThree: false,
        checkFour: false,
        answerOne: "",
        answerTwo: "",
        answerThree: "",
        answerFour: "",
    };

    theQuestion = event => {
        this.setState({ theQuestion: event.target.value });
    };
    answerOne = event => {
        this.setState({ answerOne: event.target.value });
    };

    toggleCheckOne = () => {
        this.setState(prevState => ({
            checkOne: !prevState.checkOne,
        }));
    }

    answerTwo = event => {
        this.setState({ answerTwo: event.target.value });
    };

    toggleCheckTwo = () => {
        this.setState(prevState => ({
            checkTwo: !prevState.checkTwo,
        }));
    }

    answerThree = event => {
        this.setState({ answerThree: event.target.value });
    };

    toggleCheckThree = () => {
        this.setState(prevState => ({
            checkThree: !prevState.checkThree,
        }));
    }
    answerFour = event => {
        this.setState({ answerFour: event.target.value });
    };

    toggleCheckFour = () => {
        this.setState(prevState => ({
            checkFour: !prevState.checkFour,
        }));
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    flushState = () => {
        if (this.props.location.state.flushState) {
            this.props.location.state.flushState = false;
            this.setState({
                theQuestion: "",
                checkOne: false,
                checkTwo: false,
                checkThree: false,
                checkFour: false,
                answerOne: "",
                answerTwo: "",
                answerThree: "",
                answerFour: ""
            });
        }
    }
    

    render() {
        const locState = this.props.location.state;
        const sectionIndex = locState.sectionIndex;
        const pageIndex = locState.pageIndex;
        const course = _.cloneDeep(locState.course);
        const page = course.sections[sectionIndex].pages[pageIndex];
        if (page.contents.content && !this.state.setText) {
            this.setState({ text: page.contents.content, setText: true});
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
        let prevSect = null;
        let prevPage = null;
        let nextSect = null;
        let nextPage = null;
        // are we at the last page, and is there 1 more section
        if(pageIndex == course.sections[sectionIndex].pages.length - 1 && sectionIndex < course.sections.length - 1) {
            nextSect = sectionIndex + 1;
            nextPage = 0;
            prevSect = sectionIndex;
            prevPage = pageIndex - 1;
        // are we at the first page and not on the first section
        } else if (pageIndex == 0 && sectionIndex != 0) {
            prevSect = sectionIndex - 1;
            prevPage = course.sections[prevSect].pages.length - 1;
            //make sure theres another page
            if(course.sections[sectionIndex].pages.length - 1 != pageIndex) {
                nextSect = sectionIndex;
                nextPage = pageIndex + 1;
            }
        // are we at the first page of the first section
        } else if (pageIndex == 0 && sectionIndex == 0) {
            nextSect = sectionIndex;
            nextPage = pageIndex + 1;
        // are we at the last page of the last section and are there no more sections
        } else if (pageIndex == course.sections[sectionIndex].pages.length - 1 && sectionIndex == course.sections.length - 1) {
            prevSect = sectionIndex;
            prevPage = pageIndex - 1;
        // every page inbetween
        } else {
            nextSect = sectionIndex;
            nextPage = pageIndex + 1;
            prevSect = sectionIndex;
            prevPage = pageIndex - 1;
        }
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
                                    prevPage !== null || prevSect !== null ?
                                        course.sections[prevSect].pages[prevPage].template === "FULLSCREEN VIDEO" ?
                                            <div className="previous">
                                                <Link to={{ pathname: '/user/fullvideopreview', state: { sectionIndex: prevSect, pageIndex: prevPage, course} }}>
                                                    <Button  className='btn-previous'>
                                                        <img src={previous} width="20px" height="20px" alt="..." />
                                                    </Button>
                                                </Link>
                                            </div>
                                            : (course.sections[prevSect].pages[prevPage].template === "VIDEO WITH CAPTION" ?
                                                <div className="previous">
                                                    <Link to={{ pathname: '/user/videocappreview', state: { sectionIndex: prevSect, pageIndex: prevPage, course } }}>
                                                        <Button  className='btn-previous'>
                                                            <img src={previous} width="20px" height="20px" alt="..." />
                                                        </Button>
                                                    </Link>
                                                </div>
                                                : (course.sections[prevSect].pages[prevPage].template === "IMAGE WITH TEXT" ?
                                                    <div className="previous">
                                                        <Link to={{ pathname: '/user/imagecappreview', state: { sectionIndex: prevSect, pageIndex: prevPage, course } }}>
                                                            <Button  className='btn-previous'>
                                                                <img src={previous} width="20px" height="20px" alt="..." />
                                                            </Button>

                                                        </Link>
                                                    </div>
                                                    : (course.sections[prevSect].pages[prevPage].template === "QUIZ CONTENT" ?
                                                        <div className="previous">
                                                            <Link to={{ pathname: '/user/quizpreview', state: { sectionIndex: prevSect, pageIndex: prevPage, course } }}>
                                                                <Button  className='btn-previous'>
                                                                    <img src={previous} width="20px" height="20px" alt="..." />
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                        : (course.sections[prevSect].pages[prevPage].template === "HORIZONTAL IMAGES WITH TEXT" ?
                                                            <div className="previous">
                                                                <Link to={{ pathname: '/user/horizontalmultiimgspreview', state: { sectionIndex: prevSect, pageIndex: prevPage, course } }}>
                                                                    <Button  className='btn-previous'>
                                                                        <img src={previous} width="20px" height="20px" alt="..." />
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                            : (course.sections[prevSect].pages[prevPage].template === "IMAGES WITH TEXT" ?
                                                                <div className="previous">
                                                                    <Link to={{ pathname: '/user/multiimgcappreview', state: { sectionIndex: prevSect, pageIndex: prevPage, course } }}>
                                                                        <Button  className='btn-previous'>
                                                                            <img src={previous} width="20px" height="20px" alt="..." />
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                : (course.sections[prevSect].pages[prevPage].template === "FULLSCREEN IMAGE" ?
                                                                    <div className="previous">
                                                                        <Link to={{ pathname: '/user/fullimagepreview', state: { sectionIndex: prevSect, pageIndex: prevPage, course } }}>
                                                                            <Button  className='btn-previous'>
                                                                                <img src={previous} width="20px" height="20px" alt="..." />
                                                                            </Button>
                                                                        </Link>
                                                                    </div>
                                                                    :
                                                                    <div className="previous">
                                                                        <Link to={{ pathname: '/user/fulltextpreview', state: { sectionIndex: prevSect, pageIndex: prevPage, course } }}>
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
                                <div className="container-window display-window" id="div-1" >

                                    <Row >
                                        <div classname="uploader-title">


                                            <Col md={12}>
                                                <input
                                                    className="text-input-quiz"
                                                    value={this.state.theQuestion}
                                                    onChange={this.theQuestion}
                                                    placeholder="Type question here"
                                                    name="theQuestion"

                                                />
                                            </Col>


                                            <Col md={12}>
                                                <label className='quiz-guide'>Check the correct answers</label>
                                            </Col>

                                        </div>
                                        <Col md={12}>
                                            <input
                                                className="answer-input"
                                                type="text"
                                                value={this.state.answerOne}
                                                onChange={this.answerOne}
                                                placeholder="Answer 1"
                                                name="answerOne"
                                            />
                                            <input type="checkbox"
                                                checked={this.state.checkOne}
                                                onChange={this.toggleCheckOne}
                                                className="form-check-input"
                                            />

                                        </Col>


                                        <Col md={12}>
                                            <input
                                                className="answer-input"
                                                type="text"
                                                value={this.state.answerTwo}
                                                onChange={this.answerTwo}
                                                placeholder="Answer 2"
                                                name="answerTwo"
                                            />
                                            <input type="checkbox"
                                                checked={this.state.checkTwo}
                                                onChange={this.toggleCheckTwo}
                                                className="form-check-input"
                                            />
                                        </Col>

                                        <Col md={12}>
                                            <input
                                                className="answer-input"
                                                type="text"
                                                value={this.state.answerThree}
                                                onChange={this.answerThree}
                                                placeholder="Answer 3"
                                                name="answerThree"
                                            />
                                            <input type="checkbox"
                                                checked={this.state.checkThree}
                                                onChange={this.toggleCheckThree}
                                                className="form-check-input"
                                            />
                                        </Col>

                                        <Col md={12}>
                                            <input
                                                className="answer-input"
                                                type="text"
                                                value={this.state.answerFour}
                                                onChange={this.answerFour}
                                                placeholder="Answer 4"
                                                name="answerFour"
                                            />
                                            <input type="checkbox"
                                                checked={this.state.checkFour}
                                                onChange={this.toggleCheckFour}
                                                className="form-check-input"
                                            />
                                        </Col>

                                        {/* <Col md={12}>
                                            <div className="form-group">
                                                <button className="btn btn-primary">
                                                    Submit
                                                </button>
                                            </div>
                                        </Col> */}

                                    </Row>

                                </div>
                            </Col>
                            
                            <Col md={1}>
                                {
                                    nextPage !== null || nextSect !== null ?
                                        course.sections[nextSect].pages[nextPage].template === "FULLSCREEN VIDEO" ?
                                            <div className="next">
                                                <Link to={{ pathname: '/user/fullvideopreview', state: { sectionIndex: nextSect, pageIndex: nextPage, course} }}>
                                                    <Button  className='btn-next'>
                                                        <img src={next} width="20px" height="20px" alt="..." />
                                                    </Button>
                                                </Link>
                                            </div>
                                            : (course.sections[nextSect].pages[nextPage].template === "VIDEO WITH CAPTION" ?
                                                <div className="next">
                                                    <Link to={{ pathname: '/user/videocappreview', state: { sectionIndex: nextSect, pageIndex: nextPage, course } }}>
                                                        <Button  className='btn-next'>
                                                            <img src={next} width="20px" height="20px" alt="..." />
                                                        </Button>
                                                    </Link>
                                                </div>
                                                : (course.sections[nextSect].pages[nextPage].template === "IMAGE WITH TEXT" ?
                                                    <div className="next">
                                                        <Link to={{ pathname: '/user/imagecappreview', state: { sectionIndex: nextSect, pageIndex: nextPage, course } }}>
                                                            <Button  className='btn-next'>
                                                                <img src={next} width="20px" height="20px" alt="..." />
                                                            </Button>

                                                        </Link>
                                                    </div>
                                                    : (course.sections[nextSect].pages[nextPage].template === "HORIZONTAL IMAGES WITH TEXT" ?
                                                        <div className="next">
                                                            <Link to={{ pathname: '/user/horizontalmultiimgspreview', state: { sectionIndex: nextSect, pageIndex: nextPage, course } }}>
                                                                <Button  className='btn-next'>
                                                                    <img src={next} width="20px" height="20px" alt="..." />
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                        : (course.sections[nextSect].pages[nextPage].template === "QUIZ CONTENT" ?
                                                            <div className="next">
                                                                <Link to={{ pathname: '/user/quizpreview', state: { sectionIndex: nextSect, pageIndex: nextPage, course } }}>
                                                                    <Button  className='btn-next'>
                                                                        <img src={next} width="20px" height="20px" alt="..." />
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                            : (course.sections[nextSect].pages[nextPage].template === "IMAGES WITH TEXT" ?
                                                                <div className="next">
                                                                    <Link to={{ pathname: '/user/multiimgcappreview', state: { sectionIndex: nextSect, pageIndex: nextPage, course } }}>
                                                                        <Button  className='btn-next'>
                                                                            <img src={next} width="20px" height="20px" alt="..." />
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                : (course.sections[nextSect].pages[nextPage].template === "FULLSCREEN IMAGE" ?
                                                                    <div className="next">
                                                                        <Link to={{ pathname: '/user/fullimagepreview', state: { sectionIndex: nextSect, pageIndex: nextPage, course } }}>
                                                                            <Button className='btn-next'>
                                                                                <img src={next} width="20px" height="20px" alt="..." />
                                                                            </Button>
                                                                        </Link>
                                                                    </div>
                                                                    :
                                                                    <div className="next">
                                                                        <Link to={{ pathname: '/user/fulltextpreview', state: { sectionIndex: nextSect, pageIndex: nextPage, course } }}>
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
export default QuizPreview;