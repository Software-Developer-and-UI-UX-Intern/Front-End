import { useEffect } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import bali from '../../../assets/hotel/bali/up.png';
import RowAndColumnSpacing from '../../../components/about/dragablealamat';
import Balimenunggu  from '../../../components/about/ayokunjungi';
import nusapenida from '../../../assets/about/nusapenida.jpg'
import '../../../assets/font/telkomselbatik.css'
export default function Hotel() {

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.marginTop = '-120px';
    // window.scrollTo(0, 0); // Scroll to the top of the page when the component is mounted or navigation occurs
  }, []);

  return (
    <Stack sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      marginLeft: '0px',
    }} gap={0}>
      
      <Stack sx={{
        backgroundImage: `linear-gradient(180deg, transparent 50%, #FFF 100%), url(${bali})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        height: '1024px',
        justifyContent: 'start',
        width: '100%',
        margin: '0',
      }}>
        <Stack  marginLeft={'145px'} marginTop={'250px'}>
        <Typography fontSize={'82px'} fontFamily={'TelkomselBatikBold'} color={'#FFF'}>Selamat datang di Bali!</Typography>
        <Typography fontSize={'32px'} color={'#FFF'} maxWidth={'924px'}>Yuk, cari rekomendasi Hotel dengan harga spesial hanya buat T-Flyers lho.</Typography>
        <Stack justifyContent={'center'} alignItems={'center'} paddingTop={'275px'}>
        <Button sx={{width:'500px', height:'100px',boxShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.25)',borderRadius:'100px', color:'white',fontSize:'44px', fontWeight:700,     background: 'linear-gradient(360deg, #fb8c2a, #FF010C)'}}>Cek Rekomendasi</Button>
        </Stack>
        </Stack>
      </Stack>

      <Stack sx={{
        display: 'flex',
        height: 'auto',
        width: '100%',
        paddingTop: '50px',
        paddingBottom:'50px',
        backgroundColor: 'white',
      }}>

        <Stack sx={{
          height: 'auto',
          width: '100%',
          backgroundColor: 'white',
        }}>

          <Stack >
          <Typography sx={{
            fontWeight: 700,
            color: '#ff010c',
            fontSize: '60px',
            paddingTop: '50px',
            textAlign: 'center',
            font:'TelkomselBatikBold'
          }}>
            Temukan Rekomendasi Hotel
          </Typography>
          <Typography sx={{
            fontWeight: 500,
            color: '#04214C',
            fontSize: '38px',
            paddingBottom: '42px',
            textAlign: 'center'
          }}>
          Rekomendasi kami hanya untuk T-Flyers
          </Typography>
          <Balimenunggu domisili='bali'/>
        </Stack>

        <Stack width={'auto'} height={'auto'} marginLeft={'100px'} marginRight={'100px'} marginTop={'30px'} sx={{backgroundColor:'transparent'}}>
        <Typography sx={{
            fontWeight: 700,
            color: '#ff010c',
            fontSize: '60px',
            paddingTop: '50px',
            paddingBottom: '30px',
            textAlign: 'center'
          }}>
            Area Populer
          </Typography>
          <RowAndColumnSpacing domisili='bali' />
        </Stack>
        </Stack>
      </Stack>

      <Stack sx={{
        display: 'flex',
        height: 'auto',
        width: '100%',
        margin: '0',
        borderRadius: '100px 100px 0 0',
      }}>
        <Stack sx={{
        backgroundImage: `linear-gradient(180deg, transparent 0%, white 100%), url(${nusapenida})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        height: '554px',
        justifyContent: 'center',
        width: '100%',
        margin: '0',
      }}>
        <Stack justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
          <Typography fontSize={'90px'} fontFamily={'TelkomselBatikBold'} color={'#04214C'}>Sampai berjumpa di Bali!</Typography>
        </Stack>
        
         
        </Stack>
        <Stack width={'100%'} height={'3px'} marginTop={'-2px'} sx={{background:'white'}}>
        </Stack>
      </Stack>



    </Stack>
  );
}
