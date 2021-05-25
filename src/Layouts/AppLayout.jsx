import React, {Component, useState } from "react";
import { Layout, Menu, Image, Badge , Breadcrumb, Row  } from 'antd';
import { images } from '../assets/img/index';
import { AppHeader } from '../components/Headers/Header';
import './styles.css';
import { Typography } from 'antd';

const { Title } = Typography;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

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
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                    <Menu.ItemGroup key="g1" title="Item 1">
                                    <Menu.Item key="1">Option 3</Menu.Item>
                                    <Menu.Item key="2">Option 4</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g2" title="Item 2">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                </Menu.ItemGroup>
                            </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>{props.children}</Content>
                        </Layout>
                        </Content>
                        </div>
                    </Layout>
                
            </> 
    )
}

