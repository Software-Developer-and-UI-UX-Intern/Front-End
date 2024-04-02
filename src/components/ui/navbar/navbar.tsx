import { useState, useEffect, ChangeEvent } from 'react';
import { AppBar, Container, Toolbar, Stack, Link, Typography, Button, InputBase, IconButton } from '@mui/material';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import logoTripsel from '../../../assets/Trip-sel.png';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [isOpaque, setIsOpaque] = useState(false); // State to track if navbar is opaque or transparent
  const [showCategories, setShowCategories] = useState(true); // State to track whether categories should be shown or hidden
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
    setShowCategories(true);
  };
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsOpaque(scrollTop > 0); // Set navbar to opaque if not at the top of the page, otherwise transparent
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchButtonClick = () => {
    setShowCategories(prevState => !prevState); // Toggle the state of showCategories
    setSearchValue(''); // Clear search input when toggling visibility
  };

  
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isOpaque ? 'white' : 'transparent',
        transition: 'background-color 0.3s ease-in-out', // Add transition effect
        boxShadow: isOpaque ? '0px 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
        margin: '0px 0px',
        padding: '25px 0px',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Stack sx={{ width: '200px' }}>
            <img src={logoTripsel} alt="logo" />
          </Stack>
          <Stack gap={3} width={'73%'} direction={'row'}>
            {showCategories && (
              <Stack direction={'row'} justifyContent={'space-between'} width={'100%'}>
                <Link style={{ textDecoration: 'none' }} href="/">
                  <Stack direction="row" alignItems="center" sx={{
                    color: isOpaque ? '#6E6C6C' : 'white',
                    '&:hover': { fontWeight: 700, color: 'red' },
                  }}>
                    <Typography
                      sx={{
                        alignContent: 'center',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        paddingTop: '5px',
                        fontSize: '24px',
                        color: 'inherit',
                        fontWeight: 'inherit',
                        transition: 'font-weight 0.1s ease-in-out, color 0.2s ease-in-out ',
                      }}
                    >
                      Beranda
                    </Typography>
                  </Stack>
                </Link>
                <Link style={{ textDecoration: 'none' }}>
                  <Stack direction="row" alignItems="center" sx={{
                    color: isOpaque ? '#6E6C6C' : 'white', // Change color based on isOpaque
                    '&:hover': { fontWeight: 700, color: 'red' },
                  }}>
                    <Typography
                      sx={{
                        alignContent: 'center',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        paddingTop: '5px',
                        fontSize: '24px',
                        color: 'inherit',
                        fontWeight: 'inherit',
                        transition: 'font-weight 0.1s ease-in-out, color 0.2s ease-in-out ',
                      }}
                    >
                      Hotel
                    </Typography>
                    <ExpandMoreIcon sx={{ color: 'inherit', paddingTop: '5px' }} />
                  </Stack>
                </Link>
                <Link style={{ textDecoration: 'none' }}>
                  <Stack direction="row" alignItems="center" sx={{
                    color: isOpaque ? '#6E6C6C' : 'white', // Change color based on isOpaque
                    '&:hover': { fontWeight: 700, color: 'red' },
                  }}>
                    <Typography
                      sx={{
                        alignContent: 'center',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        paddingTop: '5px',
                        fontSize: '24px',
                        color: 'inherit',
                        fontWeight: 'inherit',
                        transition: 'font-weight 0.1s ease-in-out, color 0.2s ease-in-out ',
                      }}
                    >
                      Restoran
                    </Typography>
                    <ExpandMoreIcon sx={{ color: 'inherit', paddingTop: '5px' }} />
                  </Stack>
                </Link>
                <Link style={{ textDecoration: 'none' }}>
                  <Stack direction="row" alignItems="center" sx={{
                    color: isOpaque ? '#6E6C6C' : 'white', // Change color based on isOpaque
                    '&:hover': { fontWeight: 700, color: 'red' },
                  }}>
                    <Typography
                      sx={{
                        alignContent: 'center',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        paddingTop: '5px',
                        fontSize: '24px',
                        color: 'inherit',
                        fontWeight: 'inherit',
                        transition: 'font-weight 0.1s ease-in-out, color 0.2s ease-in-out ',
                      }}
                    >
                      Oleh-Oleh
                    </Typography>
                    <ExpandMoreIcon sx={{ color: 'inherit', paddingTop: '5px' }} />
                  </Stack>
                </Link>
                <Link style={{ textDecoration: 'none' }}>
                  <Stack direction="row" alignItems="center" sx={{
                    color: isOpaque ? '#6E6C6C' : 'white', // Change color based on isOpaque
                    '&:hover': { fontWeight: 700, color: 'red' },
                  }}>
                    <Typography
                      sx={{
                        alignContent: 'center',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        paddingTop: '5px',
                        fontSize: '24px',
                        color: 'inherit',
                        fontWeight: 'inherit',
                        transition: 'font-weight 0.1s ease-in-out, color 0.2s ease-in-out ',
                      }}
                    >
                      Wisata
                    </Typography>
                    <ExpandMoreIcon sx={{ color: 'inherit', paddingTop: '5px' }} />
                  </Stack>
                </Link>
                
                
                <IconButton
              onClick={handleSearchButtonClick}
              disableTouchRipple
              disableFocusRipple
              disableRipple
              sx={{
                height: '54px',
                width:'54px',
                color: isOpaque ? '#FF010C' : 'white',
                borderRadius: '50%',
                border: isOpaque ? '2px solid #FF010C' : '2px solid white',
                padding: '0px',
                '&:hover': { border:'3px solid #FF010C', color:'#FF010C' },
              }}
            >
              <SearchIcon sx={{ width: 'auto' }} />
            </IconButton>
            </Stack>
            )}
            {!showCategories && (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      width: '100%',
      height: '54px',
      overflow: 'hidden', // Ensure content overflow is hidden during animation
      position: 'relative', // Set position to enable absolute positioning for animation
    }}
  >
    <Stack
      direction="row"
      alignItems="center"
      width={'100%'}
      sx={{
        position: 'absolute',
        right: 0, // Initially positioned outside the container
        animation: 'slideIn 0.5s forwards', // Animation for sliding in from right to left
        '@keyframes slideIn': {
          from: { right: '-100%' }, // Start from outside the container
          to: { right: 0 }, // Move to the left edge of the container
        },
      }}
    >
      <InputBase
        placeholder="Cari"
        value={searchValue}
        onChange={handleChange}
        startAdornment={<SearchIcon sx={{color:'#FF010C'}} />}
        endAdornment={
          <IconButton onClick={handleClear} sx={{color:'#FF010C'}} size="small">
            <CloseIcon />
          </IconButton>
        }
        sx={{
          borderRadius: '40px',
          border: '2px solid var(--Primary-Color---Red-3, #FF010C)',
          background: 'var(--Text---White, #FFF)',
          flex: 1,
          height: '100%',
          paddingLeft: '16px', // Adjust padding as needed
          paddingRight: '16px', // Adjust padding as needed
          color:'#6E6C6C',
          fontSize:'24px',
        }}
      />
    </Stack>
  </Stack>
)}

            <Link href="/login" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  display: 'flex',
                  width: '127px',
                  height: '48px',
                  padding: '10px 20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '25px',
                  background: 'var(--Primary-01, linear-gradient(270deg, #ff8702 0%, #FF010C 100%))',
                  color: '#fff',
                  cursor: 'pointer',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '20px',
                  '&:hover': { background: 'white', color: 'red', boxShadow: '0px 0px 0px 2px red', },
                }}
              >
                Masuk
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
