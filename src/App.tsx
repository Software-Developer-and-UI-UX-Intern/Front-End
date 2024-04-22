import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar  from './components/ui/navbar/navbar';
import Navbarwhite  from './components/ui/navbar/navbarwhite';
import Footer from './components/ui/footer';
import { Beranda } from './pages/Beranda';
import { Login } from './pages/Login';
import { Register } from './pages/Registrasi';
import { About } from './pages/About';
import { Flores } from './pages/About/flores';
import { Bali } from './pages/About/bali';
import { Kupang } from './pages/About/kupang';
import { Mataram } from './pages/About/mataram';
import {Oleh} from './pages/Oleh';
import {OlehBali} from './pages/Oleh/OlehBali';
import {Hotel} from './pages/Hotel';
import {HotelBali} from './pages/Hotel/bali'
import {OlehMataram} from './pages/Oleh/OlehMataram';
import {OlehKupang} from './pages/Oleh/OlehKupang';
import {OlehFlores} from './pages/Oleh/OlehFlores';
import {Restoran} from './pages/Restoran';
import {RestoranBali} from './pages/Restoran/RestoranBali';
import {RestoranMataram} from './pages/Restoran/RestoranMataram';
import {RestoranKupang} from './pages/Restoran/RestoranKupang';
import {RestoranFlores} from './pages/Restoran/RestoranFlores';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins, sans-serif',
          textTransform: 'none',
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Beranda />
        <Footer/>
      </>
    )
  },
  {
    path: '/cari-wisata',
    element: (
      <>
        <Navbarwhite />
        <About />
        <Footer/>
      </>
    )
  },
  {
    path: '/wisata-bali',
    element: (
      <>
        <Navbar />
        <Bali />
        <Footer/>
      </>
    )
  },
  {
    path: '/wisata-kupang',
    element: (
      <>
        <Navbar />
        <Kupang />
        <Footer/>
      </>
    )
  },
  {
    path: '/wisata-mataram',
    element: (
      <>
        <Navbar />
        <Mataram />
        <Footer/>
      </>
    )
  },
  {
    path: '/wisata-flores',
    element: (
      <>
        <Navbar />
        <Flores />
        <Footer/>
      </>
    )
  },
  {
    path: '/cari-oleh-oleh',
    element: (
      <>
        <Navbarwhite />
        <Oleh />
        <Footer/>
      </>
    )
  },
  {
    path: '/oleh-oleh-bali',
    element: (
      <>
        <Navbar />
        <OlehBali />
        <Footer/>
      </>
    )
  },
  {
    path: '/oleh-oleh-mataram',
    element: (
      <>
        <Navbar />
        <OlehMataram />
        <Footer/>
      </>
    )
  },
  {
    path: '/oleh-oleh-kupang',
    element: (
      <>
        <Navbar />
        <OlehKupang />
        <Footer/>
      </>
    )
  },
  {
    path: '/oleh-oleh-flores',
    element: (
      <>
        <Navbar />
        <OlehFlores/>
        <Footer/>
      </>
    )
  },
  {
    path: '/cari-restoran',
    element: (
      <>
        <Navbarwhite />
        <Restoran />
        <Footer/>
      </>
    )
  },
  {
    path: '/restoran-bali',
    element: (
      <>
        <Navbarwhite />
        <RestoranBali />
        <Footer/>
      </>
    )
  },
  {
    path: '/restoran-mataram',
    element: (
      <>
        <Navbarwhite />
        <RestoranMataram />
        <Footer/>
      </>
    )
  },
  {
    path: '/restoran-kupang',
    element: (
      <>
        <Navbarwhite />
        <RestoranKupang />
        <Footer/>
      </>
    )
  },
  {
    path: '/restoran-flores',
    element: (
      <>
        <Navbarwhite />
        <RestoranFlores/>
        <Footer/>
      </>
    )
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },

  {
  path: '/cari-hotel',
  element: (
  <>
  <Navbarwhite />
  <Hotel/>,
  <Footer/>
  </>
  )

  },
  {
    path: '/hotel-bali',
    element: (
      <>
        <Navbar/>
        <HotelBali />
        <Footer/>
      </>
    )
  }
]);

function App() {
  return (
    // Provide the custom theme to the entire app
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
