// Import React and other required modules

import { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import '../../../assets/font/telkomselbatik.css';
import GridOrange from '../../../components/restoran/gridorange';
import balithumb from '../../../assets/restoran/bali/bg.jpg';
import loading from '../../../assets/restoran/comingsoongray.png';

// Define interfaces for data types

interface OlehDataItem {
  nama: string;
  gambar_url1: string;
  gambar_url2: string;
  gambar_url3: string;
  tiket_masuk: string;
  parkir: string;
  description: string;
  domisili: string;
  location: string;
  halal: string;
}

interface OrangewithimageProps {
  imageSrc: string;
  textContent: string;
  location: string;
  domisili: string;
}

// Define the functional component

const Oleh = () => {
  // Define state variables
  const [olehData, setOlehData] = useState<OrangewithimageProps[]>([]);
  const [halal, setHalal] = useState<string>('true'); // Default value is 'true'
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch data from the API when component mounts or 'halal' state changes
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.marginTop = '-120px';
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        setIsLoading(true); // Set loading state to true before fetching data
        const response = await fetch('https://tripselbe.fly.dev/restoran');
        const data: OlehDataItem[] = await response.json();

        const filteredData: OlehDataItem[] = data.filter(item => {
          if (halal === 'true') {
            return item.halal === 'true' && item.domisili.toLowerCase() === 'bali';
          } else {
            return item.halal !== 'true' && item.domisili.toLowerCase() === 'bali';
          }
        });
    

        const transformedData: OrangewithimageProps[] = filteredData.map(item => ({
          imageSrc: item.gambar_url1 || item.gambar_url2 || item.gambar_url3 || '',
          textContent: item.nama,
          location: item.location,
          domisili: item.domisili
        }));

        setOlehData(transformedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); // Set loading state to false after fetching data
      }
    };
    
    fetchData();
  }, [halal]); // Trigger the effect whenever halal value changes

  // Event handlers to toggle 'halal' state
  const handleHalalClick = () => {
    setHalal('true'); // Set halal to 'true'
  };

  const handleNonHalalClick = () => {
    setHalal('false'); // Set halal to 'false'
  };

  // Return JSX to render the component
  return (
    <Stack gap={3}>
      <Stack sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '0px',
      }} gap={0}>
        <Stack sx={{
          backgroundImage: `url(${balithumb})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center calc(50% + 500px)', 
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          height: '504px',
          justifyContent: 'center',
          width: '100%',
          margin: '0',
          }}>
           
          <Stack justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
            <Typography fontSize={'70px'} color={'#fff'} fontFamily={'TelkomselBatikBold'}>Restoran</Typography>
            <Typography fontSize={'70px'} color={'#fff'} fontFamily={'TelkomselBatikBold'}>Bali</Typography>
          </Stack>
        </Stack>

        <Stack width={'100%'} direction={'row'} height={'101px'} justifyContent={'center'} border={'3px solid #FF010C'}>
          <Stack width={'100%'} height={'100%'} sx={{
            backgroundColor: halal === 'true' ? '#FF010C' : 'white',
            justifyContent: 'center',
            cursor: 'pointer'
          }} onClick={handleHalalClick}>
            <Typography sx={{
              fontSize: '42px',
              fontWeight: halal === 'true' ? 700 : 400,
              textAlign: 'center',
              color: halal === 'true' ? 'white' : '#6E6C6C'
            }}>Halal</Typography>
          </Stack>

          <Stack width={'100%'} height={'100%'} sx={{
            backgroundColor: halal === 'false' ? '#FF010C' : 'white',
            justifyContent: 'center',
            cursor: 'pointer'
          }} onClick={handleNonHalalClick}>
            <Typography sx={{
              fontSize: '42px',
              fontWeight: halal === 'false' ? 700 : 400,
              textAlign: 'center',
              color: halal === 'false' ? 'white' : '#6E6C6C'
            }}>Non Halal</Typography>
          </Stack>
        </Stack>

      </Stack>
      
      <Stack sx={{ marginBottom: '265px'}}>
        {isLoading ? (
        <Stack width={'100%'} height={'1315px'} justifyContent={'center'} alignItems={'center'}>
          <img src={loading} alt="Loading" style={{ width: '700px', height: '700px' }} />
          </Stack>
        ) : (
          <GridOrange Data={olehData} />
        )}
      </Stack>
    </Stack>
  );
};

export default Oleh;
