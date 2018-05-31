import React, { Component, Fragment } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { id, img, name, listPrice, ourPrice, sku, discontinued } = this.props;
    const productImage = img.includes('http://') ? img : `http://${img}`;
    console.log(discontinued);

    return (
      <div className="card col-sm-3" style={{ width: '18rem', border: 'none' }}>
        <div className="main-card-container">
          <div className="main-card-img">
            {discontinued === 'TRUE' ? (
              <img className="card-img-top img-fluid" src={productImage} alt={name}/>
            ) : (
              <Link to={{ pathname: `/stuff/${id}`, state: { id, img, name, listPrice, ourPrice, sku } }}>
              <img className="card-img-top img-fluid" src={productImage} alt={name}/>
            </Link>
            )}
          </div>
        </div>
        <div className="card-body info-card">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">SKU#: {sku}</p>
          {discontinued === 'TRUE' ? (
            <div>
              <p className='text-danger'>This product has been discontinued</p>
              <Link to='/' className='text-info'>Contact us</Link> for replacement
            </div>
          ) : (
            <Fragment>
              <p className='text-danger'>List Price: $<del>{listPrice}.00</del></p>
              <p><b>Our Price: ${ourPrice}.00</b></p>
            </Fragment>
          )}
        </div>
        <div className='card-body cart-card'>
          <button style={discontinued === 'TRUE' ? {display: 'none'} : {marginTop: '10px'}} className='btn btn-outline-info' onClick={() => this.props.addToCart(name, sku, ourPrice)}>ADD TO CART</button>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(ProductCard);
