import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";
import Insights from "./components/Insights/Insights";
import FullLogs from "./components/FullLogs/FullLogs";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/features/1/insights" element={<Insights />} />
        <Route path="/full-logs" element={<FullLogs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
