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
import { Grid, Row, Col, Table } from "react-bootstrap";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import { Link } from 'react-router-dom';
import Button from "components/CustomButton/CustomButton.jsx";
import Tabs from "react-bootstrap/lib/Tabs";
import Tab from "react-bootstrap/lib/Tab";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

class TableList extends Component {
  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };
  render() {
    return (
      <div className="content user-content">
        {/* <Link to='/admin/addcourse'> */}
        <Button bsStyle="info" pullRight fill type="submit">
          + New User
          </Button>
        {/* </Link> */}
        <div className="user-tab">
          <Tabs defaultActiveKey="Courses">
            <Tab eventKey="Courses" title="External Users">
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
              <Button bsStyle="info" pullRight fill>
                Remove User
              </Button>
            </Tab>

            <Tab eventKey="Internal" title="Internal Users">

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

                    {/* <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
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
            </Col> */}
                  </Col>
                </Row>
              </Grid>
              <Button bsStyle="info" pullRight fill>
                Remove User
              </Button>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default TableList;
