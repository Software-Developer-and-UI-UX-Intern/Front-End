import { Typography, Card, Stack } from '@mui/material';
import PropTypes from 'prop-types';

interface OrangewithimageProps {
  imageSrc: string;
  textContent: string;
  width?: string;
  height?: string;
  fontsize?: string;
  imgheight?: string;
}

const Orangewithimage: React.FC<OrangewithimageProps> = ({ imageSrc, textContent, width = '335px', height = '400px', fontsize = '50px', imgheight = '80px' }) => {

  return (
    <Card sx={{ width: { xs: '300px', md: width }, height: height, background: 'linear-gradient(65deg, #FF0025 23.51%, #F9A12D 81.92%)', borderRadius: '0px 104px 40px 0px' }}>
      <Stack width={width} height={`calc(${height} - ${imgheight})`}>
  <img 
    src={imageSrc} 
    alt="Image" 
    width={width} 
    height="100%" 
    style={{
      borderBottomLeftRadius: '104px', 
      objectFit: 'cover', 
      objectPosition: 'center center'
    }}
  />      </Stack>
      <Stack width={'100%'}justifyContent={'center'} alignItems={'center'}>
        <Stack width={'100%'} height={imgheight} justifyContent={'center'}sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        <Typography sx={{ textAlign: 'center' }} fontSize={fontsize} fontWeight={700} color={'white'}>
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
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Orangewithimage;
