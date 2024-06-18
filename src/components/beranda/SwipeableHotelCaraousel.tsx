import React, { useState, useEffect, useContext } from 'react';
import { CarouselProvider, Slider, Slide, CarouselContext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { RekomenHotel } from '../beranda/rekomenhotel';
import { Buttonslider } from './buttonslider';
import { Stack } from '@mui/material';

interface Hotel {
    name: string;
    stars: string;
    image: string;
}

function SwipeableHotelCarousel() {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        fetch('https://tripselbe.fly.dev/recommendation')
            .then(response => response.json())
            .then(data => setHotels(data));
    }, []);

    const totalPages = Math.ceil(hotels.length / 2);

    return (
        <Stack width={'100%'}>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={totalPages}
                visibleSlides={1}
                currentSlide={activeIndex}
            >
                <CarouselContent hotels={hotels} setActiveIndex={setActiveIndex} />
            </CarouselProvider>
        </Stack>
    );
}

interface CarouselContentProps {
    hotels: Hotel[];
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

function CarouselContent({ hotels, setActiveIndex }: CarouselContentProps) {
    const [activeIndex, setActiveIndexLocal] = useState(0);
    const carouselContext = useContext(CarouselContext);

    useEffect(() => {
        const slideChangeHandler = () => {
            setActiveIndexLocal(carouselContext.state.currentSlide);
        };

        carouselContext.subscribe(slideChangeHandler);

        return () => {
            carouselContext.unsubscribe(slideChangeHandler);
        };
    }, [carouselContext]);

    const totalPages = Math.ceil(hotels.length / 2);

    return (
        <Stack gap={5}>
        <Stack sx={{ width: 'auto', maxHeight:'435px' }} gap={5} >
            <Slider>
                {[...Array(totalPages)].map((_, index) => (
                    <Slide index={index} key={index}>
                        <Stack maxHeight={'426px'} key={index}>
                            <Stack maxHeight={'426px'} direction={'row'} gap={5} sx={{ display: 'flex' }} justifyContent={'center'} alignItems={'center'}>
                                {hotels.slice(index * 2, index * 2 + 2).map((hotel, hotelIndex: number) => (
                                    <RekomenHotel
                                        key={index * 2 + hotelIndex}
                                        name={hotel.name}
                                        stars={hotel.stars}
                                        image={hotel.image}
                                    />
                                ))}
                            </Stack>
                        </Stack>
                    </Slide>
                ))}
            </Slider>
        </Stack>
        <Buttonslider  activeIndex={activeIndex} setActiveIndex={setActiveIndex} totalPages={totalPages} />
        </Stack>
    );
}

export default SwipeableHotelCarousel;
