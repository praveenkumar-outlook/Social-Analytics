import React from "react";
import {Grid, Row, Col, Button, Image} from "react-bootstrap";
import "./Login";
import LoginBG from "./Login-BG.png";
import LoginLogo from "./Login-Logo.png";

class Login extends React.Component {
  componentWillMount() {
    const navigateToApp = () => {
      this.props.history.push("/");
    };
    window.FB.getLoginStatus((response) => {
      if (response.status === "connected") {
        navigateToApp();
      }
    });
  }

  login = () => {
    const navigateToApp = () => {
      this.props.history.push("/");
    };
    window.FB.login((response) => {
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
            <Col md={9} className="text-center">
              <Image src={LoginBG} rounded responsive />
            </Col>
            <Col className="theme-background" md={3}></Col>
          </Row>
        </Grid>
        <Grid className="login-container">
          <Row>
            <Col md={8}></Col>
            <Col className="login-details" md={4}>
            <Image src={LoginLogo} className="login-logo" rounded responsive />
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
