import { Button } from "@mui/material"
import React from "react"
import NavBar from "../components/NavBar"
import MainLayout from "../layouts/MainLayout"

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Musify</h1>
          <h3>
            Мюсіфай — стримінговий сервіс потокового аудіо, що дозволяє прослуховувати музичні
            композиції та подкасти. 
          </h3>
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
