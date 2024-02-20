import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Beranda } from './pages/Beranda';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Beranda />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
