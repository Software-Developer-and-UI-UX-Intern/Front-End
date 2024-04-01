import { useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import Dragablealamat from '../../components/oleholeh/dragablealamat';

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

useEffect(() => {
  const fetchData = async () => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const textContent = searchParams.get('kesiniyuk'); // Replace 'Oleh 5' with the actual query parameter name
      if (!textContent) {
        throw new Error('Text content not found in query parameters');
      }
      const response = await fetch(`https://tripselbe.fly.dev/oleh/${encodeURIComponent(textContent)}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Stack gap={3}>
      <Stack direction={'row'} gap={3} width={'100%'}>
        <Stack height={'510px'} width={'50%'} sx={{ background: `url(${data.gambar_url1}) center center / cover no-repeat`, backgroundSize: 'cover' }}></Stack>
        <Stack direction={'column'} gap={4} width={'50%'}>
          <Stack height={'240px'} width={'100%'} sx={{ background: `url(${data.gambar_url2}) center center / cover no-repeat`, backgroundSize: 'cover' }}></Stack>
          <Stack height={'240px'} width={'100%'} sx={{ background: `url(${data.gambar_url3}) center center / cover no-repeat`, backgroundSize: 'cover' }}></Stack>
        </Stack>
      </Stack>

      <Stack gap={3} marginLeft={'80px'} marginRight={'80px'}>
        <Typography fontFamily={'TelkomselBatikBold'} fontSize={'50px'} color={'#04214C'}>
          {data.nama}
        </Typography>
        <Stack gap={3} direction={'row'}>
          <Stack flexWrap={'wrap'} sx={{ width: 'auto', height: '70px', justifyContent: 'center', alignItems: 'center', borderRadius: '40px', background: 'white', color: 'red', cursor: 'pointer', boxShadow: '0px 0px 0px 2px red', padding: '0px 40px' }}>
            <Typography noWrap fontSize={'24px'} sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
              Tiket Masuk : {data.tiket_masuk}
            </Typography>
          </Stack>
          <Stack flexWrap={'wrap'} sx={{ width: 'auto', height: '70px', justifyContent: 'center', alignItems: 'center', borderRadius: '40px', background: 'white', color: 'red', cursor: 'pointer', boxShadow: '0px 0px 0px 2px red', padding: '0px 40px' }}>
            <Typography noWrap fontSize={'24px'} sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
              Parkir : {data.parkir}
            </Typography>
          </Stack>
        </Stack>
        <Typography fontSize={'32px'} textAlign={'justify'} color={'#04214C'}>
          {data.description}
        </Typography>
        <Typography fontSize={'42px'} fontWeight={600} color={'#FF010C'}>
          Alamat
        </Typography>
        <Dragablealamat />
      </Stack>
    </Stack>
  );
}
