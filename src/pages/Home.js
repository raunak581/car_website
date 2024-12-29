// src/pages/Home.js
import React from "react";
import styled from 'styled-components';
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const cars = [
    { id: 1, name: "Range Rover Velar", price: 500, image: "/images/first-img.jpg" },
    { id: 2, name: "Mercedes A-Class", price: 450, image: "/images/main.jpg" },
    { id: 3, name: "Toyota Highlander", price: 400, image: "/images/second-img.jpg" },
];

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero>
                <h1>Luxury Lifestyle Rentals</h1>
                <p>The AMG GLE Coupe 2018</p>
                <button>Book Now</button>
            </Hero>
            <Section>
                <h2>Today's Specials</h2>
                <CarGrid>
                    {cars.map((car) => (
                        <CarCard key={car.id} {...car} />
                    ))}
                </CarGrid>
            </Section>
            <Footer />
        </div>
    );
};

const Hero = styled.div`
  background: url("/images/main.jpg") no-repeat center center/cover;
  color: white;
  text-align: center;
  padding: 5rem 1rem;
`;

const Section = styled.section`
  padding: 2rem 1rem;
  color: white;
  background: black;
`;

const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

export default Home;
