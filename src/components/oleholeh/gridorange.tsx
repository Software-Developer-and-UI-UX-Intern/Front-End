import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Item from '../../components/beranda/orangewithimage';

interface OrangewithimageProps {
  imageSrc: string;
  textContent: string;
}

interface GridProps {
  backendLink?: string; // Optional prop for providing the backend link
  Data?: OrangewithimageProps[]; // Optional prop for providing data from a .ts file
}

export default function GridOrange({ backendLink, Data }: GridProps) {
  const [GridData, setGridData] = useState<OrangewithimageProps[]>([]);

  useEffect(() => {
    if (Data) {
      // If Data is provided, use it
      setGridData(Data);
    } else if (backendLink) {
      // If backendLink is provided, fetch data from the backend
      fetch(backendLink)
        .then(response => response.json())
        .then((data: OrangewithimageProps[]) => setGridData(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [backendLink, Data]);

  return (
    <Grid container rowSpacing={3} columnSpacing={3} alignItems='center' justifyContent='center' borderRadius='40px'>
      {GridData.map((orangedata, index) => (
        <Grid item key={index} alignItems='center' justifyContent='center' >
          <Item imageSrc={orangedata.imageSrc} textContent={orangedata.textContent} width='579px' height='600px' />
        </Grid>
      ))}
    </Grid>
  );
}
