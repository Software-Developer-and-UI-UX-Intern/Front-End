import { useRef, useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../pages/Oleh/Oleh.css'

interface Location {
  name: string;
  imageUrl: string;
  domisili: string
}

interface DragableAlamatProps {
  domisili: string; // Define the prop types
}

export default function DragableAlamat(props: DragableAlamatProps) {  const containerRef = useRef<HTMLDivElement>(null);
  const [addresses, setAddresses] = useState<Location[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  // Variables to handle dragging
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://tripselbe.fly.dev/wisata`);
        if (!response.ok) {
          console.error('Error fetching data:', response.statusText);
          setLoading(false);
          return;
        }
        const data: { nama: string, gambar_url1: string, domisili:string }[] = await response.json();
        if (data.length === 0) {
          // Handle the case where no data is returned
          console.log('No data found');
          setLoading(false);
          return;
        }
        // Filter addresses based on the domisili prop
        const filteredAddresses: Location[] = data
          .filter(item => item.domisili.toLowerCase() === props.domisili.toLowerCase())
          .map(item => ({
            domisili: item.domisili,
            name: item.nama,
            imageUrl: item.gambar_url1,
          }));
        setAddresses(filteredAddresses);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [props.domisili]); 

  // Handle mouse down event for starting drag
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLImageElement) {
      // Prevent dragging if the clicked element is an image
      return;
    }
    isDragging = true;
    startX = event.pageX - containerRef.current!.offsetLeft;
    scrollLeft = containerRef.current!.scrollLeft;
    // Prevent selection of text during drag
    event.preventDefault();
  };

  // Handle mouse move event for dragging
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = event.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  // Handle mouse up event for stopping drag
  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleItemClick = (kesiniyuk: string) => {
    navigate(`/cari-wisata?kesiniyuk=${encodeURIComponent(kesiniyuk)}`); // Navigate to the desired route with the address name as parameter
  };

  if (loading || addresses === null) {
    // Display loading text or gray background items while data is being fetched or if addresses is null
    return (
      <Stack direction="row" height={'auto'}>
         <Stack
        ref={containerRef}
        direction="row"
        spacing={3}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          '-ms-overflow-style': 'none',
          scrollbarWidth: 'none',
          overflowX: 'auto',
          maxWidth: '100%',
          width: '100%'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
          {[...Array(2)].map((_, index) => (
            <Stack key={index} className='loading' sx={{ backgroundColor: 'lightgray', width: '579px', height: '300px', borderRadius: '40px 0px' }}>
              
            </Stack>
          ))}
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack direction="row" width={'auto'}>
      <Stack
        ref={containerRef}
        direction="row"
        spacing={3}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          '-ms-overflow-style': 'none',
          scrollbarWidth: 'none',
          overflowX: 'auto',
          maxWidth: '100%',
          width: '100%'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {addresses.map((address, index) => (
          <Stack key={index}>
            <Stack width={'579px'} height={'300px'} sx={{
                backgroundImage: `url(${address.imageUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: '40px 0px'
            }}
            onClick={() => handleItemClick(address.name)} 
            >
            <Typography fontSize={'42px'} fontWeight={500} color={'#fff'} marginTop={'220px'} marginLeft={'40px'}>
              {address.name}
            </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
