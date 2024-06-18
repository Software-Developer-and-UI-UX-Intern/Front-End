
import waerebo from '../../../assets/about/flores/Desa Waerebo.jpeg'
import pink from '../../../assets/about/flores/pantaipink.jpeg'
import komodo from '../../../assets/about/flores/pulaukomodo.png'
import kalimutu from '../../../assets/about/flores/danaukalimutu.jpeg'

export interface BerandaData {
  imageSrc: string;
  textContent: string;
}

const berandaData: BerandaData[] = [
  { imageSrc: waerebo, textContent: 'Desa Waerebo' },
  { imageSrc: pink, textContent: 'Pantai Pink' },
  { imageSrc: komodo, textContent: 'Pulau Komodo' },
  { imageSrc: kalimutu, textContent: 'Danau Kelimutu' },
];

export const areapopuler = [
  {
    id: 1,
    name: "Pantai Pink",
    provinsi: "Bali",
    image: pink // Placeholder, replace with the actual image import
  },
  {
    id: 2,
    name: "Desa Waerebo",
    provinsi: "Bali",
    image: waerebo // Placeholder, replace with the actual image import
  },

];

export default berandaData;
