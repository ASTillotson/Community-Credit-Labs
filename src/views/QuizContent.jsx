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

class QuizContent extends Component {
    state = {
        value: "",
        checkOne: false,
        // answerOne: "",
        // answerTwp: "",
        // answerThree: "",
        // answerFour: "",
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
                                    <Link to='/admin/fullvideocontent'>
                                        <Button className='btn-previous' >
                                            <img src={previous} width="20px" height="20px" alt="..." />
                                        </Button>
                                    </Link>
                                </div>
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
                                                <label classname='text-input-quiz'>Check the correct answers</label>
                                            </Col>

                                        </div>
                                        <Col md={12}>
                                            <input
                                                type="text"
                                                value={this.state.answerOne}
                                                onChange={this.answerOne}
                                                placeholder="answer 1"
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
                                                type="text"
                                                value={this.state.answerTwo}
                                                onChange={this.answerTwo}
                                                placeholder="answer 2"
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
                                                type="text"
                                                value={this.state.answerThree}
                                                onChange={this.answerThree}
                                                placeholder="answer 3"
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
                                                type="text"
                                                value={this.state.answerFour}
                                                onChange={this.answerFour}
                                                placeholder="answer 4"
                                                name="answerFour"
                                            />
                                            <input type="checkbox"
                                                checked={this.state.checkFour}
                                                onChange={this.toggleCheckFour}
                                                className="form-check-input"
                                            />
                                        </Col>
                                        
                                        <Col md={12}>
                                            <div className="form-group">
                                                <button className="btn btn-primary">
                                                    Submit
                                                </button>
                                            </div>
                                        </Col>

                                    </Row>

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
export default QuizContent;