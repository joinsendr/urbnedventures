import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="checkout/success" element={<CheckoutSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}
