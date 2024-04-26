import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Hotel {
  gambar_url1: string;
  nama: string;
  harga: string;
  bintang?: number; // Optional property
  lokasi?: string; // Optional property
  telfon?: string; // Optional property
  jarak?: string; // Optional property
}

export default function ListHotel() {
  const [hotels, setHotels] = useState([] as Hotel[]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch('https://tripselbe.fly.dev/hotels')
      .then(response => response.json())
      .then(data => setHotels(data))
      .catch(error => console.error('Error fetching hotels:', error));
  }, []);

  const handleItemClick = (hotelName: string) => {
    navigate(`/cari-hotel?kesiniyuk=${encodeURIComponent(hotelName)}`);
  };

  return (
    <Stack direction={'column'} height={'auto'} gap={5}>
      {hotels.map((hotel, index) => (
        <Stack key={index} width={'100%'} height={'250px'} borderRadius={'40px 0px'} boxShadow={'0px 0px 20px 0px rgba(0, 0, 0, 0.25)'} direction={'row'} onClick={() => handleItemClick(hotel.nama)}>
          <Stack width={'55%'} height={'100%'} sx={{ background: '#04214C' }} borderRadius={'40px 0px 0px 0px'}>
            {/* Render hotel image */}
            <img src={hotel.gambar_url1} alt="Hotel" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '40px 0px 0px 0px' }} />
          </Stack>
          {/* tengah */}
          <Stack width={'60%'} direction={'column'} paddingLeft={'20px'} justifyContent={'center'} gap={'7px'} paddingTop={'20px'} paddingBottom={'20px'}>
            {/* Render hotel name */}
            <Stack>
            <Typography fontSize={'28px'} fontWeight={500}>{hotel.nama}</Typography>
            {/* Render hotel star rating */}
         {/* Render hotel star rating */}
         <Stack direction={'row'}>
            {hotel.bintang && (
              <>
                {Array.from({ length: hotel.bintang }).map((_, index) => (
                  <Icon key={index} icon="fluent:star-16-filled" width="35" height="35" style={{ color: '#FF8702' }} />
                ))}
              </>
            )}
            </Stack>
            {/* Render hotel location */}
            {hotel.lokasi && (
              <Stack width={'190px'} height={'35px'} borderRadius={'20px'} sx={{ background: '#FF8702' }} justifyContent={'left'} alignItems={'center'} direction={'row'} gap={1} paddingLeft={'10px'} paddingRight={'10px'}>
                <Icon icon="fluent:location-16-filled" width="25" height="25" style={{ color: '#04214C' }} />
                <Typography fontWeight={500} fontSize={'20px'} color={'#04214C'}>{hotel.lokasi}</Typography>
              </Stack>
            )}
            {/* Render hotel phone number */}
            {hotel.telfon && (
              <Stack width={'190px'} height={'35px'} justifyContent={'left'} alignItems={'center'} direction={'row'} gap={1} paddingLeft={'10px'}>
                <Icon icon="fluent:call-16-filled" width="23" height="23" style={{ color: '#04214C' }} />
                <Typography fontWeight={500} fontSize={'20px'} color={'#04214C'}>{hotel.telfon}</Typography>
              </Stack>
            )}
            {/* Render hotel distance */}
            {hotel.jarak && (
              <Stack height={'35px'} justifyContent={'left'} alignItems={'center'} direction={'row'} gap={1} paddingLeft={'10px'}>
                <Icon icon="solar:route-bold" width="23" height="23" style={{ color: '#04214C' }} />
                <Typography fontWeight={500} fontSize={'20px'} color={'#04214C'}>{hotel.jarak}</Typography>
              </Stack>
            )}
            </Stack>
            
          </Stack>

          {/* kanan */}
          <Stack width={'55%'} direction={'row'} justifyContent={'space-between'}>
          <Stack width={'1px'} height={'100%'} sx={{background:'#04214C'}}/>
          <Stack direction={'column'} justifyContent={'center'} paddingRight={'20px'} alignItems={'right'}>
          <Typography fontSize={'22px'} color={'#FF010C'} fontWeight={500} textAlign={'right'}>
            Mulai Dari
          </Typography>
          <Typography fontSize={'32px'} color={'#04214C'} fontWeight={700} textAlign={'right'}>
          {hotel.harga}
          </Typography>
          <Typography fontSize={'12px'} color={'#04214C'} fontWeight={600} textAlign={'right'}>
          Harga spesial untuk T-Flyers
          </Typography>
          </Stack>
          </Stack>

        </Stack>
      ))}
    </Stack>
  );
}
