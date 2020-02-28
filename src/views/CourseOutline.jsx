/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

//import PopUp from "components/PopUp.jsx";

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
            <Col md={100}>
              <Card
                title="Section 1: Introduction"
                content={
                  <div className="ct-chart">

                    <Col lg={2} sm={2}>
                      <Button onClick={(e) => this.setState({ isOpen: true })}>
                        <Card
                          title="Page 1"
                          stats="Add Images"
                          statsIcon="fa fa-plus" />
                      </Button>

                      <PopUp isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                        Add Content
                      </PopUp>
                    </Col>

                    <Col lg={2} sm={2}>
                      <Button onClick={(e) => this.setState({ isOpen: true })}>
                        <Card
                          title="Page 2"
                          stats="Add Images"
                          statsIcon="fa fa-plus" />
                      </Button>

                      <PopUp isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                        Add Content
                      </PopUp>
                    </Col>

                    <Col lg={2} sm={2}>
                      <Button onClick={(e) => this.setState({ isOpen: true })}>
                        <Card
                          title="Page 3"
                          stats="Add Images"
                          statsIcon="fa fa-plus" />
                      </Button>

                      <PopUp isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                        Add Content
                      </PopUp>
                    </Col>

                    <Col lg={2} sm={2}>
                      <Button onClick={(e) => this.setState({ isOpen: true })}>
                        <Card
                          title="Page 4"
                          stats="Add Images"
                          statsIcon="fa fa-plus" />
                      </Button>

                      <PopUp isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                        Add Content
                      </PopUp>
                    </Col>


                  </div>
                }
              />
            </Col>
          </Row>


          <Row>
            <Col md={100}>
              <Card
                title="Section 2: Preparation"
                content={
                  <div className="ct-chart">
                    <Col lg={2} sm={2}>
                      <StatsCard
                        statsText="Page 1"
                        statsIconText="Add Image"
                      />
                    </Col>

                    <Col lg={2} sm={2}>
                      <StatsCard
                        statsText="Page 2"
                        statsIconText="Add Text"
                      />
                    </Col>

                    <Col lg={2} sm={2}>
                      <StatsCard
                        statsText="Page 3"
                        statsIconText="Add Text"
                      />
                    </Col>

                    <Col lg={2} sm={2}>
                      <StatsCard
                        statsText="Page 4"
                        statsIconText="Add Video"
                      />
                    </Col>

                    <Col lg={2} sm={2}>

                      <Button bsStyle="info"  >
                        + Add Page
                      </Button>
                    </Col>

                  </div>
                }
              />
            </Col>
          </Row>


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