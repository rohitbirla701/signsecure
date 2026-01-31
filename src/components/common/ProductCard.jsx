const ProductCard = () => {
    return (
        <div className="w-96 rounded-3xl bg-linear-to-b from-[#0c1228] to-[#060b1f] border border-white/10 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/20
    ">
            <div className="mb-5">
                <img
                    src="/images/manC.png"
                    alt="product"
                    className="rounded-xl w-full object-cover"
                />
            </div>
            <div className="px-4 pb-5">
                <h3 className="text-white mb-4 font-semibold text-xl leading-snug">
                    Windows PDF <br /> Signer Software
                </h3>
                <p className="text-white text-sm mt-1">
                    Powerful Digital Signature Software
                </p>
                <button className="mt-16 cursor-pointer w-full py-2 rounded-full bg-linear-to-r from-blue-600 to-blue-500 text-white text-sm font-medium hover:from-blue-500 hover:to-blue-400">
                    Try for free
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
