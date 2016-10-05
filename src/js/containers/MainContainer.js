import React, {Component} from 'react';
import { Row, Col } from 'antd';

import Title from "./HeaderTitle";

export default class Main extends React.Component {

    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render () {
        return (
            <section className="container main">
                <Row>
                    <Col sm={12}>
                        <Title title={this.props.title} />
                        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
                    </Col>
                </Row>
            </section>
        )
    }
}
