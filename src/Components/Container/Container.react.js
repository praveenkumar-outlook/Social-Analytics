import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Col, Grid, Row} from "react-bootstrap";
import UserAction from "../../Action/User";
import Menu from "../Menu/Menu.react";
import Header from "../Header/Header.react";
import "./Container";

const mapStateToProps = (state) => (
  {
    user: state.user
  }
);

class Container extends Component {
  static propTypes = {
    history: PropTypes.any.isRequired,
    location: PropTypes.any.isRequired,
    user: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      userId: ""
    };
  }

  componentWillMount() {
    const navigateToLogin = () => {
      this.props.history.push("/");
    }
    window.FB.getLoginStatus((response) => {
      if (response.status !== "connected") {
        navigateToLogin();
      } else {
        const credentials = {
          userId: response.authResponse.userID,
          accessToken: response.authResponse.accessToken
        };
        UserAction.saveUserCredentials(credentials);
      }
    });
  }

  componentWillReceiveProps(props) {
    this.setState({
      userId: props.user.userId,
      accessToken: props.user.accessToken
    });
  }

  render() {
    const {location, children} = this.props;
    const {userId} = this.state;

    return (
      <div className="ui-container">
        <Grid fluid>
          <Row className="show-grid">
            <Col md={12} className="padding-0">
              {
                userId
                ? <Header />
                : <div className="ui-header"></div>
              }
            </Col>
            <Col xsHidden md={1} className="padding-left-0">
              <Menu pathname={location.pathname} />
            </Col>
            <Col xs={12} md={11} className="ui-shell">
              {
                userId
                ? children
                : ""
              }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Container));
