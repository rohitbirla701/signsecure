import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = ({ transparent = false }) => {
    const [dark, setDark] = useState(false);
    const [open, setOpen] = useState(false);

    const menuItems = [
        { label: "Contact Us", id: "Contact" },
    ];

    return (
        <nav
            className={`px-4 md:px-6 lg:px-12 pt-6 text-white
        ${transparent
                    ? "bg-transparent absolute top-0 left-0 w-full z-50"
                    : "bg-[#090B15]"
                }`}>
            {/* MOBILE & TABLET TOP ROW */}
            <div className="flex items-center justify-between lg:hidden">
                {/* LOGO */}
                <div className="flex items-center md:pl-16 gap-2">
                    <Link to="/">
                        <img
                            src="/images/logo.png"
                            alt="SignSecure Logo"
                            className="md:w-30 md:h-24 w-15 h-12 cursor-pointer"
                        />
                    </Link>
                </div>
                {/* TABLET BUTTONS */}
                <div className="hidden md:flex gap-4">
                    <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 px-4 py-2 rounded-full">
                        Contact Sales
                    </button>
                    <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 px-4 py-2 rounded-full">
                        Free Trial
                    </button>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-xl"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {/* TABLET MENU (MD ONLY) */}
            <div className="hidden md:flex lg:hidden justify-center items-center mt-4 gap-6">
                <ul className="flex gap-4 font-medium cursor-pointer">
                    <Link
                        to="/product"
                        className="cursor-pointer text-white hover:text-blue-400 transition-colors duration-300"
                    >
                        Product
                    </Link>
                    <Link to="/casestudy" className="hover:text-blue-400 transition">
                        Use Cases
                    </Link>
                    <Link to="/about" className="hover:text-blue-400 transition">
                        Pricing
                    </Link>
                    <li>Blog</li>
                    <Link to="/about" className="hover:text-blue-400 transition">
                        About Us
                    </Link>
                    <li>Contact Us</li>
                </ul>
                <button
                    onClick={() => setDark(!dark)}
                    className="p-2 cursor-pointer rounded-full bg-gray-700 hover:bg-gray-600 transition"
                >
                    {dark ? <FaSun /> : <FaMoon />}
                </button>
            </div>

            {/* DESKTOP (LG+) – ALL CENTERED ONE ROW */}
            <div className="hidden lg:flex justify-between items-center gap-8">
                {/* LOGO */}
                <div className="flex items-center pl-16 gap-2">
                    <Link to="/">
                        <img
                            src="/images/logo.png"
                            alt="SignSecure Logo"
                            className="w-30 h-24 cursor-pointer"
                        />
                    </Link>
                </div>

                {/* MENU */}
                <div className="flex gap-10 justify-center items-center">
                    <div className="flex gap-5 justify-center items-center">
                        <ul className="flex gap-6 font-medium cursor-pointer">
                            <Link
                                to="/product"
                                className="cursor-pointer text-white hover:text-blue-400 transition-colors duration-300"
                            >
                                Product
                            </Link>
                            <Link to="/casestudy" className="hover:text-blue-400 transition">
                                Use Cases
                            </Link>
                            <Link to="/about" className="hover:text-blue-400 transition">
                                Pricing
                            </Link>
                            <li>Blog</li>
                            <Link to="/about" className="hover:text-blue-400 transition">
                                About Us
                            </Link>
                            {menuItems.map((item) => (
                                <li
                                    key={item.id}
                                    onClick={() =>
                                        document
                                            .getElementById(item.id)
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="cursor-pointer hover:text-blue-400 transition"
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                        {/* DARK TOGGLE */}
                        <button
                            onClick={() => setDark(!dark)}
                            className="p-2 rounded-full cursor-pointer bg-gray-700 hover:bg-gray-600 transition"
                        >
                            {dark ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>
                    {/* BUTTONS */}
                    <div className="flex gap-4">
                        <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 px-4 py-2 rounded-full">
                            Contact Sales
                        </button>
                        <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 px-4 py-2 rounded-full">
                            Free Trial
                        </button>
                    </div>
                </div>
            </div>
            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden mt-4 bg-gray-900 rounded-xl p-4 space-y-4">
                    <ul className="space-y-3 font-medium">

                        <li>
                            <Link
                                to="/product"
                                onClick={() => setOpen(false)}
                                className="block text-white hover:text-blue-400 transition-colors duration-300"
                            >
                                Product
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/casestudy"
                                onClick={() => setOpen(false)}
                                className="block text-white hover:text-blue-400 transition"
                            >
                                Use Cases
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                onClick={() => setOpen(false)}
                                className="block text-white hover:text-blue-400 transition"
                            >
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/blog"
                                onClick={() => setOpen(false)}
                                className="block text-white hover:text-blue-400 transition"
                            >
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                onClick={() => setOpen(false)}
                                className="block text-white hover:text-blue-400 transition"
                            >
                                Contact Us
                            </Link>
                        </li>

                    </ul>
                    <button
                        onClick={() => setDark(!dark)}
                        className="p-2 rounded-full bg-gray-700"
                    >
                        {dark ? <FaSun /> : <FaMoon />}
                    </button>
                    <div className="flex flex-col gap-3">
                        <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 py-2 rounded-full">
                            Contact Sales
                        </button>
                        <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 py-2 rounded-full">
                            Free Trial
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
