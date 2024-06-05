import { useState } from 'react';
import { Stack, Typography, Input, MenuItem, Select as MuiSelect, TextField } from '@mui/material';
import { Button } from '@mui/material';
const customInputStyle = {
  width: '100%',
  height: '53px',
  '& input': {
    borderRadius: '20px',
    height: '53px',
    border: '2px solid #04214C',
    outline: 'none',
    padding: '0px 10px',
    fontWeight:500,
  },
  '& .MuiInputLabel-root': {
    color: '#6E6C6C',
    '&.Mui-focused': {
      color: 'transparent',
    },
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#04214C',
    },
  },
  '& .MuiOutlinedInput-root.MuiSelect-root': {
    borderRadius: '20px',
    '&:hover fieldset': {
      borderColor: '#04214C',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#04214C',
    },
  },
};
const customInputStyle2 = {
  width: '100%',
  height: 'auto',
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    '& fieldset': {
      borderColor: '#04214C', // Apply border color here
      border: '2px solid #04214C', 
    },
    '&:hover fieldset': {
      borderColor: '#04214C',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#04214C',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#04214C',
    '&.Mui-focused': {
      color: 'transparent',
    },
  },
  '& .MuiInputBase-input': {
    fontWeight: 500, // Change font weight here
    color:'#04214C',
    fontSize: '22px', // Change font size here
    
  },
};
// interface Address  {
//   domisili: string;
//   coverabout: string;
//   footerabout: string;
//   deskripsiabout: string;
//   coverresto: string;
//   coverhotel: string;
//   coveroleh: string;
//   jenis: string;
// }
export default function Register() {
  const [formData, setFormData] = useState({
    domisili: '',
    coverabout: '',
    footerabout: '',
    deskripsiabout: '',
    coverresto: '',
    coverhotel: '',
    coveroleh: '',
    jenis: '',
  });
  // const [addresses, setAddress] = useState<Address[]>([]);

  const [gambarFiles, setGambarFiles] = useState<File[]>([]);
  const [gambar2, setGambar2] = useState('');
  const [gambar3, setGambar3] = useState('');
  const [gambar4, setGambar4] = useState('');
  const [gambar5, setGambar5] = useState('');

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const files = e.target.files;
    if (files?.length) {
      setGambarFiles(prevFiles => {
        const newFiles = [...prevFiles];
        newFiles[index - 1] = files[0]; // Index is 1-based, so subtract 1
        return newFiles;
      });
    }
    if (files) {
  switch (index) {
    case 1:
      setGambar1(URL.createObjectURL(files[0]));
      break;
    case 2:
      setGambar2(URL.createObjectURL(files[0]));
      break;
    case 3:
      setGambar3(URL.createObjectURL(files[0]));
      break;
      case 4:
        setGambar4(URL.createObjectURL(files[0]));
        break;
      case 5:
        setGambar5(URL.createObjectURL(files[0]));
        break;
    default:
      break;
  }
}
    
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const uploadedImages = await Promise.all(gambarFiles.map((file, index) => handleFileUpload(file, index + 1)));
  
      // Check if all uploads were successful
      if (uploadedImages.some(image => image === null)) {
        throw new Error('One or more image uploads failed');
      }
    //   const existingResponse = await fetch(`https://tripselbe.fly.dev/area/${formData.domisili}`);
    //   if (!existingResponse.ok) {
    //       const errorMessage = await existingResponse.text();
    //       throw new Error(`Failed to fetch existing data: ${existingResponse.status}: ${errorMessage}`);
    //   }

    //   const existingData = await existingResponse.json();
      const updatedFormData = {
        domisili: formData.domisili || '',
        deskripsiabout: formData.deskripsiabout || '',
        jenis: formData.jenis || '',
        coverabout: uploadedImages[0] || '',
        footerabout: uploadedImages[1] || '',
        coveroleh: uploadedImages[2] || '',
        coverhotel: uploadedImages[3] || '',
        coverresto: uploadedImages[4] || '',

    };
    console.log(JSON.stringify(updatedFormData))
      const response = await fetch(`https://tripselbe.fly.dev/area`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Server responded with status ${response.status}: ${errorMessage}`);
      }
  
      console.log(updatedFormData);
      const data = await response.json();
      // await Promise.all(addresses.map(address => postDataToServer(address)));
      alert(data.message);
    } catch (error) {
      console.error('Error Posting restoran:', error);
      alert(`Failed to update restoran: ${error}`);
    }
  };
  

  const handleFileUpload = async (file: File | null, index: number) => {
    try {
      if (!file) return null; // If file is null, return null
  
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'ml_default');
  
      const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dgm5qtyrg/image/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!cloudinaryResponse.ok) {
        throw new Error(`Failed to upload image ${index} to Cloudinary`);
      }
      
      const cloudinaryData = await cloudinaryResponse.json();
      const imageUrl = cloudinaryData.secure_url;
  
      console.log(`Image ${index} uploaded to Cloudinary: ${imageUrl}`);
      return imageUrl;
    } catch (error) {
      console.error(`Error uploading image ${index} to Cloudinary:`, error);
      return null;
    }
  };
  
  
  const [gambar1, setGambar1] = useState('');

  const handleImage1 = () => {
    const fileInput1 = document.getElementById('fileInput1');
    if (fileInput1) {
      fileInput1.click();
    }
  };
  
  const handleImage2 = () => {
    const fileInput2 = document.getElementById('fileInput2');
    if (fileInput2) {
      fileInput2.click();
    }
  };
  
  const handleImage3 = () => {
    const fileInput3 = document.getElementById('fileInput3');
    if (fileInput3) {
      fileInput3.click();
    }
  };
  const handleImage4 = () => {
    const fileInput4 = document.getElementById('fileInput4');
    if (fileInput4) {
      fileInput4.click();
    }
  };
  
  const handleImage5 = () => {
    const fileInput5 = document.getElementById('fileInput5');
    if (fileInput5) {
      fileInput5.click();
    }
  };
  
  
  
  
  return (
    <Stack height="900px" sx={{overflowY:'none'}} padding={'0 30px'} overflow={'auto'}>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Stack sx={{ width: 'auto' }} spacing={10} >
          <Typography fontWeight={500} fontSize={'42px'} color={'#04214C'}>
          Tambah Domisili
        </Typography>
        <Stack spacing={2} maxWidth={'100%'}>
            <Stack direction={'row'} gap={2}>
              <Stack direction={'column'} maxWidth={'100%'} width={'100%'} spacing={1}>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
              Domisili
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Contoh: Bali"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  inputProps={{
                    'aria-label': 'Domisili',
                    name: 'fullName',
                    value: formData.domisili,
                    onChange: (e) => setFormData({ ...formData, domisili: (e.target as HTMLInputElement).value }),
                  }}
                />
       
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                  Banner wisata
                </Typography>
                <Stack height={'auto'} width={'100%'} gap={2} direction={'column'} justifyContent={'space-between'}>
                <Stack
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'20px'}
                sx={{
                  background: `${gambar1 ? `url(${gambar1})` : formData.coverabout ? `url(${formData.coverabout})` : '#D9D9D9'}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                height={'188px'}
                width={'100%'}
                maxWidth={'100%'}
                onClick={handleImage1}
              >
                {/* File input for image 1 */}
                <input
                  type="file"
                  id="fileInput1"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileInputChange(e, 1)}
                  />
              </Stack>
              <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                  Footer Wisata
                </Typography>
              <Stack
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'20px'}
                sx={{
                  background: `${gambar2 ? `url(${gambar2})` : formData.footerabout ? `url(${formData.footerabout})` : '#D9D9D9'}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                height={'188px'}
                width={'100%'}
                maxWidth={'100%'}
                onClick={handleImage2}
              >
                {/* File input for image 1 */}
                <input
                  type="file"
                  id="fileInput2"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileInputChange(e, 2)}
                  />
              </Stack>
              <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                  Banner Oleh-oleh
                </Typography>

              <Stack
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'20px'}
                sx={{
                  background: `${gambar3 ? `url(${gambar3})` : formData.coveroleh ? `url(${formData.coveroleh})` : '#D9D9D9'}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                height={'188px'}
                width={'100%'}
                maxWidth={'100%'}
                onClick={handleImage3}
              >
                {/* File input for image 1 */}
                <input
                  type="file"
                  id="fileInput3"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileInputChange(e, 3)}
                  />
              </Stack>
              <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                  Banner Restoran
                </Typography>
                
              <Stack
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'20px'}
                sx={{
                  background: `${gambar4 ? `url(${gambar4})` : formData.coverresto ? `url(${formData.coverresto})` : '#D9D9D9'}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                height={'188px'}
                width={'100%'}
                maxWidth={'100%'}
                onClick={handleImage4}
              >
                {/* File input for image 1 */}
                <input
                  type="file"
                  id="fileInput4"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileInputChange(e, 4)}
                  />
              </Stack>
              <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                  Banner Hotel
                </Typography>
                
              <Stack
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'20px'}
                sx={{
                  background: `${gambar5 ? `url(${gambar5})` : formData.coverhotel ? `url(${formData.coverhotel})` : '#D9D9D9'}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                height={'188px'}
                width={'100%'}
                maxWidth={'100%'}
                onClick={handleImage5}
              >
                {/* File input for image 1 */}
                <input
                  type="file"
                  id="fileInput5"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileInputChange(e, 5)}
                  />
              </Stack>
                </Stack>
              </Stack>
                 
              <Stack direction={'column'} maxWidth={'100%'} width={'100%'} spacing={1}>
              <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                  Jenis Kantor
                </Typography>
                <MuiSelect
                  displayEmpty
                  inputProps={{ 'aria-label': 'Jenis' }}
                  style={{ borderRadius: '20px', fontSize: '22px', color: '#04214C', border: '2px solid #04214C', }}
                  sx={{
                    ...customInputStyle,
                    '&:focus': {
                      borderColor: 'transparent !important',
                    },
                    '& fieldset': {
                      borderColor: 'transparent !important',
                    },
                    '&:hover fieldset': {
                      borderColor: 'transparent !important',
                    },
                    '&:active fieldset': {
                      borderColor: 'transparent !important',
                    },
                  }}
                  name="jenis"
                  value={formData.jenis}
                  onChange={(e) => setFormData({ ...formData, jenis: e.target.value })}
                >
                  <MenuItem value={formData.jenis}>
                    <em>{formData.jenis}</em>
                  </MenuItem>
                  <MenuItem value='TSO'>Telekomsel Smart Office (TSO)</MenuItem>
                  <MenuItem value='Grapari'>Grapari</MenuItem>
                
                </MuiSelect>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                Deskripsi
                </Typography>
                <TextField
                multiline
                  variant='outlined'
                  placeholder="Maksimal 255 huruf"
                  sx={customInputStyle2}
                  inputProps={{
                    'aria-label': 'Maksimal 255 huruf',
                    name: 'deskripsi',
                    value: formData.deskripsiabout,
                    onChange: (e) => setFormData({ ...formData, deskripsiabout: (e.target as HTMLInputElement).value }),
                  }}
                />
                <Stack>

                </Stack>
                
                
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={3} alignItems={'center'} justifyContent={'center'} width={'100%'} direction={'row'} height={'120px'}>
            <Button
              type="submit"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60px',
                width: 'auto',
                fontWeight: 'bold',
                fontSize: '24px',
                color: '#ffffff',
                backgroundColor: '#FF010C',
                borderRadius: '40px',
                paddingLeft: '60px',
                paddingRight: '60px',
                '&:active': {
                  backgroundColor: '#FF010C',
                },
                '&:focus': {
                  backgroundColor: '#FF010C',
                },
                '&:hover': { background: 'white', color: 'red', boxShadow: '0px 0px 0px 2px red', }
              }}
            >
              Simpan Perubahan
            </Button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
}
