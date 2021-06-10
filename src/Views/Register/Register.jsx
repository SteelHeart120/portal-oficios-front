import React, { useState } from 'react';
import { Button, Carousel, Col, Divider, Image, Row, Input, Space, Form, Radio } from "antd";
import { Typography } from 'antd';
import { images } from '../../assets/img/index';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

import './Register.css'
// Constantes de import
const { Title, Text } = Typography;

export default function Register() {

    return(
    <>
        <Row>
            <Col lg={12} className="app-general-col" >
                <Title>New account</Title>
                <Space />
                <Text
                    className="details-text-description">
                    Not our registered customer yet?
                </Text>
                <Space />

                <Text
                    className="details-text-description">
                    With registration with us new world of fashion, fantastic discounts
                    and much more opens to you! The whole process will not take you more than a minute!
                </Text>

                <Divider />
                <Form
                    layout="vertical"
                >
                    <Form.Item label="Name">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col lg={12} className="app-general-col" >
            <Title>New account</Title>
                <Space />
                <Text
                    className="details-text-description">
                    Not our registered customer yet?
                </Text>
                <Space />

                <Text
                    className="details-text-description">
                    With registration with us new world of fashion, fantastic discounts
                    and much more opens to you! The whole process will not take you more than a minute!
                </Text>

                <Divider />
                <Form
                    layout="vertical"
                >
                    <Form.Item label="Name">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
                
            </Col>
        </Row>
    </>
    )
}