import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useHistory
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
  const navigate = useNavigate(); // Initialize useHistory

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

  // Function to handle click event
  const handleItemClick = (textContent: string) => {
    // Use useHistory to navigate to the specified path
   navigate(`/cari-oleh-oleh?kesiniyuk=${encodeURIComponent(textContent)}`);
  };

  return (
    <Grid container rowSpacing={3} columnSpacing={3} justifyContent={GridData.length % 2 === 0 ? 'start' : 'start'} paddingLeft={'125px'}>      {GridData.map((orangedata, index) => (
        <Grid item key={index} alignItems='center' justifyContent='center'>
          {/* Wrap the Item component inside a div and attach an onClick event */}
          <div style={{ cursor: 'pointer' }} onClick={() => handleItemClick(orangedata.textContent)}>
            <Item imageSrc={orangedata.imageSrc} textContent={orangedata.textContent} width='579px' height='600px' fontsize='42px' imgheight='90px' />
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
