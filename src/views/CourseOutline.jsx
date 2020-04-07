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
                <Link to='/admin/fullvideocontent'>
                  <Button className='btn-simple-add' >
                    <img src={plus} width="20px" height="20px" alt="..." />
                  </Button>
                </Link>
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