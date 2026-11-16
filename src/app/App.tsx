import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}
