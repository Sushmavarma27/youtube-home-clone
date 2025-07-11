import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

interface VideoProps {
  videos: any[];
}

export default function VideoGrid({ videos }: VideoProps) {
  return (
    <Grid container spacing={2}>
      {videos.map((video) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={video.id.videoId}>
          <Card>
            <CardMedia
              component="img"
              height="180"
              image={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />
            <CardContent>
              <Typography variant="body1">{video.snippet.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}