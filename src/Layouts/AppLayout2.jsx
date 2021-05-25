import React, {Component, useState } from "react";
import { Layout, Menu, Image, Badge , Breadcrumb, Row  } from 'antd';
import { images } from '../assets/img/index';
import { AppHeader } from '../components/Headers/Header'
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined
  } from "@ant-design/icons";
import './styles.css';

export default function AppLayout(props) {
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;

    return(
        <>
            <Layout>
                <AppHeader>
                
                    <div className="logo">
                        <Image
                            preview={false}
                            width={120}
                            src={images.logo}
                        />            
                    </div>
                    <Menu defaultOpenKeys={['sub1']} mode="horizontal">
                    
                            <Menu.Item select key="sub1">Home</Menu.Item> 
                            <SubMenu key="sub2" title="Men">
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title="Ladies">
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                    </Menu>
                </AppHeader>
                <Content className="AppLayout-Breadcrumb">
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                                <Menu.ItemGroup icon={
            <MailOutlined styles={{ position: "relative", float: "right" }} />
          } key="g1" title="Item 1">
                                            <Menu.Item key="2" icon={<CalendarOutlined />}>
Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                </Menu.ItemGroup>
                            <Menu.ItemGroup key="g2" title="Item 2">
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
                    </Layout>
                    </Content>
                </Layout>
                
                {props.children}
            </> 
    )
}

