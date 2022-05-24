import { ADMIN_ROUTER, BASKET_ROUTER, DEVICE_ROUTER, LOGIN_ROUTER, PROFILE_ROUTER, REGISTRATION_ROUTER, SHOP_ROUTER } from "./utils/consts"
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import DevicePage from './pages/DevicePage';
import Basket from './pages/Basket';
import Admin from './pages/Admin';
import Profile from "./pages/Profile";

export const adminRoutes = [
    {
        path:ADMIN_ROUTER,
        Component: <Admin/>
    }
]

export const userRoutes = [
    {
        path:BASKET_ROUTER,
        Component: <Basket/>
    },
    {
        path:PROFILE_ROUTER,
        Component: <Profile/>
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTER,
        Component: <Shop/>
    },
    {
        path: LOGIN_ROUTER,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTER,
        Component: <Auth/>
    },
    {
        path: DEVICE_ROUTER + '/:id',
        Component: <DevicePage/>
    }
]