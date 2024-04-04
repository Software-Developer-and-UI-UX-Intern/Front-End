import { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Container, Toolbar, Stack, Typography, Button, InputBase, IconButton, Menu, MenuItem, Divider } from '@mui/material';
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
  const [isOpaque, setIsOpaque] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [hotelAnchorEl, setHotelAnchorEl] = useState<null | HTMLElement>(null); // Separate state for hotel menu
  const [restoranAnchorEl, setRestoranAnchorEl] = useState<null | HTMLElement>(null); // Separate state for restoran menu
  const [olehOlehAnchorEl, setOlehOlehAnchorEl] = useState<null | HTMLElement>(null); // State for oleh-oleh menu
  const [wisataAnchorEl, setWisataAnchorEl] = useState<null | HTMLElement>(null); // State for wisata menu
  const [hotelMenuActive, setHotelMenuActive] = useState(false); // State to track hotel menu activation
  const [restoranMenuActive, setRestoranMenuActive] = useState(false); // State to track restoran menu activation
  const [olehOlehMenuActive, setOlehOlehMenuActive] = useState(false); // State to track oleh-oleh menu activation
  const [wisataMenuActive, setWisataMenuActive] = useState(false); // State to track wisata menu activation
  const navigate = useNavigate();

  const handleHotelMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setHotelAnchorEl(event.currentTarget); // Set anchor element when hotel menu button is clicked
    setHotelMenuActive(true); // Set hotel menu as active
  };

  const handleRestoranMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setRestoranAnchorEl(event.currentTarget); // Set anchor element when restoran menu button is clicked
    setRestoranMenuActive(true); // Set restoran menu as active
  };
  const handleOlehOlehMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOlehOlehAnchorEl(event.currentTarget); // Set anchor element when oleh-oleh menu button is clicked
    setOlehOlehMenuActive(true); // Set oleh-oleh menu as active
  };

  const handleWisataMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setWisataAnchorEl(event.currentTarget); // Set anchor element when wisata menu button is clicked
    setWisataMenuActive(true); // Set wisata menu as active
  };

  const handleMenuClose = () => {
    setHotelAnchorEl(null); // Clear hotel anchor element to close the hotel menu
    setRestoranAnchorEl(null); // Clear restoran anchor element to close the restoran menu
    setOlehOlehAnchorEl(null); // Clear hotel anchor element to close the hotel menu
    setWisataAnchorEl(null);
    setHotelMenuActive(false); // Set hotel menu as inactive
    setRestoranMenuActive(false); // Set restoran menu as inactive
    setOlehOlehMenuActive(false); // Set oleh-oleh menu as inactive
    setWisataMenuActive(false); // Set wisata menu as inactive
  };

  const handleBerandamenu = () => {
    navigate(`/`)
  }
  const handleLoginmenu = () => {
    navigate(`/login`)
  }
  const handleMenuItemClick = (destination: string) => {
    navigate(`/hotel-${destination}`); // Navigate to the specified route
    handleMenuClose(); // Close the menu after clicking on a menu item
  };

 
  const handleRestoranMenuItemClick = (destination: string) => {
    navigate(`/restoran-${destination}`); // Navigate to the specified route for restoran
    handleMenuClose(); // Close the menu after clicking on a menu item
  };

  const handleOlehOlehMenuItemClick = (destination: string) => {
    navigate(`/oleh-oleh-${destination}`); // Navigate to the specified route for oleh-oleh
    handleMenuClose(); // Close the menu after clicking on a menu item
  };

  const handleWisataMenuItemClick = (destination: string) => {
    navigate(`/wisata-${destination}`); // Navigate to the specified route for wisata
    handleMenuClose(); // Close the menu after clicking on a menu item
  };

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
        padding: '0px 0px',
        height:'105px',
        alignItems:'center',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar style={{ justifyContent: 'space-between', height:'105px' }}>
          <Stack sx={{ width: '200px' }}>
            <img src={logoTripsel} alt="logo" />
          </Stack>
          <Stack gap={3} width={'80%'} direction={'row'}>
            {showCategories && (
              <Stack direction={'row'} justifyContent={'space-between'} width={'100%'} height={'105px'}>
                <Button disableElevation disableFocusRipple disableRipple disableTouchRipple
                  onClick={handleBerandamenu}
                  sx={{
                    color: isOpaque ? '#6E6C6C' : 'white', 
                    '&:hover': { fontWeight: 700, color: 'red' },
                    padding:'0px',
                    minWidth:'auto',
                    height:'auto',
                  }}
                >
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
                </Button>
                <Button disableElevation disableFocusRipple disableRipple disableTouchRipple
                  onClick={handleHotelMenuOpen}
                  endIcon={<ExpandMoreIcon sx={{transform: hotelMenuActive ? 'rotate(180deg)' : 'rotate(0deg)',stroke: hotelMenuActive ? 'red' : 'currentColor', strokeWidth: 2, transition: 'stroke 0.75s ease-in-out' }} />}
                  sx={{
                    color: hotelMenuActive? 'red' : isOpaque ? '#6E6C6C' : 'white', 
                    '&:hover': { fontWeight: 700, color: 'red' },
                    padding:'0px',
                    minWidth:'auto',
                    height:'auto',
                    transition: 'color 0.75s ease-in-out',
                  }}
                >
                   <Typography
                      sx={{
                        alignContent: 'center',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        paddingTop: '5px',
                        fontSize: '24px',
                        color: 'inherit',
                        fontWeight: 'inherit',
                        transition: 'font-weight 0.1s ease-in-out, ',
                      }}
                    >
                      Hotel
                    </Typography>
                </Button>
                
                <Menu
                disableScrollLock
                anchorEl={hotelAnchorEl}
                open={Boolean(hotelAnchorEl)}
                onClose={handleMenuClose}
                elevation={0}
                PaperProps={{
                  style: {
                    background: isOpaque ? 'white' : 'transparent',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    color:'#FF010C',
                    width:'270px',
                    borderRadius:'0px 0px 30px 30px',
                    transition: 'background 0.2s ease-in-out ',
                  },
                }}
              >
                    <MenuItem onClick={() => handleMenuItemClick('Bali')} sx={{
                          fontSize:'22px',
                          fontWeight:500,
                          padding:'0px 20px'
                    }}>Bali</MenuItem>
                    <Divider/>
                    <MenuItem onClick={() => handleMenuItemClick('NTT')} sx={{
                          fontSize:'22px',
                          fontWeight:500,
                          padding:'0px 20px'
                    }}>NTT</MenuItem>
                    <Divider />
                    <MenuItem onClick={() => handleMenuItemClick('NTB')} sx={{
                          fontSize:'22px',
                          fontWeight:500,
                          padding:'0px 20px'
                    }}>NTB</MenuItem>
            </Menu>

            <Button disableElevation disableFocusRipple disableRipple disableTouchRipple
                  onClick={handleRestoranMenuOpen}
                  endIcon={<ExpandMoreIcon sx={{transform: restoranMenuActive ? 'rotate(180deg)' : 'rotate(0deg)',stroke: restoranMenuActive ? 'red' : 'currentColor', strokeWidth: 2, transition: 'stroke 0.75s ease-in-out' }} />}
                  sx={{
                    color: restoranMenuActive? 'red' : isOpaque ? '#6E6C6C' : 'white', 
                    '&:hover': { fontWeight: 700, color: 'red' },
                    padding:'0px',
                    minWidth:'auto',
                    height:'auto',
                    transition: 'color 0.75s ease-in-out',
                  }}
                >
                   <Typography
                      sx={{
                        alignContent: 'center',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        paddingTop: '5px',
                        fontSize: '24px',
                        color: 'inherit',
                        fontWeight: 'inherit',
                        transition: 'font-weight 0.1s ease-in-out ',
                      }}
                    >
                      Restoran
                    </Typography>
                </Button>
                <Menu
                disableScrollLock
                anchorEl={restoranAnchorEl}
                open={Boolean(restoranAnchorEl)}
                onClose={handleMenuClose}
                elevation={0}
                PaperProps={{
                  style: {
                    background: isOpaque ? 'white' : 'transparent',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    color:'#FF010C',
                    width:'270px',
                    borderRadius:'0px 0px 30px 30px',
                    transition: 'background 0.2s ease-in-out ',
                  },
                }}
              >
                    <MenuItem onClick={() => handleRestoranMenuItemClick('Bali')} sx={{ fontSize: '22px', fontWeight: 500, padding: '0px 20px' }}>Bali</MenuItem>
                    <Divider />
                    <MenuItem onClick={() => handleRestoranMenuItemClick('Mataram')} sx={{ fontSize: '22px', fontWeight: 500, padding: '0px 20px' }}>Mataram</MenuItem>
                    <Divider />
                    <MenuItem onClick={() => handleRestoranMenuItemClick('Kupang')} sx={{ fontSize: '22px', fontWeight: 500, padding: '0px 20px' }}>Kupang</MenuItem>
                    <Divider />
                    <MenuItem onClick={() => handleRestoranMenuItemClick('Flores')} sx={{ fontSize: '22px', fontWeight: 500, padding: '0px 20px' }}>Flores</MenuItem>
                </Menu>
               <Button disableElevation disableFocusRipple disableRipple disableTouchRipple
                  onClick={handleOlehOlehMenuOpen}
                  endIcon={<ExpandMoreIcon sx={{transform: olehOlehMenuActive ? 'rotate(180deg)' : 'rotate(0deg)',stroke: olehOlehMenuActive ? 'red' : 'currentColor', strokeWidth: 2, transition: 'stroke 0.75s ease-in-out' }} />}
                  sx={{
                    color: olehOlehMenuActive? 'red' : isOpaque ? '#6E6C6C' : 'white', 
                    '&:hover': { fontWeight: 700, color: 'red' },
                    padding:'0px',
                    minWidth:'auto',
                    height:'auto',
                    transition: 'color 0.75s ease-in-out',
                  }}
                >
                   <Typography
                      sx={{
                        alignContent: 'center',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        paddingTop: '5px',
                        fontSize: '24px',
                        color: 'inherit',
                        fontWeight: 'inherit',
                        transition: 'font-weight 0.1s ease-in-out ',
                      }}
                    >
                      Oleh-oleh
                    </Typography>
                </Button>
                <Menu
                disableScrollLock
                anchorEl={olehOlehAnchorEl}
                open={Boolean(olehOlehAnchorEl)}
                onClose={handleMenuClose}
                elevation={0}
                PaperProps={{
                  style: {
                    background: isOpaque ? 'white' : 'transparent',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    color:'#FF010C',
                    width:'270px',
                    borderRadius:'0px 0px 30px 30px',
                    transition: 'background 0.2s ease-in-out ',
                  },
                }}
              >
                    <MenuItem onClick={() => handleOlehOlehMenuItemClick('Bali')} sx={{ fontSize: '22px', fontWeight: 500, padding: '0px 20px' }}>Bali</MenuItem>
                    <Divider />
                    <MenuItem onClick={() => handleOlehOlehMenuItemClick('Mataram')} sx={{ fontSize: '22px', fontWeight: 500, padding: '0px 20px' }}>Mataram</MenuItem>
                    <Divider />
                    <MenuItem onClick={() => handleOlehOlehMenuItemClick('Kupang')} sx={{ fontSize: '22px', fontWeight: 500, padding: '0px 20px' }}>Kupang</MenuItem>
                    <Divider />
                    <MenuItem onClick={() => handleOlehOlehMenuItemClick('Flores')} sx={{ fontSize: '22px', fontWeight: 500, padding: '0px 20px' }}>Flores</MenuItem>
                </Menu>
                <Button disableElevation disableFocusRipple disableRipple disableTouchRipple
                  onClick={handleWisataMenuOpen}
                  endIcon={<ExpandMoreIcon sx={{transform: wisataMenuActive ? 'rotate(180deg)' : 'rotate(0deg)',stroke: wisataMenuActive ? 'red' : 'currentColor', strokeWidth: 2, transition: 'stroke 0.75s ease-in-out' }} />}
                  sx={{
                    color: wisataMenuActive? 'red' : isOpaque ? '#6E6C6C' : 'white', 
                    '&:hover': { fontWeight: 700, color: 'red' },
                    padding:'0px',
                    minWidth:'auto',
                    height:'auto',
                    transition: 'color 0.75s ease-in-out',
                  }}
                >
                   <Typography
                      sx={{
                        alignContent: 'center',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        paddingTop: '5px',
                        fontSize: '24px',
                        color: 'inherit',
                        fontWeight: 'inherit',
                        transition: 'font-weight 0.1s ease-in-out',
                      }}
                    >
                      Wisata
                    </Typography>
                </Button>
                <Menu
                disableScrollLock
                anchorEl={wisataAnchorEl}
                open={Boolean(wisataAnchorEl)}
                onClose={handleMenuClose}
                elevation={0}
                PaperProps={{
                  style: {
                    background: isOpaque ? 'white' : 'transparent',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    color:'#FF010C',
                    width:'270px',
                    borderRadius:'0px 0px 30px 30px',
                    transition: 'background 0.2s ease-in-out ',
                  },
                }}
              >
                    <MenuItem onClick={() => handleWisataMenuItemClick('Bali')} sx={{ fontSize: '22px', fontWeight: 500, padding: '0px 20px' }}>Bali</MenuItem>
                    <Divider />
                    <MenuItem onClick={() => handleWisataMenuItemClick('Mataram')} sx={{ fontSize: '22px', fontWeight: 500, padding: '0px 20px' }}>Mataram</MenuItem>
                    <Divider />
                    <MenuItem onClick={() => handleWisataMenuItemClick('Kupang')} sx={{ fontSize: '22px', fontWeight: 500, padding: '0px 20px' }}>Kupang</MenuItem>
                    <Divider />
                    <MenuItem onClick={() => handleWisataMenuItemClick('Flores')} sx={{ fontSize: '22px', fontWeight: 500, padding: '0px 20px' }}>Flores</MenuItem>
                </Menu>
                
                <Stack justifyContent={'center'} alignItems={'center'}>
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
                transition: 'color 0.75s ease-in-out, border 0.75s ease-in-out'
              }}
            >
              <SearchIcon sx={{ width: 'auto' }} />
            </IconButton>
            </Stack>
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
              <Stack justifyContent={'center'} alignItems={'center'}>
              <Button 
              onClick={handleLoginmenu}
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
              </Stack>
          </Stack>
          
        </Toolbar>
        
      </Container>

    </AppBar>

  );
}
