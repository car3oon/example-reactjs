import React from "react";
import { Row, Col } from 'antd';

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div className="container">
          <Row>
              <Col sm={12}>
                  <Title title={this.props.title} />
                  <input value={this.props.title} onChange={this.handleChange.bind(this)} />
              </Col>
          </Row>
      </div>
    );
  }
}
