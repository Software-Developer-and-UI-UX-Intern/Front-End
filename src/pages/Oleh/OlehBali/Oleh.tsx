import { useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import balithumb from '../../../assets/oleholeh/bali/baliup.png';
import '../../../assets/font/telkomselbatik.css'
import GridOrange from '../../../components/oleholeh/gridorange'
import GWK from '../../../assets/oleholeh/krisnaoleh.png'
const data = [
  { imageSrc: GWK, textContent: 'Text 1' },
  { imageSrc: GWK, textContent: 'Text 2' },
  { imageSrc: GWK, textContent: 'Text 3' },
];
export default function Oleh() {

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.marginTop = '-120px';
  }, []);

  return (
    <Stack gap={3}>
    <Stack sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '0px',
    }} gap={0}>
      
      <Stack sx={{
        backgroundImage: `linear-gradient(180deg, transparent 50.5%, white 100%), url(${balithumb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        height: '504px',
        justifyContent: 'center',
        width: '100%',
        margin: '0',
      }}>
        <Stack justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
        <Typography fontSize={'70px'} color={'#fff'} fontFamily={'TelkomselBatikBold'}>Oleh-Oleh</Typography>
          <Typography fontSize={'70px'} color={'#fff'} fontFamily={'TelkomselBatikBold'}>Bali</Typography>
        </Stack>
      </Stack>
      <GridOrange Data={data}/>
      </Stack>
    </Stack>
  );
}
