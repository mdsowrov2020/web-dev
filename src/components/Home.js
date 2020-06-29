import React, { Component } from 'react';
import data from './Data';
import {Card} from './Cards';
import {Link} from 'react-router-dom';




export const Home = () => {
    

    return(
    
        <div className="home_main">
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="left">
                                <div className="left_inner_content">
                                    <h5>Digital Marketting Agency</h5>
                                    <h1>We bring you <br/> new Customers</h1>
                                    <p>We build effective strategies to help you reach customers and prospects across the entire web.</p>
                                    <div class="all-button slide-btn">
                                    <a href="#">explore</a>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            
                            <div className="right" style={{ backgroundImage: `url(${require("./images/seo.png")})` }}>
                                
                                </div>

                        
                        </div>
                    </div>
                </div>
               
                
            </section>

            {/* Second content start */}
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                            <div className="col-lg-6">
                            <div className="header_text">
                            <h2>What are you looking for?</h2>
                            <p>With powerful video, digital strategy with customize analytics reach bigger and newer audience and get more business!</p>
                        </div>
                            </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-4 digital_main mx-3">
                            <div className="digital_part  px-5">
                                <div className="digital_image">
                                <img src={require('./images/dm.png')} />
                                </div>
                                <div className="digital_text_content">
                                    <h4>Digital Marketing</h4>
                                    <p>Once online, we help track how effective your marketing is,
                                    and make adjustments to improve results over time</p>
                                    <div class="all-button">
                                    <Link className="nav-link dm" to="/services">know more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 digital_main mx-3">
                            <div className="digital_part  px-5">
                                <div className="digital_image">
                                <img src={require('./images/data-science.png')} />
                                </div>
                                <div className="digital_text_content">
                                    <h4>Data Science</h4>
                                    <p>Through personalized analytics dashboards,
                                         you can measure the impact your message is having on growth and campaign</p>
                                    <div class="all-button slide-btn">
                                    <Link className="nav-link dm" to="/services">know more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                </div>
            </section>

            <section className="py-5 choose_main">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #ee0c81 " fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>           
                 <div className="choose_inner_main">
                    
                    <div className="container">
                        <div className="row justify-content-center text-center ">
                            <div className="col-lg-6">
                                <div className="header_text custom_choose_header">
                                    <h2>Why choose us?</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center pt-5">
                            <div className="col-lg-4">
                                <div className="choose_inner m-1">
                                <div className="choose_image">
                                <img src={require('./images/data-science.png')} />
                                </div>
                                <div className="choose_text">
                                    <h4>High-End Anaylizing</h4>
                                    <p>Share processes and data secure
                                        lona need to know basis</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                            <div className="choose_inner  m-1">
                                <div className="choose_image">
                                <img src={require('./images/data-science.png')} />
                                </div>
                                <div className="choose_text">
                                    <h4>Excellence Track Record</h4>
                                    <p>Our team assured your web site is always safe and secure</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                            <div className="choose_inner m-1">
                                <div className="choose_image">
                                <img src={require('./images/data-science.png')} />
                                </div>
                                <div className="choose_text">
                                    <h4>Our Dedicated Support</h4>
                                    <p>We finally found a host that truly understood the unique</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="  #ee0c81  " fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </section>

            {/* =========================team part start===================== */}
            <section className="py-5 team_bg">
                <div className="container">
                <div className="row justify-content-center text-center pb-5">
                            <div className="col-lg-6">
                            <div className="header_text">
                            <h2>Our team</h2>
                        </div>
                            </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3">
                            <div className="card ">
                                <div className="front">
                                <img src={require('./images/model-1.jpeg')} />
                                </div>
                                <div className="back">
                                    <div className="back-content ">
                                        <h4>Md Shohel Arman</h4>
                                        <a href="#"><i class="fab fa-twitter tw" title="Twitter"></i></a>
                                        <a href="#"><i class="fab fa-facebook fb" title="Facebook"></i></a>
                                        <a href="#"><i class="fab fa-instagram in" title="Instagram"></i></a>
                                        <a href="#"><i class="fab fa-linkedin-in ln" title="Linkedin"></i></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card ">
                                <div className="front">
                                <img src={require('./images/model-1.jpeg')} />
                                </div>
                                <div className="back">
                                    <div className="back-content">
                                        <h4>Ziaul Karim</h4>
                                        <a href="#"><i class="fab fa-twitter tw" title="Twitter"></i></a>
                                        <a href="#"><i class="fab fa-facebook fb" title="Facebook"></i></a>
                                        <a href="#"><i class="fab fa-instagram in" title="Instagram"></i></a>
                                        <a href="#"><i class="fab fa-linkedin-in ln" title="Linkedin"></i></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card ">
                                <div className="front">
                                <img src={require('./images/model-1.jpeg')} />
                                </div>
                                <div className="back">
                                    <div className="back-content">
                                        <h4>Md Shohel Arman</h4>
                                        <a href="#"><i class="fab fa-twitter tw" title="Twitter"></i></a>
                                        <a href="#"><i class="fab fa-facebook fb" title="Facebook"></i></a>
                                        <a href="#"><i class="fab fa-instagram in" title="Instagram"></i></a>
                                        <a href="#"><i class="fab fa-linkedin-in ln" title="Linkedin"></i></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card ">
                                <div className="front">
                                <img src={require('./images/model-1.jpeg')} />
                                </div>
                                <div className="back">
                                    <div className="back-content">
                                        <h4>Md Shohel Arman</h4>
                                        <a href="#"><i class="fab fa-twitter tw" title="Twitter"></i></a>
                                        <a href="#"><i class="fab fa-facebook fb" title="Facebook"></i></a>
                                        <a href="#"><i class="fab fa-instagram in" title="Instagram"></i></a>
                                        <a href="#"><i class="fab fa-linkedin-in ln" title="Linkedin"></i></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
               
               
            </section>
        </div>
    
)
}


