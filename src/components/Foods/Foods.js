import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useFoods from '../../hooks/useFoods';
import './Foods.css'
const Foods = () => {
    const { foods } = useFoods();
    const [selFoods, setSelFoods] = useState([]);

    const filterItem = (category) => {
        const filteredItems = foods?.filter(filteredFood => {
            return filteredFood.category === category;
        })
        setSelFoods(filteredItems);
    }
    useEffect(() => {
        filterItem("breakfast")
    }, [foods])
    return (
        <div className="container">
            <div className="list-container">
                <ul className="lists">
                    <li onClick={() => filterItem('breakfast')}>Breakfast</li>
                    <li onClick={() => filterItem('lunch')}>Lunch</li>
                    <li onClick={() => filterItem('dinner')}>Dinner</li>
                </ul>
            </div>
            <Row xs={1} sm={2} lg={3} className="g-4">
                {
                    selFoods?.map(food => <Col className="single-column">
                        <Card className="single-card">
                            <Card.Img variant="top" src={food.image} />
                            <Card.Body>
                                <Card.Title>{food.name}</Card.Title>
                                <Card.Text>{food.text}</Card.Text>
                                <h4>${food.price}</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                }
            </Row>
            <button className="checkout-btn mt-4">Checkout Your Food</button>
        </div>
    );
};

export default Foods;