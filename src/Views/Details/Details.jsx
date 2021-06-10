import React, { useState } from 'react';
import { Button, Carousel, Col, Divider, Image, Row, Space } from "antd";
import { Typography } from 'antd';
import { images } from '../../assets/img/index';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

import './Details.css'
// Constantes de import
const { Title, Text } = Typography;

export default function Details() {
    const [imgIndex, setActiveIndex] = useState(0);
    const carrouselRef = React.createRef();

    return(
    <>
        
        <Row gutter={30}>
            <Col lg={12}>
                <Carousel afterChange={e => setActiveIndex(e)} ref={carrouselRef} autoplay className="details-carousel">
                    <div>
                        <Image
                            width='auto'
                            height={600}
                            preview={false}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                    </div>
                    <div>
                        <Image
                            width='auto'
                            height={600}
                            preview={false}
                            src={images.plomeria}
                            />
                    </div>
                    <div>
                        <Image
                            width='auto'
                            height={600}
                            preview={false}
                            src={images.detailbig1}
                            />
                    </div>
                </Carousel>
            </Col>
            <Col lg={12}>
                <div className="box details-text-general">
                    <Title>White Blouse Armani</Title>
                    <Space></Space>
                    <Text
                        className="details-text-description"
                        type="secondary">
                            Scroll to product details, material & care and sizing
                    </Text>
                    <Space />
                    <Title>$124.00</Title>
                    <Button className="details-button" icon={<ShoppingCartOutlined />} type="primary">Add to cart</Button>
                    <Space />
                    <Button className="details-button" icon={<HeartOutlined /> }  type="primary">Add to wishlist</Button>
                </div>
                <div className="d-flex justify-content-between">
                    <button 
                        onClick={e => carrouselRef.current.goTo(0)}
                        className={imgIndex === 0 ? `details-button-image` : `details-button-image details-button-image-inactive`}>
                            <Image
                            width={100}
                            height={100}
                            preview={false}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                    </button>
                    <button 
                        onClick={e => carrouselRef.current.goTo(1)}
                        className={imgIndex === 1 ? `details-button-image` : `details-button-image details-button-image-inactive`}>
                            <Image
                                width={100}
                                height={100}
                                preview={false}
                                src={images.plomeria}
                            />
                    </button>
                    <button 
                        onClick={e => carrouselRef.current.goTo(2)}
                        className={imgIndex === 2 ? `details-button-image` : `details-button-image details-button-image-inactive`}>
                            <Image
                            width={100}
                            height={100}
                            preview={false}
                            src={images.detailbig1}
                            />
                    </button>

                </div>
            </Col>
        </Row>
        <Row>
        <Col lg={24} className="app-general-col" style={{ marginTop: '30px'}}>
                <Title level={4}>Product details</Title>
                <Space></Space>
                <Text
                    className="details-text-description">
                    White lace top, woven, has a round neck, short sleeves, has knitted lining attached

                </Text>
                <Space />
                <Title level={4}>Material & care</Title>
                <Space></Space>
                <ul>
                    <li><Text
                    className="details-text-description">
                        Regular Fit</Text></li>
                    
                    <li><Text
                    className="details-text-description">
                    The model (height 5'8" and chest 33") is wearing a size S
                </Text></li>
                </ul>  
                <Space />
                <Title level={4}>Size & Fit</Title>
                <Space></Space>
                <ul>
                    <li><Text
                    className="details-text-description">
                        Regular Fit</Text></li>
                    
                    <li><Text
                    className="details-text-description">
                    The model (height 5'8" and chest 33") is wearing a size S
                </Text></li>
                </ul>
                <Text>Define style this season with Armani's new range of trendy tops, crafted with intricate details. Create a chic statement look by teaming this lace number with skinny jeans and pumps.</Text>

                <Divider />
                
            </Col>
        </Row>
    </>
    )
}