import bali from '../../assets/beranda/balinusra/Bali.svg';
import kupang from '../../assets/beranda/balinusra/kupang.svg';
import mataram from '../../assets/beranda/balinusra/mataram.svg';
import gwk from "../../assets/beranda/GWK.jpg";
export interface BerandaData {
  imageSrc: string;
  textContent: string;
}

const berandaData: BerandaData[] = [
  { imageSrc: bali, textContent: 'Bedugul' },
  { imageSrc: kupang, textContent: 'Kuta' },
  { imageSrc: mataram, textContent: 'Nusa Penida' },
  { imageSrc: mataram, textContent: 'Kupang' },
];

export const areapopuler = [
  {
    id: 1,
    name: "GWK",
    provinsi: "Bali",
    image: gwk // Placeholder, replace with the actual image import
  },
  {
    id: 2,
    name: "GWK2",
    provinsi: "Bali",
    image: gwk // Placeholder, replace with the actual image import
  },

];

export default berandaData;
