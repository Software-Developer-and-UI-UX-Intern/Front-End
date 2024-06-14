import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Hotel {
  gambar_url1: string;
  nama: string;
  harga: string;
  bintang?: number;
  lokasi?: string;
  telfon?: string;
  jarak?: string;
  thumbnailUrl?: string; // New property for thumbnail image URL
  fasilitas?: string[]; // New property for hotel facilities
  domisili?:string;
}

interface ListHotelProps {
  selectedStars: number[];
  minimal: string;
  maximal: string;
  checkedFasilitas: string[];
  selectedDomisili: string;
}
interface Area {
  jenis: string;
}
export default function ListHotel({ selectedStars, minimal, maximal, checkedFasilitas, selectedDomisili }: ListHotelProps) {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const navigate = useNavigate();
  const [areaData, setAreaData] = useState<Area| null>(null);

  useEffect(() => {
    // Fetch hotels data
    fetch('https://tripselbe.fly.dev/hotels')
      .then(response => response.json())
      .then(async (data: Hotel[]) => {
        const hotelsWithThumbnailsAndFasilitas = await Promise.all(data.map(async (hotel) => {
          const imagesResponse = await fetch(`https://tripselbe.fly.dev/hotel-images/${hotel.nama}`);
          const imagesData = await imagesResponse.json();
          const thumbnailImage = imagesData.find((image: { nama: string; }) => image.nama === 'thumbnail');
          
          // Fetch fasilitas data for the hotel
          const fasilitasResponse = await fetch(`https://tripselbe.fly.dev/hotel-fasilitas/${hotel.nama}`);
          const fasilitasData = await fasilitasResponse.json();
          const fasilitasArray = fasilitasData.map((fasilitas: { nama: string }) => {
            // Convert to lowercase and remove numbers from the string
            return fasilitas.nama.toLowerCase().replace(/\d+/g, '').trim();
          });
          if (hotel.domisili) {
            // Fetch the area data from the backend
            axios.get(`https://tripselbe.fly.dev/area/${hotel.domisili}`)
              .then((response) => {
                setAreaData(response.data);
                console.log(response.data)
              })
              .catch((error) => {
                console.error('Error fetching area data:', error);
              });
          }
          return {
            ...hotel,
            thumbnailUrl: thumbnailImage ? thumbnailImage.url : undefined,
            fasilitas: fasilitasArray  // Add fasilitas array to the hotel object
          };
        }));
        setHotels(hotelsWithThumbnailsAndFasilitas);
        console.log(hotelsWithThumbnailsAndFasilitas);
      })
      .catch(error => console.error('Error fetching hotels:', error));
  }, []);

  const handleItemClick = (hotelName: string) => {
    navigate(`/cari-hotel?kesiniyuk=${encodeURIComponent(hotelName)}`);
  };

  return (
    <Stack direction={'column'} height={'auto'} gap={5}>
      {hotels
      .filter(hotel => selectedStars.length === 0 || selectedStars.includes(Number(hotel.bintang) || 0))
      .filter(hotel => {
        if (!hotel.harga) {
          return false; // Skip hotels without a harga or fasilitas value
        }
        const [minHarga, maxHarga] = hotel.harga
        .replace('Rp ', '') // Remove 'Rp'
        .split('-') // Split into two parts
        .map(part => parseInt(part.replace(/\D/g, ''), 10)); // Remove non-numeric characters and convert to integers
      
      const value1 = isNaN(minHarga) ? 0 : minHarga; // Use 0 if NaN
      const value2 = isNaN(maxHarga) ? 0 : maxHarga; // Use 0 if NaN
      
      // Rest of the code remains the same
      const min = Number(minimal.replace(/\./g, '')); // Remove '.' from minimal and convert to number
      const max = Number(maximal.replace(/\./g, '')); // Remove '.' from maximal and convert to number
      console.log([value1, value2]); // Log the harga values
        return (!minimal || value1 >= min && value2 >= min) && (!maximal || value2 <= max && value1 <= max); // Check harga range
      })
      .filter(hotel => checkedFasilitas.length === 0 || 
        checkedFasilitas.every(fasilitas => hotel.fasilitas && hotel.fasilitas.includes(fasilitas))
      )
      .filter(hotel => selectedDomisili.length === 0 || selectedDomisili.includes(hotel.domisili || ''))
        .map((hotel, index) => (
          <Stack key={index} width={'100%'} height={'250px'} borderRadius={'40px 0px'} boxShadow={'0px 0px 20px 0px rgba(0, 0, 0, 0.25)'} direction={'row'} onClick={() => handleItemClick(hotel.nama)}>
            <Stack width={'55%'} height={'100%'} sx={{ background: '#04214C' }} borderRadius={'40px 0px 0px 0px'} >
              {/* Render hotel image */}
              <img src={hotel.thumbnailUrl} alt="Hotel" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '40px 0px 0px 0px' }} />
            </Stack>
            {/* tengah */}
            <Stack width={'60%'} direction={'column'} paddingLeft={'20px'} justifyContent={'center'} paddingTop={'20px'} paddingBottom={'20px'}>
              {/* Render hotel name */}
              <Stack gap={1}>
                <Typography fontSize={'24px'} fontWeight={500}>  {hotel.nama.length > 20 ? `${hotel.nama.substring(0, 20)}...` : hotel.nama}</Typography>
                {/* Render hotel star rating */}
                <Stack direction={'row'} gap={1}>
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
                  <Stack justifyContent={'left'} alignItems={'center'} direction={'row'} >
                    <Stack sx={{ background: '#FF8702' }} borderRadius={'20px'} direction={'row'} padding={'5px 15px'} gap={1}>
                      <Icon icon="fluent:location-16-filled" width="25" height="25" style={{ color: '#04214C' }} />
                      <Typography fontWeight={500} fontSize={'20px'} color={'#04214C'}>{hotel.lokasi}</Typography>
                    </Stack>
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
                    <Typography fontWeight={500} fontSize={'20px'} color={'#04214C'}>{hotel.jarak} km ke {areaData?.jenis|| 'TSO'} {hotel.domisili}</Typography>
                  </Stack>
                )}
              </Stack>
            </Stack>

            {/* kanan */}
            <Stack width={'45%'} direction={'row'} justifyContent={'space-between'}>
              <Stack width={'1px'} height={'100%'} sx={{background:'rgba(0, 0, 0, 0.12)'}}/>
              <Stack direction={'column'} justifyContent={'center'} paddingRight={'20px'} alignItems={'right'}>
                <Typography fontSize={'22px'} color={'#FF010C'} fontWeight={500} textAlign={'right'}>Mulai Dari</Typography>
                <Typography fontSize={'24px'} color={'#04214C'} fontWeight={700} textAlign={'right'}>
                  {/* Rp{hotel.harga ? hotel.harga.split(',').map(Number).sort((a, b) => a - b)[0].toLocaleString().replace(/,/g, '.') : ''} */}
                  {/* {hotel.harga} */}
                  {parseInt(
        hotel.harga
          .replace('Rp ', '') // Remove 'Rp' prefix
          .split('-')[0] // Take the first part (minimal value)
          .replace(/\D/g, ''), // Remove non-numeric characters
        10 // Parse as base 10
      )
        .toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) // Format as currency
        .replace(/\s/g, '')}
                </Typography>
                <Typography fontSize={'12px'} color={'#04214C'} fontWeight={600} textAlign={'right'}>Harga spesial untuk T-Flyers</Typography>
              </Stack>
            </Stack>
          </Stack>
        ))}
    </Stack>
  );
}
