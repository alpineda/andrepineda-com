import React, { } from "react"
import styled from "styled-components"
import { Col } from "react-bootstrap"
import { useParams, Redirect } from "react-router-dom"
import NavBar from "../components/navbar.js"

const Outer = styled.div`
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: ${({ isDesktop }) => isDesktop ? '30px' : '16px'};
  padding-right: ${({ isDesktop }) => isDesktop ? '30px' : '16px'};
  background-color: white;
  color: black;
`;

const Title = styled.div`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 36px;
`;

const Subheading = styled.div`
  text-align: center;
  color: #373737;
  font-family: 'Lora', serif;
  font-size: 18px;
`;

export default function CatchAll() {
  const { id } = useParams()

  // Redirects.
  if (id == "home") return (<Redirect to="/" />)

  // 404 not found.
  document.title = "404 | Andre Pineda"
  return (
    <>
      <NavBar />
      <Outer>
        <div style={{height: "100px"}} />
        <Title>Oops! Page not found.</Title>
        <div style={{height: "20px"}} />
        <Subheading>We could not find the page you are looking for.</Subheading>
        <div style={{height: "200px"}} />
      </Outer>
    </>
  )
}
