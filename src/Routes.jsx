import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditePage from "./pages/EditePage";


export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EditePage />} />
      </Routes>
    </Router>
  );
}