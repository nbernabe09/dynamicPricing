import React from "react";
import "./Footer.css";

const topFooter = () =>
  <div className="top-footer">
    <div className="col-md-2">
      <h3 className="footer-widget-title">Site Map:</h3>
      <ul className="list-unstyled">
        <li><a href="/">Home</a></li>
        <li><a href="/">Shopping Cart</a></li>
        <li><a href="/">Contact Us</a></li>
      </ul>
    </div>
    <div className="col-md-2">
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
    <div className="col-md-3">
      <h3 className="footer-widget-title">Resources:</h3>
      <ul className="list-unstyled">
        <li><a href="/">Shipping</a></li>
        <li><a href="/">Returns</a></li>
        <li><a href="/">Consulting</a></li>
      </ul>
    </div>
    <div className="col-md-3">
      <p className="phone-header" style="text-align:left">Call a Specialist Today!<br/>
        <a className="tel" href="tel:844-294-0779">844-294-0779</a>
      </p>
    </div>
    <div className="col-md-2">
      <h3 className="footer-widget-title">Contact:</h3>
      9979 Muirlands Blvd.<br/>
      Irvine, CA 92618<br/>
      <i className="fa fa-phone"></i>
      <h1 style="display:inline">
        <a className="tel" href="tel:844-294-0779">844-294-0779</a>
      </h1><br/>
      <i className="fa fa-envelope-o"></i>
      <a href="mailto:Sales@PeplinkWorks.com">Sales@PeplinkWorks.com</a><br/>
      <a href="/quoterequest.asp"><strong>Get a Quote!</strong></a><br/><br/>
      <div className="icons">
        <a id="facebook" title="Facebook page" href="//www.facebook.com/virtualgraffiti" target="_blank"><i className="fa fa-facebook-square fa-2x"></i></a>
        <a id="twitter" title="Twitter page" href="//twitter.com/virtualgraffiti"><i className="fa fa-twitter-square fa-2x"></i></a>
        <a id="youtube" title="Youtube page" href="//www.youtube.com/virtualgraffiti"><i className="fa fa-youtube-square fa-2x"></i></a>
        <a id="linkedin" title="LinkedIn page" href="//www.linkedin.com/company/virtual-graffiti-inc"><i className="fa fa-linkedin-square fa-2x"></i></a>
        <a id="googleplus" title="GooglePlus page" href="//plus.google.com/+virtualgraffiti"><i className="fa fa-google-plus-square fa-2x"></i></a>
      </div>
    </div>
  </div>;

export default topFooter;
