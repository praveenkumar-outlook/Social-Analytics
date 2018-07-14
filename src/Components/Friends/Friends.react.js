import React from "react";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import FriendsActions from "../../Actions/Friends";

const mapStateToProps = (state) => (
  {
    friends: state.friends
  }
);

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      friends: props.friends.friends
    });
  }

  componentDidMount() {
    FriendsActions.getAllFriends();
  }

  render() {
    return (
      <div>
        Friends Page
      </div>
    );
  }
}

export default connect(mapStateToProps)(Friends);
