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
                ? "bg-[#0000001A] py-24 bg-linear-to-br from-[#020617] via-[#050b1e] to-[#0b2a6f]"
                : "bg-transparent"
                }`}
        >
            <div
                className={`${isHome
                    ? "absolute top-10 left-1/2 -translate-x-1/2 w-[2507px] h-[1500px] border-t border-l border-r  rounded-t-full pointer-events-none bg-[#13172A]"
                    : ""
                    }`}
            />
            <div className="relative  max-w-6xl mx-auto px-10">
                <h2 className="md:text-5xl text-3xl font-bold text-white text-center mb-14">
                    Frequently Ask Questions
                </h2>
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${variant === "home" ? "mb-20" : ""
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                        <div>
                            <h3 className="text-4xl font-bold text-white mb-4">
                                Integrate eSignature <br />
                                with the apps and CRMs <br />
                                you already use
                            </h3>

                            <p className="text-md font-normal text-white leading-relaxed">
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
                absolute
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
                            <div className="relative grid grid-cols-3 gap-4">
                                {visibleLogos.map((logo, i) => (
                                    <div
                                        key={i}
                                        className="
                        bg-white
                        h-15
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        shadow-md
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
