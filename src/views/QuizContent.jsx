import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { Link } from 'react-router-dom';
import next from "assets/img/next.png";
import previous from "assets/img/previous.png";

class QuizContent extends Component {
    
    state = {
        theQuestion: null,
        checkOne: false,
        checkTwo: false,
        checkThree: false,
        checkFour: false,
        answerOne: null,
        answerTwo: null,
        answerThree: null,
        answerFour: null,
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

    // Convert checked values into String.//
    //______
    //  onSubmit = (e) => {
    //     e.preventDefault();
    //     let arr = [];
    //     for (var key in this.state) {
    //       if(this.state[key] === true) {
    //         arr.push(key);
    //       }
    //     }
    //     let data = {
    //       check: arr.toString() 
    //     };
    // }

    render() {
        const locState = this.props.location.state;
        const sectionIndex = locState.sectionIndex;
        const pageIndex = locState.pageIndex;
        const course = JSON.parse(JSON.stringify(locState.course)); //deep clone
        if(!this.state.theQuestion) {
            let oldState = course.sections[sectionIndex].pages[pageIndex].contents.content;
            if(oldState){
                this.setState({theQuestion: oldState.theQuestion,
                    checkOne: oldState.checkOne,
                    checkTwo: oldState.checkTwo,
                    checkThree: oldState.checkThree,
                    checkFour: oldState.checkFour,
                    answerOne: oldState.answerOne,
                    answerTwo: oldState.answerTwo,
                    answerThree: oldState.answerThree,
                    answerFour: oldState.answerFour
                });
            }
        } else {
            course.sections[sectionIndex].pages[pageIndex].contents = {content:this.state, contentType:"quiz"};
        }

        return (
            <div className="course-content">
                <div className="course-tabs">
                <h4>Section {sectionIndex + 1} - {course.sections[sectionIndex].name} || Page {pageIndex + 1} - {course.sections[sectionIndex].pages[pageIndex].name}
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
                            {
                                    pageIndex > 0 && course.sections[sectionIndex].pages.length > 1 ?
                                        course.sections[sectionIndex].pages[pageIndex - 1].template === "FULLSCREEN VIDEO" ?
                                            <div className="previous">
                                                <Link to={{ pathname: '/admin/fullvideocontent', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                    <Button className='btn-previous'>
                                                        <img src={previous} width="20px" height="20px" alt="..." />
                                                    </Button>
                                                </Link>
                                            </div>
                                            : (course.sections[sectionIndex].pages[pageIndex - 1].template === "VIDEO WITH CAPTION" ?
                                                <div className="previous">
                                                    <Link to={{ pathname: '/admin/videocapcontent', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                        <Button className='btn-previous'>
                                                            <img src={previous} width="20px" height="20px" alt="..." />
                                                        </Button>
                                                    </Link>
                                                </div>
                                                : (course.sections[sectionIndex].pages[pageIndex - 1].template === "IMAGE WITH TEXT" ?
                                                    <div className="previous">
                                                        <Link to={{ pathname: '/admin/imagecapcontent', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                            <Button className='btn-previous'>
                                                                <img src={previous} width="20px" height="20px" alt="..." />
                                                            </Button>

                                                        </Link>
                                                    </div>
                                                    : (course.sections[sectionIndex].pages[pageIndex - 1].template === "QUIZ CONTENT" ?
                                                        <div className="previous">
                                                            <Link to={{ pathname: '/admin/quizcontent', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                                <Button className='btn-previous'>
                                                                    <img src={previous} width="20px" height="20px" alt="..." />
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                        : (course.sections[sectionIndex].pages[pageIndex - 1].template === "IMAGES WITH TEXT" ?
                                                            <div className="previous">
                                                                <Link to={{ pathname: '/admin/multiimgcapcontent', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                                    <Button className='btn-previous'>
                                                                        <img src={previous} width="20px" height="20px" alt="..." />
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                            : (course.sections[sectionIndex].pages[pageIndex - 1].template === "FULLSCREEN IMAGE" ?
                                                                <div className="previous">
                                                                    <Link to={{ pathname: '/admin/fullimagecontent', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
                                                                        <Button className='btn-previous'>
                                                                            <img src={previous} width="20px" height="20px" alt="..." />
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                :
                                                                <div className="previous">
                                                                    <Link to={{ pathname: '/admin/fulltextcontent', state: { sectionIndex, pageIndex: pageIndex - 1, course } }}>
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
                                        :
                                        <div className="previous"></div>
                                }
                            </Col>
                            <Col md={10}>
                                <div className="container-window" id="div-1" >

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
                                    pageIndex !== course.sections[sectionIndex].pages.length - 1 && course.sections[sectionIndex].pages.length > 1 ?
                                        course.sections[sectionIndex].pages[pageIndex + 1].template === "FULLSCREEN VIDEO" ?
                                            <div className="next">
                                                <Link to={{ pathname: '/admin/fullvideocontent', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                    <Button className='btn-next'>
                                                        <img src={next} width="20px" height="20px" alt="..." />
                                                    </Button>
                                                </Link>
                                            </div>
                                            : (course.sections[sectionIndex].pages[pageIndex + 1].template === "VIDEO WITH CAPTION" ?
                                                <div className="next">
                                                    <Link to={{ pathname: '/admin/videocapcontent', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                        <Button className='btn-next'>
                                                            <img src={next} width="20px" height="20px" alt="..." />
                                                        </Button>
                                                    </Link>
                                                </div>
                                                : (course.sections[sectionIndex].pages[pageIndex + 1].template === "IMAGE WITH TEXT" ?
                                                    <div className="next">
                                                        <Link to={{ pathname: '/admin/imagecapcontent', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                            <Button className='btn-next'>
                                                                <img src={next} width="20px" height="20px" alt="..." />
                                                            </Button>

                                                        </Link>
                                                    </div>
                                                    : (course.sections[sectionIndex].pages[pageIndex + 1].template === "QUIZ CONTENT" ?
                                                        <div className="next">
                                                            <Link to={{ pathname: '/admin/quizcontent', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                                <Button className='btn-next'>
                                                                    <img src={next} width="20px" height="20px" alt="..." />
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                        : (course.sections[sectionIndex].pages[pageIndex + 1].template === "IMAGES WITH TEXT" ?
                                                            <div className="next">
                                                                <Link to={{ pathname: '/admin/multiimgcapcontent', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                                    <Button className='btn-next'>
                                                                        <img src={next} width="20px" height="20px" alt="..." />
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                            : (course.sections[sectionIndex].pages[pageIndex + 1].template === "FULLSCREEN IMAGE" ?
                                                                <div className="next">
                                                                    <Link to={{ pathname: '/admin/fullimagecontent', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
                                                                        <Button className='btn-next'>
                                                                            <img src={next} width="20px" height="20px" alt="..." />
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                :
                                                                <div className="next">
                                                                    <Link to={{ pathname: '/admin/fulltextcontent', state: { sectionIndex, pageIndex: pageIndex + 1, course } }}>
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
export default QuizContent;