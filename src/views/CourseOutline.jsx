import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { Link } from 'react-router-dom';
import plus from "assets/img/plus.png";
import { Card } from "components/Card/Card.jsx";

class CourseOutline extends Component {
  state = {
    isOpen: false
  }

  render() {
    const course = this.props.location.state;
    const pageDivs = [];

    for (let i = 0; i < course.sections.length; i++) {
      let pages = course.sections[i].pages;
      const cards = pages.map((page, pageIndex) =>
        <Col md={4} key={page.name}>
          <Card
            category={`Page ${pageIndex + 1} - ${page.name}`}
            stats={page.template}
            content={
              <div className="outline-content">
                {page.template === "FULLSCREEN VIDEO" ?
                  <Link to={{ pathname: '/admin/fullvideocontent', state: { sectionIndex: i, pageIndex, course } }}>
                    <Button className='btn-simple-add' >
                      <img src={plus} width="20px" height="20px" alt="..." />
                    </Button>
                  </Link>
                  : (page.template === "VIDEO WITH CAPTION" ?
                    <Link to={{ pathname: '/admin/videocapcontent', state: { sectionIndex: i, pageIndex, course } }}>
                      <Button className='btn-simple-add' >
                        <img src={plus} width="20px" height="20px" alt="..." />
                      </Button>
                    </Link>
                    : (page.template === "IMAGE WITH TEXT" ?
                      <Link to={{ pathname: '/admin/imagecapcontent', state: { sectionIndex: i, pageIndex, course } }}>
                        <Button className='btn-simple-add' >
                          <img src={plus} width="20px" height="20px" alt="..." />
                        </Button>
                      </Link>
                      : (page.template === "QUIZ CONTENT" ?
                        <Link to='/admin/quizcontent'>
                          <Button className='btn-simple-add' >
                            <img src={plus} width="20px" height="20px" alt="..." />
                          </Button>
                        </Link>
                        : (page.template === "IMAGES WITH TEXT" ?
                          <Link to='/admin/multiimgcapcontent'>
                            <Button className='btn-simple-add' >
                              <img src={plus} width="20px" height="20px" alt="..." />
                            </Button>
                          </Link>
                          : (page.template === "TEXT" ?
                            <Link to={{ pathname: '/admin/fulltextcontent', state: { sectionIndex: i, pageIndex, course } }}>
                              <Button className='btn-simple-add' >
                                <img src={plus} width="20px" height="20px" alt="..." />
                              </Button>
                            </Link> :
                            <Link to={{ pathname: '/admin/fullimagecontent', state: { sectionIndex: i, pageIndex, course } }}>
                              <Button className='btn-simple-add' >
                                <img src={plus} width="20px" height="20px" alt="..." />
                              </Button>
                            </Link>)))))
                }

              </div>
            } />
        </Col>);
      pageDivs.push(
        <Row key={i}>
          <Col md={100} className="section-card">
            <Card
              title={`Section ${i + 1} - ${course.sections[i].name}`} 
              content={
                <div className="outline-card">
                  {cards}
                </div>
              }
            />
          </Col>
        </Row>
      )
    }
    return (
      <div className="content">
        <Grid fluid>
          {pageDivs}
          <h3>
            <Link to='/admin/courses'>
              <Button bsStyle="info" pullRight fill>
                Publish
            </Button>
            </Link>
            <Link to='/admin/courses'>
              <Button bsStyle="info" pullRight fill>
                Preview
            </Button>
            </Link>
            <Link to='/admin/courses'>
              <Button bsStyle="info" pullRight fill>
                Save
            </Button>
            </Link>
          </h3>
        </Grid>
      </div >
    );
  }
}

export default CourseOutline;