import React, { Component } from 'react';
import {Col,Row,Grid,Container} from 'react-bootstrap';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../Utils/MyButton';

class Discount extends Component {

    state = {
        start:0,
        end:30
    }

    porcentage = () => {
        if(this.state.start < this.state.end){
            this.setState({
                start: this.state.start + 1
            });
        }
    }

    componentDidUpdate(){
        setTimeout(()=> {
            this.porcentage()
        },this.state.end);
    }


    render() {
        return (
            <div>
                <Container style={{ border: "solid red 1px" }}>
                    <Row className="discount_wrapper" style={{ border: "solid yellow 2px" }}>
                            <Col className="col-sm-12 col-md-4 col-lg-6 d-flex justify-content-center" style={{ border: "solid green 2px" }}>
                                <Fade
                                    onReveal={() => this.porcentage()}
                                >
                                    <div className="discount_porcentage">
                                        <span>{this.state.start}%</span>
                                        <span>OFF</span>
                                    </div>
                                </Fade>
                            </Col>
                            <Col className="col-sm-12 col-md-8 col-lg-6 d-flex justify-content-center" style={{ border: "solid green 2px" }}>
                                <Slide right>
                                    <div className="discount_description">
                                        <h3>Buy before 16/12/19 for bonus</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nulla rem soluta, eius vel mollitia!</p>
                                        <MyButton text="BUY" bck="#ffa800" color="#fff" link="https://www.google.com/" />
                                    </div>
                                </Slide>
                            </Col>

                    </Row>
                </Container>
            </div>
           
        );
    }
}

export default Discount;