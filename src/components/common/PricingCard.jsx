const PricingCard = () => {
    return (
        <div
            className="
                bg-[#0459BD]
                w-full sm:w-[387px] lg:w-96
                min-h-[520px] lg:h-[580px]
                rounded-3xl
                p-6 sm:p-8 lg:p-10
                mx-auto
            "
        >
            <h3 className="text-2xl sm:text-3xl lg:text-3xl font-medium">
                Windows PDF Signer Application
            </h3>

            <p className="text-white text-base sm:text-lg lg:text-xl font-normal mt-4">
                Powerful Digital Signature Software
            </p>

            <p className="mt-8 sm:mt-10 text-base sm:text-lg lg:text-xl font-normal">
                Starting from
            </p>

            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-1">
                ₹1500 <span className="text-sm">/year</span>
            </p>

            <ul className="mt-4 space-y-2 text-base sm:text-lg font-normal text-gray-300">
                <li className="flex items-center gap-3">
                    <img src="/images/Group 5.png" alt="tick" className="w-5 h-5 shrink-0" />
                    <span>Full-feature Windows app</span>
                </li>
                <li className="flex items-center gap-3">
                    <img src="/images/Group 5.png" alt="tick" className="w-5 h-5 shrink-0" />
                    <span>Offline capabilities</span>
                </li>
                <li className="flex items-center gap-3">
                    <img src="/images/Group 5.png" alt="tick" className="w-5 h-5 shrink-0" />
                    <span>Regular updates</span>
                </li>
                <li className="flex items-center gap-3">
                    <img src="/images/Group 5.png" alt="tick" className="w-5 h-5 shrink-0" />
                    <span>Priority</span>
                </li>
            </ul>

            <div className="flex flex-col font-normal text-lg sm:flex-row gap-3 mt-8 sm:mt-12">
                <button className="hover:bg-white hover:text-black cursor-pointer border px-6 sm:px-8 py-2 rounded-lg w-full sm:w-auto">
                    BuyNow
                </button>
                <button className="hover:bg-white hover:text-black cursor-pointer border px-6 sm:px-8 py-2 rounded-lg w-full sm:w-auto">
                    TryNow
                </button>
            </div>
        </div>
    );
};

export default PricingCard;
