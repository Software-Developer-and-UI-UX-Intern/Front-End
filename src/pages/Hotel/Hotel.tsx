import { useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import DragableFasilitas from '../../components/hotel/dragableFasilitas';
import { Icon } from '@iconify/react';

interface HotelData {
  gambar_url1: string;
  gambar_url2: string;
  gambar_url3: string;
  nama: string;
  harga: string;
  lokasi: string;
  domisili: string;
  telfon: string;
  jarak: string;
  alamat: string;
  bintang: string;
  fasilitas: string;
}

export default function Hotel() {
  const [hotelData, setHotelData] = useState<HotelData | null>(null);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const textContent = searchParams.get('kesiniyuk');
        if (!textContent) {
          throw new Error('Text content not found in query parameters');
        }
        const response = await fetch(`https://tripselbe.fly.dev/hotels/${encodeURIComponent(textContent)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch hotel data');
        }
        const data = await response.json();
        setHotelData(data);
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      }
    };

    fetchHotelData();
  }, []);

  if (!hotelData) {
    return <div>Loading...</div>;
  }

  const { nama, harga, lokasi, telfon, jarak, alamat } = hotelData;

  return (
    <Stack gap={3}>
      <Stack direction={'row'} gap={3} width={'100%'}>
        <Stack height={'510px'} width={'50%'} sx={{
          background: `url(${hotelData.gambar_url1}) center center / cover no-repeat`,
          backgroundSize: 'cover',
        }}>
        </Stack>
        <Stack direction={'column'} gap={4} width={'50%'}>
          <Stack height={'240px'} width={'100%'} sx={{
            background: `url(${hotelData.gambar_url2}) center center / cover no-repeat`,
            backgroundSize: 'cover',
          }}>
          </Stack>
          <Stack height={'240px'} width={'100%'} sx={{
            background: `url(${hotelData.gambar_url3}) center center / cover no-repeat`,
            backgroundSize: 'cover',
          }}>
          </Stack>
        </Stack>
      </Stack>

      <Stack gap={3} marginLeft={'80px'} marginRight={'80px'}>
        <Stack gap={10} direction={'row'} justifyContent={'space-between'}>
          <Typography fontFamily={'TelkomselBatikBold'} fontSize={'50px'} color={'#04214C'}>
            {nama}
          </Typography>
          <Stack direction={'row'}>
            {/* Render star icons */}
            {Array.from({ length: parseInt(hotelData.bintang, 10) }).map((_, starIndex) => (
              <Icon key={starIndex} icon="fluent:star-16-filled" width="70" height="70" style={{ color: '#FF8702' }} />
            ))}
          </Stack>
        </Stack>
        <Stack gap={35} direction={'row'} justifyContent={'space-between'}>
          <Stack flexWrap={'wrap'}
            sx={{
              width: 'auto',
              height: '70px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50px',
              background: 'white',
              color: 'red',
              cursor: 'pointer',
              boxShadow: '0px 0px 0px 2px red',
              padding: '10px 40px',
            }}>

            <Typography noWrap fontSize={'40px'} sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
            }}>
              {harga}
            </Typography>
          </Stack>

          <Stack flexWrap={'wrap'}
            sx={{
              width: 'auto',
              height: '70px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50px',
              background: '#04214C',
              color: 'white',
              cursor: 'pointer',
              padding: '10px 40px',
            }}>
            <Icon icon="fluent:location-48-filled" width="50" height="50" style={{ color: 'white', marginRight: 10 }} />
            <Typography noWrap fontSize={'32px'} sx={{
              fontFamily: 'Poppins',
              fontWeight: 500,
            }}>
              {lokasi}
            </Typography>
          </Stack>
        </Stack>
        <Typography fontSize={'32px'} textAlign={'justify'} color={'red'}>
          Harga khusus T-Flyers!
        </Typography>
        <Stack gap={3} direction={'row'}>
          <Stack>
            <Icon icon="fluent:call-48-filled" width="50" height="50" style={{ color: 'red' }} />
          </Stack>
          <Typography fontWeight={'500'} fontSize={'30px'} color={'#04214C'}>
            {telfon}
          </Typography>
        </Stack>
        <Stack gap={3} direction={'row'}>
          <Icon icon="solar:route-bold" width="50" height="50" style={{ color: 'red' }} />
          <Typography fontWeight={'500'} fontSize={'30px'} color={'#04214C'}>
            {jarak} ke TSO {lokasi}
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
          <iframe src={alamat}
            width="100%" height="100%" className='loading' frameBorder={'0px'} style={{ borderRadius: '0px 30px' }}></iframe>
        </Stack>
      </Stack>
    </Stack>
  );
}
