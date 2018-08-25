import React from "react";
import {Grid, Row, Col} from "react-bootstrap";
import "./Login";

class Login extends React.Component {
  componentWillMount() {
    const navigateToApp = () => {
      this.props.history.push("/");
    }
    window.FB.getLoginStatus(function(response) {
      if (response.status === "connected") {
        navigateToApp();
      }
    });
  }

  checkLoginState = () => {
    window.FB.getLoginStatus(function(response) {
      console.log('----------->>>>>>>>.', response);
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
              <div className="fb-login-button"
                onClick={this.checkLoginState}
                data-max-rows="1" data-size="large"
                data-button-type="login_with" data-show-faces="false">
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;
