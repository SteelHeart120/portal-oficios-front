import React, { useState } from "react";
import { Layout } from 'antd';

export function TopBar(props) {
    const { Header } = Layout;

    return(
        <div className="row">
            <div className="container">
                <div style={{backgroundColor: 'red'}} className="col-lg-6">
                    <a className="btn btn-success btn-sm">Offer of the day</a>
                    <p>asd</p>
                </div>
                <div style={{backgroundColor: 'blue'}} className="col-lg-6">
                    <p>asd</p>
                </div>
            </div>
        </div>
    )
}