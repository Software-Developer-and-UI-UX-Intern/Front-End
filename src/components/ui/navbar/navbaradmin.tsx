import {  Button, InputBase, Menu, Stack, Typography, MenuItem, Divider, } from '@mui/material';
import logo from '../../../assets/adminlogonavbar.png'
import { Icon } from '@iconify/react/dist/iconify.js';
import { Outlet, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useState, ChangeEvent, useEffect } from 'react';

const menuItemStyle = {
  fontSize: '22px',
  fontWeight: 500,
  padding: '0px 20px',
  transition: 'color 0.3s ease-in-out', 
  '&:hover': {
    color: 'red', // Change text color to red on hover
  },
};

export default function Navbar() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null); // State for wisata menu
  const [profileMenuActive, setProfileMenuActive] = useState(false); // State to track wisata menu activation
  const [menuActive, setMenuActive] = useState(false);


  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  }, []);

  const handleMenuOpen = () => {
    setMenuActive(true);
  };
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfileAnchorEl(event.currentTarget); // Set anchor element when hotel menu button is clicked
    setProfileMenuActive(true); // Set hotel menu as active
    handleMenuOpen();
  };
  const handleMenuClose = () => {
    setProfileAnchorEl(null);
    setProfileMenuActive(false); // Set wisata menu as inactive
    setMenuActive(false);
  };
  const handleProfilemenu = () => {
    navigate(`/profile`)
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate(`/admin-login`)
  }
  return (
  <Stack direction={'row'}>
    <Stack
      direction={'column'}
      sx={{
        backgroundColor: '#FF010C',
        justifyContent: 'space-between',
        width: '270px',
        position: 'sticky',
        height: '100vh', // Set height to 100vh for full viewport height
        top: 0, // Stick to the top of the viewport
        left: 0, // Stick to the left side
        zIndex: 1, // Ensure it's above other content
      }}
    >
      <Stack justifyContent={'space-around'} height={'100%'} alignItems={'center'} width={'auto'}>
        <Stack width={'82px'}>
        <img src={logo} alt="logo" />
        </Stack>
        <Stack gap={5} alignItems={'start'}>
        {/* middle button */}
        {/* Beranda */}
          <Stack gap={2} direction={'row'} justifyContent={'center'} color={'#FFF'} alignItems={'center'}>
          <Button disableElevation disableFocusRipple disableRipple disableTouchRipple
                      onClick={() => navigate(`/admin-beranda`)}                  
                      sx={{
                      color: '#FFF', // Change text color to gray
                      '&:hover': { fontWeight: 700, color: '#FFF' },
                      padding:'0px',
                      minWidth:'auto',
                      height:'auto',
                      transition: 'color 0.75s ease-in-out',
                    }}
                  >
          <Icon icon="heroicons:home-20-solid" width="42" height="42" style={{ color: '#FFF' }} />
          <Typography fontWeight={'500'} fontSize={'20px'} paddingLeft={'20px'}>
          Beranda
          </Typography>
          </Button>
          </Stack>
        {/* Hotel */}
        <Stack gap={2} direction={'row'} justifyContent={'center'} color={'#FFF'} alignItems={'center'}>
          <Button disableElevation disableFocusRipple disableRipple disableTouchRipple
                      onClick={() => navigate(`/admin-hotel`)}                  
                      sx={{
                      color: '#FFF', // Change text color to gray
                      '&:hover': { fontWeight: 700, color: '#FFF' },
                      padding:'0px',
                      minWidth:'auto',
                      height:'auto',
                      transition: 'color 0.75s ease-in-out',
                    }}
                  >
          <Icon icon="icon-park-solid:hotel" width="42" height="42" style={{ color: '#FFF' }} />
          <Typography fontWeight={'500'} fontSize={'20px'} paddingLeft={'20px'}>
          Hotel
          </Typography>
          </Button>
          </Stack>
          {/* Restaurant */}
        <Stack gap={2} direction={'row'} justifyContent={'center'} color={'#FFF'} alignItems={'center'}>
          <Button disableElevation disableFocusRipple disableRipple disableTouchRipple
                      onClick={() => navigate(`/admin/restoran`)}                  
                      sx={{
                      color: '#FFF', // Change text color to gray
                      '&:hover': { fontWeight: 700, color: '#FFF' },
                      padding:'0px',
                      minWidth:'auto',
                      height:'auto',
                      transition: 'color 0.75s ease-in-out',
                    }}
                  >
          <Icon icon="ion:restaurant-outline" width="42" height="42" style={{ color: '#FFF' }} />
          <Typography fontWeight={'500'} fontSize={'20px'} paddingLeft={'20px'}>
          Restoran
          </Typography>
          </Button>
          </Stack>
          {/* Wisata */}
          <Stack gap={2} direction={'row'} justifyContent={'center'} color={'#FFF'} alignItems={'center'}>
          <Button disableElevation disableFocusRipple disableRipple disableTouchRipple
                      onClick={() => navigate(`/admin-wisata`)}                  
                      sx={{
                      color: '#FFF', // Change text color to gray
                      '&:hover': { fontWeight: 700, color: '#FFF' },
                      padding:'0px',
                      minWidth:'auto',
                      height:'auto',
                      transition: 'color 0.75s ease-in-out',
                    }}
                  >
          <Icon icon="akar-icons:location" width="42" height="42" style={{ color: '#FFF' }} />
          <Typography fontWeight={'500'} fontSize={'20px'} paddingLeft={'20px'}>
          Wisata
          </Typography>
          </Button>
          </Stack>
          {/* Oleh-oleh */}
          <Stack gap={2} direction={'row'} justifyContent={'center'} color={'#FFF'} alignItems={'center'}>
          <Button disableElevation disableFocusRipple disableRipple disableTouchRipple
                      onClick={() => navigate(`/admin-oleh-oleh`)}                  
                      sx={{
                      color: '#FFF', // Change text color to gray
                      '&:hover': { fontWeight: 700, color: '#FFF' },
                      padding:'0px',
                      minWidth:'auto',
                      height:'auto',
                      transition: 'color 0.75s ease-in-out',
                    }}
                  >
          <Icon icon="lets-icons:shop" width="42" height="42" style={{ color: '#FFF' }} />
          <Typography fontWeight={'500'} fontSize={'20px'} paddingLeft={'20px'}>
          Oleh-oleh
          </Typography>
          </Button>
          </Stack>
        {/* User */}
          <Stack gap={2} direction={'row'} justifyContent={'center'} color={'#FFF'} alignItems={'center'}>
          <Button disableElevation disableFocusRipple disableRipple disableTouchRipple
                      onClick={() => navigate(`/admin-oleh-oleh`)}                  
                      sx={{
                      color: '#FFF', // Change text color to gray
                      '&:hover': { fontWeight: 700, color: '#FFF' },
                      padding:'0px',
                      minWidth:'auto',
                      height:'auto',
                      transition: 'color 0.75s ease-in-out',
                    }}
                  >
          <Icon icon="solar:user-bold" width="42" height="42" style={{ color: '#FFF' }} />
          <Typography fontWeight={'500'} fontSize={'20px'} paddingLeft={'20px'}>
          User
          </Typography>
          </Button>
          </Stack>
        </Stack>
        <Stack>
  {/* sign out */}
  <Stack gap={2} direction={'row'} justifyContent={'center'} color={'#FFF'} alignItems={'center'}>
          <Button disableElevation disableFocusRipple disableRipple disableTouchRipple
                      onClick={() => navigate(`/admin-login`)}                  
                      sx={{
                      color: '#FFF', // Change text color to gray
                      '&:hover': { fontWeight: 700, color: '#FFF' },
                      padding:'0px',
                      minWidth:'auto',
                      height:'auto',
                      transition: 'color 0.75s ease-in-out',
                    }}
                  >
          <Icon icon="ic:round-log-out" width="42" height="42" style={{ color: '#FFF' }} />
          <Typography fontWeight={'500'} fontSize={'20px'} paddingLeft={'20px'}>
          Sign Out
          </Typography>
          </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Stack direction={'column'} width="calc(100% - 200px)" height={'100vh'} sx={{overflowY:'hidden'}} justifyContent={'center'}>
      {/* navbar top */}
      <Stack height={'100px'} justifyContent={'center'} direction={'row'} padding={'0px 30px'}>
        {/* hamburger */}
      <Stack gap={2} direction={'row'} justifyContent={'center'} color={'red'} alignItems={'center'} height={'auto'}>
          <Button disableElevation disableFocusRipple disableRipple disableTouchRipple
                      onClick={() => navigate(`/admin-beranda`)}                  
                      sx={{
                      color: '#FFF', // Change text color to gray
                      '&:hover': { fontWeight: 700, color: '#FFF' },
                      padding:'0px',
                      minWidth:'auto',
                      height:'auto',
                      transition: 'color 0.75s ease-in-out',
                    }}
                  >
          <Icon icon="iconamoon:menu-burger-horizontal-bold" width="48" height="33" style={{ color: 'red' }} />
          </Button>
          </Stack>
          {/* search */}
          <Stack width={'100%'} height={'auto'} justifyContent={'center'} padding={'0px 30px'}>
          <Stack
          direction="row"
          justifyContent={'center'}
          width={'100%'}
          height={'54px'}
          sx={{
            animation: 'slideIn 0.5s forwards', // Animation for sliding in from right to left
            '@keyframes slideIn': {
              from: { transform: 'translateX(100%)' }, // Start from outside the container
              to: { transform: 'translateX(0)' }, // Move to the left edge of the container
            },
          }}
        >
          <InputBase
            placeholder="Cari"
            value={searchValue}
            onChange={handleChange}
            startAdornment={<SearchIcon sx={{color:'#FF010C'}} />}
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
        {/* User */}
        <Stack direction={'row'}>
  <Button 
  disableElevation 
  disableFocusRipple 
  disableRipple 
  disableTouchRipple
  onClick={handleProfileMenuOpen}
  sx={{
    color: profileMenuActive ? 'red' :  (menuActive ? 'red' :  'red'),
    padding:'0px',
    minWidth:'auto',
    height:'auto',
    transition: 'color 0.4s ease-in-out',
  }}
>
<Icon icon="gg:profile" width="40" height="40" style={{ color: 'inherit' }} />
                   <Typography
                      sx={{
                        alignContent: 'center',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        paddingTop: '5px',
                        fontSize: '22px',
                        color: 'inherit',
                        fontWeight: 'inherit',
                        transition: 'font-weight 0.1s ease-in-out',
                        textWrap:'nowrap'
                      }}
                    >
                Super Admin
                </Typography>
                </Button>
                <Menu
                disableScrollLock
                anchorEl={profileAnchorEl}
                open={Boolean(profileAnchorEl)}
                onClose={handleMenuClose}
                elevation={0}
                PaperProps={{
                  style: {
                    background:'white',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    color: '#6E6C6C',
                    width:'270px',
                    borderRadius:'0px 0px 30px 30px',
                    transition: 'background 0.2s ease-in-out ',
                  },
                }}
              >
                    <MenuItem onClick={() => handleProfilemenu()} sx={menuItemStyle}>Profile</MenuItem>
                    <Divider />
                    <MenuItem onClick={() => handleLogout()} sx={menuItemStyle}>Sign out</MenuItem>
                </Menu>
              </Stack>
      </Stack>
      {/* main page */}
      <Stack height='100%' width='100%' sx={{overflowY:'hidden'}}>
      <Outlet/>
      </Stack>
    </Stack>
  </Stack>
  );
}
