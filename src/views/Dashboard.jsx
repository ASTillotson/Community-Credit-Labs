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
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
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
import course1 from "assets/img/codingdojo.JPG";
import course2 from "assets/img/jfs.png";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          {/* <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Capacity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row> */}
          <Row>
            <Col md={8}>
              <Card
                id="chartHours"
                title="Recent Courses"
                category="Sort By Date Created"
                stats={
                  <div className="see-all">
                    <Link to='/admin/courses'>
                      <Button bsStyle="info" pullRight fill type="submit" >
                        See All
                      </Button>
                    </Link>
                  </div>
                }
                content={
                  <div className="ct-chart">
                    <Grid fluid>
                      <Row>
                        <Col md={4}>
                          <Card
                            id="chartActivity"
                            title="Course1"
                            category="Published: YYYY-MM-DD"
                            stats="Active"
                            statsIcon="fa fa-check"
                          // content={
                          //   <div className="ct-chart">
                          //     <a
                          //       className="img-holder switch-trigger"
                          //     // onClick={() => {
                          //     //     this.setState({ bgImage: imagine1 });
                          //     //     this.props.handleImageClick(imagine1);
                          //     // }}
                          //     >
                          //       <img src={course1} alt="..." />
                          //     </a>
                          //   </div>
                          // }
                          />
                        </Col>

                        <Col md={4}>
                          <Card
                            id="chartActivity"
                            title="Course2"
                            category="Published: YYYY-MM-DD"
                            stats="Active"
                            statsIcon="fa fa-check"
                          // content={
                          //   <div className="ct-chart">
                          //     <a
                          //       className="img-holder switch-trigger"
                          //     // onClick={() => {
                          //     //     this.setState({ bgImage: imagine1 });
                          //     //     this.props.handleImageClick(imagine1);
                          //     // }}
                          //     >
                          //       <img src={course2} alt="..." />
                          //     </a>
                          //   </div>
                          // }
                          />
                        </Col>
                        <Col md={4}>
                          <Card
                            id="chartActivity"
                            title="Course3"
                            category="Published: YYYY-MM-DD"
                            stats="Active"
                            statsIcon="fa fa-check"
                          // content={
                          //   <div className="ct-chart">
                          //     {/* <a
                          //                             className="img-holder switch-trigger"
                          //                             // onClick={() => {
                          //                             //     this.setState({ bgImage: imagine1 });
                          //                             //     this.props.handleImageClick(imagine1);
                          //                             // }}
                          //                         >
                          //                             <img src={course1} alt="..." />
                          //                         </a> */}
                          //   </div>
                          // }
                          />
                        </Col>
                      </Row>
                    </Grid>
                  </div>
                }
              // legend={
              //   <div className="legend">
              //     <Link to='/admin/courseoutline'>
              //       <Button bsStyle="info" pullRight fill type="submit" >
              //         See All
              //     </Button>
              //     </Link>
              //   </div>
              // }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Card
                title="Recent Sign Up"
                stats={
                  <div className="see-all">
                    <Link to='/admin/table'>
                      <Button bsStyle="info" pullRight fill type="submit" >
                        See All
                      </Button>
                    </Link>
                  </div>
                }
                content={
                  <Grid fluid>
                    <Row>
                      <Col md={12}>
                        <Card
                          // title="Striped Table with Hover"
                          // category="Here is a subtitle for this table"
                          ctTableFullWidth
                          ctTableResponsive
                          content={
                            <Table striped hover>
                              <thead>
                                <tr>
                                  {thArray.map((prop, key) => {
                                    return <th key={key}>{prop}</th>;
                                  })}
                                </tr>
                              </thead>
                              <tbody>
                                {tdArray.map((prop, key) => {
                                  return (
                                    <tr key={key}>
                                      {prop.map((prop, key) => {
                                        return <td key={key}>{prop}</td>;
                                      })}
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Table>
                          }
                        />
                      </Col>
                    </Row>
                  </Grid>
                }
              />
            </Col>

            <Col md={4}>
              <Card
                title="Student Performance"
                // category="Last Campaign Performance"
                stats={
                  <div className="see-all">
                    <Link to='/admin/table'>
                      <Button bsStyle="info" pullRight fill type="submit" >
                        See All
                      </Button>
                    </Link>
                  </div>
                }
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                title="Latest Comments"
                stats={
                  <div className="see-all">
                    <Link to='/admin/table'>
                      <Button bsStyle="info" pullRight fill type="submit" >
                        See All
                      </Button>
                    </Link>
                  </div>
                }
                content={
                  <Grid fluid>
                    <Row>
                      <Col md={12}>
                        <Card
                          // title="Striped Table with Hover"
                          // category="Here is a subtitle for this table"
                          ctTableFullWidth
                          ctTableResponsive
                          content={
                            <Table striped hover>
                              <thead>
                                <tr>
                                  {thArray.map((prop, key) => {
                                    return <th key={key}>{prop}</th>;
                                  })}
                                </tr>
                              </thead>
                              <tbody>
                                {tdArray.map((prop, key) => {
                                  return (
                                    <tr key={key}>
                                      {prop.map((prop, key) => {
                                        return <td key={key}>{prop}</td>;
                                      })}
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Table>
                          }
                        />
                      </Col>
                    </Row>
                  </Grid>
                }
              />
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default Dashboard;
