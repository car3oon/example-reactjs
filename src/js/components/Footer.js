import React from "react";
import { Row, Col } from 'antd';

export default class Footer extends React.Component {

  render() {
    return (
        <footer className="container">
            <Row>
                <Col sm={12}>
                    To jest footer
                </Col>
            </Row>
        </footer>
    );
  }
}
