import { Stack } from '@mui/material';
import { useRef, useState } from 'react';
import bali from '../../assets/beranda/balinusra/Bali.svg';
import kupang from '../../assets/beranda/balinusra/kupang.svg';
import mataram from '../../assets/beranda/balinusra/mataram.svg';
import Orangewithimage1 from '../beranda/orangewithimage';
import left from '../../assets/arrowleft.svg';
import right from '../../assets/arrowright.svg';

export default function Orangewithimage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setStartX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <Stack
      style={{ overflowX: 'auto' }}
      alignItems={'center'}
      justifyContent={'center'}
      direction={'row'}
      onMouseUp={stopScroll}
    >
      <Stack
        onMouseDown={startScrollLeft}
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
          width: '1168px'
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <Stack>
          <Orangewithimage1 imageSrc={bali} textContent="Bali" />
        </Stack>
        <Stack>
          <Orangewithimage1 imageSrc={kupang} textContent="Kupang" />
        </Stack>
        <Stack>
          <Orangewithimage1 imageSrc={mataram} textContent="Mataram" />
        </Stack>
        <Stack>
          <Orangewithimage1 imageSrc={mataram} textContent="Flores" />
        </Stack>
      </Stack>
      <Stack
        onMouseDown={startScrollRight}
      >
        <img src={right} alt="right" />
      </Stack>
    </Stack>
  );
}
