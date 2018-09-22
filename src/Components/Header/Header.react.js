import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Col, Grid, Image, Label, Row} from "react-bootstrap";
import _ from "lodash";
import UserAction from "../../Action/User";
import "./Header";

const mapStateToProps = (state) => (
  {
    user: state.user
  }
);

class Header extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      picture: ""
    };
  }

  componentDidMount() {
    UserAction.getUserProfile(this.props.user.userId);
  }

  componentWillReceiveProps(props) {
    const {userProfile} = props.user;
    _.defaults(userProfile, {
      details: {},
      picture: ""
    });

    this.setState({
      name: userProfile.details.name,
      picture: userProfile.picture
    });
  }

  render() {
    const {picture, name} = this.state;

    return (
      <div className="ui-header">
        <Grid fluid>
          <Row className="show-grid">
            <Col md={10}>
            </Col>
            <Col md={2} className="text-right">
              <div>
                <Image
                  className="profile-picture"
                  src={picture}
                  rounded
                />
                <Label bsStyle="success" className="profile-name">
                  {name}
                </Label>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);
