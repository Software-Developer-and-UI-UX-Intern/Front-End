import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
// @ts-expect-error depedencies eror fix, react swipeable not compatible with react 18
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { RekomenHotel } from '../beranda/rekomenhotel'; // Assuming this is the correct path to your RekomenHotel component
import { Buttonslider } from './buttonslider'; // Assuming this is the correct path to your Buttonslider component
import { Stack } from '@mui/material';

interface Hotel {
    name: string;
    stars: string;
    image: string;
}

function SwipeableHotelCarousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [hotels, setHotels] = useState<Hotel[]>([]); // Specify the type of hotels as Hotel[]

    useEffect(() => {
        // Fetch data from the provided API
        fetch('https://tripselbe.fly.dev/recommendation')
            .then(response => response.json())
            .then(data => setHotels(data));
    }, []);

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    const totalPages = Math.ceil(hotels.length / 2); // Calculate the number of slides needed

    return (
        <Stack sx={{ width:'100%', height:'auto' }}>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                
            >
                {[...Array(totalPages)].map((_, index) => (
                    <Stack height={'auto'} key={index}>
                        <Stack height={'auto'}  marginBottom={'64px'} direction={'row'} gap={5} sx={{ display: 'flex' }} justifyContent={'center'} alignItems={'center'}>
                            {hotels.slice(index * 2, index * 2 + 2).map((hotel, hotelIndex) => (
                                <RekomenHotel
                                    key={index * 2 + hotelIndex}
                                    name={hotel.name}
                                    stars={hotel.stars}
                                    image={hotel.image}
                                />
                            ))}
                        </Stack>
                    </Stack>
                ))}
            </SwipeableViews>
            <Stack>
            <Buttonslider activeIndex={activeStep} setActiveIndex={setActiveStep} totalPages={totalPages} />
            </Stack>
        </Stack>
    );
}

export default SwipeableHotelCarousel;
