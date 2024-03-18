import { Stack, Typography, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import hotel from '../../assets/beranda/Andaz Bali.jpeg';
import StarIcon from '@mui/icons-material/Star';

export const BerandaButton = () => {
  return (
    <Card sx={{ width: 490, height: 435, borderRadius: '50px 0 50px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
    <CardActionArea>
      <Stack style={{ position: 'absolute', top: 0, right: 0, background: 'var(--Primary-01, linear-gradient(270deg, #ff8702 0%, #FF010C 100%))', color: 'white', padding: '8px', borderRadius: '0 0 0 15px' }}>
        <Stack direction={'row'} gap={1}><StarIcon/> <Typography>4.5</Typography></Stack>
      </Stack>
      <CardMedia component="img" height='350' width='600' image={hotel} alt="Hotel" sx={{borderRadius: '0 0 30px'}}/>
      <CardContent>
        <Stack sx={{
          height: '225px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between'
        }}>
          <Stack>
            <Typography sx={{
              color: '#04214c',
              fontSize: '35px',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontWeight: '500',
            }}>
             Andaz Bali
            </Typography>
          </Stack>
          <Stack>

          </Stack>
        </Stack>
      </CardContent>
    </CardActionArea>
  </Card>
  );
};
