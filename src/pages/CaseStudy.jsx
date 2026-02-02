import React from "react";
import Navbar from "../components/layout/Navbar";
import ContactSection from "../sections/Contact";


const metrics = [
    {
        title: "Decrease invoice signing time by up to 80%",
    },
    {
        title: "Stay compliant with e signature regulations",
    },
    {
        title: "Empower finance teams with minimal manual work",
    },
    {
        title: "Get tamperproof,traceable signed invoices",
    },
];

const outcomes = [
    {
        title: "Large enterprises which generates high volume invoices on regular basis",
    },
    {
        title: "Finance teams focused on speed and accuracy",
    },
    {
        title: "Any businesses using Microsoft Dynamics 365 Business Central",
    },
    {
        title: "Organizations willing to go paperless",
    },
];



const CaseStudy = () => {
    return (
        <div className="relative bg-[#000000] text-white overflow-hidden">
            <div
                className="absolute top-[2172px] left-[12px] w-[1439.39px] h-[3100.22px] rounded-full rotate-[-34.06deg]
                            bg-[radial-gradient(circle_at_center,#0033FF82,transparent_45%)] blur-[180px] pointer-events-none"/>
            {/* ================= HERO SECTION ================= */}
            <section
                className=" relative w-full min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[90vh] overflow-hidden">
                <img
                    src="/images/casestudy.png"
                    className=" absolute inset-0 w-full h-full z-20 object-contain sm:object-cover bg-black" alt="Hero Background" />
                <div className="absolute inset-0 z-10" />
                <div className="relative">
                    <Navbar transparent />
                </div>
            </section>

            <div className="usecase-wrapper">
                <div className="relative bg-[#10121a] p-10 text-center">
                    <h1 className="md:text-5xl text-2xl font-bold mb-10">
                        Use Case: Case Study: Automate Invoice signing in Microsoft Dynamics 365 Business Central with SignSecure’s Digital Signature API
                    </h1>

                    <p className="md:text-[26px] text-xl font-bold mb-4">
                        Introduction: Transform Invoice Workflows with a Digital Signature API
                    </p>

                    <p className="max-w-5xl mx-auto text-xl font-normal text-[#D7D7D7]">
                        Since digital businesses are changing fast, it is no longer practical to manage invoice signatures manually in Microsoft Dynamics 365 Business Central. To solve this, SignSecure developed a Digital Signature API that enables real-time, secure, and compliant document signing—fully integrated with Business Central.
                    </p>
                </div>
            </div>

            {/* ================= SECTION 1 ================= */}
            <div className="rounded-4xl px-4 sm:px-8 md:px-16 lg:px-28 bg-[linear-gradient(180deg,rgba(0,0,0,0.38)_0%,rgba(102,102,102,0)_100%)]">
                <section className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
                    <div className="absolute inset-0 -right-28 bg-[radial-gradient(circle_at_100%_30%,#0077FFAD,transparent_20%)] hidden md:block"></div>

                    {/* LEFT TEXT */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                            Signing Invoices Manually Takes a Lot of Time for Finance Teams
                        </h2>

                        <p className="mb-4 text-xl sm:text-2xl lg:text-4xl font-normal">
                            Companies that use traditional invoice signing methods deal with:
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 lg:gap-14 mt-8 lg:mt-12">
                            {/* ICONS */}
                            <div className="flex sm:flex-col  gap-24 lg:gap-28 justify-center">
                                <img src="/icons/Vector (3)stop.png" className="w-6 h-6 lg:w-8 lg:h-8" />
                                <img src="/icons/Vector (3)stop.png" className="w-6 h-6 lg:w-8 lg:h-8" />
                                <img src="/icons/Vector (3)stop.png" className="w-6 h-6 lg:w-8 lg:h-8" />
                            </div>

                            {/* TEXT */}
                            <div className="w-full sm:w-80 leading-7 sm:leading-8 lg:leading-9 text-lg sm:text-xl lg:text-3xl font-normal">
                                <p className="mb-4">
                                    Issues caused by the need to print, sign and scan documents
                                </p>
                                <p className="mb-4">
                                    It takes a long time to approve invoices and there is not much visibility
                                </p>
                                <p>
                                    There is no way to track or proof the information digitally
                                </p>
                            </div>
                        </div>

                        <p className="text-base sm:text-lg lg:text-[24px] font-normal mt-14">
                            They lead to inefficient operations and more risk, mainly for businesses that process a lot of invoices.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <img
                        src="/images/Mask group (1).png"
                        alt="case"
                        className="rounded-2xl shadow-lg w-full max-w-md mx-auto md:max-w-full"
                    />
                </section>

                {/* ================= SECTION 2 ================= */}
                <section className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center py-12 sm:py-16 lg:py-20">
                        {/* LEFT IMAGE */}
                        <img
                            src="/images/Mask group (2).png"
                            alt="solution"
                            className="rounded-2xl shadow-lg w-full max-w-md mx-auto md:max-w-full"
                        />

                        {/* RIGHT TEXT */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                                A Plug-and-Play Esign API for Microsoft Dynamics 365
                            </h2>

                            <p className="mb-4 text-xl sm:text-2xl lg:text-4xl font-normal">
                                SignSecure’s Esignature API brings automation, compliance,
                                and control to invoice processing:
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 lg:gap-14 mt-8 lg:mt-12">
                                {/* ICONS */}
                                <div className="flex sm:flex-col gap-13 md:gap-20 justify-center">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <img
                                            key={i}
                                            src="/icons/Vectortiick.png"
                                            className="w-6 h-6 lg:w-8 lg:h-8"
                                        />
                                    ))}
                                </div>

                                {/* TEXT */}
                                <div className="flex flex-col gap-6 lg:gap-10 w-full sm:w-80 text-base sm:text-lg lg:text-2xl font-normal leading-7 lg:leading-8">
                                    <p>Seamless integration with Microsoft Dynamics 365 Business Central</p>
                                    <p>Legally valid digital signatures (DSC PFX or USB token)</p>
                                    <p>Automatic invoice fetching, signing, and archiving</p>
                                    <p>Built-in audit trail and log tracking for accountability</p>
                                    <p>Visible signatures and tamper-proof PDF output</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-4">
                        <p className="text-base sm:text-lg lg:text-2xl font-normal">
                            By using this E signature API, businesses eliminate human error and <br className="hidden sm:block" />
                            dramatically speed up invoice workflows.
                        </p>
                    </div>
                </section>
            </div>


            {/* ================= FEATURES CARDS ================= */}
            <section className="relative max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
                <h2 className="text-xl sm:text-2xl lg:text-[26.22px] font-bold text-center mb-4 sm:mb-5">
                    How It Works: Use of a Digital Signature API to Invoices in bulk
                </h2>

                <p className="text-center text-base sm:text-lg lg:text-2xl font-normal mb-10 sm:mb-14 lg:mb-20">
                    SignSecure’s Esignature API brings automation, compliance, and control to invoice processing:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 place-items-center">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="
                    w-full max-w-[330px]
                    h-auto sm:h-[371px]
                    rounded-[19px] p-[2px]
                    bg-[linear-gradient(154.37deg,rgba(0,0,0,0)_-11.57%,rgba(255,255,255,0.62)_138.81%)]
                "
                        >
                            {/* INNER CARD */}
                            <div className="w-full h-full rounded-[17px] bg-[#050b1e] p-5 py-6 flex flex-col">
                                {/* ICON BOX */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 border border-white/20 rounded-xl flex items-center justify-center mb-3">
                                    <img
                                        src="/icons/Vector (3)arrow.png"
                                        alt="track icon"
                                        className="w-6 h-6 sm:w-8 sm:h-8"
                                    />
                                </div>

                                <h3 className="text-lg sm:text-xl lg:text-2xl leading-7 sm:leading-8 font-medium mb-3 text-white">
                                    Easy Integration with any Existing Systems
                                </h3>

                                <p className="text-sm sm:text-base lg:text-lg font-normal text-gray-300 leading-6 sm:leading-7">
                                    Use our API as a signing service in your micro service architecture.
                                    Simply upload a PDF File in Base64 format and receive a digitally
                                    signed document in the same Base64 format only.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= STATS SECTION ================= */}
            <section className="relative px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-10 sm:mb-14 lg:mb-20">
                    Key Benefits of Using a Digital Signature API
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t md:border-t-0">
                    {metrics.map((item, i) => (
                        <div
                            key={i}
                            className={`
                    p-4 sm:p-6 text-center
                    border-b sm:border-b-0
                    ${i % 2 === 0 ? "sm:border-r" : ""}
                    ${i < metrics.length - 1 ? "md:border-r" : ""}
                `}
                        >
                            <p className="text-white text-base sm:text-lg lg:text-2xl font-medium">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            {/* ================= FINAL CARDS ================= */}
            <section className="relative max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
                {/* BACKGROUND GRADIENTS */}
                <div className="absolute inset-0 -left-48 bg-[radial-gradient(circle_at_bottom_left,#0b2a6f,transparent_30%)] hidden sm:block"></div>
                <div className="absolute inset-0 -right-48 bg-[radial-gradient(circle_at_bottom_right,#0b2a6f,transparent_20%)] hidden sm:block"></div>

                {/* HEADING */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-3">
                    Who Should Use This E sign API?
                </h2>

                <p className="text-center text-base sm:text-lg lg:text-2xl font-normal text-[#D7D7D7] mb-10 sm:mb-16">
                    This solution is ideal for:
                </p>

                {/* CARDS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 place-items-center mb-8">
                    {outcomes.map((item, i) => (
                        <div
                            key={i}
                            className="
                    relative
                    w-full max-w-[280px]
                    h-auto sm:h-[160px]
                    rounded-[19px]
                    p-[2px]
                    bg-[linear-gradient(154.37deg,rgba(0,0,0,0)_-11.57%,rgba(255,255,255,0.62)_138.81%)]
                "
                        >
                            {/* INNER CARD */}
                            <div className="w-full h-full rounded-[17px] bg-[#050b1e] p-4 pt-8 flex items-start">
                                {/* NUMBER BADGE */}
                                <div className="absolute -top-6 left-5 p-[1px] rounded-full bg-[linear-gradient(332.23deg,#FFFFFF_-46.88%,#1D1D1D_105.05%)]">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[linear-gradient(148.7deg,#585858_-44.1%,#1A1A1A_87.4%)] text-white text-xs sm:text-sm font-medium">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                </div>

                                <h3 className="text-sm sm:text-base lg:text-lg font-medium text-white leading-snug">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section
                className="
        relative
        min-h-[220px] sm:min-h-[260px] lg:min-h-[280px]
        bg-[#00000061]
        backdrop-blur-[120px] sm:backdrop-blur-[180px] lg:backdrop-blur-[215.7px]
        flex flex-col items-center justify-center
        text-center
        px-4 sm:px-6 lg:px-10
        py-10 sm:py-14
        z-10
    "
            >
                <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-10">
                    Ready to Digitally Sign Invoices in Smart Way?
                </h1>

                <div className="text-gray-300 text-base sm:text-lg lg:text-2xl font-normal max-w-4xl leading-7 sm:leading-9 lg:leading-10">
                    <p>
                        Let’s show you how it works! Contact us for a live demo and discover how quickly
                    </p>
                    <p>
                        we can integrate SignSecure with your ERP/CRM system.
                    </p>
                </div>
            </section>


            <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
                {/* TOP RIGHT GRADIENT */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0077FFAD,transparent_40%)] opacity-70 sm:opacity-100"></div>

                {/* TOP LEFT GRADIENT */}
                <div className="absolute inset-0 -left-10 sm:-left-20 bg-[radial-gradient(circle_at_top_left,#0077FFAD,transparent_40%)] opacity-70 sm:opacity-100"></div>

                {/* BOTTOM RIGHT GRADIENT */}
                <div className="absolute inset-0 -bottom-10 sm:-bottom-5 bg-[radial-gradient(circle_at_bottom_right,#0077FFAD,transparent_40%)] opacity-70 sm:opacity-100"></div>

                {/* CONTENT */}
                <div className="relative z-10 px-4 sm:px-6 lg:px-8">
                    <ContactSection variant="casestudy" />
                </div>
            </section>

        </div>
    );
};

export default CaseStudy;
