import React, { useState } from "react";
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { Pagination } from 'antd';
import { Card } from 'antd';
import { images } from '../../assets/img/index';
import { Button, Space, Image } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';


import './LandingPage.css';


const { Title, Text, Paragraph, Link   } = Typography;
const { Meta } = Card;




function LandingPage() {

    return(
        <>
            <Row>
                <Col >
                    <div className="box">
                        <Title>Ladies</Title>
                        <Text>In our Ladies department we offer wide selection of the best 
                            products we have found and carefully selected worldwide.</Text>
                    </div>
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
                                        Ver Negocio
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
                                        Ver Negocio
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
                                        Ver Negocio
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
                                        Ver Negocio
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
                                        Ver Negocio
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

