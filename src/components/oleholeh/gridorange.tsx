import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Item from '../../components/beranda/orangewithimage';

interface OrangewithimageProps {
  imageSrc: string;
  textContent: string;
}

interface GridProps {
  backendLink?: string;
  Data?: OrangewithimageProps[];
}

export default function GridOrange({ backendLink, Data }: GridProps) {
  const [GridData, setGridData] = useState<OrangewithimageProps[]>([]);

  useEffect(() => {
    if (Data) {
      setGridData(Data);
    } else if (backendLink) {
      fetch(backendLink)
        .then(response => response.json())
        .then((data: OrangewithimageProps[]) => setGridData(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [backendLink, Data]);

  return (
    <Grid container rowSpacing={3} columnSpacing={3} alignItems='center' justifyContent='center' borderRadius='40px'>
      {GridData.map((orangedata, index) => (
        <Grid item key={index} alignItems='center' justifyContent='center'>
          {/* Wrap the Item component inside a Link */}
          <Link to={`/oleh-oleh?kesiniyuk=${encodeURIComponent(orangedata.textContent)}`}>
            <Item imageSrc={orangedata.imageSrc} textContent={orangedata.textContent} width='579px' height='600px' />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
