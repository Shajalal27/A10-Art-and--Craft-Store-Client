
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
import PrivateRoutes from './PrivateRoutes';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <HomePage></HomePage>,
            loader: () => fetch(' https://art-craft-store-server-rf7di9uen-shajalals-projects.vercel.app/addCraft')
        },
        {
          path: '/art-craft-items',
          element: <ArtCraftItems></ArtCraftItems>,
          loader: () => fetch(' https://art-craft-store-server-rf7di9uen-shajalals-projects.vercel.app/addCraft')
        },
        {
          path: '/addCraft',
          element: <AddCraftItem></AddCraftItem>
        },
        {
          path: '/craftList',
          element: <PrivateRoutes>
                       <MyArtCraftList></MyArtCraftList>
                    </PrivateRoutes>,
          loader: () => fetch(' https://art-craft-store-server-rf7di9uen-shajalals-projects.vercel.app/addCraft')
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
          element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
          loader: () => fetch(' https://art-craft-store-server-rf7di9uen-shajalals-projects.vercel.app/addCraft')
        },
        {
          path:'craftList/update_item/:id',
          element: <PrivateRoutes><UpdateItem></UpdateItem></PrivateRoutes>,
          loader: ({params}) => fetch(` https://art-craft-store-server-rf7di9uen-shajalals-projects.vercel.app/addCraft/${params.id}`)
          
        }
      ]
    }
  ])

export default router;