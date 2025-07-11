import React from 'react';
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';

const ShortsSection = () => {
  const shorts = Array.from({ length: 6 }, (_, i) => ({
    title: `Short #${i + 1}`,
    thumbnail: `https://picsum.photos/200/300?random=${i + 1}`
  }));

  return (
    <Box sx={{ mt: 5, ml: 25 }}>
      <Typography variant="h6" gutterBottom>
        Shorts
      </Typography>
      <Grid container spacing={2}>
        {shorts.map((short, idx) => (
          <Grid item xs={6} sm={4} md={2} key={idx}>
            <Card>
              <CardMedia component="img" image={short.thumbnail} alt={short.title} />
              <Typography sx={{ p: 1 }} variant="body2">{short.title}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShortsSection;