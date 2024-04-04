import { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import '../../../assets/font/telkomselbatik.css'
import GridOrange from '../../../components/oleholeh/gridorange'
import balithumb from '../../../assets/oleholeh/bali/baliup.png';

interface OlehDataItem {
  nama: string;
  gambar_url1: string;
  gambar_url2: string;
  gambar_url3: string;
  tiket_masuk: string;
  parkir: string;
  description: string;
  domisili: string;
}
interface OrangewithimageProps {
  imageSrc: string;
  textContent: string;
}

const Oleh = () => {
  const [olehData, setOlehData] = useState<OrangewithimageProps[]>([]);

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.marginTop = '-120px';
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await fetch('https://tripselbe.fly.dev/oleh');
        const data: OlehDataItem[] = await response.json();
        // Filter the data to include only items where domisili is equal to 'bali'
        const filteredData: OlehDataItem[] = data.filter(item => item.domisili.toLowerCase() === 'bali');
        const transformedData: OrangewithimageProps[] = filteredData.map(item => ({
          imageSrc: item.gambar_url1,
          textContent: item.nama
        }));
        setOlehData(transformedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Stack gap={3}>
      <Stack sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '0px',
      }} gap={0}>
        <Stack sx={{
          backgroundImage: `linear-gradient(180deg, transparent 50.5%, white 100%), url(${balithumb})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          height: '504px',
          justifyContent: 'center',
          width: '100%',
          margin: '0',
          
        }}>
          <Stack justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
            <Typography fontSize={'70px'} color={'#fff'} fontFamily={'TelkomselBatikBold'}>Oleh-Oleh</Typography>
            <Typography fontSize={'70px'} color={'#fff'} fontFamily={'TelkomselBatikBold'}>Bali</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={{marginBottom:'265px'}}>
        <GridOrange Data={olehData} />
      </Stack>
    </Stack>
  );
};

export default Oleh;
