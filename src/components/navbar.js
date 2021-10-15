import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  height: 120px;
  width: 100%;
  position: relative;
  background-color: white;
  /* background-color: #1A344B; */
  /* background-color: #A1C9EF; */
`;

const Logo = styled.a`
  font-family: 'Lora', serif;
  color: black;
  padding: 0px;
  font-size: 32px;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  :hover {
    text-decoration: none;
    color: black;
  }
  letter-spacing: -0.18em;
`;

const LeftSide = styled.div`
  padding-left: 60px;
  margin: 0;
  display: flex;
  align-items: center;
  position: absolute;
  top: 30%;
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  opacity: ${({ open }) => open ? '90%' : '90%'};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  width: 100%;
  text-align: right;
  padding: 0;
  position: ${({ open }) => open ? 'absolute' : 'fixed'};
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 20;

  a {
    font-size: 22px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: center;

    &:hover {
      color: red;
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Home</a>
      <a href="/resume">My Resume</a>
    </StyledMenu>
  );
}

const Nav = styled.div`
  margin: 0;
  position: absolute;
  top: 40%;
  right: 0;
  width: 700px;
  ul {
    margin-top: 0px;
    list-style: none;
    li a {
      font-size: 20px;
      /* font-weight: bold; */
      text-decoration: none;
      text-align: right;
      float: right;
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 8px;
      color: black;
      .active {
        background: transparent;
        border-radius: 90px;
        height: 0px;
        box-shadow: 0 34px 0 0 #4382FC;
      }
      :hover {
        color: #4382FC;
      }
    }
    padding-right: 20px;
  }
`;

const Burger = ({ isDesktop, open, setOpen }) => {
  if (isDesktop) {
    return null;
  }
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const StyledBurger = styled.button`
  top: 40%;
  position: absolute;
  right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 30;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const DesktopNavBar = () => {
  let names = ['My Resume']
  let paths = ['resume']
  var navItems = [];
  for (var i = 0; i < paths.length; ++i) {
    let href = `/${paths[i]}`;
    var style = {
      cursor: "pointer",
      color: "black",
      MozUserSelect: "none",
      WebkitUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
      fontSize: "15px",
      fontWeight: "bold"
    }
    navItems.push(
      <li><a style={style} href={href}>{names[i]}</a></li>
    )
  }
  return (
    <Nav>
      <ul>
        { navItems.map(navItem => navItem) }
      </ul>
    </Nav>
  );
}

function NavBarComponent() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 1000)
      setOpen(false)
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  var navbar = null;
  if (isDesktop) {
    navbar = <DesktopNavBar />
  }
  return (
    <Outer>
      <LeftSide>
        <Logo href="/">AP</Logo>
      </LeftSide>
      <Burger isDesktop={isDesktop} open={open} setOpen={setOpen} />
      { navbar }
      <Menu open={open} setOpen={setOpen} />
    </Outer>
  );
}

export default NavBarComponent;
