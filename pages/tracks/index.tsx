import { Button, Card, Grid } from "@mui/material"
import { Box } from "@mui/system"
import { useRouter } from "next/router"
import React from "react"
import TrackList from "../../components/TrackList"
import MainLayout from "../../layouts/MainLayout"
import { ITrack } from "../../types/track"

const Index = () => {
  const router = useRouter()
  const tracks: ITrack[] = [
    {
      _id: "1",
      name: "track 1",
      artist: "artist 1",
      text: "text 1",
      listens: 4,
      audio: "http://localhost:5000/audio/9ab48df5-60cf-4522-b649-931d25df1602.mp3",
      picture: "659042c2-e3aa-4c47-b49a-94796ceee500.jpeg",
      comments: [],
    },
    {
      _id: "2",
      name: "track 2",
      artist: "artist 2",
      text: "text 2",
      listens: 4,
      audio: "http://localhost:5000/audio/9ab48df5-60cf-4522-b649-931d25df1602.mp3",
      picture: "659042c2-e3aa-4c47-b49a-94796ceee500.jpeg",
      comments: [],
    },
  ]
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треків</h1>
              <Button onClick={() => router.push("/tracks/create")}>Завантажити</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Index
