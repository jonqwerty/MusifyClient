import { Button, Grid, TextField } from "@mui/material"
import { useRouter } from "next/router"
import React from "react"
import MainLayout from "../../layouts/MainLayout"
import { ITrack } from "../../types/track"

const TrackPage = () => {
  const track: ITrack = {
    _id: "1",
    name: "track 1",
    artist: "artist 1",
    text: "text 1",
    listens: 4,
    audio: "http://localhost:5000/audio/9ab48df5-60cf-4522-b649-931d25df1602.mp3",
    picture: "http://localhost:5000/image/659042c2-e3aa-4c47-b49a-94796ceee500.jpeg",
    comments: [],
  }

  const router = useRouter()

  return (
    <MainLayout>
      <Button variant={"outlined"} style={{ fontSize: 32 }} onClick={() => router.push("/tracks")}>
        Повернутися до списку
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={track.picture} width={200} height={200} />
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
        <TextField label="Ваше ім'я" fullWidth />
        <TextField label="Коментар" fullWidth multiline rows={4}/>
        <Button>Відправити</Button>
      </Grid>
      <div>
          {track.comments.map(comment => 
            <div>
                <div>Автор - {comment.username}</div>
                <div>Коментар - {comment.text}</div>
            </div>

            )}
      </div>
    </MainLayout>
  )
}

export default TrackPage
