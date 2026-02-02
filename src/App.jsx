import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/layout/Footer";

const App = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/product", "/casestudy"];


  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
