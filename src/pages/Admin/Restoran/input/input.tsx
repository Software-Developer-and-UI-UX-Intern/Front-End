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


export default function Register() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    nama: '',
    gambar_url1: '',
    gambar_url2: '',
    gambar_url3: '',
    harga: '',
    hargatermurah: '',
    hargatermahal: '',
    telfon: '',
    description: '',
    domisili: '',
    alamat_gbr: '',
    link_menu: '',
    makanan: [''],
    minuman: [''],
    location: '',
    halal: '',
  });
  const [gambarFiles, setGambarFiles] = useState<File[]>([]);
  const [gambar2, setGambar2] = useState('');
  const [gambar3, setGambar3] = useState('');
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const files = e.target.files;
    const maxFileSize = 7 * 1024 * 1024; // 7 MB in bytes

    if (files && files.length && files[0].size > maxFileSize) {
        alert('File size exceeds the maximum allowed limit of 7 MB. Please choose a smaller file.');
        // Clear the file input to cancel the upload
        e.target.value = '';
        return;
    }

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

  const handleDeleteMakanan = (index: number) => {
    const updatedMakanan = [...formData.makanan];
    updatedMakanan.splice(index, 1);
    setFormData({
      ...formData,
      makanan: updatedMakanan,
    });
  };
  const handleDeleteMinuman = (index: number) => {
    const updatedMinuman = [...formData.minuman];
    updatedMinuman.splice(index, 1);
    setFormData({
      ...formData,
      minuman: updatedMinuman,
    });
  };
  useEffect(() => {
    const fetchRestoranData = async () => {
      const { nama } = location.state;
  
      try {
        const response = await fetch(`https://tripselbe.fly.dev/restoran/${nama}`);
        const restoranData = await response.json();
        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}: ${restoranData.error}`);
        }
  
        // Convert makanan and minuman strings back to arrays
       const makananArray = restoranData.makanan ? restoranData.makanan.split(',') : [];
       const minumanArray = restoranData.minuman ? restoranData.minuman.split(',') : [];
   
       // Split the harga into hargatermurah and hargatermahal
       const hargaArray = restoranData.harga ?  restoranData.harga.replace(/[^0-9,-]+/g, '').split('-').map((harga: string) => harga.trim()) :[];
       const hargatermurah = hargaArray[0] || ''; // Get the smallest price
        const hargatermahal = hargaArray[1] || ''; // Get the largest price
    
        setFormData({
          nama: restoranData.nama || '',
          gambar_url1: restoranData.gambar_url1 || '',
          gambar_url2: restoranData.gambar_url2 || '',
          gambar_url3: restoranData.gambar_url3 || '',
          harga: restoranData.harga || '',
          hargatermurah:  hargatermurah,
          hargatermahal: hargatermahal,
          telfon: restoranData.telfon || '',
          description: restoranData.description || '',
          domisili: restoranData.domisili || '',
          alamat_gbr: restoranData.alamat_gbr || '',
          link_menu: restoranData.link_menu || '',
          makanan: makananArray,
          minuman: minumanArray,
          location: restoranData.location || '',
          halal: restoranData.halal || '',
        });
      } catch (error) {
        console.error('Error fetching restoran data:', error);
      }
    };
    fetchRestoranData();
  }, [location]);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const uploadedImages = await Promise.all(gambarFiles.map((file, index) => handleFileUpload(file, index + 1)));
  
      // Check if all uploads were successful
      if (uploadedImages.some(image => image === null)) {
        throw new Error('One or more image uploads failed');
      }
  
      const makananString = formData.makanan.join(',');
      const minumanString = formData.minuman.join(',');
      const hargaString = `Rp ${formData.hargatermurah.toLocaleString()} - Rp ${formData.hargatermahal.toLocaleString()}`;

      const existingResponse = await fetch(`https://tripselbe.fly.dev/restoran/${formData.nama}`);
      if (!existingResponse.ok) {
          const errorMessage = await existingResponse.text();
          throw new Error(`Failed to fetch existing data: ${existingResponse.status}: ${errorMessage}`);
      }

      const existingData = await existingResponse.json();
      const updatedFormData = {
        ...formData,
        makanan: makananString,
        minuman: minumanString,
        gambar_url1: uploadedImages[0] || existingData.gambar_url1,
        gambar_url2: uploadedImages[1] || existingData.gambar_url2,
        gambar_url3: uploadedImages[2] || existingData.gambar_url3,
        harga: hargaString||'',
      };
  
      const response = await fetch(`https://tripselbe.fly.dev/restoran/${formData.nama}`, {
        method: 'PUT',
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
      alert(data.message);
    } catch (error) {
      console.error('Error updating restoran:', error);
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

  // const handleFileUpload = async (file: File, nama: string, index: number) => {
  //   try {
  //     // Create a FormData object
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     formData.append('upload_preset', 'your_cloudinary_upload_preset'); // Replace 'your_cloudinary_upload_preset' with your actual Cloudinary upload preset
  
  //     // Send the file to Cloudinary for upload
  //     const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
  //       method: 'POST',
  //       body: formData,
  //     });
      
  //     if (!cloudinaryResponse.ok) {
  //       throw new Error(`Failed to upload image ${index} to Cloudinary`);
  //     }
      
  //     // Get the uploaded image URL from the Cloudinary response
  //     const cloudinaryData = await cloudinaryResponse.json();
  //     const imageUrl = cloudinaryData.secure_url;
  
  //     // Update the restaurant data on the server
  //     const updatedData = { ...formData, ['gambar_url' + index]: imageUrl, nama }; // Include the 'nama' property
  //     const updateResponse = await fetch(`https://tripselbe.fly.dev/restoran/${nama}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(updatedData),
  //     });
  
  //     if (!updateResponse.ok) {
  //       throw new Error(`Failed to update restaurant data with image ${index}`);
  //     }
  
  //     // Log success message
  //     console.log(`Image ${index} uploaded and restaurant data updated successfully`);
  //   } catch (error) {
  //     console.error(`Error uploading image ${index} and updating restaurant data:`, error);
  //     // Handle error as needed
  //   }
  // };  

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
                  value={formData.halal}
                  onChange={(e) => setFormData({ ...formData, halal: e.target.value })}
                >
                  <MenuItem value={formData.halal}>
                    <em>{formData.halal}</em>
                  </MenuItem>
                  <MenuItem value='true'>Halal</MenuItem>
                  <MenuItem value='false'>Non Halal</MenuItem>
                </MuiSelect>
                </Stack>
                <Stack maxWidth={'50%'}>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                Estimasi
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Dalam menit"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  inputProps={{
                    'aria-label': 'Jarak',
                    name: 'fullName',
                    value: formData.location,
                    onChange: (e) => setFormData({ ...formData, location: (e.target as HTMLInputElement).value }),
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
                    'aria-label': 'Hargatermurah',
                    name: 'email',
                    value: formData.hargatermurah,
                    onChange: (e) => setFormData({ ...formData, hargatermurah: (e.target as HTMLInputElement).value }),
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
                  placeholder="Termahal"
                  sx={customInputStyle}
                  style={{ fontSize: '22px', color: '#04214C' }}
                  inputProps={{
                    'aria-label': 'Hargatermahal',
                    name: 'email',
                    value: formData.hargatermahal,
                    onChange: (e) => setFormData({ ...formData, hargatermahal: (e.target as HTMLInputElement).value }),
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
                    value: formData.telfon,
                    onChange: (e) => setFormData({ ...formData, telfon: (e.target as HTMLInputElement).value }),
                  }}
                />

                <Stack gap={2}>
                <Typography sx={{ fontWeight: 500, fontSize: '24px', color: '#04214C' }}>
                    Makanan
                  </Typography>
                  {formData.makanan.map((makanan, index) => (
  <Stack direction="row" alignItems="center" key={index} gap={1}>
  <Input
    disableUnderline
    placeholder={`Makanan ${index + 1}`}
    style={{ fontSize: '22px', color: '#04214C' }}
    sx={customInputStyle}
    value={makanan}
    onChange={(e) => handleInputChange(index, (e.target as HTMLInputElement).value)}
  />
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
    onClick={() => handleDeleteMakanan(index)}
  >
    Delete
  </Button>
</Stack>
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
  <Stack direction="row" alignItems="center" key={index} gap={1}>
  <Input
    disableUnderline
    placeholder={`Makanan ${index + 1}`}
    style={{ fontSize: '22px', color: '#04214C' }}
    sx={customInputStyle}
    value={minuman}
    onChange={(e) => handleInputChangeminuman(index, (e.target as HTMLInputElement).value)}
  />
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
    onClick={() => handleDeleteMinuman(index)}
  >
    Delete
  </Button>
</Stack>
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
                <Stack direction={'column'} maxWidth={'100%'} width={'100%'} spacing={1}>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                Link Menu
                </Typography>
                <TextField
                multiline
                  variant='outlined'
                  placeholder="Link Menu"
                  sx={customInputStyle2}
                  style={{ fontSize: '22px', color: '#04214C' }}
                  inputProps={{
                    'aria-label': 'Link menu',
                    name: 'Link Menu',
                    value: formData.link_menu,
                    onChange: (e) => setFormData({ ...formData, link_menu: (e.target as HTMLInputElement).value }),
                  }}
                />
                </Stack>
                <Stack direction={'column'} maxWidth={'100%'} width={'100%'} spacing={1}>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                Link Alamat
                </Typography>
                <TextField
                multiline
                  variant='outlined'
                  placeholder="Link Alamat"
                  sx={customInputStyle2}
                  style={{ fontSize: '22px', color: '#04214C' }}
                  inputProps={{
                    'aria-label': 'Link Alamat',
                    name: 'Link Alamat',
                    value: formData.alamat_gbr,
                    onChange: (e) => setFormData({ ...formData, alamat_gbr: (e.target as HTMLInputElement).value }),
                  }}
                />
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
