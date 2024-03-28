import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar  from './components/ui/navbar/navbar';
import Navbarwhite  from './components/ui/navbar/navbarwhite';
import Footer from './components/ui/footer';
import { Beranda } from './pages/Beranda';
import { Login } from './pages/Login';
import { Register } from './pages/Registrasi';
import { Flores } from './pages/About/flores';
import { Bali } from './pages/About/bali';
import { Kupang } from './pages/About/kupang';
import { Mataram } from './pages/About/mataram';
import {Oleh} from './pages/Oleh'
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
    path: '/about-bali',
    element: (
      <>
        <Navbar />
        <Bali />
        <Footer/>
      </>
    )
  },
  {
    path: '/about-kupang',
    element: (
      <>
        <Navbar />
        <Kupang />
        <Footer/>
      </>
    )
  },
  {
    path: '/about-mataram',
    element: (
      <>
        <Navbar />
        <Mataram />
        <Footer/>
      </>
    )
  },
  {
    path: '/about-flores',
    element: (
      <>
        <Navbar />
        <Flores />
        <Footer/>
      </>
    )
  },
  {
    path: '/oleh-oleh',
    element: (
      <>
        <Navbarwhite />
        <Oleh />
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
