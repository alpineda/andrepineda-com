import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NavBar from "../components/navbar.js"

import Me from "../assets/me.jpg"

const Section1 = styled.div`
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: ${({ isDesktop }) => isDesktop ? '30px' : '18px'};
  padding-right: ${({ isDesktop }) => isDesktop ? '30px' : '18px'};
  background-color: white;
  color: #034AAC;
`;

const Outer = styled.div`
  animation: fade 1.0s ease-in;

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }
  position: relative;
`;

const Heading = styled.div`
  color: black;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: ${({ isDesktop }) => isDesktop ? '42px' : '42px'};
`;

const Subheading = styled.div`
  color: black;
  text-align: center;
  font-family: 'Lora', serif;
  font-size: ${({ isDesktop }) => isDesktop ? '28px' : '28px'};
`;

const Clickable = styled.a`
  text-decoration: none;
  text-align: center;
`;

const Image = styled.img`
  max-width: 80%;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

export default function Home() {
  document.title = "Hi, I'm Andre Pineda!";
  let [isDesktop, setIsDesktop] = useState(getWidth() > 1000);

  useEffect(() => {
    const resizeListener = () => {
      setIsDesktop(getWidth() > 1000)
    };
    window.addEventListener('resize', resizeListener);
    return () => { window.removeEventListener('resize', resizeListener); }
  }, [])

  return (
    <>
      <NavBar />
      <div style={{height: isDesktop ? "0px" : "0px"}} />
      <Outer style={{height: "400px"}}>
        <Section1 style={{height: "400px"}}>
          <div style={{height: "0px"}} />
          <Heading isDesktop={isDesktop}>Hello World!</Heading>
          <div style={{height: "20px"}} />
          <Subheading isDesktop={isDesktop}>I'm Andre Pineda</Subheading>
          <div style={{height: "60px"}} />
          <Center><Clickable href="http://linkedin.com/in/andre-pineda"><Image src={Me} alt="Photo of Andre Pineda" /></Clickable></Center>
          <div style={{height: "80px"}} />
        </Section1>
      </Outer>
    </>
  )
}
