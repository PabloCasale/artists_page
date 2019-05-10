import React, { Component } from 'react';
import MyButton from '../Utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices:[100,150,250],
        positions:['Pullman','Medium','Front'],
        description:['Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sunt?',
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sunt?',
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sunt?'],
        linkTo:['https://sales/p','https://sales/m','https://sales/f',],
        delay:[500,0,750]

    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
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
                                text="Purchase"
                                bck="#ffa800"
                                link={this.state.linkTo[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <hr/>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                    <div style={{marginBottom:"75px"}}></div>
                </div>
                
            </div>
            
        );
    }
}

export default Pricing;