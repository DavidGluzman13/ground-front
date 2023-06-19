import "./App.css";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
