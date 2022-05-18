import { Container } from "@mui/material"
import Head from "next/head"
import React from "react"
import NavBar from "../components/NavBar"
import Player from "../components/Player"

interface MainLayoutProps {
  title?: string
  description?: string
  keywords?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title || "Музична платформа"}</title>
        <meta name="description" content={"Супер музична платформа" + description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || "tracks, music"} />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Head>
      <NavBar />
      <Container style={{ margin: "90px auto" }}>{children}</Container>
      <Player />
    </>
  )
}

export default MainLayout
