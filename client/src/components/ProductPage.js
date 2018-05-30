import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import './style.css';

const imgDisplay = {
    'display': 'block',
    'margin': 'auto',
    'width': '40%',
}

class ProductPage extends Component {
  render() {
    const { img, name, listPrice, ourPrice, sku } = this.props;
    const productImage = img.includes('http://') ? img : `http://${img}`;

    return (
      <div className="container-fluid">
        <h1>{name}<br/></h1>
        <img className="card-img-top img-fluid" src={productImage} alt={name} style={imgDisplay}/>
        <div className="pricing panel panel-primary">
          <div className="panel-heading">Peplink Series</div>
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-7"><strong>{name}</strong></div>
              <div className="col-sm-3">#{sku}<br/>
                List Price: <del>${listPrice}.00</del><br/>
                <strong>Our Price: ${ourPrice}.00</strong></div>
              <div className="col-sm-2">
                <button className='btn btn-sm btn-outline-info' onClick={() => this.props.addToCart(name, sku, ourPrice)}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>

    <h2>Overview:</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div className="container-fluid">
        <h3>Heading 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>Heading 2</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <h3>Heading 3</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <br/>
      <h3>Highlights</h3>
      <ul>
        <li>Advanced Protection against threats
          <ul>
            <li>Integration with FortiGuard Threat  Intelligence Service</li>
            <li>Web, DNS filtering and  application control</li>
            <li>Integration with FortiSandbox cloud  and on-premise appliance</li>
            <li>AV, IPS, DLP and Content Analysis</li>
          </ul>
        </li>
        <li>High performance and scalability
          <ul>
            <li>Custom –built security processing  units for high performance</li>
            <li>Scalability from small to large  organizations</li>
            <li>HA availability for redundancy</li>
          </ul>
        </li>
        <li>Content Caching and WAN Optimization
          <ul>
            <li>Static and dynamic content caching</li>
            <li>Multiple Content Delivery Network</li>
            <li>Decrease Network Latency</li>
            <li>Lower bandwidth overhead</li>
          </ul>
        </li>
      </ul>




















      </div>
    )
  }
}

export default connect(null, actions)(ProductPage);
