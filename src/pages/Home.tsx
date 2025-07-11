import { useEffect, useState } from "react";
import { fetchVideos, fetchShorts } from "../services/youtubeAPI";
import VideoGrid from "../components/VideoGrid";
import ShortsSection from "../components/ShortsSection";
import { Box, Container } from "@mui/material";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    fetchVideos().then(setVideos);
    fetchShorts().then(setShorts);
  }, []);

  return (
    <Box sx={{ ml: 30, mt: 2 }}>
      <Container>
        <VideoGrid videos={videos} />
        <ShortsSection shorts={shorts} />
      </Container>
    </Box>
  );
}