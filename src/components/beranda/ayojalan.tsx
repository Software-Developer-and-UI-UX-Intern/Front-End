
import Box from '@mui/material/Box';
import Wisata from '../../assets/beranda/GWK.jpg'
import { Stack } from '@mui/material';

// import { Container } from '@mui/material';


export default function RowAndColumnSpacing() {
  return (
    <Box height='385px'  sx={{borderRadius:'40px'}}>
      <Stack width='auto' sx={{ borderRadius:'40px', background: `url(${Wisata}) center center / cover no-repeat`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}}>
      
     <img src={Wisata} width='100%' style={{borderRadius:'40px 0 40px 0'}} >
     
     </img>
     
     </Stack>
    </Box>
  );
}