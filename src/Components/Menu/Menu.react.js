import React, {Component} from "react";
import PropTypes from "prop-types";
import {Col, Glyphicon, Nav, Navbar, NavItem, Row} from "react-bootstrap";
import "./Menu";

class Menu extends Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      pages: [{
        icon: "home",
        key: "/facebook",
        name: "Home",
        url: "#/facebook"
      }, {
        icon: "menu-hamburger",
        key: "/facebook/activity",
        name: "Activity",
        url: "#/facebook/activity"
      }],
      pageIndex: ""
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      pageIndex: new RegExp("/facebook/activity").test(props.pathname)
        ? "/facebook/activity" : "/facebook"
    });
  }

  render() {
    const {pages, pageIndex} = this.state;

    return (
      <div className="ui-menu">
        <Nav bsStyle="pills" activeKey={pageIndex} stacked>
          {
            _.map(pages, (page) => {
              return (
                <NavItem
                  key={page.key}
                  eventKey={page.key}
                  href={page.url}>
                  <Row>
                    <Col md={12} className="text-center">
                      <Glyphicon glyph={page.icon} />
                    </Col>
                    <Col md={12} className="text-center">
                      {page.name}
                    </Col>
                  </Row>
                </NavItem>
              );
            })
          }
        </Nav>
      </div>
    );
  }
}

export default Menu;
