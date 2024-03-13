import { useState } from 'react';
import { Grid, Stack, Box, Typography, Input, IconButton, MenuItem, Select as MuiSelect } from '@mui/material';
import { Button, Link } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import bg from '../../assets/login.png';
import logo from '../../assets/Trip-sel.png';

const customInputStyle = {
  width: '100%',
  height: '53px',
  '& input': {
    borderRadius: '20px',
    height: '53px',
    border: '1px solid #000', // Apply border directly to the input
    outline: 'none',
    padding: '0px 10px'
  },
  '& .MuiInputLabel-root': {
    color: '#6E6C6C', // Initially make label transparent
    '&.Mui-focused': {
      color: 'transparent', // Change label color when focused
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
      borderColor: '#000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#04214C',
    },
  },
};

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    nik: '',
    phoneNumber: '',
    domisili: '',
    jenisKelamin: '',
    password: '',
    confirmPassword: '' // New state for confirm password
  });
  const [submitPressed, setSubmitPressed] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  interface FormDataObject {
    fullName: string;
    email: string;
    nik: string;
    phoneNumber: string;
    domisili: string;
    jenisKelamin: string;
    password: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitPressed(true); // Button is pressed

    // Check if any of the fields are empty
    if (
      formData.fullName === '' ||
      formData.email === '' ||
      formData.nik === '' ||
      formData.phoneNumber === '' ||
      formData.domisili === '' ||
      formData.jenisKelamin === '' ||
      formData.password === '' ||
      formData.confirmPassword === '' // Check if confirmPassword is empty
    ) {
      alert('Lengkapi semua data sebelum melanjutkan.');
      return; // Prevent form submission
    }

    // Check if password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      alert('Password dan konfirmasi password tidak cocok.');
      return; // Prevent form submission
    }

    const formDataCopy = new FormData(e.target as HTMLFormElement);
    const formDataObject: FormDataObject = {
      fullName: formDataCopy.get('fullName') as string,
      email: formDataCopy.get('email') as string,
      nik: formDataCopy.get('nik') as string,
      phoneNumber: formDataCopy.get('phoneNumber') as string,
      domisili: formDataCopy.get('domisili') as string,
      jenisKelamin: formDataCopy.get('jenisKelamin') as string,
      password: formDataCopy.get('password') as string,
    };

    try {
      const response = await fetch('https://tripselbe.fly.dev/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObject),
      });

      if (!response.ok) {
        // Handle non-200 HTTP status codes
        const errorMessage = await response.text();
        throw new Error(`Server responded with status ${response.status}: ${errorMessage}`);
      }

      const data = await response.json();
      alert(data.message); // Display success message from the server
    } catch (error) {
      console.error('Error registering user:', error);
      alert(`Failed to register user ${error}`); // Alert the specific error message
    }
  };

  return (
    <Box>
      <Grid container sx={{ height: '100vh' }}>
        <Grid item xs={12} md={6} sx={{ maxHeight: '100%' }}>
          <Stack height={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Stack direction={'column'} sx={{ display: { md: 'flex' }, width: '100%', height: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
              <Stack sx={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={logo}
                  alt=""
                  width="100%"
                  style={{ maxWidth: '314px' }}
                />
              </Stack>
              <img
                src={bg}
                alt=""
                width="100%"
                style={{ maxWidth: '550px', maxHeight: '550px' }}
              />
              <Typography sx={{
                fontWeight: 700,
                fontSize: '42px',
                color: '#FF010C',
              }}>
                #TripwithTelkomsel
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          px={8}
          py={2}
          sx={{
            bgcolor: 'white',
            padding: '0px',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            maxWidth: '674px',
            '@media screen and (max-width: 899px)': {
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 0,
            },
          }}
        >
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Stack sx={{ width: '100%' }} spacing={10} maxHeight={'700px'}>
              <Stack spacing={1}>
                <Typography sx={{
                  fontWeight: 700,
                  fontSize: '42px',
                  color: '#FF010C',
                }}>
                  Daftar Akun
                </Typography>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '32px',
                  color: '#FF010C',
                }}>
                  Lengkapi data diri Anda
                </Typography>
              </Stack>
              <Stack spacing={2} maxWidth={'674px'}>
                <Stack direction={'row'} gap={2}>
                  <Stack direction={'column'} maxWidth={'393px'} width={'100%'}>
                    <Typography sx={{
                      fontWeight: 500,
                      fontSize: '24px',
                      color: 'black'
                    }}>
                      Nama Lengkap (Sesuai KTP)*
                    </Typography>
                    <Input
                      disableUnderline
                      placeholder="Nama Lengkap"
                      sx={customInputStyle}
                      inputProps={{
                        'aria-label': 'Nama Lengkap',
                        name: 'fullName',
                        value: formData.fullName,
                        onChange: (e) => setFormData({ ...formData, fullName: (e.target as HTMLInputElement).value }),
                      }}
                    />
                    {(submitPressed && formData.fullName === '') && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#FF010C'
                      }}>
                        *Nama lengkap tidak boleh kosong
                      </Typography>
                    )}
                     {(submitPressed && formData.fullName !== '') && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: 'transparent'
                      }}>
                        *Nama lengkap tidak boleh kosong
                      </Typography>
                    )}
                    {(submitPressed === false) && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: 'transparent'
                      }}>
                        *Nama lengkap tidak boleh kosong
                      </Typography>
                    )}
                    <Typography sx={{
                      fontWeight: 500,
                      fontSize: '24px',
                      color: 'black'
                    }}>
                      Email Telkomsel*
                    </Typography>
                    <Input
                      disableUnderline
                      placeholder="Contoh: adimarnita@telkomsel"
                      sx={customInputStyle}
                      inputProps={{
                        'aria-label': 'Email Telkomsel',
                        name: 'email',
                        value: formData.email,
                        onChange: (e) => setFormData({ ...formData, email: (e.target as HTMLInputElement).value }),
                      }}
                    />
                    {(submitPressed && formData.email === '') && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#FF010C'
                      }}>
                        *Inputkan email Telkomsel Anda
                      </Typography>
                    )}
                    {(submitPressed && formData.email !== '') && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: 'transparent'
                      }}>
                        *Inputkan email Telkomsel Anda
                      </Typography>
                    )}
                    {(submitPressed === false) && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: 'transparent'
                      }}>
                        *Inputkan email Telkomsel Anda
                      </Typography>
                    )}
                    <Typography sx={{
                      fontWeight: 500,
                      fontSize: '24px',
                      color: 'black'
                    }}>
                      Nomor Induk Kependudukan*
                    </Typography>
                    <Input
                      disableUnderline
                      placeholder="Contoh: 5178xxxxxxxxx"
                      sx={customInputStyle}
                      inputProps={{
                        'aria-label': 'Nomor Induk Kependudukan',
                        name: 'nik',
                        value: formData.nik,
                        onChange: (e) => setFormData({ ...formData, nik: (e.target as HTMLInputElement).value }),
                      }}
                    />
                    {(submitPressed && formData.nik === '') && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#FF010C'
                      }}>
                        *NIK tidak boleh kosong
                      </Typography>
                    )}
                    {(submitPressed && formData.nik !== '') && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: 'transparent'
                      }}>
                        *NIK tidak boleh kosong
                      </Typography>
                    )}
                    {(submitPressed === false) && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: 'transparent'
                      }}>
                        *NIK tidak boleh kosong
                      </Typography>
                    )}
                  </Stack>
                  <Stack direction={'column'} maxWidth={'262px'} width={'100%'}>
                    <Typography sx={{
                      fontWeight: 500,
                      fontSize: '24px',
                      color: 'black'
                    }}>
                      No. handphone*
                    </Typography>
                    <Input
                      disableUnderline
                      placeholder="No. handphone"
                      sx={customInputStyle}
                      inputProps={{
                        'aria-label': 'No. handphone',
                        name: 'phoneNumber',
                        value: formData.phoneNumber,
                        onChange: (e) => setFormData({ ...formData, phoneNumber: (e.target as HTMLInputElement).value }),
                      }}
                    />
                    {(submitPressed && formData.phoneNumber === '') && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#FF010C'
                      }}>
                        *No handphone tidak valid
                      </Typography>
                    )}
                    {(submitPressed && formData.phoneNumber !== '') && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: 'transparent'
                      }}>
                        *No handphone tidak valid
                      </Typography>
                    )}
                  {(submitPressed === false) && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: 'transparent'
                      }}>
                        *No handphone tidak valid
                      </Typography>
                    )}
                    <Typography sx={{
                      fontWeight: 500,
                      fontSize: '24px',
                      color: 'black'
                    }}>
                      Domisili*
                    </Typography>
                    <MuiSelect
                      displayEmpty
                      inputProps={{ 'aria-label': 'Domisili' }}
                      style={{ borderRadius: '20px' }}
                      sx={{
                        ...customInputStyle,
                        '&:focus': {
                          backgroundColor: 'transparent',
                        },
                        '& fieldset': {
                          borderColor: '#000',
                        },
                      }}
                      name="domisili"
                      value={formData.domisili}
                      onChange={(e) => setFormData({ ...formData, domisili: (e.target as HTMLInputElement).value })}
                    >
                      <MenuItem value="">
                        <em>none</em>
                      </MenuItem>
                      <MenuItem value='Jawa'>Jawa</MenuItem>
                      <MenuItem value='Nusa Penida'>Nusa Penida</MenuItem>
                      <MenuItem value='Bali'>Bali</MenuItem>
                    </MuiSelect>
                    {(submitPressed && formData.domisili === '') && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#FF010C'
                      }}>
                        *Domisili tidak valid
                      </Typography>
                    )}
                    {(submitPressed && formData.domisili !== '') && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: 'transparent'
                      }}>
                        *Domisili tidak valid
                      </Typography>
                    )}
                    {(submitPressed === false) && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: 'transparent'
                      }}>
                        *Domisili tidak valid
                      </Typography>
                    )}
                    <Typography sx={{
                      fontWeight: 500,
                      fontSize: '24px',
                      color: 'black'
                    }}>
                      Jenis Kelamin*
                    </Typography>
                    <MuiSelect
                      displayEmpty
                      inputProps={{ 'aria-label': 'Jenis Kelamin' }}
                      style={{ borderRadius: '20px' }}
                      sx={{
                        ...customInputStyle,
                        '&:focus': {
                          backgroundColor: 'transparent',
                        },
                        '& fieldset': {
                          borderColor: '#000',
                        },
                      }}
                      name="jenisKelamin"
                      value={formData.jenisKelamin}
                      onChange={(e) => setFormData({ ...formData, jenisKelamin: (e.target as HTMLInputElement).value })}
                    >
                      <MenuItem value="">
                        <em>none</em>
                      </MenuItem>
                      <MenuItem value='Perempuan'>Perempuan</MenuItem>
                      <MenuItem value='Pria'>Pria</MenuItem>
                    </MuiSelect>
                    {(submitPressed && formData.jenisKelamin !== '') && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: 'transparent'
                      }}>
                        *Jenis kelamin tidak valid
                      </Typography>
                    )}
                    {(submitPressed === false) && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: 'transparent'
                      }}>
                        *Jenis kelamin tidak valid
                      </Typography>
                    )}
                    {(submitPressed && formData.jenisKelamin === '') && (
                      <Typography sx={{
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#FF010C'
                      }}>
                        *Jenis kelamin tidak valid
                      </Typography>
                    )}
                  </Stack>
                </Stack>
                <Stack>
                  <Typography sx={{
                    fontWeight: 500,
                    fontSize: '24px',
                    color: 'black'
                  }}>
                    Konfirmasi Password*
                  </Typography>
                  <Input
                    disableUnderline
                    id="password"
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                    sx={customInputStyle}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                      name: 'password',
                      value: formData.password,
                      onChange: (e) => setFormData({ ...formData, password: (e.target as HTMLInputElement).value }),
                    }}
                  />
                  {(submitPressed && formData.password === '') && (
                    <Typography sx={{
                      fontWeight: 500,
                      fontSize: '16px',
                      color: '#FF010C',
                    }}>
                      *Password tidak sesuai
                    </Typography>
                  )}
                  {(submitPressed && formData.password !== '') && (
                    <Typography sx={{
                      fontWeight: 500,
                      fontSize: '16px',
                      color: 'transparent',
                    }}>
                      *Password tidak sesuai
                    </Typography>
                  )}
                    {(submitPressed === false) && (
                    <Typography sx={{
                      fontWeight: 500,
                      fontSize: '16px',
                      color: 'transparent',
                    }}>
                      *Password tidak sesuai
                    </Typography>
                  )}
                </Stack>
                <Stack>
                <Typography sx={{
                    fontWeight: 500,
                    fontSize: '24px',
                    color: 'black'
                  }}>
                    konfirmasi Password*
                  </Typography>
                  <Input
                    disableUnderline
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    type={showPassword ? 'text' : 'password'}
                    sx={customInputStyle}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                      name: 'confirmPassword',
                      value: formData.confirmPassword,
                      onChange: (e) => setFormData({ ...formData, confirmPassword: (e.target as HTMLInputElement).value }),
                    }}
                  />
                  {(submitPressed && formData.confirmPassword !== formData.password) && (
                    <Typography sx={{
                      fontWeight: 500,
                      fontSize: '16px',
                      color: '#FF010C',
                    }}>
                      *Password tidak sesuai
                    </Typography>
                  )}
                   {(submitPressed && formData.confirmPassword === formData.password) && (
                    <Typography sx={{
                      fontWeight: 500,
                      fontSize: '16px',
                      color: 'transparent',
                    }}>
                      *Password tidak sesuai
                    </Typography>
                  )}
                  {(submitPressed === false) && (
                    <Typography sx={{
                      fontWeight: 500,
                      fontSize: '16px',
                      color: 'transparent',
                    }}>
                      *Password tidak sesuai
                    </Typography>
                  )}
                  {(submitPressed === true) && (
                    <Typography sx={{
                      fontWeight: 500,
                      fontSize: '16px',
                      color: 'transparent',
                    }}>
                      *Password tidak sesuai
                    </Typography>
                  )}
                </Stack>
              </Stack>
              <Stack spacing={3} alignItems={'center'} width={'100%'}>
                <Button
                  type="submit"
                  sx={{
                    display: 'flex',
                    width: '127px',
                    height: '48px',
                    padding: '10px 20px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '25px',
                    background: '#FF010C',
                    color: '#fff',
                    cursor: 'pointer',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: '20px',
                    '&:hover': { background: 'white', color: 'red' },
                  }}
                >
                  Masuk
                </Button>
                <Stack direction={'row'}>
                  <Typography>
                    Belum punya akun?
                  </Typography>
                  <Link sx={{
                    textDecoration: 'underline',
                    fontWeight: 700,
                    color: '#FF010C',
                  }}>
                    <Typography sx={{
                      fontWeight: 700,
                      color: '#FF010C',
                    }}>
                      Daftar
                    </Typography>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
