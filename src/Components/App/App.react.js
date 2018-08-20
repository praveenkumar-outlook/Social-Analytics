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
        {this.props.children}
      </div>
    );
  }
}

export default App;
