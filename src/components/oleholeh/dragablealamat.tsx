import { useRef, useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';

interface Location {
  name: string;
  imageUrl: string;
}

export default function DragableAlamat() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [addresses, setAddresses] = useState<Location[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tripselbe.fly.dev/addresses/Oleh%205');
        const data: { nama: string, gambar_url: string }[] = await response.json();
        const updatedAddresses: Location[] = data.map(item => ({
          name: item.nama,
          imageUrl: item.gambar_url,
        }));
        setAddresses(updatedAddresses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const stopScroll = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Stack direction={'row'} onMouseUp={stopScroll}>
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
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {addresses.map((address, index) => (
          <Stack key={index}>
            <img
              src={address.imageUrl}
              alt={address.name}
              height={'300px'}
              width={'570px'}
              style={{ borderRadius: '40px 0px', objectFit: 'cover' }}
            />
            <Typography fontSize={'28px'} fontWeight={600} color={'#04214C'}>
              {address.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
