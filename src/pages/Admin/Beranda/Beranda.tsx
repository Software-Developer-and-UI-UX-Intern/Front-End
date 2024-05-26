import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, Stack, Typography, Select as MuiSelect, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
const customInputStyle = {
  width: '350px',
  height: '53px',
  '& input': {
    borderRadius: '20px',
    height: '53px',
    border: '2px solid #04214C',
    outline: 'none',
    padding: '0px 10px',
    fontWeight:500,
  },
  '& .MuiInputLabel-root': {
    color: '#6E6C6C',
    '&.Mui-focused': {
      color: 'transparent',
    },
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#04214C',
    },
  },
  '& .MuiOutlinedInput-root.MuiSelect-root': {
    borderRadius: '20px',
    '&:hover fieldset': {
      borderColor: '#04214C',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#04214C',
    },
  },
};
// Define the Restoran type
interface Hotel {
  name: string;
  stars: string;
  image: string;
}
interface HotelList {
  nama: string;
  bintang: string;
  // image: string;
}
interface HotelThumbnail {
  hotel_name: string;
  url: string;
  nama:string
}
export default function RestoranPage() {
  const [hotel, setHotel] = useState<Hotel[]>([]);
  const [hotelgambar, setHotelgambar] = useState<HotelThumbnail[]>([]);
  const [hotellist, setHotellist] = useState<HotelList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch hotel recommendations
        const response1 = await axios.get<Hotel[]>('https://tripselbe.fly.dev/recommendation');
        setHotel(response1.data);

        // Fetch hotel list
        const response2 = await axios.get<HotelList[]>('https://tripselbe.fly.dev/hotels');
        setHotellist(response2.data);

        const response3 = await axios.get<HotelThumbnail[]>('https://tripselbe.fly.dev/hotel-images');
        setHotelgambar(response3.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleHotelChange = async (selectedHotelName: string, index: number) => {
    try {
      // Fetch hotel images based on the selected hotel name
      const selectedHotelImages = hotelgambar.filter(image => image.hotel_name === selectedHotelName);

      // Update hotel name, stars, and images based on the selected hotel
      const updatedHotels = [...hotel];
      updatedHotels[index] = {
        ...updatedHotels[index],
        name: selectedHotelName,
        stars: hotellist.find((hotel) => hotel.nama === selectedHotelName)?.bintang || '',
        image: selectedHotelImages.find((image) => image.nama === 'thumbnail')?.url || '',
      };
      setHotel(updatedHotels);
    } catch (error) {
      console.error('Error fetching hotel images:', error);
    }
  };

// Modify the handleAdd function to add a new element to the hotel array
const handleAdd = () => {
  // Create a new hotel object with default values
  const newHotel: Hotel = {
    name: '',
    stars: '',
    image: '',
  };
  // Add the new hotel to the hotel array
  setHotel([...hotel, newHotel]);
};

  const handleDelete = (index: number) => {
    const updatedHotels = [...hotel];
    updatedHotels.splice(index, 1); // Remove the hotel at the specified index
    setHotel(updatedHotels); // Update the hotel state array
  };

  const submitData = async (hotel: Hotel[]) => {
    try {
      // Asynchronously delete all data from the recommendationhotel table
      const deleteOperation = axios.delete('https://tripselbe.fly.dev/recommendation');
  
      // Submit each hotel recommendation one by one
      for (let i = 0; i < hotel.length; i++) {
        const { name, stars, image } = hotel[i];
        console.log(hotel[i])
        await axios.post('https://tripselbe.fly.dev/recommendation', { name: name, stars, image });
      }
      
      // Wait for the delete operation to complete
      await deleteOperation;
  
      console.log('Data submitted successfully');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  return (
    <Stack width="100%" height="900px" sx={{overflowY:'none'}}>
      {/* restoran and create button */}
      <Stack direction={'row'} justifyContent={'space-between'} padding={'0px 30px'}>
        <Typography fontWeight={500} fontSize={'42px'} color={'#04214C'}>
          Rekomendasi Hotel
        </Typography>

        <Button 
        onClick={handleAdd}
          disableElevation 
          disableFocusRipple 
          disableRipple 
          disableTouchRipple
          sx={{
            width: 'auto',
            padding: '10px 20px',
            backgroundColor: '#FF010C',
            borderRadius: '40px',
          }}
        >
          <Icon icon='fluent:add-16-filled' width='30' height='30' style={{ color: 'red', backgroundColor: 'white', borderRadius: '50px', padding: '5px' }} />
          <Typography paddingLeft={'15px'} sx={{
            color: 'white',
            fontSize: '24px',
            fontWeight: 500,
          }}>
            Tambah Data

          </Typography>
        </Button>
      </Stack>
      
      <Stack margin={'20px 0 20px 0'} overflow={'auto'} height={'680px'}>
  <Stack sx={{ backgroundColor: '#04214C' }} flexDirection={'column'} margin={'0 20px 0 20px'} width={'calc((372px * 4) + 105px)'} height={'auto'} borderRadius={'30px 30px 0 0'}>
    
    {/* header container with horizontal scroll */}
    <Stack direction={'row'} sx={{ overflowX: 'none' }}>
      <Stack minWidth={'70px'} alignItems={'center'} justifyContent={'center'} padding={'16px'}>
        <Typography fontSize={'26px'} color={'#FFF'} fontWeight={500}>No</Typography>
      </Stack>
      <Stack minWidth={'372px'} alignItems={'center'} justifyContent={'center'}>
        <Typography fontSize={'26px'} color={'#FFF'} fontWeight={500}>Action</Typography>
      </Stack>
      <Stack minWidth={'372px'} alignItems={'center'} justifyContent={'center'}>
        <Typography fontSize={'26px'} color={'#FFF'} fontWeight={500}>Nama Hotel</Typography>
      </Stack>
      <Stack minWidth={'372px'} alignItems={'center'} justifyContent={'center'}>
        <Typography fontSize={'26px'} color={'#FFF'} fontWeight={500}>Bintang</Typography>
      </Stack>
      <Stack minWidth={'372px'} alignItems={'center'} justifyContent={'center'}>
        <Typography fontSize={'26px'} color={'#FFF'} fontWeight={500}>Link Gambar</Typography>
      </Stack>

    </Stack>
    
    {/* rows container with vertical scroll */}
    <Stack direction={'column'} height={'590px'} sx={{ backgroundColor: '#FFF', overflowY: 'auto', overflowX:'hidden' }}>
    {hotel.map((hotel, index) => (
    <Stack 
      direction={'row'} 
      borderRight={'none'} 
      borderTop={'none'} 
      borderBottom={'2px solid #04214C'}
      borderLeft={'2px solid #04214C'}
      key={hotel.name}
      sx={{
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
      }}
    >
       <Stack borderRight={'2px solid #04214C'}>
      
      </Stack>
      <Stack minWidth={'68.4px'} alignItems={'center'} justifyContent={'center'} padding={'16px'} borderRight={'2px solid #04214C'}>
        <Typography fontSize={'26px'} color={'#04214C'} fontWeight={500}>{index + 1}</Typography>
      </Stack>
      <Stack direction={'row'} height={'100px'} alignItems={'center'} justifyContent={'center'} width={'372px'} gap={1} borderRight={'2px solid #04214C'}>
        <Button 
  disableElevation 
  disableFocusRipple 
  disableRipple 
  disableTouchRipple
  onClick={() => handleDelete(index)} // Pass the index to the handleDelete function
  sx={{
    color: 'white',
    fontSize: '26px',
    fontWeight: 500,
    backgroundColor: '#FF010C',
    padding: '10px 25px',
    borderRadius: '40px',
    minWidth: 'auto',
    height: 'auto',
    transition: 'color 0.4s ease-in-out',
  }}
>
  <Icon icon="ic:round-delete" width="30" height="30" style={{ color: 'inherit', paddingRight: '10px' }} />
  Delete
</Button>
        </Stack>
      <Stack minWidth={'370.4px'} alignItems={'center'} justifyContent={'center'} borderRight={'2px solid #04214C'}>
        <Typography fontSize={'26px'} color={'#04214C'} fontWeight={500}>
                <MuiSelect
                  displayEmpty
                  inputProps={{ 'aria-label': 'Domisili' }}
                  style={{ borderRadius: '20px', fontSize: '22px', color: '#04214C', border: '2px solid #04214C', }}
                  sx={{
                    ...customInputStyle,
                    '&:focus': {
                      borderColor: 'transparent !important',
                    },
                    '& fieldset': {
                      borderColor: 'transparent !important',
                    },
                    '&:hover fieldset': {
                      borderColor: 'transparent !important',
                    },
                    '&:active fieldset': {
                      borderColor: 'transparent !important',
                    },
                  }}
                  name="domisili"
                  value={hotel.name}
                  onChange={(e) => handleHotelChange(e.target.value, index)}
                  >
                  <MenuItem value={hotel.name}>{hotel.name}</MenuItem>
                  {hotellist.map((hotel) => (

                  <MenuItem value={hotel.nama}>{hotel.nama}</MenuItem>

                  ))}
                </MuiSelect>
        </Typography>
      </Stack>
      <Stack minWidth={'370.4px'} alignItems={'center'} justifyContent={'center'} borderRight={'2px solid #04214C'}>
        <Typography fontSize={'26px'} color={'#04214C'} fontWeight={500}>
          {hotel.stars && (hotel.stars.length > 22 ? hotel.stars.slice(0, 22) + '...' : hotel.stars)}
        </Typography>
      </Stack>
      <Stack minWidth={'370.4px'} alignItems={'center'} justifyContent={'center'} borderRight={'2px solid #04214C'}>
        <Typography fontSize={'26px'} color={'#04214C'} fontWeight={500}>
          {hotel.image && (hotel.image.length > 22 ? hotel.image.slice(0, 22) + '...' : hotel.image)}
        </Typography>
      </Stack>
    </Stack>
  ))}
  <Stack padding={'20px 0px'}>
  <Button
  type="button"
  sx={{
    justifyContent: 'center',
    alignItems: 'center',
    height: '44px',
    width: '300px',
    padding: '0 20px',
    fontWeight: 500,
    fontSize: '22px',
    color: '#FFF',
    backgroundColor: '#04214C',
    borderRadius: '20px',
    '&:hover': { background: '#04214C', color: '#FFF' },
  }}
  onClick={() => submitData(hotel)} // Call the submitData function with the updated hotel data
>
  Edit
</Button>
          </Stack>
    </Stack>
  </Stack>
</Stack>


    </Stack>
  );
}
