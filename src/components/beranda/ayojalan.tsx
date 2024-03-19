import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography, Grid } from '@mui/material';

interface Recommendation {
  id: number;
  name: string;
  provinsi: string;
  image: string;
}

export default function RowAndColumnSpacing() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    fetch('https://tripselbe.fly.dev/recommendationwisata')
      .then(response => response.json())
      .then((data: Recommendation[]) => setRecommendations(data))
      .catch(error => console.error('Error fetching recommendations:', error));
  }, []);

  return (
    <Grid container rowSpacing={5} columnSpacing={5} alignItems='center' justifyContent='center' borderRadius='40px'>
      {recommendations.map(recommendation => (
        <Grid item key={recommendation.id} xs={6}>
          <Box height='385px' sx={{ borderRadius: '40px' }}>
            <Stack width='100%' sx={{
              borderRadius: '40px',
              background: `url(${recommendation.image}) center center / cover no-repeat`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>

              <img src={recommendation.image} alt={recommendation.name} width='100%' style={{ borderRadius: '40px 0 40px 0' }} />

              <Stack marginTop={'-80px'} justifyContent={'center'} alignItems={'center'} paddingBottom={'20px'}>
                <Typography color={'white'} sx={{ fontSize: '32px', fontWeight: 500 }}>
                  {recommendation.name}
                </Typography>
                <Typography color={'white'} sx={{ fontSize: '28px', fontWeight: 500 }}>
                  {recommendation.provinsi}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
