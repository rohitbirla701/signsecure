import React from "react";
import Navbar from "../components/layout/Navbar";

const CaseStudy = () => {
    return (
        <div className="bg-[#000000] text-white">
            {/* ================= HERO SECTION ================= */}
            <section
                className="
    relative
    w-full
    min-h-[60vh]
    sm:min-h-[65vh]
    md:min-h-[70vh]
    lg:min-h-[80vh]
    xl:min-h-[90vh]
    overflow-hidden
  "
            >
                {/* <img
                    src="/images/casestudy.png"
                    alt="Hero Background"
                    className="absolute inset-0 z-20 w-full h-full object-cover object-center"
                /> */}

                

                <div className="absolute inset-0 z-10" />

                <div className="relative">
                    <Navbar transparent />
                </div>

                <div className="relative  z-10 flex flex-col items-center justify-center h-full text-center px-5 pt-24 sm:pt-28 lg:pt-0">
                    <h1 className="text-4xl pt-44 text-blue-600 sm:text-5xl lg:text-7xl font-bold">
                        Coming Soon
                    </h1>
                </div>
            </section>

        </div>
    );
};

export default CaseStudy;
