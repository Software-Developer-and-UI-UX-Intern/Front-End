import { Typography, Card, Stack } from '@mui/material';
import PropTypes from 'prop-types';

interface OrangewithimageProps {
  imageSrc: string;
  textContent: string;
}

const Orangewithimage: React.FC<OrangewithimageProps> = ({ imageSrc, textContent }) => {

  return (
    <Card sx={{ width: '335px', height: '400px', background: 'linear-gradient(65deg, #FF0025 23.51%, #F9A12D 81.92%)', borderRadius: '0px 104px 40px 0px' }}>
      <Stack width={'335px'} height={'322px'}>
        <img src={imageSrc} alt="Image" width={'335px'} height={'100%'} />
      </Stack>
      <Typography sx={{ textAlign: 'center' }} fontSize={'50px'} fontWeight={500} color={'white'}>
        {textContent}
      </Typography>
    </Card>
  );
}

Orangewithimage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired
};

export default Orangewithimage;
