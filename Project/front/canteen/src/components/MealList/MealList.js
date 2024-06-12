import React, { Component } from 'react';
import MealService from '../MealsService/MealService';

class MealList extends Component {
    constructor(props) {
        super(props);
        this.state = { meals: [] };
    }

    componentDidMount() {
        MealService.getAllMeals().then((response) => {
            this.setState({ meals: response.data });
        });
    }

    render() {
        return (
            <div>
                <h2>Meals</h2>
                {this.state.meals.map((meal) => (
                    <div key={meal.id}>
                        <h3>{meal.name}</h3>
                        <p>{meal.description}</p>
                        <p>{meal.price}</p>
                        <p>{meal.picture}</p>
                        <p>{meal.quantity}</p>
                        <p>{meal.category}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default MealList;
