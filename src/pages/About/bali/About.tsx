import { useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import bali from '../../../assets/aboutbali.jpg';
import RowAndColumnSpacing from '../../../components/beranda/ayojalan';
import Balimenunggu  from '../../../components/beranda/balimenunggu';
import { areapopuler } from './AboutData'
import balitext from '../../../assets/about/Bali.svg'
import sampaiberjumpa from '../../../assets/about/sampaiberjumpa.png'
import berandaData from './AboutData';
import nusapenida from '../../../assets/about/nusapenida.jpg'
export default function Beranda() {

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.marginTop = '-120px';
  }, []);

  return (
    <Stack sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '0px',
    }} gap={0}>
      
      <Stack sx={{
        backgroundImage: `linear-gradient(180deg, transparent 56.5%, #04214C 100%), url(${bali})`,
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
          <img src={balitext}>
          </img>
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
                Bali adalah tempat yang sungguh luar biasa dan penuh petualangan menarik! Bayangkan pulau tropis yang dipenuhi dengan pantai-pantai yang indah, ombak yang sempurna untuk berselancar, dan matahari yang selalu bersinar cerah.
        </Typography>
        <Typography sx={{
          fontWeight: 400,
          color: 'white',
          fontSize: '25px',
          textAlign: 'left',
        }}>
Nggak hanya soal alam dan budaya, Bali juga menjadi tempat yang seru untuk mengeksplorasi kuliner. Kita bisa mencoba makanan lezat seperti nasi goreng, bebek betutu, dan jajanan tradisional lainnya yang pasti akan membuat perut kita senang.        </Typography>
        <Typography sx={{
          fontWeight: 400,
          color: 'white',
          fontSize: '25px',
          textAlign: 'left',
        }}>
Jadi, apakah kalian sudah siap untuk mengunjungi pulau Dewata dan menjelajahi lebih banyak tentang keindahan dan petualangan di Bali?        </Typography>
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
          <Balimenunggu orangeData={berandaData} />
        </Stack>

        <Stack width={'auto'} height={'auto'} marginLeft={'100px'} marginRight={'100px'} marginTop={'30px'}>
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
          <RowAndColumnSpacing recommendationData={areapopuler} />
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
          <img src={sampaiberjumpa}>
          </img>
        </Stack>
        
         
        </Stack>
        <Stack width={'100%'} height={'3px'} marginTop={'-2px'} sx={{background:'white'}}>
        </Stack>
      </Stack>



    </Stack>
  );
}
