import React, { useState } from "react";
import { Layout } from 'antd';

export function AppFooter(props) {
    const { Footer } = Layout;

    return(
                <Footer className="footer">
                    {props.children}
                </Footer>
                
    )
}