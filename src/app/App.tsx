import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import CheckoutCancelled from "./pages/CheckoutCancelled";
import RefundPolicy from "./pages/RefundPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="checkout/success" element={<CheckoutSuccess />} />
        <Route path="checkout/cancelled" element={<CheckoutCancelled />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
