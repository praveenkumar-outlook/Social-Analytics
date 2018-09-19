import React from "react";
import {Col, Grid, Row} from "react-bootstrap";
import "./Header";

class Header extends React.Component {
  render() {
    return (
      <div className="ui-header">
        <Grid fluid>
          <Row className="show-grid">
            <Col md={10}>
            </Col>
            <Col md={2}>
              Profile
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Header;
