import React, {Component} from "react";
import PropTypes from "prop-types";
import {Col, Glyphicon, Nav, Navbar, NavItem, Row} from "react-bootstrap";
import "./Menu";

class Menu extends Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired
  };

  render() {
    const {pathname} = this.props;
    
    return (
      <div className="ui-menu">
        <Nav bsStyle="pills" activeKey={pathname} stacked>
          <NavItem eventKey="/" href="#/">
            <Row>
              <Col md={12} className="text-center">
                <Glyphicon glyph="home" />
              </Col>
              <Col md={12} className="text-center">
                Home
              </Col>
            </Row>
          </NavItem>
          <NavItem eventKey="/activity" href="#/activity">
            <Row>
              <Col md={12} className="text-center">
                <Glyphicon glyph="menu-hamburger" />
              </Col>
              <Col md={12} className="text-center">
                Activity
              </Col>
            </Row>
          </NavItem>
          <NavItem>
            <Row>
              <Col md={12} className="text-center">
                <Glyphicon glyph="stats" />
              </Col>
              <Col md={12} className="text-center">
                Graph
              </Col>
            </Row>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Menu;
