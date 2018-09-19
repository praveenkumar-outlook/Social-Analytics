import React from "react";
import {connect} from "react-redux";
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

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ""
    };
  }

  componentWillMount() {
    const navigateToLogin = () => {
      this.props.history.push("/login");
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
    const {location} = this.props;
    
    return (
      <div className="ui-container">
        <Grid fluid>
          <Row className="show-grid">
            <Col md={12} className="padding-0">
              <Header />
            </Col>
            <Col xsHidden md={1} className="padding-left-0">
              <Menu pathname={location.pathname} />
            </Col>
            <Col xs={12} md={11}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Container);
