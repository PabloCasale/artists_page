import React, { Component } from 'react';
import MyButton from '../Utils/MyButton';
import Zoom from 'react-reveal/Zoom';
import {Col,Row,Grid,Container} from 'react-bootstrap';


class Pricing extends Component {

    state = {
        prices:[100,150,200],
        positions:['DAY-1','DAY-2','FREE PASS'],
        description:['Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sunt?',
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sunt?',
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sunt?'],
        linkTo:['https://sales/p','https://sales/m','https://sales/f',],
        delay:[500,0,750]

    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Col style={{ border: "solid green 2px" }}>

            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.description}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="B U Y"
                                bck="#ffa800"
                                link={this.state.linkTo[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
            </Col>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <Container style={{ border: "solid red 1px" }}>
                    <Row className="center_wrapper pricing_section " style={{ border: "solid yellow 2px" }}>
                            <Col>
                                <h2  className="d-flex justify-content-center">Pricing</h2>
                                <hr/>
                            </Col>
                                <div className="pricing_wrapper">
                                    {this.showBoxes()}
                            
                                </div>
                                <div style={{marginBottom:"75px"}}></div> 
                    </Row>
                </Container>
                {/* <div className="center_wrapper pricing_section"> */}
                    
                {/* </div> */}
                
            </div>
            
        );
    }
}

export default Pricing;