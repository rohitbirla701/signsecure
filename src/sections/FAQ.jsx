import { useState } from "react";
import FAQItem from "../components/common/FAQItem";

const FAQSection = ({ variant = "home" }) => {
    const isHome = variant === "home";
    const [active, setActive] = useState(0);
    const [page, setPage] = useState(0);

    const faqs = [
        "How long until we deliver your first blog post?",
        "How do you ensure the quality of the content?",
        "How long does it take to see blog results?",
        "How long until we deliver your first blog post?",
        "How long until we deliver your first blog post?",
    ];

    const answer =
        "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.";
    const logos = [
        "/images/Amazon_logo.svg 1.png",
        "/images/pngimg.com - google_PNG19644 2.png",
        "/images/pngimg.com - google_PNG19644 2.png",
        "/images/pngimg.com - google_PNG19644 2.png",
        "/images/Microsoft_logo_(2012).svg 2.png",
        "/images/pngimg.com - google_PNG19644 2.png",
        "/images/Microsoft_logo_(2012).svg 2.png",
        "/images/pngimg.com - google_PNG19644 2.png",
        "/images/Amazon_logo.svg 1.png",
        "/images/Amazon_logo.svg 1.png",
        "/images/pngimg.com - google_PNG19644 2.png",
        "/images/pngimg.com - google_PNG19644 2.png",
    ];

    const ITEMS_PER_PAGE = 9;
    const totalPages = Math.ceil(logos.length / ITEMS_PER_PAGE);

    const visibleLogos = logos.slice(
        page * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    const handleNextLogos = () => {
        setPage((prev) => (prev + 1) % totalPages);
    };

    return (
        <section
            className={`relative overflow-hidden ${isHome
                ? ""
                : "bg-transparent"
                }`}
        >
            <div
                className={`${isHome
                    ? "absolute top-10 left-1/2 -translate-x-1/2 w-[2507px] h-[1500px] border-t border-l border-r border-[#A3D5FF]/25  rounded-t-full pointer-events-none bg-[#A3D5FF]/25  dark:bg-[#13172A] dark:border-[#13172A] backdrop-blur-none"
                    : ""
                    }`}
            />
            <div className="relative">
                <h2 className="md:text-5xl text-3xl pt-24 px-10 font-bold dark:text-white text-[#3687CC] text-center mb-14">
                    Frequently Ask Questions
                </h2>
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 px-7 lg:px-32 gap-10 ${variant === "home" ? "mb-20" : ""
                        }`}
                >

                    <div className="space-y-4">
                        {faqs.slice(0, 2).map((q, i) => (
                            <FAQItem
                                key={i}
                                title={q}
                                desc={answer}
                                open={active === i}
                                onClick={() => setActive(i)}
                            />
                        ))}
                    </div>

                    <div className="space-y-4">
                        {faqs.slice(2).map((q, i) => {
                            const index = i + 2;
                            return (
                                <FAQItem
                                    key={index}
                                    title={q}
                                    desc={answer}
                                    open={active === index}
                                    onClick={() => setActive(index)}
                                />
                            );
                        })}
                    </div>
                </div>
                {variant === "home" && (
                    <div className="relative grid grid-cols-1 md:grid-cols-2 py-14 lg:py-20 px-16 bg-white dark:bg-black/10 backdrop-blur-md gap-14 items-center">
                        <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_top_right,#0b2a6f,transparent_40%)]"></div>
                        <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_bottom_right,#0b2a6f,transparent_40%)]"></div>
                        <div className="w-full">
                            <h3 className="relative text-2xl md:text-5xl lg:leading-16 font-bold dark:text-white text-blue-600 mb-5">
                                Integrate eSignature <br />
                                with the apps and CRMs <br />
                                you already use
                            </h3>

                            <p className="text-md md:text-2xl font-normal text-[#6B6B6B] lg:leading-9 mb-10">
                                Lorem ipsum is simply dummy text of the printing <br />
                                and typesetting industry. Lorem ipsum has been <br />
                                the industry’s standard dummy text ever since the <br />
                                1500s, when an unknown printer took a galley.
                            </p>
                        </div>

                        <div className="relative">
                            {/* BLUE SHADE */}
                            <div
                                className="
                dark:absolute
                -top-10
                left-1/2
                -translate-x-1/2
                w-[320px]
                h-35
                bg-blue-600/30
                blur-[120px]
                rounded-full"
                            />

                            {/* LOGOS */}
                            <div className="relative grid grid-cols-3 gap-2 bottom-28 dark:bottom-14">
                                {visibleLogos.map((logo, i) => (
                                    <div
                                        key={i}
                                        className="
                        dark:bg-white
                        h-15
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        dark:shadow-md
                        transition
                        hover:shadow-blue-500/40"
                                    >
                                        <img
                                            src={logo}
                                            alt="logo"
                                            className="h-8.5 w-28 rounded-lg object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={handleNextLogos}
                                    className="absolute">
                                    <img
                                        src="/icons/Vector.png"
                                        alt="SignSecure Logo"
                                        className="w-7 h-4 cursor-pointer"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FAQSection;
