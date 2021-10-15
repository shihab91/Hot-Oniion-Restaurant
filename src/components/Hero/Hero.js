import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Hero.css'
const Hero = () => {
    return (
        <div className="hero">
            <h2 className="mb-4">Best food waiting for your belly</h2>
            <InputGroup className="inputs-group">
                <FormControl aria-label="First name" className="input" />
                <InputGroup.Text className="input-text">Search</InputGroup.Text>
            </InputGroup>
        </div>
    );
};

export default Hero;