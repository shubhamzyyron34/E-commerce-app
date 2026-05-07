import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";
import CategorySection from "./components/CategorySection";
import Banner from "./components/Banner";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/login";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <CategorySection />
      <Banner />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
