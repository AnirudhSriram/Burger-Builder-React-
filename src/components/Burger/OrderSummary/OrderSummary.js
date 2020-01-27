import React from 'react';
import Auxillary from '../../../HOC/auxillary';

const OrderSummary = (props) => {
    let ingredientSummary = Object.keys(props.ingredients).map(key => {
    return <li key={key}>{key} : <strong>{props.ingredients[key]}</strong></li>
    })

   return ( <Auxillary>
       <h3>Your Order</h3>
       <p>Ingredients:</p>
       <ul>
            {ingredientSummary}
       </ul>

   </Auxillary>)
}

export default OrderSummary;