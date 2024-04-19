import { useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
// import CallIcon from '@mui/icons-material/Call';
// import DirectionsIcon from '@mui/icons-material/Directions';
// import StarRateIcon from '@mui/icons-material/StarRate';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
import krisna1 from '../../assets/oleholeh/krisnaoleh.png';
import '../../assets/font/telkomselbatik.css'
import DragableFasilitas from '../../components/hotel/dragableFasilitas';
import { Icon } from '@iconify/react';


export default function Hotel() {

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

    <Stack gap={3} marginLeft={'80px'} marginRight={'80px'} >
      <Stack gap={10} direction={'row'}>
        <Typography fontFamily={'TelkomselBatikBold'}  fontSize={'50px'} color={'#04214C'}>
          Puri Sari Beach Hotel
        </Typography>
        <Stack  direction={'row'}>
        <Icon icon="fluent:star-48-filled" width="56" height="56"  style={{color: '#FF8702', marginLeft: '350px', marginTop: '20px'}}/>
        <Icon icon="fluent:star-48-filled" width="56" height="56"  style={{color: '#FF8702', marginLeft: '10px', marginTop: '20px'}}/>
        <Icon icon="fluent:star-48-filled" width="56" height="56"  style={{color: '#FF8702', marginLeft: '10px', marginTop: '20px'}}/>
        <Icon icon="fluent:star-12-regular" width="56" height="56"  style={{color: '#FF8702', marginLeft: '10px', marginTop: '20px'}}/>
        <Icon icon="fluent:star-12-regular" width="56" height="56"  style={{color: '#FF8702', marginLeft: '10px', marginTop: '20px'}}/>
        {/* <StarRateIcon fontSize='large' sx={{color: '#FF8702', marginLeft: 70, marginTop: 3}}/><StarOutlineIcon fontSize='large' sx={{color: '#FF8702', marginTop: 3}}/> */}
        </Stack>
      </Stack>
      <Stack gap={35} direction={'row'}>
        <Stack flexWrap={'wrap'}
                  sx={{
                    width:'auto',
                    height: '70px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50px',
                    background: 'white',
                    color: 'red',
                    cursor: 'pointer',
                    boxShadow: '0px 0px 0px 2px red',
                    padding:'10px 40px',
                  }}>

                  <Typography noWrap fontSize={'40px'} sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                  }}>
                    Rp1.000.000 - Rp5.000.000
                  </Typography>
        </Stack>
      
        <Stack flexWrap={'wrap'}
                  sx={{
                    width:'auto',
                    height: '70px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50px',
                    background: '#04214C',
                    color: 'white',
                    cursor: 'pointer',
                    padding:'10px 40px',
                  }}>
                   
                  <Icon icon="fluent:location-48-filled" width="50" height="50"  style={{color: 'white', marginRight: 10}} /> 
                  <Typography noWrap fontSize={'40px'} sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,  
                  }}>
                    Flores, NTT
                  </Typography>
        </Stack>

      </Stack>
      <Typography fontSize={'32px'} textAlign={'justify'} color={'red'}>
      Harga khusus T-Flyers!
      </Typography>

      <Stack gap={3} direction={'row'}>
      <Stack>
      <Icon icon="fluent:call-48-filled" width="50" height="50" style={{color: 'red'}}/>
      </Stack>

                <Typography fontWeight={'500'} fontSize={'30px'} color={'#04214C'}>
                (0370) 7505000
                </Typography>
      </Stack>

      <Stack gap={3} direction={'row'}>
      <Icon icon="solar:route-bold" width="50" height="50"  style={{color: 'red'}} />

                <Typography fontWeight={'500'} fontSize={'30px'} color={'#04214C'}>
                4.1 km ke TSO Flores, NTT
                </Typography>
      </Stack>

      <Typography fontSize={'42px'} fontWeight={600} color={'#FF010C'} marginTop={2}>
      Detail Hotel
      </Typography>

      <DragableFasilitas/>


      <Typography fontSize={'42px'} fontWeight={600} color={'#FF010C'} marginTop={2}>
      Alamat
      </Typography>

      <Stack width={'100%'} height={'600px'} className='loading' sx={{
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           borderRadius: '0px 40px',
           justifyContent: 'center',
        }}>
          <iframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.358849437706!2d121.079!3d-8.65738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db2faaaaca888c1%3A0xeef7091c465d0189!2sPuri%20Sari%20Beach%20Hotel!5e0!3m2!1sid!2sid!4v1712308265914!5m2!1sid!2sid'}
            width="100%" height="100%" className='loading' frameBorder={'0px'} style={{borderRadius:'0px 30px'}}></iframe>
        </Stack>
        
      </Stack>      

      

      

    </Stack>
  );
}
