import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import { Video } from '../types';

const VideoSection = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      setVideos(res.data.items);
    };
    fetchVideos();
  }, []);

  return (
    <Grid container spacing={2} sx={{ mt: 10, ml: 25, pr: 2 }}>
      {videos.map((video) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={video.id}>
          <Card>
            <CardMedia
              component="img"
              height="180"
              image={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <CardContent>
              <Typography variant="subtitle2">{video.snippet.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoSection;