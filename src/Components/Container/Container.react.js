import React from "react";
import {connect} from "react-redux";
import UserAction from "../../Action/User";
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
    window.FB.getLoginStatus(function(response) {
      if (response.status !== "connected") {
        navigateToLogin();
      } else {
        var credentials = {
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
    return (
      <div className="ui-container">
        My Container
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Container);
