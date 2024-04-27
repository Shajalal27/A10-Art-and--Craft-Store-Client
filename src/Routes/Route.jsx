
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import ErrorPage from '../Pages/ErrorPage';
import HomePage from '../Pages/HomePage';

import AddCraftItem from '../components/AddCraftItem/AddCraftItem';
import MyArtCraftList from '../components/MyArtCraftList/MyArtCraftList';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import ArtCraftItems from '../components/ArtCraftItems/ArtCraftItems';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <HomePage></HomePage>
        },
        {
          path: '/art-craft-items',
          element: <ArtCraftItems></ArtCraftItems>
        },
        {
          path: '/addCraft',
          element: <AddCraftItem></AddCraftItem>
        },
        {
          path: '/craftList',
          element: <MyArtCraftList></MyArtCraftList>
        },
        {
          path: '/logIn',
          element: <LoginPage></LoginPage>
        },
        {
          path: '/register',
          element: <RegisterPage></RegisterPage>
        }
      ]
    }
  ])

export default router;