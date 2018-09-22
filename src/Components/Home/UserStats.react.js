import React, {Component} from "react";
import PropTypes from "prop-types";
import {Col, Glyphicon, Image, Jumbotron, Row} from "react-bootstrap";
import _ from "underscore";

class UserStats extends Component {
  static propTypes = {
    userProfile: PropTypes.object.isRequired,
    userStatistics: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      friends: "",
      groups: "",
      languages: "",
      likes: "",
      paymentCredits: "",
      paymentPricepoints: "",
      picture: "",
      userDetails: {}
    };
  }

  componentWillReceiveProps(props) {
    let {userStatistics, userProfile} = props;
    _.defaults(userStatistics, {
      friends: {},
      groups: [],
      languages: [],
      likes: {},
      paymentPricepoints: [],
      sports: []
    });
    const {
      friends,
      groups,
      languages,
      likes,
      paymentPricepoints,
      sports
    } = userStatistics;

    this.setState({
      friends: friends.count,
      groups: groups.length,
      languages: languages.length,
      likes: _.reduce(_.values(likes), (sum, data) => {
        return sum + data.length;
      }, 0),
      paymentCredits: paymentPricepoints.length,
      picture: userProfile.picture,
      sports: sports.length,
      userDetails: userProfile.details
    });
    if(paymentPricepoints.length) {
      const maxPoint = _.max(paymentPricepoints, (value) => {
        return parseFloat(value.user_price);
      });
      this.setState({
        paymentPricepoints: maxPoint.user_price + " " + maxPoint.local_currency
      });
    }
  }

  render() {
    const {
      friends,
      groups,
      languages,
      likes,
      paymentCredits,
      paymentPricepoints,
      picture,
      sports,
      userDetails
    } = this.state;

    return (
      <div className="ui-user-stats">
        <Jumbotron className="profile-container">
          <Row>
            <Col md={2} className="text-center">
              <Image src={picture} circle />
            </Col>
            <Col md={4} className="profile-details">
              <Col md={12}>
                <span className="profile-name">
                  {userDetails.name}
                </span>
                <a target="_blank" href={userDetails.link}>
                  <Glyphicon glyph="link"
                    className="profile-link"/>
                </a>
              </Col>
              <Col md={12}>
                <span className="profile-gender">
                  {userDetails.gender}
                </span>
              </Col>
              <Col md={12}>
                <Glyphicon glyph="calendar"
                  className="profile-detail-icon"/>
                <span className="profile-detail">
                  {userDetails.birthday}
                </span>
              </Col>
              {
                userDetails.hometown
                ? <Col md={12}>
                    <a target="_blank"
                      href={`http://maps.google.com/?q=${userDetails.hometown.name}`}>
                      <Glyphicon glyph="home"
                        className="profile-detail-icon"/>
                      <span className="profile-detail">
                        {userDetails.hometown.name}
                      </span>
                    </a>
                  </Col>
                : ""
              }
              {
                userDetails.location
                ? <Col md={12}>
                    <a target="_blank"
                      href={`http://maps.google.com/?q=${userDetails.location.name}`}>
                      <Glyphicon glyph="user"
                        className="profile-detail-icon"/>
                      <span className="profile-detail">
                        {userDetails.location.name}
                      </span>
                    </a>
                  </Col>
                : ""
              }
            </Col>
            <Col md={6} className="profile-stats">
              <Col md={12}>
                <Col md={3}>
                  <p className="stats-holder">{friends}</p>
                  <p className="stats-label">Friends</p>
                </Col>
                <Col md={3}>
                  <p className="stats-holder">{likes}</p>
                  <p className="stats-label">Likes & Interests</p>
                </Col>
                <Col md={3}>
                  <p className="stats-holder">{groups}</p>
                  <p className="stats-label">Groups</p>
                </Col>
                <Col md={3}>
                  <p className="stats-holder">{sports}</p>
                  <p className="stats-label">Sports</p>
                </Col>
              </Col>
              <Col md={12}>
                <Col md={6}>
                  <p className="stats-holder">{paymentPricepoints}</p>
                  <p className="stats-label">Payment price points</p>
                </Col>
                <Col md={3}>
                  <p className="stats-holder">{paymentCredits}</p>
                  <p className="stats-label">Total payment credits</p>
                </Col>
                <Col md={3}>
                  <p className="stats-holder">{languages}</p>
                  <p className="stats-label">Languages</p>
                </Col>
              </Col>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}

export default UserStats;
