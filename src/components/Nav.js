import React from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Menu = () => (
    <nav className="navbar navbar-expand-lg custom_nav">
    <div className="container">
    <a className="navbar-brand" href="#">SEO</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
</button>

<div className="collapse navbar-collapse" id="mynav">
<ul className="navbar-nav ml-auto">
  <li className="nav-item">
    <Link className="nav-link" to="/">Home </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/services">Services</Link>

    
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/price">Pricing</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/portfolio">Portfolio</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/blog">Blog</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/contact">Contact</Link>
  </li>

  
 
</ul>

</div>
    </div>
</nav>
)