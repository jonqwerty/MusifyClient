import { Button, Grid, TextField } from "@mui/material"
import axios from "axios"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { useInput } from "../../hooks/useInput"
import MainLayout from "../../layouts/MainLayout"
import { ITrack } from "../../types/track"

const TrackPage = ({ serverTrack }) => {
  const [track, setrTrack] = useState<ITrack>(serverTrack)

  const username = useInput("")
  const text = useInput("")

  const router = useRouter()

  const addComment = async () => {
    try {
      const response = await axios.post("http://localhost:5000/tracks/comment", {
        username: username.value,
        text: text.value,
        trackId: track._id,
      })
      setrTrack({...track, comments: [...track.comments, response.data]})
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <MainLayout>
      <Button variant={"outlined"} style={{ fontSize: 32 }} onClick={() => router.push("/tracks")}>
        Повернутися до списку
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={"http://localhost:5000/" + track.picture} width={200} height={200} />
        <div style={{ marginLeft: 30 }}>
          <h1>Назва треку - {track.name}</h1>
          <h1>Виконавець - {track.artist}</h1>
          <h1>Прослуховувань - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова треку</h1>
      <p>{track.text}</p>
      <h1>Коментарі</h1>
      <Grid>
        <TextField label="Ваше ім'я" fullWidth {...username} />
        <TextField label="Коментар" fullWidth multiline rows={4} {...text} />
        <Button onClick={addCommentЁ}>Відправити</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div>
            <div>Автор - {comment.username}</div>
            <div>Коментар - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}

export default TrackPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get("http://localhost:5000/tracks/" + params.id)
  return {
    props: {
      serverTrack: response.data,
    },
  }
}
