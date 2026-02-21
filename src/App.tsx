import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@/components/common/Layout';

import HomePage from '@/pages/general/HomePage';
import ProductsPage from '@/pages/shop/ProductsPage';
import ProductDetailPage from '@/pages/shop/ProductDetailPage';
import AboutPage from '@/pages/general/AboutPage';
import ContactPage from '@/pages/general/ContactPage';
import CartPage from '@/pages/shop/CartPage';
import CheckoutPage from '@/pages/shop/CheckoutPage';
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '@/pages/auth/ResetPasswordPage';
import ProfilePage from '@/pages/account/ProfilePage';
import OrdersPage from '@/pages/shop/OrdersPage';
import WishlistPage from '@/pages/shop/WishlistPage';
import NotificationsPage from '@/pages/account/NotificationsPage';
import SettingsPage from '@/pages/account/SettingsPage';
import HelpPage from '@/pages/general/HelpPage';
import TermsPage from '@/pages/legal/TermsPage';
import PrivacyPage from '@/pages/legal/PrivacyPage';
import DisclaimerPage from '@/pages/legal/DisclaimerPage';
import ErrorPage from '@/pages/general/ErrorPage';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'produk', element: <ProductsPage /> },
            { path: 'produk/:id', element: <ProductDetailPage /> },
            { path: 'tentang', element: <AboutPage /> },
            { path: 'kontak', element: <ContactPage /> },
            { path: 'keranjang', element: <CartPage /> },
            { path: 'checkout', element: <CheckoutPage /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'register', element: <RegisterPage /> },
            { path: 'lupa-password', element: <ForgotPasswordPage /> },
            { path: 'reset-password', element: <ResetPasswordPage /> },
            { path: 'profil', element: <ProfilePage /> },
            { path: 'pesanan', element: <OrdersPage /> },
            { path: 'wishlist', element: <WishlistPage /> },
            { path: 'notifikasi', element: <NotificationsPage /> },
            { path: 'pengaturan', element: <SettingsPage /> },
            { path: 'bantuan', element: <HelpPage /> },
            { path: 'syarat-ketentuan', element: <TermsPage /> },
            { path: 'kebijakan-privasi', element: <PrivacyPage /> },
            { path: 'disclaimer', element: <DisclaimerPage /> },
        ],
    },
]);

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}

export default App;
