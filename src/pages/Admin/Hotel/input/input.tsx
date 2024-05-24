import { useState, useEffect } from 'react';
import { Stack, Typography, Input, MenuItem, Select as MuiSelect, Checkbox } from '@mui/material';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom'; // Import the useLocation hook
import { Icon } from '@iconify/react/dist/iconify.js';
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
// const customInputStyle2 = {
//   width: '100%',
//   height: 'auto',
//   '& .MuiOutlinedInput-root': {
//     borderRadius: '20px',
//     '& fieldset': {
//       borderColor: '#04214C', // Apply border color here
//       border: '2px solid #04214C', 
//     },
//     '&:hover fieldset': {
//       borderColor: '#04214C',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#04214C',
//     },
//   },
//   '& .MuiInputLabel-root': {
//     color: '#04214C',
//     '&.Mui-focused': {
//       color: 'transparent',
//     },
//   },
//   '& .MuiInputBase-input': {
//     fontWeight: 500, // Change font weight here
//     color:'#04214C',
//     fontSize: '22px', // Change font size here
    
//   },
// };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface Gambar_hotel {
  nama: string;
  url: string;
}
interface Gambar_fasilitas {
  nama: string;
  gambar_url: string;
}
// type Kamar = {
//   gambar_url?: string;
//   gambar_preview?: string;
//   gambar_file?: File;
//   google_map_url: string;
//   nama: string;
//   jarak: string;
// };
export default function Register() {
  // const [kamar, setKamar] = useState<Kamar[]>([]);
  const [gambarhotel, setGambarHotel] = useState<Gambar_hotel[]>([
    { nama: '', url: '' }, // Default first element
    { nama: '', url: '' }  // Default second element
  ]);  const [datafasilitas, setFasilitas] = useState<Gambar_fasilitas[]>([]);
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedImagesFasilitas, setSelectedImagesFasilitas] = useState<number[]>([]);
  const [isSelectionModeFasilitas, setIsSelectionModeFasilitas] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({
    nama: '',
    harga: '',
    lokasi: '',
    domisili: '',
    telfon: '',
    jarak: '',
    hargatermurah: '',
    hargatermahal: '',
    alamat: '',
    bintang: '',
    fasilitas: [''],
  });
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      // Create a closure to capture the current index
      reader.onload = () => {
        const newGambarHotel = [...gambarhotel];
        const nama = file.name; // Customize this based on your requirements
        newGambarHotel[index] = { nama, url: reader.result as string }; // Replace the old image at the correct index
        setGambarHotel(newGambarHotel);
        console.log(index)
      };
    }
  };
  const handleFileInputChangeFasilitas = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const newFasilitas = [...datafasilitas];
        const nama = file.name; // You can customize this based on your requirements
        newFasilitas[index] = { nama, gambar_url: reader.result as string }; // Replace the old image
        setFasilitas(newFasilitas);
      };
    }
  };

  useEffect(() => {
    const fetchRestoranData = async () => {
      const { nama } = location.state;
  
      try {
        const response = await fetch(`https://tripselbe.fly.dev/hotels/${nama}`);
        const restoranData = await response.json();
        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}: ${restoranData.error}`);
        }
    // Split the harga into hargatermurah and hargatermahal
    const hargaArray = restoranData.harga ? restoranData.harga.split(',') : [];
    const hargatermurah = hargaArray[0] || ''; // Get the smallest price
    const hargatermahal = hargaArray[1] || ''; // Get the largest price

        setFormData({
          nama: restoranData.nama || '',
          harga: restoranData.harga || '',
          lokasi:  restoranData.lokasi || '',
          domisili: restoranData.domisili || '',
          telfon: restoranData.telfon || '',
          hargatermurah:  hargatermurah,
          hargatermahal: hargatermahal,
          jarak: restoranData.jarak || '',
          alamat: restoranData.alamat || '',
          bintang: restoranData.bintang || '',
          fasilitas: restoranData.location || [''],

        });
        // Fetch the gambar_hotel data
        const imagesResponse = await fetch(`https://tripselbe.fly.dev/hotel-images/${nama}`);
        const imagesData = await imagesResponse.json();
        if (Array.isArray(imagesData) && imagesData.length > 0) {
          setGambarHotel(imagesData);
        }
        // Fetch the Fasilitas data
        const fasilitasResponse = await fetch(`https://tripselbe.fly.dev/kamar/${nama}`);
        const fasilitasData = await fasilitasResponse.json();
        setFasilitas(Array.isArray(fasilitasData) ? fasilitasData : []);
      } catch (error) {
        console.error('Error fetching restoran data:', error);
      }
    };
    fetchRestoranData();
  }, [location]);
  // const gambarhotelout = () => {
  //   console.log(gambarhotel)
  // };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
        const existingResponse = await fetch(`https://tripselbe.fly.dev/hotels/${formData.nama}`);
        if (!existingResponse.ok) {
            const errorMessage = await existingResponse.text();
            throw new Error(`Failed to fetch existing data: ${existingResponse.status}: ${errorMessage}`);
        }
        const hargaString = formData.hargatermurah + ',' + formData.hargatermahal;

        const updatedFormData = {
            ...formData,
            harga: hargaString || '',
        };

        const response = await fetch(`https://tripselbe.fly.dev/hotel/${formData.nama}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedFormData),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.log(updatedFormData);
            throw new Error(`Server responded with status ${response.status}: ${errorMessage}`);
        }

        console.log(updatedFormData);

        const data = await response.json(); // Read the response body once

        await uploadImagesToCloudinary(gambarhotel,formData.nama);
        const datafasilitasresponse = data; // Reuse the parsed JSON data

        await uploadImagesToCloudinaryFasilitas(datafasilitas,formData.nama);
        console.log(datafasilitasresponse);
        alert(data.message);
    } catch (error) {
        console.error('Error updating restoran:', error);
        alert(`Failed to update restoran: ${error}`);
    }
};

  const deleteHotelImages = async (hotelName: string) => {
    try {
      const deleteResponse = await fetch(`https://tripselbe.fly.dev/hotel-images/${hotelName}`, {
        method: 'DELETE',
      });
  
      if (!deleteResponse.ok) {
        const errorText = await deleteResponse.text();
        throw new Error(`Failed to delete existing images: ${deleteResponse.status} - ${errorText}`);
      }
  
      console.log(`All images for hotel ${hotelName} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting images:', error);
      throw error;  // Re-throw the error to stop the process if deleting images fails
    }
  };
  const deleteFasilitasImages = async (fasilitasName: string) => {
    try {
      const deleteResponse = await fetch(`https://tripselbe.fly.dev/kamar/${fasilitasName}`, {
        method: 'DELETE',
      });
  
      if (!deleteResponse.ok) {
        const errorText = await deleteResponse.text();
        throw new Error(`Failed to delete existing images: ${deleteResponse.status} - ${errorText}`);
      }
  
      console.log(`All images for hotel ${fasilitasName} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting images:', error);
      throw error;  // Re-throw the error to stop the process if deleting images fails
    }
  };
  const uploadImagesToCloudinary = async (images: Gambar_hotel[], hotelName: string) => {
    try {
      // Step 1: Delete all existing images for the hotel
      try {
        await deleteHotelImages(hotelName);
      } catch (error) {
        console.warn('Failed to delete existing images, proceeding to upload new images:', error);
      }
  
      // Step 2: Upload new images
      await Promise.all(
        images.map(async (image, index) => {
          try {
            // Upload the image to Cloudinary
            const imageResponse = await fetch(image.url);
            if (!imageResponse.ok) {
              throw new Error(`Failed to fetch image ${index}: ${imageResponse.status}`);
            }
            const blob = await imageResponse.blob();
            const formData = new FormData();
            formData.append('file', blob);
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
  
            // Store the image URL and hotel name in the database
            const storeResponse = await fetch('https://tripselbe.fly.dev/hotel-images', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                nama: image.nama,
                url: imageUrl,
                hotel_name: hotelName,
              }),
            });
  
            if (!storeResponse.ok) {
              throw new Error(`Failed to store image ${index} URL to database`);
            }
  
            console.log(`Image ${index} uploaded to Cloudinary and stored in database: ${imageUrl}`);
          } catch (error) {
            console.error(`Error uploading and storing image ${index}:`, error);
            // Handle error...
          }
        })
      );
    } catch (error) {
      console.error('Error uploading images:', error);
      // Handle error...
    }
  };
  
  const uploadImagesToCloudinaryFasilitas = async (images: Gambar_fasilitas[], fasilitasName: string) => {
    try {
      // Step 1: Delete all existing images for the facility
      try {
        await deleteFasilitasImages(fasilitasName);
      } catch (error) {
        console.warn('Failed to delete existing facility images, proceeding to upload new images:', error);
      }
  
      // Step 2: Upload new images
      await Promise.all(
        images.map(async (image, index) => {
          try {
            // Upload the image to Cloudinary
            const imageResponse = await fetch(image.gambar_url);
            if (!imageResponse.ok) {
              throw new Error(`Failed to fetch image ${index}: ${imageResponse.status}`);
            }
            const blob = await imageResponse.blob();
            const formData = new FormData();
            formData.append('file', blob);
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
  
            // Store the image URL and facility name in the database
            const storeResponse = await fetch('https://tripselbe.fly.dev/kamar', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                nama: image.nama,
                gambar_url: imageUrl,
                hotel_nama: fasilitasName,
              }),
            });
  
            if (!storeResponse.ok) {
              throw new Error(`Failed to store image ${index} URL to database`);
            }
  
            console.log(`Image ${index} uploaded to Cloudinary and stored in database: ${imageUrl}`);
          } catch (error) {
            console.error(`Error uploading and storing image ${index}:`, error);
            // Handle error...
          }
        })
      );
    } catch (error) {
      console.error('Error uploading images:', error);
      // Handle error...
    }
  };
  
  
  
  const handleCheckboxChange = (index: number) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((item) => item !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };
  
  const handleDeleteImages = () => {
    setGambarHotel(prevState => prevState.filter((_, index) => !selectedImages.includes(index)));
    setSelectedImages([]);
  };

  const toggleSelectionMode = () => {
    setIsSelectionMode(!isSelectionMode);
    setSelectedImages([]); // Clear selected images when toggling
  };

  const handleCheckboxChangeFasilitas = (index: number) => {
    if (selectedImagesFasilitas.includes(index)) {
      setSelectedImagesFasilitas(selectedImagesFasilitas.filter((item) => item !== index));
    } else {
      setSelectedImagesFasilitas([...selectedImagesFasilitas, index]);
    }
  };
  
  const handleDeleteImagesFasilitas = () => {
    setFasilitas(prevState => prevState.filter((_, index) => !selectedImagesFasilitas.includes(index)));
    setSelectedImagesFasilitas([]);
  };

  const toggleSelectionModeFasilitas = () => {
    setIsSelectionModeFasilitas(!isSelectionModeFasilitas);
    setSelectedImagesFasilitas([]); // Clear selected images when toggling
  };

  return (
    <Stack height="900px" sx={{overflowY:'none'}} padding={'0 30px'} overflow={'auto'}>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Stack sx={{ width: 'auto' }} spacing={10} >
          <Typography fontWeight={500} fontSize={'42px'} color={'#04214C'}>
          Tambah Data Hotel
        </Typography>
          <Stack spacing={2} maxWidth={'100%'}>
            <Stack direction={'row'} gap={2}>
              <Stack direction={'column'} maxWidth={'50%'} width={'100%'} spacing={1}>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                nama Hotel
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
                  Bintang
                </Typography>
                <MuiSelect
                  displayEmpty
                  inputProps={{ 'aria-label': 'Domisili' }}
                  style={{ borderRadius: '20px', fontSize: '22px', color: '#04214C', border: '2px solid #04214C' }}
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
                  name="bintang"
                  value={formData.bintang}
                  onChange={(e) => setFormData({ ...formData, bintang: e.target.value })}
                >
                  <MenuItem value={formData.bintang} sx={{justifyContent:'center'}}>
                                {/* Render star icons */}
            {Array.from({ length: parseInt(formData.bintang, 10) }).map((_, starIndex) => (
              <Icon key={starIndex} icon="fluent:star-16-filled" width="25" height="25" style={{ color: '#FF8702' }} />
            ))}
                  </MenuItem>
                  <MenuItem value='5'>
                  <Icon icon="fluent:star-16-filled" width="25" height="25" style={{ color: '#FF8702' }} />
                  <Icon icon="fluent:star-16-filled" width="25" height="25" style={{ color: '#FF8702' }} />
                  <Icon icon="fluent:star-16-filled" width="25" height="25" style={{ color: '#FF8702' }} />
                  <Icon icon="fluent:star-16-filled" width="25" height="25" style={{ color: '#FF8702' }} />
                  <Icon icon="fluent:star-16-filled" width="25" height="25" style={{ color: '#FF8702' }} />
                  </MenuItem>
                  <MenuItem value='4'>
                  <Icon icon="fluent:star-16-filled" width="25" height="25" style={{ color: '#FF8702' }} />
                  <Icon icon="fluent:star-16-filled" width="25" height="25" style={{ color: '#FF8702' }} />
                  <Icon icon="fluent:star-16-filled" width="25" height="25" style={{ color: '#FF8702' }} />
                  <Icon icon="fluent:star-16-filled" width="25" height="25" style={{ color: '#FF8702' }} />
                  </MenuItem>
                  <MenuItem value='3'>
                  <Icon icon="fluent:star-16-filled" width="25" height="25" style={{ color: '#FF8702' }} />
                  <Icon icon="fluent:star-16-filled" width="25" height="25" style={{ color: '#FF8702' }} />
                  <Icon icon="fluent:star-16-filled" width="25" height="25" style={{ color: '#FF8702' }} />
                  </MenuItem>
                </MuiSelect>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                Telfon
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Nomor Telfon"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  inputProps={{
                    'aria-label': 'Nama Restoran',
                    name: 'fullName',
                    value: formData.telfon,
                    onChange: (e) => setFormData({ ...formData, telfon: (e.target as HTMLInputElement).value }),
                  }}
                />
                </Stack>
                <Stack maxWidth={'50%'}>
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
                Jarak
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
                

                {/* kamar render */}
                <Stack>
                <Stack justifyContent={'space-between'} direction={'row'} gap={2}>
                  <Stack width={'100%'} maxWidth={'50%'} gap={2}>
                <Stack>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                Nama Kamar 1
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Nama kamar"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  inputProps={{
                    'aria-label': 'Nama Restoran',
                    name: 'fullName',
                    value: formData.nama,
                    onChange: (e) => setFormData({ ...formData, nama: (e.target as HTMLInputElement).value }),
                  }}
                />
                </Stack>
                <Stack>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                Ukuran Kamar 1
                </Typography>
                <Input
                  disableUnderline
                  placeholder="Nama kamar"
                  style={{ fontSize: '22px', color: '#04214C' }}
                  sx={customInputStyle}
                  inputProps={{
                    'aria-label': 'Nama Restoran',
                    name: 'fullName',
                    value: formData.nama,
                    onChange: (e) => setFormData({ ...formData, nama: (e.target as HTMLInputElement).value }),
                  }}
                />
                </Stack>
                <Stack>
                <Typography sx={{
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#04214C'
                }}>
                harga Kamar 1
                </Typography>
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
                <Stack width={'100%'} maxWidth={'50%'}>
                <Stack
    justifyContent={'start'}
    alignItems={'end'}
    borderRadius={'20px'}
    sx={{
      backgroundColor:'#D9D9D9',
      // background: image.gambar_url ? `url(${image.gambar_url})` : '#D9D9D9',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      cursor: isSelectionModeFasilitas ? 'pointer' : 'default',
    }}
    height={'100%'}
    width={'100%'}
    onClick={() => isSelectionModeFasilitas ? handleCheckboxChangeFasilitas(index) : document.getElementById(`fileInput${index}fasilitas`)?.click()} // Adjusted index here
  >
      <input
        type="file"
        // id={`fileInput${index}fasilitas`} // Adjusted index here
        style={{ display: 'none' }}
        // onChange={(e) => handleFileInputChangeFasilitas(e, index)} // Adjusted index here
      />
      <Stack
        height={'auto'}
        width={'auto'}
        sx={{ backgroundColor: 'white', borderRadius: '100px', margin: '10px' }}
        onClick={(e) => e.stopPropagation()}
      >
      </Stack>
  </Stack>
                </Stack>
                </Stack>
                {/* ac kasur dan fasilitas kamar */}
                <Stack justifyContent={'space-between'} direction={'row'} gap={2} >
                <Stack width={'100%'} maxWidth={'50%'}>
                
                </Stack>
                </Stack>
                </Stack>

              </Stack>
              <Stack direction={'column'} maxWidth={'50%'} width={'100%'} spacing={1}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '24px',
          color: '#04214C',
        }}
      >
        Gambar
      </Typography>
      <Stack height={'190px'} gap={2} direction={'row'} justifyContent={'space-between'}>
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          borderRadius={'20px'}
          sx={{
            background: gambarhotel[0] ? `url(${gambarhotel[0].url})` : '#D9D9D9',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          height={'100%'}
          width={'100%'}
          maxWidth={'100%'}
          onClick={() => document.getElementById('fileInput0')?.click()}
        >
          <input
            type="file"
            id="fileInput0"
            style={{ display: 'none' }}
            onChange={(e) => handleFileInputChange(e, 0)}
          />
        </Stack>
      </Stack>
      <Stack gap={2}>
        
        <Stack width={'100%'} overflow="auto">

      <Stack gap={2}>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '24px',
            color: '#04214C',
          }}
        >
          Detail Gambar Hotel
        </Typography>
        <Stack width={'100%'} overflow="auto">
          <Stack direction={'row'} gap={2} width={'max-content'} height={'190px'}>
          {gambarhotel.map((image, index) => {
  // Skip the first element
  if (index === 0) return null;

  return (  <Stack
    key={index}
    justifyContent={'start'}
    alignItems={'end'}
    borderRadius={'20px'}
    sx={{
      background: image.url ? `url(${image.url})` : '#D9D9D9',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      cursor: isSelectionMode ? 'pointer' : 'default',
    }}
    height={'100%'}
    minWidth={'370px'}
    onClick={() => isSelectionMode ? handleCheckboxChange(index) : document.getElementById(`fileInput${index}`)?.click()} // Adjusted index here
  >
    {!isSelectionMode && ( // Render file input only when not in selection mode
      <input
        type="file"
        id={`fileInput${index}`} // Adjusted index here
        style={{ display: 'none' }}
        onChange={(e) => handleFileInputChange(e, index)} // Adjusted index here
      />
    )}
    {isSelectionMode && (
      <Stack
        height={'auto'}
        width={'auto'}
        sx={{ backgroundColor: 'white', borderRadius: '100px', margin: '10px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <Checkbox
          {...label}
          icon={<Icon icon="ph:trash-light" width="27" height="27" style={{ color: '#04214C' }} />}
          checkedIcon={<Icon icon="ph:trash-fill" width="27" height="27" style={{ color: '#04214C' }} />}
          checked={selectedImages.includes(index)}
          onChange={() => handleCheckboxChange(index)}
          />
        </Stack>
      )}
    </Stack>
  );
})}


<Stack
  justifyContent={'center'}
  alignItems={'center'}
  borderRadius={'20px'}
  sx={{
    backgroundColor:'#D9D9D9'
  }}
  height={'100%'}
  minWidth={'370px'}
  onClick={() => {
    const newGambarHotel = [...gambarhotel];
    const index = newGambarHotel.length;
    newGambarHotel.push({ nama: `gambar_${index}`, url: '' }); // Add a new image object with nama based on index
    setGambarHotel(newGambarHotel);
    document.getElementById(`fileInput${index + 1}`)?.click(); // Adjusted index here
  }}
>
  <Stack width={'100px'} height={'100px'} borderRadius={'100px'} sx={{backgroundColor:'white'}} justifyContent={'center'} alignItems={'center'}>
    <Icon icon="fluent:add-16-filled" width="70" height="70" style={{ color: '#FF010C' }} />
  </Stack>
</Stack>

          </Stack>
        </Stack>
        </Stack>
        </Stack>
        <Stack direction={'row'} gap={2}>
          <Button
            type="button"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '44px',
              width: '300px',
              padding: '0 20px',
              fontWeight: 500,
              fontSize: '22px',
              color: '#FFF',
              backgroundColor: '#04214C',
              borderRadius: '20px',
              '&:hover': { background: '#04214C', color: '#FFF' },
            }}
            onClick={toggleSelectionMode}
          >
            Pilih Gambar
          </Button>
          <Button
            type="button"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '44px',
              width: '300px',
              padding: '0 20px',
              fontWeight: 500,
              fontSize: '22px',
              color: '#FFF',
              backgroundColor: '#FF010C',
              borderRadius: '20px',
              '&:hover': { background: '#04214C', color: '#FFF' },
            }}
            onClick={handleDeleteImages}
          >
            Hapus Gambar
          </Button>
        </Stack>
      </Stack>
      <Stack gap={2}>
        
        <Stack width={'100%'} overflow="auto">

      <Stack gap={2}>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '24px',
            color: '#04214C',
          }}
        >
          Detail Gambar Fasilitas Hotel
        </Typography>
        <Stack width={'100%'} overflow="auto">
          <Stack direction={'row'} gap={2} width={'max-content'} height={'190px'}>
          {datafasilitas.map((image, index) => ( // Adjusted to skip the first image
  <Stack
    key={index}
    justifyContent={'start'}
    alignItems={'end'}
    borderRadius={'20px'}
    sx={{
      background: image.gambar_url ? `url(${image.gambar_url})` : '#D9D9D9',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      cursor: isSelectionModeFasilitas ? 'pointer' : 'default',
    }}
    height={'100%'}
    minWidth={'370px'}
    onClick={() => isSelectionModeFasilitas ? handleCheckboxChangeFasilitas(index) : document.getElementById(`fileInput${index}fasilitas`)?.click()} // Adjusted index here
  >
    {!isSelectionModeFasilitas && ( // Render file input only when not in selection mode
      <input
        type="file"
        id={`fileInput${index}fasilitas`} // Adjusted index here
        style={{ display: 'none' }}
        onChange={(e) => handleFileInputChangeFasilitas(e, index)} // Adjusted index here
      />
    )}
    {isSelectionModeFasilitas && (
      <Stack
        height={'auto'}
        width={'auto'}
        sx={{ backgroundColor: 'white', borderRadius: '100px', margin: '10px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <Checkbox
          {...label}
          icon={<Icon icon="ph:trash-light" width="27" height="27" style={{ color: '#04214C' }} />}
          checkedIcon={<Icon icon="ph:trash-fill" width="27" height="27" style={{ color: '#04214C' }} />}
          checked={selectedImagesFasilitas.includes(index)}
          onChange={() => handleCheckboxChangeFasilitas(index)}
        />
      </Stack>
    )}
  </Stack>
))}


<Stack
  justifyContent={'center'}
  alignItems={'center'}
  borderRadius={'20px'}
  sx={{
    backgroundColor:'#D9D9D9'
  }}
  height={'100%'}
  minWidth={'370px'}
  onClick={() => {
    const newGambarHotel = [...datafasilitas];
    const index = newGambarHotel.length;
    newGambarHotel.push({ nama: `gambar_${index}`, gambar_url: '' }); // Add a new image object with nama based on index
    setFasilitas(newGambarHotel);
    document.getElementById(`fileInput${index}fasilitas`)?.click(); // Adjusted index here
  }}
>
  <Stack width={'100px'} height={'100px'} borderRadius={'100px'} sx={{backgroundColor:'white'}} justifyContent={'center'} alignItems={'center'}>
    <Icon icon="fluent:add-16-filled" width="70" height="70" style={{ color: '#FF010C' }} />
  </Stack>
</Stack>

          </Stack>
        </Stack>
        </Stack>
        </Stack>
        <Stack direction={'row'} gap={2}>
          <Button
            type="button"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '44px',
              width: '300px',
              padding: '0 20px',
              fontWeight: 500,
              fontSize: '22px',
              color: '#FFF',
              backgroundColor: '#04214C',
              borderRadius: '20px',
              '&:hover': { background: '#04214C', color: '#FFF' },
            }}
            onClick={toggleSelectionModeFasilitas}
          >
            Pilih Gambar
          </Button>
          <Button
            type="button"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '44px',
              width: '300px',
              padding: '0 20px',
              fontWeight: 500,
              fontSize: '22px',
              color: '#FFF',
              backgroundColor: '#FF010C',
              borderRadius: '20px',
              '&:hover': { background: '#04214C', color: '#FFF' },
            }}
            onClick={handleDeleteImagesFasilitas}
          >
            Hapus Gambar
          </Button>
        </Stack>
      </Stack>
     {/* Render input field to edit facility name */}
     {datafasilitas.map((image, index) => (
          <Stack
            key={index}
            justifyContent={'start'}
            alignItems={'start'}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '24px',
                color: '#04214C',
              }}
            >
              {`Nama Detail Fasilitas Hotel ${index + 1}`}
            </Typography>
            <Input
  disableUnderline
  placeholder={`Nama Fasilitas ${index + 1}`}
  style={{ fontSize: '22px', color: '#04214C' }}
  sx={customInputStyle}
  inputProps={{
    'aria-label': 'Nama Restoran',
    name: `nama-fasilitas-${index}`,
    value: image.nama,
    onChange: (e) => {
      const inputElement = e.target as HTMLInputElement; // Explicitly type event target
      const newFasilitas = [...datafasilitas];
      newFasilitas[index].nama = inputElement.value;
      setFasilitas(newFasilitas);
    },
  }}
/>
          </Stack>
        ))}
        <Button
            type="button"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '44px',
              width: '300px',
              padding: '0 20px',
              fontWeight: 500,
              fontSize: '22px',
              color: '#FFF',
              backgroundColor: '#04214C',
              borderRadius: '20px',
              '&:hover': { background: '#04214C', color: '#FFF' },
            }}
            onClick={() => {
              const newFasilitas = [...datafasilitas];
              newFasilitas.push({ nama: '', gambar_url: '' }); // Add a new image object with empty nama
              setFasilitas(newFasilitas);
            }}
                >
            Tambah Data
          </Button>
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
