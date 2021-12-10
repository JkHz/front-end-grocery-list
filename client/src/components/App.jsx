import React from 'react';
import GroceryList from './GroceryList.jsx';
import groceriesData from '../data/groceriesData';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groceriesData: groceriesData
    };
  }

  handleAdd() {
    var itemState = document.getElementById("item").value;
    var quantityState = document.getElementById("quantity").value;
    var myObject = {
      name: itemState,
      quantity: Number(quantityState)
    }
    var tempArray = this.state.groceriesData;
    tempArray.push(myObject);
    this.setState({groceriesData: tempArray})
  }

  // handleIncrease () {
  //   // should increase the count of whatever is clicked in state.
  //   this.setState([])
  // }
  // handleDecrease() {

  // }

  render() {
    // console.log("grocereiesData as seen in App.jsx::: " , groceriesData)
    return (
  <div>
    <img src="grocery-bags.png" />
    <h1>Grocery List</h1>
    <form>
      <label> Item
        <input id="item" name="item"/>
      </label>
      <label> Quantity
        <input type="number" id="quantity" name="quantity"/>
      </label>
      <button onClick={(e)=>{
        console.log("Clicked add")
        e.preventDefault();
        this.handleAdd();
      }}>Add Grocery</button>
        <GroceryList groceriesArr={this.state.groceriesData} mystring={"Hello"}/>
    </form>


  </div>
  );
  }
}
// props are properties are passed in

export default App;