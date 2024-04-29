
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import ErrorPage from '../Pages/ErrorPage';
import HomePage from '../Pages/HomePage';

import AddCraftItem from '../components/AddCraftItem/AddCraftItem';
import MyArtCraftList from '../components/MyArtCraftList/MyArtCraftList';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import ArtCraftItems from '../components/ArtCraftItems/ArtCraftItems';
import ViewDetails from '../Pages/ViewDetails/ViewDetails';
import UpdateItem from '../components/UpdateItem/UpdateItem';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <HomePage></HomePage>,
            loader: () => fetch('http://localhost:5000/addCraft')
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
          element: <MyArtCraftList></MyArtCraftList>,
          loader: () => fetch('http://localhost:5000/addCraft')
        },
        {
          path: '/logIn',
          element: <LoginPage></LoginPage>
        },
        {
          path: '/register',
          element: <RegisterPage></RegisterPage>
        },
        {
          path: '/view_details',
          element: <ViewDetails></ViewDetails>,
          loader: () => fetch('http://localhost:5000/addCraft')
        },
        {
          path:'craftList/update_item/:id',
          element: <UpdateItem></UpdateItem>,
          loader: ({params}) => fetch(`http://localhost:5000/addCraft/${params.id}`)
          
        }
      ]
    }
  ])

export default router;