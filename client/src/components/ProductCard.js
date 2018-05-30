import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { id, img, name, listPrice, ourPrice, sku } = this.props;
    const productImage = img.includes('http://') ? img : `http://${img}`;

    return (
      <div className="card col-sm-4" style={{ width: '18rem', border: 'none' }}>
        
        <Link to={{ pathname: `/stuff/${id}`, state: { id, img, name, listPrice, ourPrice, sku } }}>
        <img className="card-img-top img-fluid" src={productImage} alt={name}/>
        </Link>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">SKU#: {sku}</p>
          <p className='text-danger'>List Price: $<del>{listPrice}.00</del></p>
          <p><b>Our Price: ${ourPrice}.00</b></p>
        </div>
        <div className='card-body'>
          <button Style="margin-top:-80px;" className='btn btn-sm btn-outline-info' onClick={() => this.props.addToCart(name, sku, ourPrice)}>ADD TO CART</button>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(ProductCard);
