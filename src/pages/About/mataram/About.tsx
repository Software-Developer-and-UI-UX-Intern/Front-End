import { useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import bali from '../../../assets/about/mataram/header.jpg';
// import RowAndColumnSpacing from '../../../components/about/dragablealamat';
import Balimenunggu  from '../../../components/about/ayokunjungi';
import nusapenida from '../../../assets/about/mataram/footer.jpg'
import '../../../assets/font/telkomselbatik.css'
export default function Beranda() {

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.marginTop = '-120px';
    // window.scrollTo(0, 0);
  }, []);

  return (
    <Stack sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '0px',
    }} gap={0}>
      
      <Stack sx={{
        backgroundImage: `linear-gradient(180deg, transparent 30.5%, #04214C 100%), url(${bali})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        height: '527px',
        justifyContent: 'center',
        width: '100%',
        margin: '0',
      }}>
        <Stack justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
          <Typography fontSize={'82px'} color={'#fff'} fontFamily={'TelkomselBatikBold'}>Mataram</Typography>
        </Stack>
      </Stack>
      <Stack sx={{
        display: 'flex',
        height: 'auto',
        width: '100%',
        margin: '0',
        marginTop:'-1px',
        backgroundColor: '#04214c',
        borderRadius: '0 0 100px 100px',
        paddingBottom:'80px'
      }}>
<Stack gap={4} marginLeft={'145px'} marginRight={'145px'} >
        <Typography sx={{
          fontWeight: 400,
          color: 'white',
          fontSize: '25px',
          textAlign: 'left',
        }}>
Flores, pulau cantik di Indonesia yang terletak di Nusa Tenggara Timur, punya segudang keajaiban alam dan budaya menarik! Bayangkan pantai indah, gunung hijau, dan desa-desa tradisional yang penuh pesona.        </Typography>
        <Typography sx={{
          fontWeight: 400,
          color: 'white',
          fontSize: '25px',
          textAlign: 'left',
        }}>
Di Flores, kita bisa menjelajahi kehidupan bawah laut yang memukau dengan ikan-ikan warna-warni. Selain itu, budaya masyarakat Flores yang ramah dan hangat membuat pengalaman kita semakin istimewa.       </Typography> 
<Typography sx={{
          fontWeight: 400,
          color: 'white',
          fontSize: '25px',
          textAlign: 'left',
        }}>
Jangan lupa mencicipi makanan lezat Flores seperti ikan bakar dan jajanan tradisional yang menggoda selera. Ayo jelajahi sekarang!</Typography>
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

          <Stack>
          <Typography sx={{
            fontWeight: 700,
            color: '#ff010c',
            fontSize: '60px',
            paddingTop: '50px',
            paddingBottom: '30px',
            textAlign: 'center'
          }}>
            Ayo Kunjungi
          </Typography>
          <Balimenunggu domisili='mataram'/>
        </Stack>

        {/* <Stack width={'auto'} height={'auto'} marginLeft={'100px'} marginRight={'100px'} marginTop={'30px'}>
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
          <RowAndColumnSpacing domisili='mataram' />
        </Stack> */}
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
          <Typography fontSize={'70px'} color={'#04214C'} fontFamily={'TelkomselBatikBold'}>Sampai Berjumpa Di Mataram!</Typography>
        </Stack>
        
         
        </Stack>
        <Stack width={'100%'} height={'3px'} marginTop={'-2px'} sx={{background:'white'}}>
        </Stack>
      </Stack>



    </Stack>
  );
}
