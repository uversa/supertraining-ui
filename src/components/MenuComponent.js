import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

    // First to be invoked
    constructor(props) {
        super(props);
    }

    // Third to be invoked
    // componentDidMount(){
    //     console.log('Menu Component componentDidMount is invoked');
    // }

    renderDish(dish) {
        if(dish != null){
            return (
                <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
                </Card>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    // Second to be invoked
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log('Menu Component render is invoked');

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.state.selectedDish && 
                    <DishDetail selectedDish={ this.state.selectedDish }/> }
                  
                </div>
            </div>
        );
    }
}

export default Menu;