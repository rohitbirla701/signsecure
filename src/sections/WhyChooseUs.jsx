import React from "react";

const WhyChooseUs = ({ variant = "home" }) => {
    const isHome = variant === "home";

    return (
        <section
            className={`relative overflow-hidden text-white ${isHome ? "bg-[#0D101F] py-16 sm:py-20" : "py-16 sm:py-20"
                }`}
        >
            {/* 🔵 GRADIENT SHADES – ONLY HOME */}
            {isHome && (
                <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0b2a6f,transparent_25%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0077FFAD,transparent_30%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0b2a6f,transparent_25%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#0b2a6f,transparent_20%)]"></div>
                </>
            )}

            {/* CONTENT */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-center">
                    Why Choose Us
                </h2>

                <p className="text-center font-normal mb-12 sm:mb-16 mt-3 text-white text-sm sm:text-base">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 sm:gap-y-16 gap-x-12 sm:gap-x-20">

                    {/* GRID LINES */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-gray-950/70 via-white to-gray-950/70"></div>
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-linear-to-b from-gray-950/70 via-white to-gray-950/70"></div>

                    <div className="px-2 sm:px-6 text-center md:text-left">
                        <h4 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-2">
                            Free 7-day trial.
                        </h4>
                        <p className="text-sm sm:text-base lg:text-lg">
                            Choose the plan you need <br className="hidden sm:block" />
                            and try it risk-free.
                        </p>
                    </div>

                    <div className="px-2 sm:px-6 text-center md:text-left">
                        <h4 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-2">
                            Honest pricing <br className="hidden sm:block" /> for full-featured plans.
                        </h4>
                        <p className="text-sm sm:text-base lg:text-lg">
                            Lorem ipsum is simply dummy text of the <br className="hidden sm:block" />
                            printing and typesetting industry.
                        </p>
                    </div>

                    <div className="px-2 sm:px-6 text-center md:text-left">
                        <h4 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-2">
                            Transparent billing.
                        </h4>
                        <p className="text-sm sm:text-base lg:text-lg">
                            No hidden costs, no surprises.
                        </p>
                    </div>

                    <div className="px-2 sm:px-6 text-center md:text-left">
                        <h4 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-2">
                            Enterprise-grade security.
                        </h4>
                        <p className="text-sm sm:text-base lg:text-lg">
                            Your data is protected with industry standards.
                        </p>
                    </div>
                </div>

                {/* BUTTON – ONLY HOME */}
                {isHome && (
                    <div className="text-center mt-12 sm:mt-16">
                        <button className="relative bg-blue-600 font-medium text-white px-6 py-3 rounded-full transition shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:shadow-[0_0_35px_rgba(59,130,246,0.9)] cursor-pointer">
                            Start Free Trial
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WhyChooseUs;
