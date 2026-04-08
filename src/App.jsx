import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import CarCatalog from './pages/CarCatalog';
import BookingDetail from './pages/BookingDetail';
import UserLogin from './pages/UserLogin';
import UserDashboard from './pages/UserDashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="catalog" element={<CarCatalog />} />
        <Route path="booking/:id" element={<BookingDetail />} />
        <Route path="login" element={<UserLogin />} />
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
