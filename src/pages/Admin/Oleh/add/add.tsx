import { useState, useEffect } from 'react';
import { Stack, Typography, Input, MenuItem, Select as MuiSelect, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom'; // Import the useLocation hook
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
type Address = {
  gambar_url?: string;
  gambar_preview?: string;
  gambar_file?: File;
  google_map_url: string;
  nama: string;
  jarak: string;
};
export default function Register() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    nama: '',
    gambar_url1: '',
    gambar_url2: '',
    gambar_url3: '',
    tiket_masuk: '',
    parkir: '',
    description: '',
    domisili: '',
    single_alamat: '',
    jarak: '',
    
  });
  const [addresses, setAddress] = useState<Address[]>([]);

  const [gambarFiles, setGambarFiles] = useState<File[]>([]);
  const [gambar2, setGambar2] = useState('');
  const [gambar3, setGambar3] = useState('');

  // const uploadImageToCloudinary = async (file: File): Promise<string | null> => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     formData.append('upload_preset', 'ml_default');
  
  //     const response = await fetch('https://api.cloudinary.com/v1_1/dgm5qtyrg/image/upload', {
  //       method: 'POST',
  //       body: formData,
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Failed to upload image');
  //     }
  
  //     const cloudinaryData = await response.json();
  //     return cloudinaryData.secure_url; // Return the URL of the uploaded image
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //     return null; // Return null if there was an error
  //   }
  // };  
  const postDataToServer = async (address: Address) => {
    const { nama, google_map_url, jarak, gambar_file } = address;
    try {
      let gambar_url = '';

      if (gambar_file) {
        const formData = new FormData();
        formData.append('file', gambar_file);
        formData.append('upload_preset', 'ml_default');

        const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dgm5qtyrg/image/upload', {
          method: 'POST',
          body: formData,
        });

        if (!cloudinaryResponse.ok) {
          throw new Error('Failed to upload image');
        }

        const cloudinaryData = await cloudinaryResponse.json();
        gambar_url = cloudinaryData.secure_url;
      }

      const response = await fetch(`https://tripselbe.fly.dev/addresses/${formData.nama}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama,
          gambar_url,
          google_map_url,
          jarak,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      return response.json();
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleFileInputChangeAlamat = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAddress((prevAddresses) => {
        const updatedAddresses = [...prevAddresses];
        updatedAddresses[index] = {
          ...updatedAddresses[index],
          gambar_preview: imageUrl,
          gambar_file: file,
        };
        return updatedAddresses;
      });
    }
  };

  const handleImageAlamat = (index: number) => {
    const fileInput = document.getElementById(`fileInputalamat${index}`) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleAddInput = () => {
    const newAddress: Address = { google_map_url: '', nama: '', jarak: '', gambar_url: '', gambar_preview: '', gambar_file: undefined };
    setAddress((prevAddresses) => [...prevAddresses, newAddress]);
  };
  

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
    default:
      break;
  }
}
    
  };
  const getAddresses = async (nama:string) => {
    try {
      const response = await fetch(`https://tripselbe.fly.dev/addresses/${nama}`);
  
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }
  
      const addresses = await response.json();
      return addresses;
    } catch (error) {
      console.error('Error fetching addresses:', error);
      throw new Error(`Failed to fetch addresses: ${error}`);
    }
  };
  const handleDeleteAddress = async (nama: string, oleh_nama: string) => {
    if (!nama || !oleh_nama) {
      setAddress(prevAddresses => prevAddresses.filter(address => address.nama !== nama));
      return;
    }

    try {
      const response = await fetch(`https://tripselbe.fly.dev/addresses/${nama}/${oleh_nama}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();
      setAddress(prevAddresses => prevAddresses.filter(address => address.nama !== nama));
      alert(data.message); // Optionally, you can show a message to the user upon successful deletion
    } catch (error) {
      console.error('Error deleting address:', error);
      alert('Failed to delete address');
    }
  };
  
  useEffect(() => {
    const fetchRestoranData = async () => {
      const { nama } = location.state;

      try {
        const response = await fetch(`https://tripselbe.fly.dev/oleh/${nama}`);
        const restoranData = await response.json();
   
        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}: ${restoranData.error}`);
        }

        setFormData({
          nama: restoranData.nama || '',
          gambar_url1: restoranData.gambar_url1 || '',
          gambar_url2: restoranData.gambar_url2 || '',
          gambar_url3: restoranData.gambar_url3 || '',
          tiket_masuk: restoranData.tiket_masuk || '',
          parkir: restoranData.parkir || '',
          description: restoranData.description || '',
          domisili: restoranData.domisili || '',
          single_alamat: restoranData.single_alamat || '',
          jarak: restoranData.jarak || '',
        });
        const fetchedAddresses = await getAddresses(restoranData.nama);
        setAddress(fetchedAddresses);

      } catch (error) {
        console.error('Error fetching restoran data:', error);
      }
    };
    fetchRestoranData();
  }, [location]);
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Step 1: Upload images
      const uploadedImages = await Promise.all(gambarFiles.map((file, index) => handleFileUpload(file, index + 1)));

      // Check if all uploads were successful
      if (uploadedImages.some(image => image === null)) {
        throw new Error('One or more image uploads failed');
      }

      const updatedFormData = {
        ...formData,
        gambar_url1: uploadedImages[0] || '', // If uploadedImages[0] is null, use an empty string
        gambar_url2: uploadedImages[1] || '', // If uploadedImages[1] is null, use an empty string
        gambar_url3: uploadedImages[2] || '', // If uploadedImages[2] is null, use an empty string
      };

      // Step 2: Create new oleh entry
      const response = await fetch('https://tripselbe.fly.dev/oleh', {
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

      const data = await response.json();

      // Step 3: Add new addresses
      await Promise.all(addresses.map(address => postDataToServer(address)));

      alert(data.message);
    } catch (error) {
      console.error('Error creating new oleh entry:', error);
      alert(`Failed to create new oleh entry: ${error}`);
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

  
  
  
  
  return (
    <Stack height="900px" sx={{overflowY:'none'}} padding={'0 30px'} overflow={'auto'}>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Stack sx={{ width: 'auto' }} spacing={10} >
          <Typography fontWeight={500} fontSize={'42px'} color={'#04214C'}>
          Tambah Data Oleh-oleh
        </Typography>
          <Stack spacing={2} maxWidth={'100%'}>
            <Stack direction={'row'} gap={2}>
              <Stack direction={'column'} maxWidth={'100%'} width={'100%'} spacing={1}>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
              Nama Tempat Oleh-Oleh
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Nama Tempat Oleh-Oleh"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  inputProps={{
                    'aria-label': 'Nama Tempat Oleh-oleh',
                    name: 'fullName',
                    value: formData.nama,
                    onChange: (e) => setFormData({ ...formData, nama: (e.target as HTMLInputElement).value }),
                  }}
                />

                <Stack direction={'row'} justifyContent={'space-between'} gap={2}>
                <Stack maxWidth={'50%'} width={'50%'}>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                  Domisili
                </Typography>
                <MuiSelect
                  displayEmpty
                  inputProps={{ 'aria-label': 'Domisili' }}
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
                  name="domisili"
                  value={formData.domisili}
                  onChange={(e) => setFormData({ ...formData, domisili: e.target.value })}
                >
                  <MenuItem value={formData.domisili}>
                    <em>{formData.domisili}</em>
                  </MenuItem>
                  <MenuItem value='Bali'>Bali</MenuItem>
                  <MenuItem value='Kupang'>Kupang</MenuItem>
                  <MenuItem value='Mataram'>Mataram</MenuItem>
                  <MenuItem value='Flores'>Flores</MenuItem>
                </MuiSelect>
                </Stack>
                <Stack maxWidth={'50%'}>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                Jarak
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Dalam meter"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  inputProps={{
                    'aria-label': 'Jarak',
                    name: 'fullName',
                    value: formData.jarak,
                    onChange: (e) => setFormData({ ...formData, jarak: (e.target as HTMLInputElement).value }),
                  }}
                />
                </Stack>
                </Stack>


                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                  Harga Tiket
                </Typography>
                <Stack alignItems={'center'} direction={'row'} gap={2} justifyContent={'space-between'}>
                <Stack width={'100%'} maxWidth={'50%'}>

                <Stack direction={'row'} alignItems={'center'}>
                  <Stack justifyContent={'center'} alignItems={'center'} height={'53px'} width={'auto'} border={'2px solid #04214C'} borderRight={'none'} borderRadius={'20px 0 0 20px'}>
                  <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C',
                  padding:'15px'
                }}>
                  Rp
                </Typography>
                  </Stack>
                <Input
                disableUnderline
                  placeholder="Harga Tiket"
                  sx={customInputStyle}
                  style={{ fontSize: '22px', color: '#04214C' }}
                  inputProps={{
                    'aria-label': 'Hargatermurah',
                    name: 'email',
                    value: formData.tiket_masuk,
                    onChange: (e) => setFormData({ ...formData, tiket_masuk: (e.target as HTMLInputElement).value }),
                    style: { color:'#04214C', borderTopLeftRadius:'0px', borderBottomLeftRadius:'0px' } 
                  }}
                />
                </Stack>
                </Stack>
                {/* <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                  -
                </Typography> */}
                <Stack width={'100%'} maxWidth={'50%'}>

                <Stack direction={'row'} alignItems={'center'}>
                  <Stack justifyContent={'center'} alignItems={'center'} height={'53px'} width={'auto'} border={'2px solid #04214C'} borderRight={'none'} borderRadius={'30px 0 0 30px'}>
                  <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C',
                  padding:'15px'
                }}>
                  Rp
                </Typography>
                  </Stack>
                <Input
                disableUnderline
                  placeholder="Harga Parkir"
                  sx={customInputStyle}
                  style={{ fontSize: '22px', color: '#04214C' }}
                  inputProps={{
                    'aria-label': 'Harga Parkir',
                    name: 'email',
                    value: formData.parkir,
                    onChange: (e) => setFormData({ ...formData, parkir: (e.target as HTMLInputElement).value }),
                    style: { color:'#04214C', borderTopLeftRadius:'0px', borderBottomLeftRadius:'0px' } 
                  }}
                />
                </Stack>
                </Stack>
                </Stack>



                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                Link Alamat Utama
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Link Alamat Utama"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  inputProps={{
                    'aria-label': 'Link Alamat Utama',
                    name: 'Link Alamat Utama',
                    value: formData.single_alamat,
                    onChange: (e) => setFormData({ ...formData, single_alamat: (e.target as HTMLInputElement).value }),
                  }}
                />
<Stack spacing={4}>
      {addresses.map((address, index) => (
        <Stack gap={2} key={index}>
          <Stack direction={'row'} gap={2} justifyContent={'space-between'}>
            <Stack maxWidth={'50%'} gap={2}>
              <Stack gap={1}>
                <Typography sx={{ fontWeight: 500, fontSize: '24px', color: '#04214C' }}>
                  Link Alamat Cabang {index + 1}
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Alamat Cabang"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  value={address.google_map_url}
                  onChange={(e) => {
                    const updatedAddresses = [...addresses];
                    updatedAddresses[index].google_map_url = e.target.value;
                    setAddress(updatedAddresses);
                  }}
                />
                <Typography sx={{ fontWeight: 500, fontSize: '24px', color: '#04214C' }}>
                  Nama Cabang {index + 1}
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Nama Cabang"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  value={address.nama}
                  onChange={(e) => {
                    const updatedAddresses = [...addresses];
                    updatedAddresses[index].nama = e.target.value;
                    setAddress(updatedAddresses);
                  }}
                />
                <Typography sx={{ fontWeight: 500, fontSize: '24px', color: '#04214C' }}>
                  Jarak Cabang {index + 1}
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Jarak Cabang"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  value={address.jarak}
                  onChange={(e) => {
                    const updatedAddresses = [...addresses];
                    updatedAddresses[index].jarak = e.target.value;
                    setAddress(updatedAddresses);
                  }}
                />
              </Stack>
              <Button
                type="button"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '60px',
                  width: '100%',
                  fontWeight: 500,
                  fontSize: '22px',
                  color: '#FFF',
                  backgroundColor: '#FF010C',
                  borderRadius: '20px',
                  '&:hover': { background: '#FF010C', color: '#FFF' }
                }}
                onClick={() => handleDeleteAddress(address.nama, formData.nama)}
              >
                Hapus Cabang
              </Button>
            </Stack>
            <Stack maxWidth={'50%'} width={'100%'}>
              <Typography sx={{ fontWeight: 500, fontSize: '24px', color: '#04214C' }}>
                Gambar Cabang {index+1}
              </Typography>
              <Stack
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'20px'}
                sx={{
                  background: `${address.gambar_preview ? `url(${address.gambar_preview})` : address.gambar_url ? `url(${address.gambar_url})` : '#D9D9D9'}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
                height={'100%'}
                width={'100%'}
                onClick={() => handleImageAlamat(index)}
                >
                {/* File input for image 1 */}
                <input
                  type="file"
                  id={`fileInputalamat${index}`}
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileInputChangeAlamat(e, index)}
                  />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      ))}
      <Button
        type="button"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60px',
          width: '100%',
          fontWeight: 500,
          fontSize: '22px',
          color: '#FFF',
          backgroundColor: '#04214C',
          borderRadius: '20px',
          '&:hover': { background: '#04214C', color: '#FFF' }
        }}
        onClick={handleAddInput}
      >
        Tambah Cabang
      </Button>
    </Stack>
              </Stack>
                 
              <Stack direction={'column'} maxWidth={'100%'} width={'100%'} spacing={1}>
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
                    value: formData.description,
                    onChange: (e) => setFormData({ ...formData, description: (e.target as HTMLInputElement).value }),
                  }}
                />
                <Stack>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                  Gambar
                </Typography>
                <Stack height={'190px'} gap={2} direction={'row'} justifyContent={'space-between'}>
                <Stack
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'20px'}
                sx={{
                  background: `${gambar1 ? `url(${gambar1})` : formData.gambar_url1 ? `url(${formData.gambar_url1})` : '#D9D9D9'}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                height={'100%'}
                width={'100%'}
                maxWidth={'33%'}
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
              <Stack
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'20px'}
                sx={{
                  background: `${gambar2 ? `url(${gambar2})` : formData.gambar_url2 ? `url(${formData.gambar_url2})` : '#D9D9D9'}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                height={'100%'}
                width={'100%'}
                maxWidth={'33%'}
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
              <Stack
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'20px'}
                sx={{
                  background: `${gambar3 ? `url(${gambar3})` : formData.gambar_url3 ? `url(${formData.gambar_url3})` : '#D9D9D9'}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                height={'100%'}
                width={'100%'}
                maxWidth={'33%'}
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
                </Stack>
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
