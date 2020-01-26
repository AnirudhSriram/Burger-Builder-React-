import React, { Component } from 'react';
import Auxillary from '../../../HOC/auxillary';
import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7
};

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice : 4
        }
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+ INGREDIENT_PRICES[type];

        this.setState({
            ingredients : updatedIngredients,
            totalPrice : newPrice
        })
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] <=0) {return}
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice- INGREDIENT_PRICES[type];

        this.setState({
            ingredients : updatedIngredients,
            totalPrice : newPrice
        })
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <=0
        }

        return (
            <Auxillary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientAdded={this.addIngredientHandler} 
                removeIngredient={this.removeIngredientHandler} 
                disabled={disableInfo}
                price={this.state.totalPrice}/>
            </Auxillary>
        )
    }
}

export default BurgerBuilder;