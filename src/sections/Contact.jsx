const ContactSection = () => {
    return (
        <section className="w-full py-24">
            <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 bg-blue-600 p-10 text-white">
                    <h2 className="text-4xl font-bold mb-4">
                        Get in touch
                    </h2>
                    <p className="text-sm text-white font-normal mb-8 leading-relaxed">
                        We'd love to hear from you. Fill out the form <br />
                        or contact us directly.
                    </p>
                    <form className="space-y-4 text-white">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-3  border-b text-white outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 border-b text-white outline-none"
                        />
                        <textarea
                            placeholder="Content"
                            rows="4"
                            className="w-full px-4 py-3 border-b text-white outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#9EC6FA] font-medium text-black px-7 py-1.5 cursor-pointer rounded-lg hover:bg-gray-100 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="md:col-span-3 bg-white p-14 flex flex-col justify-around">
                    <img
                        src="/images/Maps.png"
                        alt="contact"
                        className="rounded-xl  max-h-56 object-cover"
                    />
                    <div className="space-y-3 font-normal text-md text-black mb-3">
                        <p className="flex items-center gap-2">
                            <img src="/images/Phone Icon.png" alt="phone" className="w-4 h-4" />
                            Call us: +91 98765 43210
                        </p>

                        <p className="flex items-center gap-2">
                            <img src="/images/Email Icon.png" alt="email" className="w-4 h-4" />
                            Email: support@example.com
                        </p>
                    </div>
                    <div className="flex gap-4 text-xl">
                        <img src="/images/Instagram.png" alt="instagram" className="w-4 h-4" />
                        <img src="/images/Twitter.png" alt="twitter" className="w-4 h-4" />
                        <img src="/images/FacebookT.png" alt="facebook" className="w-4 h-4" />
                        <img src="/images/Youtubet.png" alt="youtube" className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
