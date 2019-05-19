import React from 'react';

import Zoom from 'react-reveal/Zoom';
import {Col, Grid, Row, Container} from 'react-bootstrap';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const EventInfo = () => {
    return (
      <div className="bck_black">
        <Container style={{border:"solid red 2px"}}>
          <Row className="pt-5" style={{border:"solid yellow 2px"}}>
            <Col className="mt-5 mb-5 d-flex justify-content-center" style={{border:"solid green 2px"}}>
              <Zoom duration={500}>
                <div className="vn_item">
                  <div className="vn_outer">
                    <div className="vn_inner">
                      <div className="vn_icon_square bck_red" />
                      <div
                        className="vn_icon"
                        style={{
                          background: `url(${icon_calendar})`
                        }}
                      />

                      <div className="vn_title">Event Date & Time</div>
                      <div className="vn_desc">
                        16 December 2019 @10.00 pm
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </Col>

            <Col className="mt-5 mb-5 d-flex justify-content-center" style={{border:"solid green 2px"}}>
              <Zoom duration={500} delay={500}>
                <div className="vn_item">
                  <div className="vn_outer">
                    <div className="vn_inner">
                      <div className="vn_icon_square bck_yellow" />
                      <div
                        className="vn_icon"
                        style={{
                          background: `url(${icon_location})`
                        }}
                      />
                      <div className="vn_title">Event Location</div>
                      <div className="vn_desc">
                        660 Peachtree St NE, Atlanta, 9845
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </Col>
          </Row>
        </Container>
        <div />
      </div>
    );
};

export default EventInfo;