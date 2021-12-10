import React from 'react';
import groceriesData from '../data/groceriesData';

class GroceryItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.details.name,
      qty: props.details.quantity
    }
  }

  handleIncrease () {
    this.setState({qty: this.state.qty+1})
  }

  handleDecrease () {
    this.setState({qty: this.state.qty-1})
  }
  // create some state
  //instead of rendering based on props.quantity...
  // initialize our state using the props.quantity
  //we would render based on our state quantity.
  // console.log(props.details)


  render () {
    if (this.state.qty <= 0) {
      return (<div>{}</div>)
    }
    return (
      <li>
      <div>{this.state.name}</div>
      <button onClick={(e) => {
        e.preventDefault();
        this.handleIncrease()}}>Increase</button>
        <button onClick={(e) => {
          e.preventDefault();
          this.handleDecrease()}}>Reduce</button>
      <div>{this.state.qty}</div>
      </li>
    )
  }
};

export default GroceryItem;