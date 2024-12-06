// src/pages/Home.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import styled from "styled-components";
import { Button } from "@mui/material"; // Choose the appropriate Button library

const cars = [
  {
    id: 1,
    name: "Range Rover Velar",
    price: 500,
    image: "https://vehicle-images.dealerinspire.com/870b-11000584/SALYL2EX5SA394435/05e98640849077a8a1481808983a59b7.jpg",
  },
  {
    id: 2,
    name: "Mercedes A-Class",
    price: 450,
    image: "https://www.cnet.com/a/img/resize/beaafa59971a08521bc1318025f344a1288481df/hub/2018/07/24/05a0b024-9529-4fc0-94ac-900b2421eea9/mercedes-a-class-sedan-promo.jpg?auto=webp&fit=crop&height=675&width=1200",
  },
  {
    id: 3,
    name: "Toyota Highlander",
    price: 400,
    image: "https://carimage.d2cmedia.ca/newcars/cb6752daada8b23/2024/Toyota/Highlander%20Hybrid/MjkxNDg1Xk1lZGlhIEdhbGxlcnk/Xj2b5L_4nEVzocAm777wAgCDEvfQpKxQkM4Oa64sIfOpYI-j2FdaBKpdO-r7n-pWwICjhKcfST3kKw5o5sHk0xvDotpO7F0PRPYw6Jm2GC_2WJOqrurzKhMKOv8vwOs-YiNFJ8MmrPSeGrOVDYhzCwamHahEq3yYZJzuCV35ni6ypdiWnH1ZcEEHawx06fGM/cc_2024TOS161932797_01_1280_0089.png",
  },
];

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero>
        <Text>
          <h1>Luxury Lifestyle Rentals</h1>
          <p>The AMG GLE Coupe 2018</p>
          <StyledButton variant="contained" color="primary">
            Book Now
          </StyledButton>
        </Text>
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
    </Container>
  );
};

const Container = styled.div`
  background: black;
  color: white;
`;

const Hero = styled.div`
  background: url("https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240326065723_trewtrew.jpeg&w=700&c=1")
    no-repeat center center/cover;
  color: white;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Text = styled.div`
  margin: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const Section = styled.section`
  padding: 2rem 1rem;
  background: #121212;
`;

const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

export default Home;
