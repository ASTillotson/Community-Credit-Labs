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
    const locState = this.props.location.state;
    const pages = [];

    for (let i = 0; i < locState.length; i++) {
      let options = locState[i];
      const cards = options.map((o, idx) =>
        <Col md={4}>
          <Card
            category={`Page ${idx + 1}`}
            stats={o}
            content={
              <div className="outline-content">
                {o === "FULLSCREEN VIDEO" ?
                  <Link to='/admin/fullvideocontent'>
                    <Button className='btn-simple-add' >
                      <img src={plus} width="20px" height="20px" alt="..." />
                    </Button>
                  </Link>
                  : (o === "VIDEO WITH CAPTION" ?
                    <Link to='/admin/videocapcontent'>
                      <Button className='btn-simple-add' >
                        <img src={plus} width="20px" height="20px" alt="..." />
                      </Button>
                    </Link>
                    
                    : (o === "IMAGE WITH TEXT" ?
                      <Link to='/admin/imagecapcontent'>
                        <Button className='btn-simple-add' >
                          <img src={plus} width="20px" height="20px" alt="..." />
                        </Button>
                      </Link>
                      : (o === "QUIZ CONTENT" ?
                      <Link to='/admin/quizcontent'>
                        <Button className='btn-simple-add' >
                          <img src={plus} width="20px" height="20px" alt="..." />
                        </Button>
                      </Link>
                      : (o === "TEXT" ?
                        <Link to='/admin/fulltextcontent'>
                          <Button className='btn-simple-add' >
                            <img src={plus} width="20px" height="20px" alt="..." />
                          </Button>
                        </Link> :
                        <Link to='/admin/fullimagecontent'>
                          <Button className='btn-simple-add' >
                            <img src={plus} width="20px" height="20px" alt="..." />
                          </Button>
                        </Link>))))
                }
                
              </div>
            } />
        </Col>);
      pages.push(
        <Row>
          <Col md={100} className="section-card">
            <Card
              title={`Section ${i + 1}: Introduction`}
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
          {pages}
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