import React, { useState } from "react";
import { Row, Col, Input, Dropdown, Menu } from 'antd';
import { Typography } from 'antd';
import { Pagination } from 'antd';
import { Card } from 'antd';
import { images } from '../../assets/img/index';
import { Button, Space, Image } from 'antd';
import { ShoppingCartOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import {
    Link
  } from "react-router-dom";
import './LandingPage.css';

const { Title } = Typography;
const { Meta } = Card;
const { Search } = Input;

const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

function LandingPage() {

    return(
        <>
            <Row>
                <Col>
                    <div className="box">
                        <Title>Ladies</Title>
                        <p>In our Ladies department we offer wide selection of the best 
                            products we have found and carefully selected worldwide.</p>
                    </div>
                </Col>
            </Row>
            <Row gutter={50}>
                <Col lg={24} className="box d-flex">
                    <Col lg={8}> 
                        <Search
                            enterButton="Buscar"
                            size="small"
                            />
                    </Col>
                    <Row >
                        <Col lg={8}  >
                            <Space>
                                <strong>Show</strong>
                                <Button type="primary" size="small">
                                    12
                                </Button>
                                <Button type="primary" size="small">
                                    24
                                </Button>
                                <Button type="primary" size="small">
                                    All
                                </Button>
                                <p>products</p>
                            </Space>
                        </Col>
                    </Row>
                    <Row justify="center" >
                        <Col lg={8}>
                            <Dropdown overlay={menu}>
                                <Button>
                                    Sort by <DownOutlined />
                                </Button>
                            </Dropdown>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row justify="space-between" className="pb-3">
                <Col className="pb-3">
                    <Card
                            hoverable
                            style={{ width: 200 }}
                            cover={<img alt="example" src={images.plomeria} />}
                        >
                            <Link href="https://ant.design" target="_blank">
                                <Title level={5} >Fur coat with very but very very long name</Title>
                            </Link>
                            <Row justify="center" align="middle" className="pb-3">
                                <Meta description="$143.00" />
                            </Row>

                            <Row justify="center" align="middle">
                                <Button type="secundary" size="small" icon={<ShoppingCartOutlined />}>
                                    <Link to="/details">Details</Link>
                                </Button> 
                            </Row>
                    </Card>
                </Col>
                <Col>
                    <Card
                            hoverable
                            style={{ width: 200 }}
                            cover={<Image
                                width={200}
                                preview={false}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                              />}
                        >
                            <Link href="https://ant.design" target="_blank">
                                <Title level={5} >Fur coat with very but very very long name</Title>
                            </Link>
                            <Row justify="center" align="middle" className="pb-3">
                                <Meta description="$143.00" />
                            </Row>

                            <Row justify="center" align="middle">
                                <Button type="secundary" size="small" icon={<ShoppingCartOutlined />}>
                                <Link to="/details">Details</Link>
                                </Button> 
                            </Row>
                    </Card>
                    
                </Col>
                <Col>
                    <Card
                            hoverable
                            style={{ width: 200 }}
                            cover={<Image
                                width={200}
                                preview={false}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                              />}
                        >
                            <Link href="https://ant.design" target="_blank">
                                <Title level={5} >Fur coat with very but very very long name</Title>
                            </Link>
                            <Row justify="center" align="middle" className="pb-3">
                                <Meta description="$143.00" />
                            </Row>

                            <Row justify="center" align="middle">
                                <Button type="secundary" size="small" icon={<ShoppingCartOutlined />}>
                                <Link to="/details">Details</Link>
                                </Button> 
                            </Row>                
                    </Card>
                    
                </Col>
                <Col>
                    <Card
                            hoverable
                            style={{ width: 200 }}
                            cover={<Image
                                width={200}
                                preview={false}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                              />}
                        >
                            <Link href="https://ant.design" target="_blank">
                                <Title level={5} >Fur coat with very but very very long name</Title>
                            </Link>
                            <Row justify="center" align="middle" className="pb-3">
                                <Meta description="$143.00" />
                            </Row>

                            <Row justify="center" align="middle">
                                <Button type="secundary" size="small" icon={<ShoppingCartOutlined />}>
                                <Link to="/details">Details</Link>
                                </Button> 
                            </Row>
                                
                    </Card>                  
                </Col>
                <Col>
                    <Card
                            hoverable
                            style={{ width: 200 }}
                            cover={<Image
                                width={200}
                                preview={false}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                              />}
                        >
                            <Link href="https://ant.design" target="_blank">
                                <Title level={5} >Fur coat with very but very very long name</Title>
                            </Link>
                            <Row justify="center" align="middle" className="pb-3">
                                <Meta description="$143.00" />
                            </Row>

                            <Row justify="center" align="middle">
                                <Button type="secundary" size="small" icon={<ShoppingCartOutlined />}>
                                    <Link to="/details">Details</Link>
                                </Button> 
                            </Row>
                                
                    </Card>                  
                </Col>
            </Row>
            
            <Row justify="center" align="middle">
                <Col>
                    <Pagination defaultCurrent={1} total={50} />
                </Col>
            </Row>
        </>
    )
}

export default LandingPage

