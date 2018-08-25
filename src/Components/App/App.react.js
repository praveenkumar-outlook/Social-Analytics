import React from "react";
import "./App";

class App extends React.Component {
  componentWillMount() {
    const navigateToLogin = () => {
      this.props.history.push("/login");
    }
    window.FB.getLoginStatus(function(response) {
      if (response.status !== "connected") {
        navigateToLogin();
      }
    });
  }

  render() {
    return (
      <div className="app">
        My App
        <div className="fb-login-button"
          data-max-rows="1" data-size="large"
          data-button-type="login_with" data-show-faces="false"
          data-auto-logout-link="false" data-use-continue-as="true"
          data-auto-logout-link="true">
        </div>
      </div>
    );
  }
}

export default App;
