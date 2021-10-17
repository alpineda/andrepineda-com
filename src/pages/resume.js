import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NavBar from "../components/navbar.js"

import ResumeFile from "../assets/Andre Pineda Resume 2.pdf"

const Viewer = styled.embed`
  width: 100%;
	padding: 0;
	margin: 0;
`;

const getHeight = () => window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

export default function Resume() {
  document.title = "My Resume | Andre Pineda";

	let [viewportHeight, setViewportHeight] = useState(getHeight());

  useEffect(() => {
    const resizeListener = () => { setViewportHeight(getHeight()) }
    window.addEventListener('resize', resizeListener);
    return () => { window.removeEventListener('resize', resizeListener); }
  }, [])

  return (
    <>
      <NavBar />
      <Viewer src={ResumeFile} height={viewportHeight-130} alt="resume"/>
    </>
  )
}
