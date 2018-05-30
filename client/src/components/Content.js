import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductData } from '../actions';
import ProductCard from './ProductCard';
import banner from '../img/banner.png'

class Content extends Component {
  componentDidMount() {
    this.props.fetchProductData();
    console.log(this.props.cart)
  }

  renderProductCard() {
    const { data, isFetching } = this.props.products;
    //console.log("hello: " + this.props.params);
    if (!data) {
      return (
        <div />
      );
    }

    if (isFetching) {
      return <h1>Loading...</h1>
    }

    return data.map(item => {
      return (
        <ProductCard
          key={item.ID}
          id={item.ID}
          name={item.prodDesc}
          sku={item.prodSku}
          listPrice={parseFloat(item.listprice)}
          ourPrice={parseFloat(item.prodPrice)}
          img={item.productimg}
        />
      )
    });
  }

  render() {
    //console.log(this.props.products);
    return (
      <div>
        <h1>Ruckus Wireless Solutions and Information</h1>
        <p>Security and Management for the New Internet</p>
        <img src={banner} className='img-fluid' alt='banner'/>
        <div className='row' style={{ marginTop: '20px' }}>
          {this.renderProductCard()}
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

export default connect(mapStateToProps, { fetchProductData })(Content);
