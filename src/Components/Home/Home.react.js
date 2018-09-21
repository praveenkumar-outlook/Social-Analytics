import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Col, Grid, Jumbotron, Nav, NavItem, Row} from "react-bootstrap";
import UserAction from "../../Action/User";
import UserStats from "./UserStats.react";
import "./Home";

const mapStateToProps = (state) => (
  {
    user: state.user
  }
);

class Home extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      tabIndex: "overview"
    };
  }

  componentDidMount() {
    UserAction.getUserStatistics(this.props.user.userId);
  }

  handleTabSelect = (tabIndex) => {
    this.setState({
      tabIndex: tabIndex
    });
  }

  render() {
    const {tabIndex} = this.state;

    return (
      <div className="ui-home">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Nav bsStyle="tabs"
                activeKey={tabIndex}
                onSelect={id => this.handleTabSelect(id)}>
                <NavItem eventKey="overview">
                  Overview
                </NavItem>
                <NavItem eventKey="tab-2">
                  Tab-2
                </NavItem>
                <NavItem eventKey="tab-3">
                  Tab-3
                </NavItem>
              </Nav>
            </Col>
            <Col md={12}>
              <UserStats />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
