import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material"
import { Grid, IconButton } from "@mui/material"
import React from "react"
import styles from "../styles/Player.module.scss"
import { ITrack } from "../types/track"
import TrackProgress from "./TrackProgress"

const Player = () => {
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
  const active = false
  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {!active ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid container direction="column" style={{ width: 200, margin: "0 20px" }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  )
}

export default Player
