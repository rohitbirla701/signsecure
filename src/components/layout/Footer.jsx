import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <footer
            className={`
        relative
        pt-16 md:pt-20
        text-white
        transition-colors duration-300

        ${isHome
                    ? "bg-[#235884] dark:bg-[#090B15]"          // ✅ HOME PAGE ONLY
                    : "bg-[#090B15]"          // ✅ OTHER PAGES
                }
      `}
        >
            <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col md:flex-row justify-between gap-12">
                <div className="md:col-span-2">
                    <Link to="/">
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="w-28 h-24 mb-5"
                        />
                    </Link>

                    <p className="text-md font-normal leading-relaxed text-white/90">
                        At SignSecure, we specialize in providing <br />
                        efficient, scalable, and secure bulk PDF signing <br />
                        solutions designed to optimize <br />
                        document management & streamline the <br />
                        signing process for businesses.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-10 md:gap-40">
                    {/* COMPANY */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase mb-4 text-white">
                            Company
                        </h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li className="hover:text-white cursor-pointer">Blog</li>
                            <li className="hover:text-white cursor-pointer">Careers</li>
                            <li className="hover:text-white cursor-pointer">Pricing</li>
                            <Link to="/about" className="hover:text-blue-300 transition">
                                About Us
                            </Link>
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase mb-4 text-white">
                            Resources
                        </h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li className="hover:text-white cursor-pointer">Documentation</li>
                            <li className="hover:text-white cursor-pointer">White Papers</li>
                            <li className="hover:text-white cursor-pointer">Press</li>
                            <li className="hover:text-white cursor-pointer">Conferences</li>
                        </ul>
                    </div>

                    {/* LEGAL */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase mb-4 text-white">
                            Legal
                        </h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li className="hover:text-white cursor-pointer">
                                Terms of Service
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Privacy Policy
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Cookies Policy
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Data Processing
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/30 mt-12 mx-4 md:mx-20"></div>

            <div className="max-w-7xl mx-auto px-5 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs md:text-sm text-white/80">
                    © 2023 SignSecure. All rights reserved.
                </p>

                <div className="flex gap-4">
                    <img
                        src="/images/Instagram (1).png"
                        alt="instagram"
                        className="cursor-pointer w-6 h-6"
                    />
                    <img
                        src="/images/facebookb.png"
                        alt="facebook"
                        className="cursor-pointer w-6 h-6"
                    />
                    <img
                        src="/images/youtube.png"
                        alt="youtube"
                        className="cursor-pointer w-6 h-6"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
