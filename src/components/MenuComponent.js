import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null 
        }
    }

    componentDidMount() {
        console.log("component did mount");
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <DishDetail dish={dish}/>
            );
        }
        else return (
            <div></div>
        )
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.onDishSelect(dish)} >
                            <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                            <CardImgOverlay>
                                <CardTitle tag="h5"> {dish.name} </CardTitle>
                            </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log("Render started...")
        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <div className='row'>
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;