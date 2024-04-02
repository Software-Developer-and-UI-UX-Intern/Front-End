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
    <Card sx={{ width: width, height: height, background: 'linear-gradient(65deg, #FF0025 23.51%, #F9A12D 81.92%)', borderRadius: '0px 104px 40px 0px' }}>
      <Stack width={width} height={`calc(${height} - ${imgheight})`}>
        <img src={imageSrc} alt="Image" width={width} height="100%" style={{borderBottomLeftRadius:'104px'}}/>
      </Stack>
      <Stack height={imgheight} justifyContent={'center'} alignItems={'center'}>
      <Typography sx={{ textAlign: 'center' }} fontSize={fontsize} fontWeight={500} color={'white'}>
        {textContent}
      </Typography>
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
