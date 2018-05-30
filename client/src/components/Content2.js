import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductPage from './ProductPage';

class Content extends Component {
  componentDidMount() {
    document.getElementById('HEADER').scrollIntoView();
  }

  render() {
    const prod = this.props.location.state;
    console.log(this.props.cart);
    return (
      <div>
        <div style={{ marginTop: '20px' }}>
          <ProductPage
          key={prod.id}
          id={prod.id}
          name={prod.name}
          sku={prod.sku}
          listPrice={parseFloat(prod.listPrice)}
          ourPrice={parseFloat(prod.ourPrice)}
          img={prod.img}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ products, cart }) {
  return {
    products,
    cart
  }
}

export default connect(mapStateToProps, null)(Content);
