import bali from '../../assets/beranda/balinusra/Bali.svg';
import kupang from '../../assets/beranda/balinusra/kupang.svg';
import mataram from '../../assets/beranda/balinusra/mataram.svg';

export interface BerandaData {
  imageSrc: string;
  textContent: string;
}

const berandaData: BerandaData[] = [
  { imageSrc: bali, textContent: 'Bali' },
  { imageSrc: kupang, textContent: 'Kupang' },
  { imageSrc: mataram, textContent: 'Mataram' },
  { imageSrc: mataram, textContent: 'Kupang' },
];

export default berandaData;
