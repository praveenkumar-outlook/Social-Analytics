import React from "react";
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

  render() {
    return (
      <div className="ui-login">
        Login Page
      </div>
    );
  }
}

export default Login;
