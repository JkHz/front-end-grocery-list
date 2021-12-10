import React from 'react';
import GroceryItem from './GroceryItem.jsx';
// map over

// props.Groceries.map(GroceryItem => <GroceryList GroceryItem={GroceryItem} />)

var GroceryList = (props) => {
//JS
  // console.log(props.groceriesArr);
  var itemArray = props.groceriesArr.map((each, index) => <GroceryItem details={each} key={index} />)
  console.log(props.mystring)
  return (
  <ul className="groceries">
    {itemArray}
  </ul>

   );
};

export default GroceryList;
