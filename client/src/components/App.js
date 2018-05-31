import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Content from './Content';
import Content2 from './Content2';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <div className='container' style={{
              backgroundColor: '#fff'
            }}>
            <Header/>
            <Navbar/>
            <div style={{ marginBottom:"35px" }}>
              <Route exact path="/" component={Content}/>
              <Route exact path="/stuff/:id" component={Content2}/>
            </div>
            <ShoppingCart/>
          </div>
          <Footer/>
        </div>
    </Router>
    );
  }
}
export default App;
