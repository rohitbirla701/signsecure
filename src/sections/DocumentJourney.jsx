const SimplifiedJourney = () => {
    return (
        <section className="relative overflow-hidden bg-[#050b1e] py-16 sm:py-20 lg:py-24">
            {/* BLUE SHADE (BOTTOM) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0b2a6f,transparent_30%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#0b2a6f,transparent_20%)]"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                        Simplified document journeys for small
                        <br />
                        teams and individuals
                    </h2>
                    <p className="text-gray-200 text-sm font-normal sm:text-base md:text-xl max-w-2xl mx-auto mt-3">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative z-10 flex justify-center">
                        <img
                            src="/images/manS.png"
                            alt="document journey"
                            className="
                rounded-2xl
                w-full
                max-w-md
                md:max-w-full
                h-auto
                shadow-lg"/></div>

                    <div className="text-center md:text-left">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                            Sign my own <br /> document
                        </h3>
                        <p className="text-gray-200 text-sm font-normal sm:text-base leading-relaxed">
                            Lorem ipsum dolor sit amet <br />
                            adipiscing elit consectetur adipiscing <br />
                            industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimplifiedJourney;
