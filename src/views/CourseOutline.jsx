import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { Link } from 'react-router-dom';
//import Dialog from "components/dialog.jsx";
import template1 from "assets/img/page1.png";
import template2 from "assets/img/page2.png";
import template3 from "assets/img/page3.png";
import plus from "assets/img/plus.png";


import PopUp from "components/PopUp/PopUp.jsx";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
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

class CourseOutline extends Component {
  // createLegend(json) {
  //   var legend = [];
  //   for (var i = 0; i < json["names"].length; i++) {
  //     var type = "fa fa-circle text-" + json["types"][i];
  //     legend.push(<i className={type} key={i} />);
  //     legend.push(" ");
  //     legend.push(json["names"][i]);
  //   }
  //   return legend;
  // }
  state = {
    isOpen: false
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>

          <Row>
            <Col md={100} className="section-card">
              <Card
                title="Section 1: Introduction"
                content={
                  <div className="outline-card">
                    <Col md={4}>
                      <Card
                        category="Page 1"
                        stats="Fullscreen Video "
                        content={
                          <div className="outline-content">
                            {/* <img src={template1} width="100%" alt="..." /> */}
                            <Link to='/admin/coursecontent'>
                              <Button className='btn-simple-add' >
                                <img src={plus} width="20px" height="20px" alt="..." />
                              </Button>
                            </Link>
                          </div>
                        } />
                    </Col>


                    <Col md={4}>
                      <Card
                        category="Page 2"
                        stats="Fullscreen Video "
                        content={
                          <div className="outline-content">
                            {/* <img src={template2} width="100%" alt="..." /> */}
                            <Link to='/admin/coursecontent'>
                              <Button className='btn-simple-add' >
                                <img src={plus} width="20px" height="20px" alt="..." />
                              </Button>
                            </Link>
                          </div>
                        } />
                    </Col>




                    <Col md={4}>
                      <Card
                        category="Page 3"
                        stats="Fullscreen Video "
                        content={
                          <div className="outline-content">
                            {/* <img src={template3} width="100%" alt="..." /> */}
                            <Link to='/admin/coursecontent'>
                              <Button className='btn-simple-add' >
                                <img src={plus} width="20px" height="20px" alt="..." />
                              </Button>
                            </Link>
                          </div>
                        } />
                    </Col>

                    <Col md={4}>
                      <Card
                        category="Page 4"
                        stats="Fullscreen Video"

                        content={
                          <div className="outline-content">
                            <Link to='/admin/coursecontent'>
                              <Button className='btn-simple-add' >
                                <img src={plus} width="20px" height="20px" alt="..." />
                              </Button>
                            </Link>
                          </div>
                        } />
                    </Col>




                    {/* Save for later button dialog */}
                    {/* <Col lg={2} sm={2}>
          <Button onClick={(e) => this.setState({ isOpen: true })}>
            <Card
              title="Page 4"
              stats="Add Images"
              statsIcon="fa fa-plus" />
          </Button>

          <PopUp isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
            Add Content
            </PopUp>
        </Col> */}


                  </div>
                }
              />
            </Col>
          </Row>


          <Row>
            <Col md={100} className="section-card">
              <Card
                title="Section 2: Preparation"
                content={
                  <div className="outline-card">

                    <Col md={4}>
                      <Card
                        category="Page 5"
                        stats="Fullscreen Video "

                        content={
                          <div className="outline-content">
                            <Link to='/admin/coursecontent'>
                              <Button className='btn-simple-add' >
                                <img src={plus} width="20px" height="20px" alt="..." />
                              </Button>
                            </Link>
                          </div>
                        } />
                    </Col>


                    <Col md={4}>
                      <Card
                        category="Page 6"
                        stats="Image with text "

                        content={
                          <div className="outline-content">
                            <Link to='/admin/coursecontent'>
                              <Button className='btn-simple-add' >
                                <img src={plus} width="20px" height="20px" alt="..." />
                              </Button>
                            </Link>
                          </div>
                        } />
                    </Col>

                    <Col md={4}>
                      <Card
                        category="Page 7"
                        stats="Full Video"

                        content={
                          <div className="outline-content">
                            <Link to='/admin/coursecontent'>
                              <Button className='btn-simple-add' >
                                <img src={plus} width="20px" height="20px" alt="..." />
                              </Button>
                            </Link>
                          </div>
                        } />
                    </Col>



                  </div>
                }
              />
            </Col>
          </Row>

          <h3>
            <Button bsStyle="info" pullRight fill>
              Publish
            </Button>
            <Button bsStyle="info" pullRight fill>
              Preview
            </Button>
            <Button bsStyle="info" pullRight fill>
              Save
            </Button>

          </h3>


          {/* <Row>
  <Col md={6}>
    <Card
      id="chartActivity"
      title="2014 Sales"
      category="All products including Taxes"
      stats="Data information certified"
      statsIcon="fa fa-check"
      content={
        <div className="ct-chart">
          <ChartistGraph
            data={dataBar}
            type="Bar"
            options={optionsBar}
            responsiveOptions={responsiveBar}
          />
        </div>
      }
      legend={
        <div className="legend">{this.createLegend(legendBar)}</div>
      }
    />
  </Col>

  <Col md={6}>
    <Card
      title="Tasks"
      category="Backend development"
      stats="Updated 3 minutes ago"
      statsIcon="fa fa-history"
      content={
        <div className="table-full-width">
          <table className="table">
            <Tasks />
          </table>
        </div>
      }
    />
  </Col>
</Row> */}
        </Grid>


      </div >
    );
  }
}

export default CourseOutline;