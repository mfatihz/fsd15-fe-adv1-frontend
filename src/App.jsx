import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import List from "./components/pages/list";
import UnderDevelopment from "./components/pages/under-development";
import Register from "./components/pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lists" element={<List />} />
        {/* Header Links */}
        <Route path="/series" element={<UnderDevelopment tag="Series" />} />
        <Route path="/movies" element={<UnderDevelopment tag="Movies" />} />
        {/* Menu */}
        <Route path="/profile" element={<UnderDevelopment tag="Profile" header={<p>mfatihz.std@gmail.com</p>}/>} />
        <Route path="/premium" element={<UnderDevelopment tag="Premium" />} />
        {/* Auth */}
        <Route path="/forgot-password" element={<UnderDevelopment to="/login" tag="Login">Kembali ke Login</UnderDevelopment>} />
        <Route path="/oauth" element={<UnderDevelopment to="/login" tag="Login">Kembali ke Login</UnderDevelopment>} />
        {/* Footer */}
        <Route path="/genre/:genreId" element={<UnderDevelopment tag="Genre" />} />
        <Route path="/help/:helpId" element={<UnderDevelopment tag="Help" />} />
        {/* Catch-all route untuk path lain di footer */}
        <Route path="*" element={<UnderDevelopment />} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App