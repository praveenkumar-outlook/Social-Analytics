import React from "react";
import {Grid, Row, Col, Button} from "react-bootstrap";
import "./Login";

class Login extends React.Component {
  componentWillMount() {
    const navigateToApp = () => {
      this.props.history.push("/");
    };
    window.FB.getLoginStatus(function(response) {
      if (response.status === "connected") {
        navigateToApp();
      }
    });
  }

  login = () => {
    const navigateToApp = () => {
      this.props.history.push("/");
    };
    window.FB.login(function(response) {
      if (response.status === "connected") {
        navigateToApp();
      }
    });
  }

  render() {
    return (
      <div className="ui-login">
        <Grid fluid={true} className="page-container">
          <Row>
            <Col md={9}>
              <div className="image-container"></div>
            </Col>
            <Col className="theme-background" md={3}></Col>
          </Row>
        </Grid>
        <Grid className="login-container">
          <Row>
            <Col md={8}></Col>
            <Col className="login-details" md={4}>
              <div className="login-logo"></div>
              <Button className="login-button"
                onClick={this.login}
                bsStyle="primary" bsSize="large" block>
                Login with Facebook
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;
