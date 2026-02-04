import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/layout/Footer";
import ThemeProvider from "./context/ThemeProvider";

const App = () => {
  const location = useLocation();

  // Navbar hide routes
  const hideNavbarRoutes = ["/", "/product", "/casestudy"];

  return (
    <ThemeProvider>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <AppRoutes />

      <Footer />
    </ThemeProvider>
  );
};

export default App;
