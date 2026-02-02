import Testimonials from "../sections/Testimonials";
import ContactSection from "../sections/Contact";
import FAQSection from "../sections/FAQ";
import WhyChooseUs from "../sections/WhyChooseUs";

const cards = [
    {
        title: "Windows PDF Signer Application",
        subtitle: "Powerful Digital Signature Software",
        price: "₹1500",
        showPrice: true,
        buttonText: "Buy Now",
        buttonbg: "black",
        isFeatured: false,
        features: [
            "Full-featured Windows app", "Offline capabilities", "Regular updates", "Priority support",
        ],
    },
    {
        title: "PDF Signer API",
        subtitle: "Digitally Sign PDF In Your Application",
        showPrice: false,
        priceText: "Custom",
        buttonText: "Book Free Demo",
        buttonbg: "black",
        isFeatured: true,
        features: [
            "Restful API access", "Comprehensive documentation", "Developer support", "Custom integration",
        ],
    },
    {
        title: "PDF Signer Browser Extension",
        subtitle: "Advanced signing for large teams",
        showPrice: false,
        priceText: "Custom",
        buttonText: "Book Free Demo",
        buttonbg: "black",
        isFeatured: false,
        features: [
            "Easy installation", "Cross-platform support", "Browser Based functionality", "Regular updates",
        ],
    },

];



