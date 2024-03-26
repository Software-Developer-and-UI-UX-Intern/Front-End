import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography, Grid } from '@mui/material';

interface Recommendation {
  id: number;
  name: string;
  provinsi: string;
  image: string;
}

interface RowAndColumnSpacingProps {
  backendLink?: string; // Optional prop for providing the backend link
  recommendationData?: Recommendation[]; // Optional prop for providing data from a .ts file
}

export default function RowAndColumnSpacing({ backendLink, recommendationData }: RowAndColumnSpacingProps) {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    if (recommendationData) {
      // If recommendationData is provided, use it
      setRecommendations(recommendationData);
    } else if (backendLink) {
      // If backendLink is provided, fetch data from the backend
      fetch(backendLink)
        .then(response => response.json())
        .then((data: Recommendation[]) => setRecommendations(data))
        .catch(error => console.error('Error fetching recommendations:', error));
    }
  }, [backendLink, recommendationData]); // Ensure useEffect runs when backendLink or recommendationData changes

  return (
    <Grid container rowSpacing={5} columnSpacing={5} alignItems='center' justifyContent='center' borderRadius='40px'>
      {recommendations.map(recommendation => (
        <Grid item key={recommendation.id} xs={'auto'}>
          <Box height='auto' sx={{ borderRadius: '40px' }}>
            <Stack width='584px' height={'390px'} sx={{ borderRadius: '40px' }}>
              <img src={recommendation.image} alt={recommendation.name} width='100%' height={'100%'} style={{ borderRadius: '40px 0 40px 0' }} />
              <Stack marginTop={'-100px'} justifyContent={'center'} alignItems={'center'} paddingBottom={'20px'}>
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
