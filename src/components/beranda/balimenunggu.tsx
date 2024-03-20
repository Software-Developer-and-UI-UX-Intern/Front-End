import { Stack } from '@mui/material';
import { useRef, useState } from 'react'; // Import useRef and useState hooks
import gwk from '../../assets/beranda/Pulau Padar.jpg';
import Orangewithimage1 from '../beranda/orangewithimage';
import left from '../../assets/arrowleft.svg';
import right from '../../assets/arrowright.svg';

export default function Orangewithimage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(null); // State to hold the scroll interval

  const startScrollLeft = () => {
    setScrollInterval(setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft -= 5; // Adjust scrolling speed as needed
      }
    }, 10)); // Adjust scrolling interval as needed
  };

  const startScrollRight = () => {
    setScrollInterval(setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 5; // Adjust scrolling speed as needed
      }
    }, 10)); // Adjust scrolling interval as needed
  };

  const stopScroll = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  };

  return (
    <Stack
      style={{ overflowX: 'auto' }}
      alignItems={'center'}
      justifyContent={'center'}
      direction={'row'}
      onMouseUp={stopScroll} // Stop scrolling when mouse is released anywhere in the stack
    >
      <Stack
        onMouseDown={startScrollLeft} // Start scrolling left when mouse is pressed down on this stack
      >
        <img src={left} alt="left" />
      </Stack>
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
          width:'1168px'
        }}
      >
        <Stack>
          <Orangewithimage1 imageSrc={gwk} textContent="Bali" />
        </Stack>
        <Stack>
          <Orangewithimage1 imageSrc={gwk} textContent="Bali" />
        </Stack>
        <Stack>
          <Orangewithimage1 imageSrc={gwk} textContent="Bali" />
        </Stack>
        <Stack>
          <Orangewithimage1 imageSrc={gwk} textContent="Bali" />
        </Stack>
        <Stack>
          <Orangewithimage1 imageSrc={gwk} textContent="Bali" />
        </Stack>
      </Stack>
      <Stack
        onMouseDown={startScrollRight} // Start scrolling right when mouse is pressed down on this stack
      >
        <img src={right} alt="right" />
      </Stack>
    </Stack>
  );
}