const AboutUs = () => {
    return (
        <div className="bg-[#090B15] text-white">

            {/* SECTION 1 – HERO */}
            <section className="relative h-full py-20 px-4  text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0077FF,transparent_30%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#0b2a6f,transparent_12%)]"></div>
                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-6">
                    Bulk Digital Signature Tool
                </h1>

                <p className="text-[#FFFFFF] font-normal text-2xl max-w-7xl mx-auto mb-6">
                    Pioneers in digital signature services, Sign Secure, has come up with a state-of-the-art Bulk Digital Signature Tool
                    that makes the signing of numerous PDF documents effortlessly easier. Our niche technologies enable the bulk PDF digital signature
                    and ease the signing of PDFs in bulk, making them effective and efficient.
                </p>

                <button className="relative bg-[#0A49E8] hover:bg-blue-900 transition mt-14 cursor-pointer z-20 px-6 py-3 rounded-full font-medium">
                    Learn More
                </button>
            </section>

            {/* SECTION 2 – PRICING / SOLUTIONS */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0b2a6f,transparent_20%)]"></div>
                <h2 className="text-2xl sm:text-5xl font-bold text-center mb-12">
                    Choose PDF Signer Solution According <br /> to Your Requirement
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card,) => (
                        <div
                            className={`rounded-2xl p-6 h-full flex flex-col transition ${card.isFeatured
                                ? "bg-[linear-gradient(165.66deg,#FFFFFF_-18%,#A8CEFF_136.03%)]"
                                : "bg-white"
                                }`}
                        >

                            <div
                                className="
                    rounded-2xl
                    p-6
                    h-full
                    flex flex-col
                    transition
                "
                            >
                                <h3 className="text-lg text-[#0F172A] font-medium mb-1">
                                    {card.title}
                                </h3>

                                <p className="text-[#000000] text-md font-normal mb-4">
                                    {card.subtitle}
                                </p>
                                {/* PRICE */}
                                {card.showPrice ? (
                                    <>
                                        <p className="text-md font-normal text-[#000000]">
                                            Starting from
                                        </p>
                                        <p className="text-3xl font-bold text-[#000000] mb-4">
                                            {card.price}{" "}
                                            <span className="text-sm font-normal">/ year</span>
                                        </p>
                                    </>
                                ) : (
                                    card.priceText && (
                                        <p className="text-3xl mt-10 font-bold text-[#000000] mb-4">
                                            {card.priceText}
                                        </p>
                                    )
                                )}


                                <ul className="text-md font-normal text-[#000000] space-y-2 mb-6">
                                    {card.features.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <img
                                                src="/images/Group 5.png"
                                                alt="check"
                                                className="w-4 h-4 mt-1"
                                            />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>


                                <button
                                    className={`relative z-10 cursor-pointer mt-auto py-2 rounded-lg font-medium transition ${card.buttonbg === "black"
                                        ? "bg-black hover:bg-gray-800 text-white"
                                        : "bg-blue-500 hover:bg-blue-600 text-white"
                                        }`}
                                >
                                    {card.buttonText}
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 3 – ABOUT US */}
            <section className="relative  overflow-hidden">
                <div className="relative min-h-[300px] sm:h-96 flex items-center justify-center text-center">
                    {/* BACKGROUND IMAGE */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-70"
                        style={{
                            backgroundImage: "url('/images/Rectangle%20360bg.png')",
                        }}
                    ></div>

                    {/* CONTENT */}
                    <div className="relative z-10 px-4 max-w-5xl">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
                            About Us
                        </h2>

                        <p className="text-white font-normal text-base sm:text-lg lg:text-2xl leading-relaxed">
                            At SignSecure, we specialize in providing efficient, scalable, and secure bulk PDF signing solutions which are designed to optimize document management & streamline the signing process for all size of businesses. Our advanced Bulk Digital Signing Solutions allows organizations to sign multiple PDF documents in one seamless operation, saving valuable time while ensuring the highest levels of security and compliance.
                        </p>
                    </div>
                </div>


                <div className="relative px-5 sm:px-10 lg:px-14 py-10 sm:py-14 text-gray-300">
                    {/* BACKGROUND SHADES */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0077FFAD,transparent_25%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0077FFAD,transparent_25%)]"></div>

                    <div className="relative max-w-6xl mx-auto space-y-6">
                        <p className="text-base sm:text-lg lg:text-2xl">
                            We offer customizable solutions which meets the unique needs of our clients, including:
                        </p>

                        <div className="space-y-4">
                            <p className="text-base sm:text-lg lg:text-2xl leading-relaxed">
                                <span className="text-blue-500 font-bold">
                                    Bulk PDF Signer App
                                </span>
                                : A powerful, Windows based application for bulk digital signing.
                            </p>

                            <p className="text-base sm:text-lg lg:text-2xl leading-relaxed">
                                <span className="text-blue-500 font-bold">
                                    Digital Signature API
                                </span>
                                : An integration ready solution which automates bulk document signing process with any existing software in any programming language.
                            </p>

                            <p className="text-base sm:text-lg lg:text-2xl leading-relaxed">
                                <span className="text-blue-500 font-bold">
                                    PDF Signer Browser Extension
                                </span>
                                : A user friendly tool to sign PDF online without requiring downloads.
                            </p>
                        </div>

                        <p className="text-base sm:text-lg lg:text-2xl leading-relaxed">
                            We recognize the challenges businesses face while signing large numbers of PDF Documents & provide suitable Document Signing Solution which allows businesses to sign Bulk PDF Documents with maintaining complete control over process.
                        </p>

                        <p className="text-base sm:text-lg lg:text-2xl leading-relaxed">
                            Our mission is to empower organizations by providing them a cost effective, automated & highly secure Bulk Document Signing Solutions across Finance, Legal, Healthcare, Real Estate and more.
                        </p>
                    </div>
                </div>


                {/* WhyChooseUs */}
                <section className="relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0077FFAD,transparent_25%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0077FFAD,transparent_30%)]"></div>
                    <WhyChooseUs variant="about" />
                    <div className=" items-center px-4 text-center leading-8 pb-13 text-2xl font-normal">
                        <p>Let Sign Secure make your business mobile and enhance how you sign PDF documents with our Digital <br /> Signature Tool and Bulky PDF Digital Signature services.</p>
                    </div>

                </section>
                <Testimonials showShade={false} />

                <section className="relative overflow-hidden
    bg-linear-to-br from-[#020617] via-[#050b1e] to-[#0b2a6f]
    py-24
">
                    <div
                        className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2
        w-[2507px]
        h-[2507px]
        border-t
        border-l
        border-r
        border-[#13172A]
        bg-[#13172A]
        rounded-t-full
        pointer-events-none
        "
                    />

                    {/* CONTENT */}
                    <section className="relative z-20 space-y-32">
                        <div className="absolute inset-0 -top-23 bg-[radial-gradient(circle_at_top_left,#0152FF,transparent_30%)]"></div>
                        <div className="absolute inset-0 -bottom-55 bg-[radial-gradient(circle_at_bottom_right,#0A49E8,transparent_30%)]"></div>
                        {/* <div className="absolute inset-0 top-36 bg-[radial-gradient(circle_at_top_right,#0A49E8,transparent_40%)]"></div> */}
                        {/* FAQ PART */}
                        <FAQSection variant="about" />
                        {/* CONTACT PART */}
                        <ContactSection variant="about" />
                    </section>
                </section>
            </section>
        </div>
    );
};

export default AboutUs;
