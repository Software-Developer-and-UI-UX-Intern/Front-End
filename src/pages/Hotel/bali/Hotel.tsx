import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { Button, Stack, Typography, Input, Checkbox, styled } from '@mui/material';
import bali from '../../../assets/hotel/bali/up.png';
import '../../../assets/font/telkomselbatik.css'
import { Icon } from '@iconify/react/dist/iconify.js';
import ListHotel from '../../../components/hotel/listhotel';
export default function Hotel() {
  // Define custom styles for the Checkbox
  const CustomCheckbox = styled(Checkbox)(() => ({
    '& .MuiSvgIcon-root': {
      width: '30px', // Set width of the icon
      height: '30px', // Set height of the icon
      color: 'white', // Initially make the icon transparent
      borderRadius: '40px',
      fontSize: '26px',
    },
    '& .Mui-checked': {
      '& .MuiSvgIcon-root': {
        color: '#04214C', // Change icon color when checked
        borderRadius: '40px'
      },
    },
    '& .MuiCheckbox-root': {
      padding: '0', // Remove padding to prevent extra space around the icon
      borderRadius: '10px', // Set border radius for the button
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)', // Change background color on hover
      },
    },
  }));

  const customInputStyle = {
    width: '100%',
    height: '53px',
    fontSize: '22px',
    '& input': {
      borderRadius: '20px',
      height: '53px',
      border: '1px solid #04214C', // Apply border directly to the input
      outline: 'none',
      padding: '0px 10px'
    },
    '& .MuiInputLabel-root': {
      color: 'transparent', // Initially make label transparent
      '&.Mui-focused': {
        color: 'transparent', // Change label color when focused
      },
    },
  };
  interface Area {
    domisili: string;
    coverhotel: string;
  }
  const [value, setValue] = useState<string>('');
  const [selectedStars, setSelectedStars] = useState<number[]>([]);
  const [checkedFasilitas, setCheckedFasilitas] = useState<string[]>([]);
  const [destination, setDestination] = useState<string | null>(null);
  const [areaData, setAreaData] = useState<Area| null>(null);
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const gasParam = params.get('Gas');
    setDestination(gasParam);
  }, [location.search]);
  useEffect(() => {
 
    if (destination) {
      // Fetch the area data from the backend
      axios.get(`https://tripselbe.fly.dev/area/${destination}`)
        .then((response) => {
          setAreaData(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error fetching area data:', error);
        });
    }
  }, [destination]);
   // Function to handle changes in the checked fasilitas
   const handleFasilitasChange = (fasilitas: string) => {
    // Check if the fasilitas is already in the checkedFasilitas array
    if (checkedFasilitas.includes(fasilitas)) {
      // If it is, remove it
      setCheckedFasilitas(prevCheckedFasilitas => prevCheckedFasilitas.filter(item => item !== fasilitas));
    } else {
      // If it's not, add it
      setCheckedFasilitas(prevCheckedFasilitas => [...prevCheckedFasilitas, fasilitas]);
    }
  };

  const handleStarCheckboxChange = (star: number) => {
    setSelectedStars(prevSelectedStars => {
      if (prevSelectedStars.includes(star)) {
        // If the star is already selected, remove it from the selectedStars array
        return prevSelectedStars.filter(selectedStar => selectedStar !== star);
      } else {
        // If the star is not selected, add it to the selectedStars array
        return [...prevSelectedStars, star];
      }
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value.replace(/\./g, ''); // Remove all occurrences of periods
    const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Add periods as thousands separators
    if (!isNaN(Number(rawValue)) && rawValue.length <= 10) { // Check if the value is a valid number
      setValue(formattedValue);
    }
  };
  const [value2, setValue2] = useState<string>('');

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value.replace(/\./g, ''); // Remove all occurrences of periods
    const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Add periods as thousands separators
    if (!isNaN(Number(rawValue)) && rawValue.length <= 10) { // Check if the value is a valid number
      setValue2(formattedValue);
    }
  };

  const handleScrollDown = () => {
    const targetHeight = 1000; // Set the target height in pixels
    
    // Teleport to the target height
    window.scrollTo({
      top: targetHeight,
      behavior: 'smooth' // Use smooth scrolling animation
    });
  };
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.marginTop = '-120px';
    // window.scrollTo(0, 0); // Scroll to the top of the page when the component is mounted or navigation occurs
  }, []);

  return (
    <Stack sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      marginLeft: '0px',
    }} gap={0}>
      
      <Stack sx={{
        backgroundImage: `linear-gradient(180deg, transparent 50%, #FFF 100%), url(${areaData?.coverhotel || bali})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        height: '1024px',
        justifyContent: 'start',
        width: '100%',
        margin: '0',
      }}>
        <Stack  marginLeft={'100px'} marginRight={'100px'} marginTop={'250px'} height={'600px'} justifyContent={'space-between'}>
        <Stack>
        <Typography fontSize={'82px'} fontFamily={'TelkomselBatikBold'} color={'#FFF'}>Selamat datang di {destination}!</Typography>
        <Typography fontSize={'32px'} color={'#FFF'} maxWidth={'924px'}>Yuk, cari rekomendasi Hotel dengan harga spesial hanya buat T-Flyers lho.</Typography>
        </Stack>
        <Stack justifyContent={'center'} alignItems={'center'} >
        <Button onClick={handleScrollDown} sx={{width:'500px', height:'100px',boxShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.25)',borderRadius:'100px', color:'white',fontSize:'44px', fontWeight:700,     background: 'linear-gradient(360deg, #fb8c2a, #FF010C)'}}>Cek Rekomendasi</Button>
        </Stack>
        </Stack>
      </Stack>
      <Stack width={'100%'} height={'30px'} sx={{backgroundColor:'white'}} marginTop={'-10px'}/>

      <Stack sx={{
        display: 'flex',
        height: 'auto',
        width: '100%',
        paddingTop: '50px',
        paddingBottom:'50px',
        backgroundColor: 'white',
      }}>

        <Stack sx={{
          height: 'auto',
          width: '100%',
          backgroundColor: 'white',
        }}>

          <Stack >
          <Typography sx={{
            fontWeight: 700,
            color: '#ff010c',
            fontSize: '60px',
            paddingTop: '50px',
            textAlign: 'center',
            font:'TelkomselBatikBold'
          }}>
            Temukan Rekomendasi Hotel
          </Typography>
          <Typography sx={{
            fontWeight: 500,
            color: '#04214C',
            fontSize: '38px',
            paddingBottom: '42px',
            textAlign: 'center'
          }}>
          Rekomendasi kami hanya untuk T-Flyers
          </Typography>
          
          <Stack direction={'row'} gap={3} marginLeft={'100px'} marginRight={'100px'}>
            {/* left */}
            <Stack direction={'column'}  width={'auto'} height={'auto'}  >
              <Stack sx={{background:'#FF010C'}} marginBottom={'10px'} width={'100%'} height={'60px'} borderRadius={'100px'} justifyContent={'center'} alignItems={'center'}>
                <Typography color={'white'} fontSize={'28px'} fontWeight={500}>Filter</Typography>
              </Stack>

              <Stack gap={5} direction={'column'}>
              <Stack width={'100%'} height={'210px'} sx={{background:'#04214C'}} borderRadius={'40px'} direction={'column'} alignItems={'center'}>
              <Typography color={'white'} fontSize={'24px'} fontWeight={500} paddingTop={'8px'} paddingBottom={'16px'}>Rentang Harga</Typography>
                <Stack direction={'row'} width={'90%'} height={'auto'}>
                <Stack sx={{background:'#EC000C'}} width={'25%'} height={'56px'} borderRadius={'20px 0px 0px 20px'} justifyContent={'center'} alignItems={'center'}>
                <Typography color={'white'} fontSize={'22px'} fontWeight={500}>Rp</Typography>
                </Stack>
                <Stack sx={{background:'white'}} width={'80%'} height={'56px'} borderRadius={'0px 20px 20px 0px'}>
                  <Input
                  value={value}
                  onChange={handleChange}
                   style={customInputStyle} disableUnderline sx={{paddingLeft:'10px', font:'26px', color:'#04214C'}} placeholder='Harga Minimal'></Input>
                </Stack>
                </Stack>

                <Stack direction={'row'} width={'90%'} height={'auto'} paddingTop={'14px'}>
                <Stack sx={{background:'#EC000C'}} width={'25%'} height={'56px'} borderRadius={'20px 0px 0px 20px'} justifyContent={'center'} alignItems={'center'}>
                <Typography color={'white'} fontSize={'22px'} fontWeight={500}>Rp</Typography>
                </Stack>
                <Stack sx={{background:'white'}} width={'80%'} height={'56px'} borderRadius={'0px 20px 20px 0px'}>
                  <Input
                  value={value2}
                  onChange={handleChange2}
                   style={customInputStyle} disableUnderline sx={{paddingLeft:'10px', font:'26px', color:'#04214C'}} placeholder='Harga Maximal'></Input>
                </Stack>
                </Stack>
              </Stack>

            {/* filter bintang */}
              <Stack width={'100%'} height={'auto'} sx={{background:'#04214C'}} borderRadius={'40px'}  paddingTop={'8px'}  paddingBottom={'8px'}>
              <Typography  color={'white'} fontSize={'22px'} fontWeight={500} textAlign={'center'}>Bintang</Typography>
              <Stack direction={'column'} width={'90%'} height={'auto'} alignItems={'left'}>
                {[3, 4, 5].map(star => (
                  <Stack key={star} direction={'row'} alignItems={'center'} marginLeft={'20px'} paddingBottom={'20px'}>
                    <CustomCheckbox checked={selectedStars.includes(star)} onChange={() => handleStarCheckboxChange(star)} />
                    <Stack justifyContent={'center'} alignItems={'center'} direction={'row'} height={'100%'}>
                      {[...Array(star)].map((_, index) => (
                        <Icon key={index} icon="fluent:star-16-filled" width="50" height="50" style={{ color: '#FF8702' }} />
                      ))}
                    </Stack>
                  </Stack>
                ))}
              </Stack>
              </Stack>

              {/* filter fasilitas */}
              <Stack width={'100%'} height={'auto'} sx={{background:'#04214C'}} borderRadius={'40px'}  paddingTop={'8px'}  paddingBottom={'8px'}  marginRight={'72px'}>
              <Typography  color={'white'} fontSize={'22px'} fontWeight={500} textAlign={'center'}>Fasilitas</Typography>
              <Stack direction={'row'} alignItems={'start'} marginLeft={'20px'} paddingBottom={'20px'}>
              <CustomCheckbox checked={checkedFasilitas.includes('wifi')} onChange={() => handleFasilitasChange('wifi')} />
              <Stack direction={'row'} alignItems={'center'} justifyContent={'left'} width={'100%'} height={'100%'}>
              <Typography  color={'white'} fontSize={'20px'} fontWeight={500}>WiFi</Typography>
              </Stack>
              </Stack>
              <Stack direction={'row'} alignItems={'start'} marginLeft={'20px'} paddingBottom={'20px'}>
              <CustomCheckbox checked={checkedFasilitas.includes('kolam renang')} onChange={() => handleFasilitasChange('kolam renang')} />
              <Stack direction={'row'} alignItems={'center'} justifyContent={'left'} width={'100%'} height={'100%'}>
              <Typography  color={'white'} fontSize={'20px'} fontWeight={500}>Kolam Renang</Typography>
              </Stack>
              </Stack>
              <Stack direction={'row'} alignItems={'start'} marginLeft={'20px'} paddingBottom={'20px'}>
              <CustomCheckbox checked={checkedFasilitas.includes('Parkir')} onChange={() => handleFasilitasChange('Parkir')} />
              <Stack direction={'row'} alignItems={'center'} justifyContent={'left'} width={'100%'} height={'100%'}>
              <Typography  color={'white'} fontSize={'20px'} fontWeight={500}>Parkir</Typography>
              </Stack>
              </Stack>

              <Stack direction={'row'} alignItems={'start'} marginLeft={'20px'} paddingBottom={'20px'}>
              <CustomCheckbox checked={checkedFasilitas.includes('restoran')} onChange={() => handleFasilitasChange('restoran')} />
              <Stack direction={'row'} alignItems={'center'} justifyContent={'left'} width={'100%'} height={'100%'}>
              <Typography  color={'white'} fontSize={'20px'} fontWeight={500}>Restoran</Typography>
              </Stack>
              </Stack>
              <Stack direction={'row'} alignItems={'start'} marginLeft={'20px'} paddingBottom={'20px'}>
              <CustomCheckbox checked={checkedFasilitas.includes('gym')} onChange={() => handleFasilitasChange('gym')} />
              <Stack direction={'row'} alignItems={'center'} justifyContent={'left'} width={'100%'} height={'100%'}>
              <Typography  color={'white'} fontSize={'20px'} fontWeight={500}>GYM</Typography>
              </Stack>
              </Stack>
              <Stack direction={'row'} alignItems={'start'} marginLeft={'20px'} paddingBottom={'20px'}>
              <CustomCheckbox checked={checkedFasilitas.includes('ruangan meeting')} onChange={() => handleFasilitasChange('ruangan meeting')} />
              <Stack direction={'row'} alignItems={'center'} justifyContent={'left'} width={'100%'} height={'100%'}>
              <Typography  color={'white'} fontSize={'20px'} fontWeight={500}>Ruangan Meeting</Typography>
              </Stack>
              </Stack>
              <Stack direction={'row'} alignItems={'start'} marginLeft={'20px'} paddingBottom={'20px'}>
              <CustomCheckbox checked={checkedFasilitas.includes('spa')} onChange={() => handleFasilitasChange('spa')} />
              <Stack direction={'row'} alignItems={'center'} justifyContent={'left'} width={'100%'} height={'100%'}>
              <Typography  color={'white'} fontSize={'20px'} fontWeight={500}>Spa</Typography>
              </Stack>
              </Stack>
              <Stack direction={'row'} alignItems={'start'} marginLeft={'20px'} paddingBottom={'20px'}>
              <CustomCheckbox checked={checkedFasilitas.includes('laundry')} onChange={() => handleFasilitasChange('laundry')} />
              <Stack direction={'row'} alignItems={'center'} justifyContent={'left'} width={'100%'} height={'100%'}>
              <Typography  color={'white'} fontSize={'20px'} fontWeight={500}>Laundry</Typography>
              </Stack>
              </Stack>
              </Stack>


              </Stack>
            </Stack>

            {/* right */}
            <Stack direction={'column'} width={'100%'} height={'auto'}>
            <Stack sx={{background:'#FF010C'}} width={'100%'} height={'60px'} borderRadius={'100px'} justifyContent={'center'} alignItems={'center'} marginBottom={'10px'}>
            <Typography color={'white'} fontSize={'28px'} fontWeight={500}>Hotel</Typography>
            </Stack>
            <ListHotel selectedStars={selectedStars} minimal={value} maximal={value2} checkedFasilitas={checkedFasilitas} selectedDomisili={`${destination}`} />
            </Stack>
          </Stack>
        </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
