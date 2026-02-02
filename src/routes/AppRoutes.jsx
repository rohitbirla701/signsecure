import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Product from "../pages/ProductPage";
import CaseStudy from "../pages/CaseStudy";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product" element={<Product />} />
            <Route path="/casestudy" element={<CaseStudy />} />
        </Routes>
    );
};

export default AppRoutes;
