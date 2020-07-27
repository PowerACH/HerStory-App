import React from 'react';
import './user.css'
import { Container, Image, Col, Row } from 'react-bootstrap'

export default class ProfileSummary extends React.Component {
    constructor() {
        super();
        this.state = {
            imageArray: [ 
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
                "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
                "https://images.unsplash.com/photo-1519113898548-b0a5a840ecc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
                "https://images.unsplash.com/photo-1520987623799-101883d6585a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
                "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
                "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            ]

        }
    }
    render() {
        let imageArray = this.state.imageArray;
        const images = imageArray.map((image, i) => {
            console.log("hello")
            return(
                <Col xs={6} md={4}>
                <Image src= {image} key = {i} thumbnail />
                </Col>
                
            )
        })
        return (
            <div className = "profile">
            <div className = "profileTop">   
            </div>
            <div classname = "Grid">
                <Container>
                    <Row>
                       {images} 
                    </Row>
                </Container>
                
            </div>
            </div>
        )
    }
}