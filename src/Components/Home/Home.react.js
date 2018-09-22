import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Col, Grid, Jumbotron, Nav, NavItem, Row} from "react-bootstrap";
import _ from "underscore";
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
      tabs: [{
        key: "/facebook",
        name: "Overview",
        url: "#/facebook"
      }, {
        key: "/facebook/payment-price-points",
        name: "Payment Price points",
        url: "#/facebook/payment-price-points"
      }]
    };
  }

  componentDidMount() {
    UserAction.getUserStatistics(this.props.user.userId);
  }

  render() {
    const {pathname} = this.props.location;
    const {userStatistics, userProfile} = this.props.user;
    const {tabs} = this.state;

    return (
      <div className="ui-home">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Nav
                bsStyle="tabs"
                activeKey={pathname}>
                {
                  _.map(tabs, (tab) => {
                    return (
                      <NavItem
                        key={tab.key}
                        eventKey={tab.key}
                        href={tab.url}>
                        {tab.name}
                      </NavItem>
                    );
                  })
                }
              </Nav>
            </Col>
            <Col md={12} className="home-container">
              <Switch>
                <Route exact path="/facebook/payment-price-points"
                  render={() =>
                    <div>Payment price points</div>
                  }
                />
                <Route exact path="/facebook"
                  render={() =>
                    <UserStats
                      userProfile={userProfile}
                      userStatistics={userStatistics}
                    />
                  }
                />
              </Switch>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
