// src/components/CarCard.js
import React from "react";
import styled from "styled-components";

const CarCard = ({ image, name, price }) => {
  return (
    <Card>
      <CarImageContainer>
        <CarImage src={image} alt={`${name} image`} />
      </CarImageContainer>
      <CarDetails>
        <CarName>{name}</CarName>
        <CarPrice>${price} / day</CarPrice>
      </CarDetails>
    </Card>
  );
};

const Card = styled.div`
  background: #1e1e1e;
  color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 400px;
  margin: auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const CarImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const CarImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const CarDetails = styled.div`
  padding: 1rem;
  text-align: center;
`;

const CarName = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: #f8f8f8;
`;

const CarPrice = styled.p`
  font-size: 1.2rem;
  color: #a8a8a8;
  margin: 0.5rem 0;
`;

export default CarCard;
