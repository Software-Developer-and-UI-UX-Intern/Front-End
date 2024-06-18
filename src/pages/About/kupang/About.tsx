import { useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import bali from '../../../assets/about/kupang/header.png';
// import RowAndColumnSpacing from '../../../components/about/dragablealamat';
import Balimenunggu  from '../../../components/about/ayokunjungi';
import nusapenida from '../../../assets/about/kupang/footer.png'
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
          <Typography fontSize={'82px'} color={'#fff'} fontFamily={'TelkomselBatikBold'}>Kupang</Typography>
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
Kupang terletak di Nusa Tenggara Timur, Indonesia. Di sini, kita bisa menjelajahi alam liar yang menakjubkan, seperti pegunungan yang hijau dan air terjun yang menawan. Selain itu, Kupang juga memiliki kehidupan laut yang kaya, sehingga snorkeling atau menyelam di sini pasti akan menjadi pengalaman yang tak terlupakan.        </Typography>
        <Typography sx={{
          fontWeight: 400,
          color: 'white',
          fontSize: '25px',
          textAlign: 'left',
        }}>
Tapi, Kupang tidak hanya tentang keindahan alamnya. Kota ini juga memiliki budaya yang unik dan menarik. Ada tarian tradisional, musik khas, dan festival-festival yang seru untuk diikuti.        </Typography>  <Typography sx={{
          fontWeight: 400,
          color: 'white',
          fontSize: '25px',
          textAlign: 'left',
        }}>
Apakah T-Flyers sudah siap mengunjungi Kupang? Ayo jelajahi tempat-tempat khusus hanya untuk kamu!.  </Typography></Stack>
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
          <Balimenunggu domisili='kupang'/>
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
          <RowAndColumnSpacing domisili='kupang' />
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
          <Typography fontSize={'70px'} color={'#04214C'} fontFamily={'TelkomselBatikBold'}>Sampai Berjumpa Di Kupang!</Typography>
        </Stack>
        
         
        </Stack>
        <Stack width={'100%'} height={'3px'} marginTop={'-2px'} sx={{background:'white'}}>
        </Stack>
      </Stack>



    </Stack>
  );
}
