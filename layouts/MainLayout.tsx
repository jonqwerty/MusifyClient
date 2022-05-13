import { Container } from "@mui/material"
import React from "react"
import NavBar from "../components/NavBar"
import Player from "../components/Player"

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container style={{ margin: "90px auto" }}>{children}</Container>
      <Player />
    </>
  )
}

export default MainLayout
