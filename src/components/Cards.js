import React from 'react';
import Data from './Data';

export const Card = () =>(
    <div className="row justify-content-center mt-5">
                                <div className="col-lg-4 digital_main mx-3">
                            <div className="digital_part  px-5">
                                <div className="digital_image">
                                <img src={require('./images/seo.png')} />
                                </div>
                                <div className="digital_text_content">
                                    <h3>Digital Marketing</h3>
                                    <p>Once online, we help track how effective your marketing is,
                                    and make adjustments to improve results over time</p>
                                    <div class="all-button slide-btn">
                                    <a href="#">explore</a>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
)