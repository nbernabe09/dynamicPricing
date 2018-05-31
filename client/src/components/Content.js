import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductData } from '../actions';
import ProductCard from './ProductCard';
import banner from '../img/banner.png';
import logo from '../img/logo.gif';

class Content extends Component {
  componentDidMount() {
    this.props.fetchProductData();
  }

  renderProductCard() {
    const { data, isFetching } = this.props.products;
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
          discontinued={item.discontinued_note}
        />
      )
    });
  }

  render() {
    console.log(this.props.products);
    return (
      <div>
        <img src={logo} className="vendorLogo"/>
        <h1>Peplink Products and Solutions</h1>
        <p className="smallHeaderText">Dual-WAN, Multi-WAN Internet Link Load Balancing Routers</p>
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
