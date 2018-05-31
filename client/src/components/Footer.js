import React from "react";
import "./Footer.css";

const Footer = () =>
  <div className="container-fluid bottom-footer">
    <div className="row">
      <div className="col-sm-2">
        <h3 className="footer-widget-title">Site Map:</h3>
        <ul className="list-unstyled">
          <li><a href="/">Home</a></li>
          <li><a href="/">Shopping Cart</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </div>
      <div className="col-sm-2">
        <h3 className="footer-widget-title">Products:</h3>
        <ul className="list-unstyled">
          <li><a href="/">Multi-WAN Routers</a></li>
          <li><a href="/">MediaFast</a></li>
          <li><a href="/">Balance One</a></li>
          <li><a href="/">MAX Cellular Routers</a></li>
          <li><a href="/">SD Switch</a></li>
          <li><a href="/">Technology</a></li>
          <li><a href="/"><strong>View all Products</strong></a></li>
        </ul>
      </div>
      <div className="col-sm-3">
        <h3 className="footer-widget-title">Resources:</h3>
        <ul className="list-unstyled">
          <li><a href="/">Shipping</a></li>
          <li><a href="/">Returns</a></li>
          <li><a href="/">Consulting</a></li>
        </ul>
      </div>
      <div className="col-sm-3">
        <p className="phone-header"> Call a Specialist Today!<br/>
        <a href="tel:8442940779">844-294-0779</a></p>
      </div>
      <div className="col-sm-2">
        <h3 className="footer-widget-title">Contact:</h3>
        <p>9979 Muirlands Blvd.<br/>
        Irvine, CA 92618</p>
      </div>
    </div>
    <p>&nbsp;</p>
    <footer className="footer">
      <p className='text-center'>Copyright © 2000-2018. All Rights Reserved.</p>
    </footer>
  </div>;

export default Footer;
