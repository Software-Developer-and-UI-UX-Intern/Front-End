import { useRef, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import deluxeRoom from '../../assets/hotel/deluxe room.png';

interface Location {
  name: string;
  imageUrl: string;
}

const locations: Location[] = [
  { name: 'Deluxe Room', imageUrl: deluxeRoom },
  { name: 'Deluxe Premium Room', imageUrl: deluxeRoom },
  { name: 'Luxury Suite', imageUrl: deluxeRoom },
  { name: 'Another Location Name', imageUrl: deluxeRoom },
];

export default function DragableFasilitas() {
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
          {locations.map((Item, index) => (
            <Stack key={index}>
              {/* <img
                src={location.imageUrl}
                alt={location.name}
                height={'300px'}
                width={'570px'}
                style={{ borderRadius: '40px 0px', objectFit: 'cover' }}
              /> */}
              <Stack sx={{
                  width: '580px', height: '325px', 
                  backgroundImage: `linear-gradient(180deg, transparent 56.5%, #04214C 100%), url('${Item.imageUrl}')`, 
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '50px 0px'}}>

                <Typography fontSize={'32px'} fontWeight={500} color={'white'} sx={{marginTop: 33, marginLeft: 3}}>
                  {Item.name}
                </Typography>
              </Stack>

              
            </Stack>
          ))}
        </Stack>
 
    </Stack>
  );
}
