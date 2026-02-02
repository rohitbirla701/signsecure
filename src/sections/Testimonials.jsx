import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = ({ showShade = true }) => {
    return (
        <section className={`relative px-4 sm:px-8 lg:px-28 py-28 sm:py-32 lg:py-36 min-h-[80vh] overflow-hidden
            ${showShade ? "bg-[#00000061]" : "bg-[#00000061]"}
        `}>
            {showShade && (
                <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_25%,#0b2a6f,transparent_30%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,#0b2a6f,transparent_35%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_75%,#0b2a6f,transparent_45%)]"></div>
                </>
            )}
            <h2 className="relative text-3xl sm:text-5xl font-bold text-center mb-3 text-white">
                What Our Customers Say
            </h2>
            <p className="relative text-center font-normal text-white mb-10 text-sm sm:text-xl max-w-2xl mx-auto">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="relative">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_25%,#0b2a6f,transparent_25%)] opacity-70 z-10"></div>
                <Swiper
                    spaceBetween={16}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.1,
                        },
                        640: {
                            slidesPerView: 2.1,
                        },
                        1024: {
                            slidesPerView: 3.1,
                        },
                        1280: {
                            slidesPerView: 4.1,
                        },
                    }}
                >
                    {[1, 2, 3, 4, 5].map((i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white text-black h-full p-5 rounded-xl shadow-md flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1">
                                            <img src="/images/fullStar.png" className="w-6.5 h-6" alt="star" />
                                            <img src="/images/fullStar.png" className="w-6.5 h-6" alt="star" />
                                            <img src="/images/fullStar.png" className="w-6.5 h-6" alt="star" />
                                            <img src="/images/fullStar.png" className="w-6.5 h-6" alt="star" />
                                            <img src="/images/halfStar.png" className="w-6.5 h-6" alt="half star" />
                                        </div>
                                        <div className="text-xs font-light text-gray-500">
                                            2 days ago
                                        </div>
                                    </div>
                                    <h4 className="font-medium text-lg sm:text-xl mt-5 mb-2">
                                        Best on the market
                                    </h4>
                                    <p className="text-sm font-light sm:text-base text-gray-900 leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                                    </p>
                                </div>
                                <div className="flex gap-3 mt-6 items-center">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <img
                                            src="/images/Ellipse 2.png"
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">
                                            Ayush Singh
                                        </p>
                                        <p className="text-xs font-light text-gray-500">
                                            Director, DG Group
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
