import { useState, useEffect } from 'react';
import { Stack, Typography, Input, MenuItem, Select as MuiSelect, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const customInputStyle = {
  width: '100%',
  height: '53px',
  '& input': {
    borderRadius: '20px',
    height: '53px',
    border: '2px solid #04214C',
    outline: 'none',
    padding: '0px 10px'
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
  height:'auto',
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    '& fieldset': {
      borderColor: '#04214C', // Apply border color here
    },
    '&:hover fieldset': {
      borderColor: '#04214C',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#04214C',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#6E6C6C',
    '&.Mui-focused': {
      color: 'transparent',
    },
  },
};

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    nik: '',
    phoneNumber: '',
    domisili: '',
    jenisKelamin: '',
    makanan: [''],
    minuman: [''],
  });

  const handleAddInput = () => {
    setFormData({
      ...formData,
      makanan: [...formData.makanan, ''],
    });
  };
  const handleAddInputMinuman = () => {
    setFormData({
      ...formData,
      minuman: [...formData.minuman, ''],

    });
  };
  const handleInputChange = (index: number, value: string) => {
    const newMakanan = formData.makanan.map((item, i) =>
      i === index ? value : item
    );

    setFormData({
      ...formData,
      makanan: newMakanan,
    });
  };
  const handleInputChangeminuman = (index: number, value: string) => {
    const newMinuman = formData.minuman.map((item, i) =>
      i === index ? value : item
    );
    setFormData({
      ...formData,
      minuman: newMinuman,
    });
  };
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
  
      if (token) {
        try {
          const response = await fetch('https://tripselbe.fly.dev/user', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = await response.json();
          console.log(userData); // Log the received user data
          
          // Update the form data with user data
          setFormData({
            fullName: userData.full_name || '',
            email: userData.email || '',
            nik: userData.nik || '',
            phoneNumber: userData.phone_number || '',
            domisili: userData.domisili || '',
            jenisKelamin: userData.jenis_kelamin || '',
            makanan: Array.isArray(userData.makanan) ? userData.makanan : [''],
            minuman: Array.isArray(userData.minuman) ? userData.minuman : [''],
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };
  
    fetchUserData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Check if any of the form fields are empty
    if (
      formData.fullName === '' ||
      formData.email === '' ||
      formData.nik === '' ||
      formData.phoneNumber === '' ||
      formData.domisili === '' ||
      formData.jenisKelamin === ''
    ) {
      return;
    }
  
    // Check additional conditions (e.g., email format)
    if (!formData.email.endsWith('@telkomsel.co.id')) {
      return;
    }
  
    try {
      const response = await fetch('https://tripselbe.fly.dev/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Server responded with status ${response.status}: ${errorMessage}`);
      }
  
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error updating user:', error);
      alert(`Failed to update user: ${error}`);
    }
  };  

  const handleImage1 = () => {
    console.log('Stack clicked!');
  };
  const handleImage2 = () => {
    console.log('Stack clicked!');
    // Your custom function logic here
  };
  const handleImage3= () => {
    console.log('Stack clicked!');
    // Your custom function logic here
  };

  return (
    <Stack height="900px" sx={{overflowY:'none'}} padding={'0 30px'} overflow={'auto'}>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Stack sx={{ width: 'auto' }} spacing={10} >
          <Typography fontWeight={500} fontSize={'42px'} color={'#04214C'}>
          Tambah Data Restoran
        </Typography>
          <Stack spacing={2} maxWidth={'100%'}>
            <Stack direction={'row'} gap={2}>
              <Stack direction={'column'} maxWidth={'100%'} width={'100%'} spacing={1}>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                nama Restoran
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Nama Restoran"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  inputProps={{
                    'aria-label': 'Nama Restoran',
                    name: 'fullName',
                    value: formData.fullName,
                    onChange: (e) => setFormData({ ...formData, fullName: (e.target as HTMLInputElement).value }),
                  }}
                />

                <Stack direction={'row'} justifyContent={'space-between'} gap={2}>
                <Stack maxWidth={'50%'} width={'50%'}>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                  Domisili<span style={{ color: '#FF010C' }}>*</span>
                </Typography>
                <MuiSelect
                  displayEmpty
                  inputProps={{ 'aria-label': 'Domisili' }}
                  style={{ borderRadius: '20px', fontSize: '22px', color: '#04214C', border: '1px solid #04214C', }}
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
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                  Jenis Restoran
                </Typography>
                <MuiSelect
                  displayEmpty
                  inputProps={{ 'aria-label': 'Jenis Restoran' }}
                  style={{ borderRadius: '20px', fontSize: '22px', color: '#04214C', border: '1px solid #04214C', }}
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
                  <MenuItem value='Halal'>Halal</MenuItem>
                  <MenuItem value='Non Halal'>Non Halal</MenuItem>
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
                  placeholder="Jarak"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  inputProps={{
                    'aria-label': 'Jarak',
                    name: 'fullName',
                    value: formData.fullName,
                    onChange: (e) => setFormData({ ...formData, fullName: (e.target as HTMLInputElement).value }),
                  }}
                />
                </Stack>
                </Stack>


                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                  Harga
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
                  placeholder="Termurah"
                  sx={customInputStyle}
                  style={{ fontSize: '22px', color: '#04214C' }}
                  inputProps={{
                    'aria-label': 'Harga',
                    name: 'email',
                    value: formData.email,
                    onChange: (e) => setFormData({ ...formData, email: (e.target as HTMLInputElement).value }),
                    style: { color:'#04214C', borderTopLeftRadius:'0px', borderBottomLeftRadius:'0px' } 
                  }}
                />
                </Stack>
                </Stack>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                  -
                </Typography>
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
                  placeholder="Termurah"
                  sx={customInputStyle}
                  style={{ fontSize: '22px', color: '#04214C' }}
                  inputProps={{
                    'aria-label': 'Harga',
                    name: 'email',
                    value: formData.email,
                    onChange: (e) => setFormData({ ...formData, email: (e.target as HTMLInputElement).value }),
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
                No. Handphone
                </Typography>
                <Input
                  disableUnderline
                  placeholder="No. Handphone"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  inputProps={{
                    'aria-label': 'No.Handphone',
                    name: 'fullName',
                    value: formData.fullName,
                    onChange: (e) => setFormData({ ...formData, fullName: (e.target as HTMLInputElement).value }),
                  }}
                />

                <Stack gap={2}>
                <Typography sx={{ fontWeight: 500, fontSize: '24px', color: '#04214C' }}>
                    Makanan
                  </Typography>
                  {formData.makanan.map((makanan, index) => (
                    <Input
                      key={index}
                      disableUnderline
                      placeholder={`Makanan ${index + 1}`}
                      style={{ fontSize: '22px', color: '#04214C' }}
                      sx={customInputStyle}
                      value={makanan}
                      onChange={(e) => handleInputChange(index, (e.target as HTMLInputElement).value)}
                    />
                  ))}
                  <Button
                    type="button"
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '60px',
                      width: '240px',
                      fontWeight: 500,
                      fontSize: '22px',
                      color: '#FFF',
                      backgroundColor: '#04214C',
                      borderRadius: '20px',
                      '&:hover': { background: '#04214C', color: '#FFF'}
                    }}
                    onClick={handleAddInput}
                  >
                    Tambah Makanan
                  </Button>
                </Stack>
                <Stack gap={2}>
                <Typography sx={{ fontWeight: 500, fontSize: '24px', color: '#04214C' }}>
                    Minuman
                  </Typography>
                  {formData.minuman.map((minuman, index) => (
                    <Input
                      key={index}
                      disableUnderline
                      placeholder={`Minuman ${index + 1}`}
                      style={{ fontSize: '22px', color: '#04214C' }}
                      sx={customInputStyle}
                      value={minuman}
                      onChange={(e) => handleInputChangeminuman(index, (e.target as HTMLInputElement).value)}
                    />
                  ))}
                  <Button
                    type="button"
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '60px',
                      width: '240px',
                      fontWeight: 500,
                      fontSize: '22px',
                      color: '#FFF',
                      backgroundColor: '#04214C',
                      borderRadius: '20px',
                      '&:hover': { background: '#04214C', color: '#FFF'}
                    }}
                    onClick={handleAddInputMinuman}
                  >
                    Tambah Minuman
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
                  style={{ fontSize: '22px', color: '#04214C' }}
                  inputProps={{
                    'aria-label': 'Maksimal 255 huruf',
                    name: 'deskripsi',
                    value: formData.phoneNumber,
                    onChange: (e) => setFormData({ ...formData, phoneNumber: (e.target as HTMLInputElement).value }),
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
                  background: '#D9D9D9',
                  // backgroundImage: `url(${makanan})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                height={'100%'}
                width={'100%'}
                maxWidth={'33%'}
                onClick={handleImage1}
              >
                
              </Stack>
              <Stack
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'20px'}
                sx={{
                  background: '#D9D9D9',
                  // backgroundImage: `url(${makanan})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                height={'100%'}
                width={'100%'}
                maxWidth={'33%'}
                onClick={handleImage2}
              >
                
              </Stack>
              <Stack
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'20px'}
                sx={{
                  background: '#D9D9D9',
                  // backgroundImage: `url(${makanan})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                height={'100%'}
                width={'100%'}
                maxWidth={'33%'}
                onClick={handleImage3}
              >
                
              </Stack>
                </Stack>
                </Stack>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                Link Menu
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Contoh : https://example.com"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  inputProps={{
                    'aria-label': 'Link Menu',
                    name: 'fullName',
                    value: formData.fullName,
                    onChange: (e) => setFormData({ ...formData, fullName: (e.target as HTMLInputElement).value }),
                  }}
                />
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                Link Alamat
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Link Alamat"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  inputProps={{
                    'aria-label': 'Link Alamat',
                    name: 'fullName',
                    value: formData.fullName,
                    onChange: (e) => setFormData({ ...formData, fullName: (e.target as HTMLInputElement).value }),
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={3} alignItems={'center'} justifyContent={'center'} width={'100%'} direction={'row'}>
            <Button
              type="button"
              onClick={() => navigate('/profile-password', { state: { email: formData.email }})}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60px',
                width: 'auto',
                fontWeight: 'bold',
                fontSize: '24px',
                color: 'red',
                backgroundColor: '#FFF',
                borderRadius: '40px',
                paddingLeft: '60px',
                paddingRight: '60px',
                boxShadow: '0px 0px 0px 2px red',
                '&:active': {
                  backgroundColor: '#FF010C',
                },
                '&:focus': {
                  backgroundColor: '#FF010C',
                },
                '&:hover': { background: 'red', color: 'white', boxShadow: '0px 0px 0px 2px red', }
              }}
            >
              Ubah Password
            </Button>
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
