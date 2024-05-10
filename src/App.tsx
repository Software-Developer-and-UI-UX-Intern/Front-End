import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar  from './components/ui/navbar/navbar';
import Navbarwhite  from './components/ui/navbar/navbarwhite';
import Footer from './components/ui/footer';
import { Beranda } from './pages/Beranda';
import { Login } from './pages/Login';
import { LupaPassword } from './pages/Login/Lupapassword';
import { LupaVerifikasi } from './pages/Login/Lupapassword/Lupaverifikasi';
import { Verifikasi } from './pages/Login/verification';
import { Register } from './pages/Registrasi';
import { Profile } from './pages/profile';
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
import ProtectedRoute from './components/login/ProtectedRoute';

// const isAuthenticated = () => {
//   const token = localStorage.getItem('token');
//   const tokenExpiration = localStorage.getItem('tokenExpiration') as string; // Type assertion
//   // Check if token exists and if it's not expired
//   return token && Date.now() < parseInt(tokenExpiration);
// };

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
      <ProtectedRoute>
        <>
          <Navbar />
          <Beranda />
          <Footer />
        </>
      </ProtectedRoute>
    )
  },
  {
    path: '/cari-wisata',
    element: (
      <ProtectedRoute>
      <>
        <Navbarwhite />
        <About />
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/wisata-bali',
    element: (
      <ProtectedRoute>
      <>
        <Navbar />
        <Bali />
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/wisata-kupang',
    element: (
      <ProtectedRoute>
      <>
        <Navbar />
        <Kupang />
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/wisata-mataram',
    element: (
      <ProtectedRoute>
      <>
        <Navbar />
        <Mataram />
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/wisata-flores',
    element: (
      <ProtectedRoute>
      <>
        <Navbar />
        <Flores />
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/cari-oleh-oleh',
    element: (
      <ProtectedRoute>
      <>
        <Navbarwhite />
        <Oleh />
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/oleh-oleh-bali',
    element: (
      <ProtectedRoute>
      <>
        <Navbar />
        <OlehBali />
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/oleh-oleh-mataram',
    element: (
      <ProtectedRoute>
      <>
        <Navbar />
        <OlehMataram />
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/oleh-oleh-kupang',
    element: (
      <ProtectedRoute>
      <>
        <Navbar />
        <OlehKupang />
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/oleh-oleh-flores',
    element: (
      <ProtectedRoute>
      <>
        <Navbar />
        <OlehFlores/>
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/cari-restoran',
    element: (
      <ProtectedRoute>
      <>
        <Navbarwhite />
        <Restoran />
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/restoran-bali',
    element: (
      <ProtectedRoute>
      <>
        <Navbarwhite />
        <RestoranBali />
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/restoran-mataram',
    element: (
      <ProtectedRoute>
      <>
        <Navbarwhite />
        <RestoranMataram />
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/restoran-kupang',
    element: (
      <ProtectedRoute>
      <>
        <Navbarwhite />
        <RestoranKupang />
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/restoran-flores',
    element: (
      <ProtectedRoute>
      <>
        <Navbarwhite />
        <RestoranFlores/>
        <Footer/>
      </>
      </ProtectedRoute>
    )
  },
  {
    path: '/cari-hotel',
    element: (
    <ProtectedRoute>
    <>
    <Navbarwhite />
    <Hotel/>,
    <Footer/>
    </>
    </ProtectedRoute>
    )
  
    },
    {
      path: '/hotel-bali',
      element: (
        <ProtectedRoute>
        <>
          <Navbar/>
          <HotelBali />
          <Footer/>
        </>
        </ProtectedRoute>
      )
    },
    {
      path: '/profile',
      element: (
        <ProtectedRoute>
        <>
          <Navbarwhite/>
          <Profile />
        </>
        </ProtectedRoute>
      )
    },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/lupa-password',
    element: <LupaPassword />,
  },
  {
    path: '/Verifikasi-lupa-password',
    element: <LupaVerifikasi />,
  },
  {
    path: '/Verifikasi',
    element: <Verifikasi />,
  },
  {
    path: '/register',
    element: <Register />,
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
