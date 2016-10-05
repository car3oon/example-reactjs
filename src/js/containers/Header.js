import React from "react";
import { Button, Col, Menu, Row } from 'antd';

export default class Header extends React.Component {

    render() {
        return (
            <div className="layout-top">
                <div className="layout-header">
                    <div className="container">
                        <Col sm={24} md={6}>
                            <div className="layout-logo"></div>
                        </Col>
                        <Col sm={24} md={12}>
                            <Menu theme="dark" mode="horizontal"
                                defaultSelectedKeys={['1']} style={{lineHeight: '64px'}}>
                                <Menu.Item key="1">Home</Menu.Item>
                                <Menu.Item key="2">Contact</Menu.Item>
                            </Menu>
                        </Col>
                        <Col sm={24} md={6}>
                            <div className="layout-user">
                                <Button type="primary" icon="user">Login</Button>
                            </div>
                        </Col>
                    </div>
                </div>
            </div>
        );
    }
}
