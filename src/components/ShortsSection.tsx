import { Box, Typography, Card, CardMedia } from "@mui/material";

interface Props {
  shorts: any[];
}

export default function ShortsSection({ shorts }: Props) {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Shorts
      </Typography>
      <Box sx={{ display: "flex", overflowX: "scroll", gap: 2 }}>
        {shorts.map((short) => (
          <Card sx={{ minWidth: 200 }} key={short.id.videoId}>
            <CardMedia
              component="img"
              height="240"
              image={short.snippet.thumbnails.high.url}
              alt={short.snippet.title}
            />
          </Card>
        ))}
      </Box>
    </Box>
  );
}