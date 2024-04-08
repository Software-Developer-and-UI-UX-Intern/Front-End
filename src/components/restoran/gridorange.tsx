import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Item from '../../components/restoran/orangewithimage';

interface OrangewithimageProps {
  imageSrc: string;
  textContent: string;
  location: string;
  domisili: string;
}

interface GridProps {
  backendLink?: string;
  Data?: OrangewithimageProps[];
}

export default function GridOrange({ backendLink, Data }: GridProps) {
  const [GridData, setGridData] = useState<OrangewithimageProps[]>([]);
  const navigate = useNavigate();

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

  const handleItemClick = (textContent: string) => {
    navigate(`/cari-restoran?kesiniyuk=${encodeURIComponent(textContent)}`);
  };

  return (
    <Grid container rowSpacing={3} columnSpacing={3} justifyContent={GridData.length % 2 === 0 ? 'space-around' : 'center'}>
      {GridData.map((orangedata, index) => (
        <Grid item key={index} >
          <div style={{ cursor: 'pointer' }} onClick={() => handleItemClick(orangedata.textContent)}>
            <Item imageSrc={orangedata.imageSrc} domisili={orangedata.domisili} location={orangedata.location} textContent={orangedata.textContent} width='579px' height='600px' fontsize='42px' imgheight='131px' />
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
