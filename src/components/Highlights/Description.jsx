import React from 'react';
import Fade from 'react-reveal/Fade';
import {Col,Row,Grid,Container} from 'react-bootstrap';


const Description = () => {
    return (
        <div>
            <Container style={{border:"solid red 1px"}}>
                <Row style={{border:"solid yellow 2px"}}>
                    <Col style={{border:"solid green 2px"}}>
                        <Fade>
                            <div>
                                <h2>Highlights</h2>
                                <div className="highlight_description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat eligendi nihil culpa adipisci nostrum deleniti sequi reiciendis, sapiente amet ratione!
                                </div>
                                <br></br>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Description;