import React, { useState } from "react";
import { Layout } from 'antd';

export function AppHeader(props) {
    const { Header } = Layout;

    return(
                <Header className="header">
                    {props.children}
                </Header>
                
    )
}