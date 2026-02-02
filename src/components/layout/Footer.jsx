import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#050b1e] text-gray-400 pt-16 md:pt-20">
            <div className="max-w-7xl mx-auto px-5 md:px-20 flex flex-col md:flex-row justify-between gap-12">
                <div className="md:col-span-2">
                    <Link to="/">
                        <img src="/images/logo.png" alt="logo" className="w-28 h-24 mb-5" />
                    </Link>
                    <p className="text-md font-normal md:text-md leading-relaxed text-gray-300">
                        At SignSecure, we specialixe in providing <br /> efficiant, scalable, and Secure bulk PDF signing <br /> solution which are designed to optimize <br /> document management & streamilne the <br /> signing process for all size of businesses.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row grid-cols-1 gap-10 md:gap-40">
                    <div>
                        <h4 className="text-white md:text-sm font-semibold uppercase mb-4">Company</h4>
                        <ul className="space-y-2 font-normal text-sm md:text-md text-gray-300">
                            <li className="hover:text-white cursor-pointer">Blog</li>
                            <li className="hover:text-white cursor-pointer">Careers</li>
                            <li className="hover:text-white cursor-pointer">Pricing</li>
                            <Link to="/about" className="hover:text-blue-400 transition">
                                About Us
                            </Link>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white md:text-sm font-semibold uppercase mb-4">Resources</h4>
                        <ul className="space-y-2 font-normal text-sm md:text-md text-gray-300">
                            <li className="hover:text-white cursor-pointer">Documentation</li>
                            <li className="hover:text-white cursor-pointer">White Papers</li>
                            <li className="hover:text-white cursor-pointer">Press</li>
                            <li className="hover:text-white cursor-pointer">Conferences</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white md:text-sm font-semibold uppercase mb-4">Legal</h4>
                        <ul className="space-y-2 font-normal text-sm md:text-md text-gray-300">
                            <li className="hover:text-white cursor-pointer">Terms of Service</li>
                            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer">Cookies Policy</li>
                            <li className="hover:text-white cursor-pointer">Data Processing</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white mt-12 mx-5 md:mx-18"></div>
            <div className="max-w-7xl mx-auto px-5 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs md:text-sm text-gray-300 text-center md:text-left">
                    © 2023 SignSecure. All rights reserved.
                </p>
                <div className="flex  gap-4 text-lg">
                    <img src="/images/Instagram (1).png" alt="instagram" className="w-6 h-6" />
                    <img src="/images/facebookb.png" alt="facebook" className="w-6 h-6" />
                    <img src="/images/youtube.png" alt="youtube" className="w-6 h-6" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
