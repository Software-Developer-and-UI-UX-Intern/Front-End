import { useRef, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import krisna1 from '../../assets/oleholeh/krisnaoleh.png';

interface Location {
  name: string;
  imageUrl: string;
}

const locations: Location[] = [
  { name: 'Krisna Oleh-Oleh Bali Desa Wisata Blangsinga', imageUrl: krisna1 },
  { name: 'Another Location Name', imageUrl: krisna1 },
  { name: 'Krisna Oleh-Oleh Bali Desa Wisata Blangsinga', imageUrl: krisna1 },
  { name: 'Another Location Name', imageUrl: krisna1 },
];

export default function DragableAlamat() {
  const containerRef = useRef<HTMLDivElement>(null);
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
        {locations.map((location, index) => (
          <Stack key={index}>
            <img
              src={location.imageUrl}
              alt={location.name}
              height={'300px'}
              width={'570px'}
              style={{ borderRadius: '40px 0px', objectFit: 'cover' }}
            />
            <Typography fontSize={'28px'} fontWeight={600} color={'#04214C'}>
              {location.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
 
    </Stack>
  );
}
