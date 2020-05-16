import React, { Component, useState } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import CourseSidebar from "components/Sidebar/CourseSidebar.jsx";
import ProgressBar from "components/ProgressBar/ProgressBar.jsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "react-bootstrap";
import previous from "assets/img/previous.png";
import next from "assets/img/next.png";
import { Document, Page, Text, View, StyleSheet, Image, Font } from "@react-pdf/renderer";
import { PDFViewer } from '@react-pdf/renderer';
import frame from "assets/img/cert-border.png";
import stamp from "assets/img/stamp1.png";
import logo from "assets/img/cert_logo.png";

// Font.register({
//     family: 'Dancing Script',
//     src: 'https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap'
//   });
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    title: {
        fontSize: 60,
        textAlign: 'center',
        paddingTop: 15,
        color: '#605e5e',
        fontFamily: 'Times-Roman'
    },
    subtitle: {
        paddingTop: 20,
        textAlign: 'center',
        fontSize: 25
    },
    courseName: {
        paddingTop: 30,
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Times-Roman'
    },
    image: {
        height: 100,
        width: 100,
        marginTop: -90,
        marginLeft: 630,
        transform: "rotate(20deg)"
    },
    background: {
        position: 'absolute',
        minWidth: '100%',
        minHeight: '100%',
        display: 'block',
        height: '800px',
        width: '900px',
        marginTop: -110,
        marginLeft: -40
    },
    logo:{
        width: '300px',
        height: '70px',
        marginTop: 58,
        marginLeft: 250
    },
    underLine:{
        marginTop: -20,
        textAlign: 'center'
    },
    name:{
        paddingTop: 30,
        fontSize: 35,
        textAlign: 'center'
    }
});

const MyDocument = (
    <Document>
        <Page size="A4" orientation="landscape" style={styles.page}>
            <View style={styles.section}>
                <Image style={styles.background} src={frame}></Image>
                <Image style={styles.logo} src={logo}></Image>
                <Text style={styles.title}>Certificate of Completion</Text>
                <Text style={styles.subtitle}>This Certificate is Awarded to</Text>
                <Text style={styles.name}>JOHN THOMSON</Text> 
                <Text style={styles.underLine}>______________________________________</Text>
                <Text style={styles.subtitle}>for completing </Text>
                <Text style={styles.courseName}>Introduction to Community Credit Lab</Text>
                <Text style={styles.subtitle}>on May 15, 2020</Text>
                <Image style={styles.image} src={stamp}></Image>
            </View>
        </Page>
    </Document>
);

const course = [
    {
        name: "Section 1 : Introducing CCL",
        pages: [
            {
                contents: { content: "https://ccl985605d4e97c4fb7937ee5ca5d4907a2201726-prod.s3.amazonaws.com/public/images/contact.jpg", contentType: "image" }, 
                name: "Who are we?",
                template: "FULLSCREEN IMAGE"
            },
            {
                contents: { content: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EhagRQtrzGE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', contentType: "video" },
                name: "Our SVP Pitch",
                template: "FULLSCREEN VIDEO"
            },
        ]
    },
    {
        name: "Section 2: Quiz",
        pages: [
            {
                contents: { content: { answerOne: "Affordable credit", answerTwo: "Organizations", answerThree: "Programs", answerFour: "Workshops", checkOne: true, checkTwo: false, checkThree: false, checkFour: false, theQuestion: "CCL exists to facilitate access to ______ for underserved communities." }, contentType: "quiz" },
                name: "Quiz 1",
                template: "QUIZ CONTENT"
            },
        ]
    }
];

class CourseTaking extends Component {
    constructor() {
        super();
        this.state = {
            percentage: 0
        }
    }

    render() {

        return (
            <div>
                <div className="course-content course-display">
                    <div className="course-tabs">
                        <h4>Introduction to Community Credit Lab</h4>
                        <p className="percentage">100%</p>
                        <React.Fragment>
                            <ProgressBar percentage="100" />
                        </React.Fragment>
                        <hr />
                    </div>
                    <div className="container">
                        <Grid fluid>
                            <Row>
                                <Col md={9}>
                                    <div className="container-window display-window pdf-display">
                                        <div>
                                            <Row>
                                                <Col md={12}>
                                                    <PDFViewer>{MyDocument}</PDFViewer>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="download-link">
                                            <Row>
                                                <Col>
                                                    <PDFDownloadLink document={MyDocument} filename="certificate.pdf" style={{ padding: "10px" }}>
                                                        {({ blob, url, loading, error }) =>
                                                            loading ? "Loading document..." : "Download PDF"}
                                                    </PDFDownloadLink>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <CourseSidebar course={course} />
                                </Col>
                            </Row>
                        </Grid>

                    </div>
                </div>
            </div >
        );
    }
}
export default CourseTaking;