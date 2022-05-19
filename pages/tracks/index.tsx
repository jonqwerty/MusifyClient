import { Button, Card, Grid, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import TrackList from "../../components/TrackList"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import MainLayout from "../../layouts/MainLayout"
import { NextThunkDispatch, wrapper } from "../../store"
import { fetchTracks, searchTracks } from "../../store/actions-creators/track"
import { ITrack } from "../../types/track"

const Index = () => {
  const router = useRouter()
  const { tracks, error } = useTypedSelector((state) => state.track)
  const [query, setQuery] = useState<string>("")
  const dispatch = useDispatch() as NextThunkDispatch

  const [timer, setTimer] = useState(null)

  const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)

    if (timer) {
      clearTimeout(timer)
    }
    setTimer(
      setTimeout(async() => {
        await dispatch(await searchTracks(e.target.value))
      }, 500)
    )
  }

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    )
  }

  return (
    <MainLayout title={"Список треків"}>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треків</h1>
              <Button onClick={() => router.push("/tracks/create")}>Завантажити</Button>
            </Grid>
          </Box>
          <TextField label={"Введіть пошуковий запит"} fullWidth value={query} onChange={search} />
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Index

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
  const dispatch = store.dispatch as NextThunkDispatch
  await dispatch(await fetchTracks())
})
