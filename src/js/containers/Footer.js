import React from "react";
import { Row, Col } from 'antd';

export default class Footer extends React.Component {

  render() {
    return (
        <footer className="container">
            <Row>
                <Col sm={24}>
                    Copyright &copy; 2016 car3oon
                </Col>
            </Row>
        </footer>
    );
  }
}
