import { Routes, Route, BrowserRouter } from "react-router-dom";
import Service from "../Pages/Service";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}
