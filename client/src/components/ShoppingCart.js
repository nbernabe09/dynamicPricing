import React, { Component } from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ShoppingCart extends Component {
  renderPrice() {
    const { cart, deleteItem } = this.props;
    if (!cart.length) {
      return <div />
    } else {
      return cart.map(item => {
        return <ShoppingCartItem price={item.price} key={item.name} sku={item.sku} deleteItem={deleteItem} />
      });
    }
  }

  calculateTotal() {
    const { cart } = this.props;
    if (!cart.length) {
      return <div />
    } else {
      const total = cart.map(item => item.price).reduce((acc, curr) => acc + curr);
      return <h4 className='text-center'>Total: ${total}.00</h4>
    }
  }


  render() {
    const style = {
      div: {
        height: '300px',
        position: 'fixed',
        top: '0px',
        right: '0px'
      },
      cart: {
        backgroundColor: '#343a40',
        color: '#fff',
        marginTop: '0px',
        padding: '5px',
        width: '250px',
        height: '300px',
        overflowX: 'hidden',
        overflowY: 'scroll',
      },
      tab: {
        backgroundColor: '#343a40',
        color: '#fff',
        height: '30px',
        width: '233px',
        float: 'right',
        marginRight: '17px',
      }
    }
    return (
      <div className='cart-container' style={style.div}>
        <div className='container' style={style.cart}>
          <h4 className='text-center' style={{color: 'white'}}>My Cart</h4>
          <hr style={{ backgroundColor: '#fff' }}/>
          {this.renderPrice()}
        </div>
        <div className="cart-tab" style={style.tab}>{this.calculateTotal()}</div>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return {
    cart
  }
}

export default connect(mapStateToProps, actions)(ShoppingCart);
