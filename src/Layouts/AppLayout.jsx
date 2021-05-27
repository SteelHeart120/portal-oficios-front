import React, {Component, useState } from "react";
import { Layout, Menu, Image, Input , Breadcrumb, Row, Col , Space, Divider } from 'antd';
import { images } from '../assets/img/index';
import { AppHeader } from '../components/Headers/Header';
import { AppFooter } from '../components/Footers/Footer';
import { Typography } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

import './styles.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Title, Text   } = Typography;
const { Search } = Input;
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });

export default function AppLayout(props) {
    

    return(
        <>
            <Layout>
                <div className="container">
                    <AppHeader>
                        <div className="logo">
                            <Image
                                preview={false}
                                width={120}
                                src={images.logo}
                            />            
                        </div>
                        <Menu style={{fontWeight: '700', color:'#555',}} defaultOpenKeys={['sub1']} mode="horizontal">
                        
                                <Menu.Item select key="sub1">Home</Menu.Item> 
                                <SubMenu key="sub2" title="Men">
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title="Ladies">
                                    <Menu.Item key="5">option1</Menu.Item>
                                    <Menu.Item key="6">option2</Menu.Item>
                                    <Menu.Item key="7">option3</Menu.Item>
                                    <Menu.Item key="8">option4</Menu.Item>
                                </SubMenu>
                        </Menu>
                    </AppHeader>
                    <Content className="AppLayout-Breadcrumb">
                        <Breadcrumb style={{ margin: '16px 0', backgroundColor: 'white', padding: '0.5rem 1rem'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Ladies</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                            <Sider className="site-layout-background" width={200}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub3']}
                                    onSelect={() => {}}
                                    style={{ height: '100%' }}
                                    selectable={false}
                                    inlineCollapsed={false}
                                    openKeys={['sub3']}
                                >
                                    {/* <SubMenu key="sub3" title="Ladies">
                                        <Menu.Item key="5">option1</Menu.Item>
                                        <Menu.Item key="6">option2</Menu.Item>
                                        <Menu.Item key="7">option3</Menu.Item>
                                        <Menu.Item key="8">option4</Menu.Item>
                                    </SubMenu> */}
                                    <Menu.ItemGroup key="g1" title="MEN">
                                        <Menu.Item key="1">T-shirts</Menu.Item>
                                        <Menu.Item key="2">Pants</Menu.Item>
                                    </Menu.ItemGroup>
                                    <Menu.ItemGroup key="g2" title="LADIES">
                                        <Menu.Item key="3">T-shirts</Menu.Item>
                                        <Menu.Item key="4">Pants</Menu.Item>
                                    </Menu.ItemGroup>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>{props.children}</Content>
                        </Layout>
                    </Content>
                    <AppFooter >
                        <Row gutter={32}>
                            <Col span={6} >
                                <Title level={4}>
                                    Pages
                                </Title>
                                <div className="d-flex flex-column">
                                    <Text type="secondary">About us</Text>
                                    <Text type="secondary">Terms and conditions</Text>
                                    <Text type="secondary">FAQ</Text>
                                    <Text type="secondary">Contact us</Text>
                                </div>
                                <Divider />

                                <Title level={4}>
                                    User section
                                </Title>
                                <div className="d-flex flex-column">
                                    <Text type="secondary">Login</Text>
                                    <Text type="secondary">Register</Text>
                                </div>
                            </Col>
                            <Col span={6} >
                                <Title level={4}>
                                    Top Categories
                                </Title>
                                <Title level={5}>
                                    Men
                                </Title>
                                <div className="d-flex flex-column">
                                    <Text type="secondary">T-shirt</Text>
                                    <Text type="secondary">Shirt</Text>
                                    <Text type="secondary">Accesories</Text>
                                </div>
                                <Title level={5}>
                                    Women
                                </Title>
                                <div className="d-flex flex-column">
                                    <Text type="secondary">T-shirt</Text>
                                    <Text type="secondary">Shirt</Text>
                                    <Text type="secondary">Accesories</Text>
                                </div>
                            </Col>
                            <Col span={6} >
                                <Title level={4}>
                                    Where to find us
                                </Title>
                                <div className="d-flex flex-column">
                                    <Text type="secondary">Obaju Ltd.</Text>
                                    <Text type="secondary">13/25 New Avenue</Text>
                                    <Text type="secondary">New Heaven</Text>
                                    <Text type="secondary">45Y 73J</Text>
                                    <Text type="secondary">England</Text>
                                    <Text type="secondary">Great Britain</Text>
                                </div>
                            </Col>
                            <Col span={6} >
                                <Title level={4}>
                                    Get the news
                                </Title>
                                <div className="d-flex flex-column">
                                    <Text type="secondary">Pellentesque habitant morbi tristique senectus
                                     et netus et malesuada fames ac turpis egestas.</Text>
                                    <Search
                                        enterButton="Subscribe!"
                                        size="small"
                                        />
                                        
                                </div>
                                <Divider />
                                <Title level={4}>
                                    Stay in touch
                                </Title>
                                <div className="icons-list">
                                    <Space>
                                        <IconFont type="icon-facebook" />
                                        <IconFont type="icon-twitter" />
                                    </Space>
                                </div>,
                            </Col>
                        </Row>
                    </AppFooter>
                </div>
            </Layout>
                
            </> 
    )
}

