import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/page";
import MenPage from "./pages/men/page";
import WomenPage from "./pages/women/page";
import AccessoriesPage from "./pages/accessories/page";
import EquipmentPage from "./pages/equipment/page";
import SalePage from "./pages/sale/page";

import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import LoginPage from "./pages/login/page";
import RegisterPage from "./pages/register/page";
import CheckoutPage from "./pages/checkout/page";
import OrderConfirmationPage from "./pages/order-confirmation/page";
import { RequireAuth } from "./components/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/shop" element={<HomePage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route path="/equipment" element={<EquipmentPage />} />
            <Route path="/sale" element={<SalePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
