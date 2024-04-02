import { useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import Dragablealamat from '../../components/oleholeh/dragablealamat';
import './Oleh.css';
interface OlehData {
  nama: string;
  gambar_url1: string;
  gambar_url2: string;
  gambar_url3: string;
  tiket_masuk: string;
  parkir: string;
  description: string;
  domisili: string;
}

export default function Oleh() {
  const [data, setData] = useState<OlehData | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const textContent = searchParams.get('kesiniyuk');
        if (!textContent) {
          throw new Error('Text content not found in query parameters');
        }
        const response = await fetch(`https://tripselbe.fly.dev/oleh/${encodeURIComponent(textContent)}`);
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
          <Dragablealamat />
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
              {`Tiket Masuk : ${data.tiket_masuk || 'Loading...'}`}
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
              {`Parkir : ${data.parkir || 'Loading...'}`}
            </Typography>
          </Stack>
        </Stack>
        <Typography fontSize={'32px'} textAlign={'justify'} color={'#04214C'}>
          {data.description || 'Loading...'}
        </Typography>
        <Typography fontSize={'42px'} fontWeight={600} color={'#FF010C'}>
          Alamat
        </Typography>
        <Dragablealamat />
      </Stack>
    </Stack>
  );
}
