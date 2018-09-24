import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {Checkbox, Col, Row} from "react-bootstrap";
import _ from "underscore";
import * as d3 from "d3";
import $ from "jquery";

class PricePoints extends Component {
  static propTypes = {
    userStatistics: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      pricePoints: []
    };
  }

  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
  }

  componentWillReceiveProps(props) {
    let {paymentPricepoints} = props.userStatistics;
    paymentPricepoints = _.map(paymentPricepoints, (point) => {
      return {
        ...point,
        userPrice: parseFloat(point.user_price)
      }
    });
    this.setState({
      pricePoints: paymentPricepoints
    });
    if (paymentPricepoints && paymentPricepoints.length) {
      this.renderPricePoints(paymentPricepoints);
    }
  }

  renderPricePoints = (points) => {
    const width = this.el.find("#payment-price-points").width();
    const x = d3.scaleBand()
      .range([50, width])
      .domain(_.map(points, (point) => { return point.credits; }));
    const y = d3.scaleLinear()
      .range([350, 50])
      .domain([0, d3.max(points, (point) => { return point.userPrice; }) + 50]);
    const graph = d3.select("#payment-price-points").select(".graph");
    const axis = d3.select("#payment-price-points").select(".axis");
    const line = d3.line()
      .x((point) => { return x(point.credits); })
      .y((point) => { return y(point.userPrice); })

    // Position graph
    graph.attr("transform", `translate(${x.bandwidth() / 2},0)`)

    // Render graph
    graph.select(".line").selectAll("path").remove();
    graph.select(".line").append("path")
      .data([points])
      .attr("class", "price-points-line")
      .attr("d", line);

    // Render PricePoints
    graph.select(".points").selectAll("circle").exit().remove();
    graph.select(".points").selectAll("circle")
      .data(points)
      .enter()
      .append("circle")
      .attr("class", "price-point")
      .attr("cx", (point) => { return x(point.credits); })
      .attr("cy", (point) => { return y(point.userPrice); });

    // Render axis
    axis.selectAll("g").remove();
    axis.append("g")
      .attr("transform", `translate(0,350)`)
      .call(d3.axisBottom(x));
    axis.append("g")
      .attr("transform", `translate(50,0)`)
      .call(d3.axisLeft(y));
  }

  renderXGrid = (event) => {
    const grid = d3.select("#payment-price-points").select(".grid");
    const xGrid = grid.select(".x-grid");
    xGrid.selectAll("line").remove();
    if(event.target.checked) {
      const {pricePoints} = this.state;
      const width = this.el.find("#payment-price-points").width();
      const x = d3.scaleBand()
        .range([50, width])
        .domain(_.map(pricePoints, (point) => { return point.credits; }));
      xGrid.attr("transform", `translate(${x.bandwidth() / 2},0)`)
      xGrid.selectAll("line")
        .data(pricePoints)
        .enter()
        .append("line")
        .attr("class", "price-grid-line")
        .attr("x1", (point) => { return x(point.credits); })
        .attr("x2", (point) => { return x(point.credits); })
        .attr("y1", "50")
        .attr("y2", "350");
    }
  }

  renderYGrid = (event) => {
    const grid = d3.select("#payment-price-points").select(".grid");
    const yGrid = grid.select(".y-grid");
    yGrid.selectAll("line").remove();
    if(event.target.checked) {
      const {pricePoints} = this.state;
      const width = this.el.find("#payment-price-points").width();
      const y = d3.scaleLinear()
        .range([350, 50])
        .domain([0, d3.max(pricePoints, (point) => { return point.userPrice; }) + 50]);
      yGrid.selectAll("line")
        .data(pricePoints)
        .enter()
        .append("line")
        .attr("class", "price-grid-line")
        .attr("x1", "50")
        .attr("x2", width)
        .attr("y1", (point) => { return y(point.userPrice); })
        .attr("y2", (point) => { return y(point.userPrice); });
    }
  }

  render() {
    return (
      <div className="ui-price-points">
        <Row>
          <Col md={9}>
            <Col md={12}>
              <h3>Credits Vs Payment points received(mobile)</h3>
            </Col>
            <Col md={12}>
              <svg id="payment-price-points" height="400" width="100%">
                <g className="axis" />
                <g className="grid">
                  <g className="x-grid" />
                  <g className="y-grid" />
                </g>
                <g className="graph">
                  <g className="line" />
                  <g className="points" />
                </g>
              </svg>
            </Col>
          </Col>
          <Col md={3}>
            <Col md={12}>
              <Checkbox onChange={event => this.renderXGrid(event)}>
                Enable Grid (x-axis)
              </Checkbox>
              <Checkbox onChange={event => this.renderYGrid(event)}>
                Enable Grid (y-axis)
              </Checkbox>
            </Col>
            <Col md={12}>
              <svg height="75" width="100%">
                <g>
                  <circle className="price-point" cx="10" cy="20" />
                  <text className="price-label" x="25" y="25">
                    Credits
                  </text>
                </g>
                <g>
                  <rect className="price-point-legend" x="0" y="50" />
                  <text className="price-label" x="25" y="55">
                    Payment points received
                  </text>
                </g>
              </svg>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PricePoints;
