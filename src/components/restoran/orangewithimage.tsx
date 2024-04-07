import { Typography, Card, Stack } from '@mui/material';
import PropTypes from 'prop-types';

interface OrangewithimageProps {
  imageSrc: string;
  textContent: string;
  location: string;
  width?: string;
  height?: string;
  fontsize?: string;
  imgheight?: string;
  domisili: string;
}

const Orangewithimage: React.FC<OrangewithimageProps> = ({ imageSrc, domisili, textContent,location, width = '335px', height = '400px', fontsize = '50px', imgheight = '80px' }) => {

  return (
    <Card sx={{ width: width, height: height, background: 'linear-gradient(65deg, #FF0025 23.51%, #F9A12D 81.92%)', borderRadius: '0px 104px 40px 0px' }}>
      <Stack width={width} height={`calc(${height} - ${imgheight})`} sx={{


        }}>
        <Stack width={'100%'} height={'100%'} sx={{
                  backgroundImage: `url(${imageSrc})`,
justifyContent: 'flex-end',
borderBottomLeftRadius:'100px', 
overflow:'auto'
        }}>
        <Stack width={'100%'} height={'101px'}  sx={{
          background:'linear-gradient(90deg, #04214C 25.42%, rgba(4, 33, 76, 0.00) 100%)',
          justifyContent:'center',
        }}>
          <Typography color={'white'} fontSize={'32px'} fontWeight={500} paddingLeft={'53px'} >{location} menit dari TSO {domisili}</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack width={'100%'}justifyContent={'center'} alignItems={'center'}>
        <Stack width={'100%'} height={imgheight} justifyContent={'center'}sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        <Typography sx={{ textAlign: 'center' }} fontSize={fontsize} fontWeight={500} color={'white'}>
          {textContent.length >= 22 ? `${textContent.slice(0, 22)}...` : textContent}
        </Typography>
    </Stack>
    </Stack>
    </Card>
  );
}

Orangewithimage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  domisili: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Orangewithimage;
