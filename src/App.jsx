import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import CarCatalog from "./pages/CarCatalog";
import BookingDetail from "./pages/BookingDetail";
import UserLogin from "./pages/UserLogin";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./pages/ProtectedRoute";


export default function App() {
  return (
    <Routes>

      {/* 🌐 Layout público */}
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="catalog" element={<CarCatalog />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="booking/:id" element={<BookingDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* 🔐 RUTAS PROTEGIDAS */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}