import { useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import './Restoran.css';
import call from '../../assets/restoran/call.svg';
import List from '../../components/restoran/list';

interface OlehData {
  nama: string;
  gambar_url1: string;
  gambar_url2: string;
  gambar_url3: string;
  tiket_masuk: string;
  harga: string;
  description: string;
  domisili: string;
  alamat_gbr: string;
  link_menu: string;
  makanan: string;
  minuman: string;
  telfon: string;
}

export default function Oleh() {
  const [data, setData] = useState<OlehData | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  useEffect(() => {
  document.body.style.marginTop = '0px';
  window.scrollTo(0, 0);
}, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const textContent = searchParams.get('kesiniyuk');
        if (!textContent) {
          throw new Error('Text content not found in query parameters');
        }
        const response = await fetch(`https://tripselbe.fly.dev/restoran/${encodeURIComponent(textContent)}`);
        const result = await response.json();
        if (result) {
          setData(result);
          setImageLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleMenuClick = () => {
    if (data && data.link_menu) {
      let fullURL = data.link_menu.trim();
      // Check if the link_menu starts with http:// or https://
      const isAbsoluteURL = /^https?:\/\//i.test(fullURL);
      if (!isAbsoluteURL) {
        // Prepend http:// to make it an absolute URL
        fullURL = `http://${fullURL}`;
      }
      // Open the link in a new tab
      window.open(fullURL, '_blank');
    }
  };
  
  // Display gray placeholders until data is loaded or data is empty
  if (!data) {
    return (
      <Stack gap={3}>
        <Stack direction={'row'} gap={3} width={'100%'}>
          <Stack height={'510px'} width={'50%'} className='loading'></Stack>
          <Stack direction={'column'} gap={4} width={'50%'}>
            <Stack height={'240px'} width={'100%'} className='loading'></Stack>
            <Stack height={'240px'} width={'100%'} className='loading'></Stack>
          </Stack>
        </Stack>

        <Stack gap={3} marginLeft={'80px'} marginRight={'80px'}>
          <Typography fontFamily={'TelkomselBatikBold'} fontSize={'50px'} color={'#04214C'}>
            Loading...
          </Typography>
          <Stack gap={3} direction={'row'}>
            <Stack
              flexWrap={'wrap'}
              sx={{
                width: 'auto',
                height: '70px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '40px',
                background: 'white',
                color: 'red',
                cursor: 'pointer',
                boxShadow: '0px 0px 0px 2px red',
                padding: '0px 40px',
              }}
            >
              <Typography noWrap fontSize={'24px'} sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                Loading...
              </Typography>
            </Stack>
            <Stack
              flexWrap={'wrap'}
              sx={{
                width: 'auto',
                height: '70px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '40px',
                background: 'white',
                color: 'red',
                cursor: 'pointer',
                boxShadow: '0px 0px 0px 2px red',
                padding: '0px 40px',
              }}
            >
              <Typography noWrap fontSize={'24px'} sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                Loading...
              </Typography>
            </Stack>
          </Stack>
          <Typography fontSize={'32px'} textAlign={'justify'} color={'#04214C'}>
            Loading...
          </Typography>
          <Typography fontSize={'42px'} fontWeight={600} color={'#FF010C'}>
            Loading...
          </Typography>
          <Stack width={'100%'} height={'600px'} className='loading' sx={{
            background:'gray',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           borderRadius: '0px 40px',
        }}/>
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack gap={3}>
      <Stack direction={'row'} gap={3} width={'100%'}>
        <Stack height={'510px'} width={'50%'} className='loading' sx={{ backgroundColor: imageLoading || !data.gambar_url1 ? 'lightgray' : 'inherit' }}>
          {!imageLoading && data.gambar_url1 && (
            <img
              src={data.gambar_url1}
              onLoad={() => setImageLoading(false)}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt="Image1"
            />
          )}
        </Stack>
        <Stack direction={'column'} gap={4} width={'50%'}>
          <Stack height={'240px'} width={'100%'} className='loading' sx={{ backgroundColor: imageLoading || !data.gambar_url2 ? 'lightgray' : 'inherit' }}>
            {!imageLoading && data.gambar_url2 && (
              <img
                src={data.gambar_url2}
                onLoad={() => setImageLoading(false)}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                alt="Image2"
              />
            )}
          </Stack>
          <Stack height={'240px'} width={'100%'} className='loading' sx={{ backgroundColor: imageLoading || !data.gambar_url3 ? 'lightgray' : 'inherit' }}>
            {!imageLoading && data.gambar_url3 && (
              <img
                src={data.gambar_url3}
                onLoad={() => setImageLoading(false)}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                alt="Image3"
              />
            )}
          </Stack>
        </Stack>
      </Stack>

      <Stack gap={3} marginLeft={'80px'} marginRight={'80px'}>
        <Typography fontFamily={'TelkomselBatikBold'} fontSize={'50px'} color={'#04214C'}>
          {data.nama || 'Loading...'}
        </Typography>
        <Stack gap={3} direction={'row'}>
          <Stack direction={'row'}  gap={2}>
            <Stack sx={{
            backgroundImage: 'linear-gradient(to top right, #FF0025, #F9A12D)',
            width: '70px',
            height: '70px',
            borderRadius:'40px',
            justifyContent:'center',
            alignItems:'center'
            }}>
            <Typography textAlign={'center'} fontSize={'32px'} color={'white'} fontWeight={800}>Rp</Typography>
            </Stack>
            <Stack sx={{
              justifyContent:'center',
              alignItems:'center'
            }}>
            <Typography noWrap fontSize={'32px'} color={'#04214C'} sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
              {`${data.harga || 'Loading...'}`}
            </Typography>
            </Stack>
            </Stack>
            <Stack direction={'row'} gap={2} sx={{
              justifyContent:'center',
              alignItems:'center',
            }}>
               <Stack sx={{
            backgroundImage: 'linear-gradient(to top right, #FF0025, #F9A12D)',
            width: '70px',
            height: '70px',
            borderRadius:'40px',
            justifyContent:'center',
            alignItems:'center'
            }}>
            <img src={call}></img>
            </Stack>
            
            <Typography noWrap fontSize={'32px'} color={'#04214C'} sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
              {`${data.telfon || 'Loading...'}`}
            </Typography>
            </Stack>
        </Stack>
        <Typography fontSize={'32px'} textAlign={'justify'} color={'#04214C'}>
          {data.description || 'Loading...'}
        </Typography>
        <Typography fontSize={'42px'} fontWeight={600} color={'#FF010C'}>
          Menu
        </Typography>
        <Typography fontSize={'32px'} textAlign={'justify'} color={'#04214C'}>
        Berikut adalah menu dari restoran ini.
        </Typography>
        <Stack direction={'row'} gap={'30px'}>
        <List restaurantName={data.nama} menuType="makanan"/>
        <List restaurantName={data.nama} menuType="minuman"/>
        </Stack>
        <Stack justifyContent={'center'} alignItems={'center'} >
        <Stack width={'386px'} height={'100px'} borderRadius={'40px'} justifyContent={'center'} alignItems={'center'} sx={{background:'linear-gradient(65deg, #FF0025 23.51%, #F9A12D 81.92%)', cursor:'pointer'}}  onClick={handleMenuClick}>
        <Typography fontSize={'42px'} color={'white'} fontWeight={700}>Menu Lengkap</Typography>
        </Stack>
        </Stack>
        <Typography fontSize={'42px'} fontWeight={600} color={'#FF010C'}>
          Alamat
        </Typography>
        <Stack width={'100%'} height={'600px'} className='loading' sx={{
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           borderRadius: '0px 40px',
        }}>
          <iframe src={data.alamat_gbr}
           width="100%" height="100%" className='loading' frameBorder={'0px'} style={{borderRadius:'0px 40px'}}></iframe>
        </Stack>
      </Stack>
    </Stack>
  );
}
