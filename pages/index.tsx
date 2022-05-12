import { Button } from "@mui/material"
import React from "react"
import NavBar from "../components/NavBar"
import MainLayout from "../layouts/MainLayout"

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Привіт!</h1>
          <h3>Тут зібрані мега треки!</h3>
        </div>
        <style jsx>
          {`
            .center {
              margin-top: 150px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </MainLayout>
    </>
  )
}

export default Index
