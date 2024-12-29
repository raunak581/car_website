// src/components/CarCard.js
import React from "react";
import styled from "styled-components";

const CarCard = ({ image, name, price }) => {
    return (
        <Card>
            <CarImage src={image} alt={name} />
            <CarDetails>
                <h3>{name}</h3>
                <p>${price} / day</p>
            </CarDetails>
        </Card>
    );
};

const Card = styled.div`
  background: #222;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
`;

const CarImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CarDetails = styled.div`
  padding: 1rem;
`;

export default CarCard;
