import React from "react";

const ContactSection = ({ variant = "home" }) => {
    const isHome = variant === "home";

    return (
        <section
            id="Contact"
            className={`w-full relative z-60 ${
                isHome ? "bg-[#13172A] py-16 sm:py-20 lg:py-24 px-5" : "bg-transparent py-12 sm:py-16"
            }`}
        >
            <div className="
                max-w-6xl mx-auto
                rounded-2xl overflow-hidden shadow-lg
                grid grid-cols-1 md:grid-cols-5
            ">
                {/* LEFT SIDE (FORM) */}
                <div className="md:col-span-2 bg-blue-600 p-6 sm:p-8 lg:p-10 text-white">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                        Get in touch
                    </h2>

                    <p className="text-sm sm:text-base font-normal mb-6 sm:mb-8 leading-relaxed">
                        We'd love to hear from you. Fill out the form <br className="hidden sm:block" />
                        or contact us directly.
                    </p>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full bg-transparent px-2 py-3 border-b border-white/40 outline-none placeholder:text-white/70 text-sm sm:text-base"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-transparent px-2 py-3 border-b border-white/40 outline-none placeholder:text-white/70 text-sm sm:text-base"
                        />

                        <textarea
                            placeholder="Content"
                            rows="4"
                            className="w-full bg-transparent px-2 py-3 border-b border-white/40 outline-none placeholder:text-white/70 text-sm sm:text-base resize-none"
                        />

                        <button
                            type="submit"
                            className="mt-2 bg-[#9EC6FA] text-black cursor-pointer font-medium px-6 sm:px-7 py-2 rounded-lg hover:bg-white transition text-sm sm:text-base"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* RIGHT SIDE (INFO) */}
                <div className="md:col-span-3 bg-white p-6 sm:p-10 lg:p-14 flex flex-col gap-6 justify-between">
                    {/* MAP IMAGE */}
                    <img
                        src="/images/Maps.png"
                        alt="Map"
                        className="rounded-xl w-full max-h-48 sm:max-h-56 object-cover"
                    />

                    {/* CONTACT INFO */}
                    <div className="space-y-3 text-sm sm:text-md text-black">
                        <p className="flex items-center gap-3">
                            <img
                                src="/images/Phone Icon.png"
                                alt="phone"
                                className="w-4 h-4"
                            />
                            Call us: +91 98765 43210
                        </p>

                        <p className="flex items-center gap-3">
                            <img
                                src="/images/Email Icon.png"
                                alt="email"
                                className="w-4 h-4"
                            />
                            Email: support@example.com
                        </p>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-4 sm:gap-5">
                        <img src="/images/Instagram.png" alt="instagram" className="w-5 h-5 cursor-pointer" />
                        <img src="/images/Twitter.png" alt="twitter" className="w-5 h-5 cursor-pointer" />
                        <img src="/images/FacebookT.png" alt="facebook" className="w-5 h-5 cursor-pointer" />
                        <img src="/images/Youtubet.png" alt="youtube" className="w-5 h-5 cursor-pointer" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
