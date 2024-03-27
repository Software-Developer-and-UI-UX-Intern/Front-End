import { useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import krisna1 from '../../assets/oleholeh/krisnaoleh.png';
import '../../assets/font/telkomselbatik.css'
import Dragablealamat from '../../components/oleholeh/dragablealamat';
export default function Oleh() {

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.marginTop = '0px';
  }, []);

  return (
    <Stack gap={3}>
    <Stack  direction={'row'} gap={3} width={'100%'}>
      <Stack height={'510px'}  width={'50%'} sx={{
        background: `url(${krisna1}) center center / cover no-repeat`,
        backgroundSize: 'cover',}}>
      </Stack>
      <Stack  direction={'column'} gap={4} width={'50%'}>
      <Stack height={'240px'} width={'100%'} sx={{
        background: `url(${krisna1}) center center / cover no-repeat`,
        backgroundSize: 'cover',}}>
        </Stack>
        <Stack height={'240px'} width={'100%'} sx={{
        background: `url(${krisna1}) center center / cover no-repeat`,
        backgroundSize: 'cover',}}>
        </Stack>
      </Stack>
    </Stack>

    <Stack gap={3} marginLeft={'80px'} marginRight={'80px'}>
      <Typography fontFamily={'TelkomselBatikBold'}  fontSize={'50px'} color={'#04214C'}>
        Krisna Oleh-Oleh Bali
      </Typography>
      <Stack gap={3} direction={'row'}>
      <Stack flexWrap={'wrap'}
                sx={{
                  width:'auto',
                  height: '70px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '40px',
                  background: 'white',
                  color: 'red',
                  cursor: 'pointer',
                  boxShadow: '0px 0px 0px 2px red',
                  padding:'0px 40px',
                }}
              >
                <Typography noWrap fontSize={'24px'} sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                }}>
                Tiket Masuk : Gratis
                </Typography>
      </Stack>
      <Stack flexWrap={'wrap'}
                sx={{
                  width:'auto',
                  height: '70px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '40px',
                  background: 'white',
                  color: 'red',
                  cursor: 'pointer',
                  boxShadow: '0px 0px 0px 2px red',
                  padding:'0px 40px',
                }}
              >
                <Typography noWrap fontSize={'24px'} sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                }}>
                Parkir : Rp 2.000 - Rp 3.000 
                </Typography>
      </Stack>
      
      </Stack>
      <Typography fontSize={'32px'} textAlign={'justify'} color={'#04214C'}>
      Krisna Bali merupakan toko oleh-oleh terbesar di Bali yang dibangun pada tahun 2007. Pusat oleh-oleh ini menyediakan berbagai macam produk khas Pulau Dewata seperti cemilan, souvenir, fashion, aksesoris, kerajinan tangan, hingga produk kecantikan.
      </Typography>
      <Typography fontSize={'42px'} fontWeight={600} color={'#FF010C'}>
      Alamat
      </Typography>
      <Dragablealamat/>
      </Stack>

    </Stack>
  );
}
