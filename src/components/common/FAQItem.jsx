const FAQItem = ({ title, desc, open, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`
        cursor-pointer
        rounded-xl
        px-5 py-4
        border
        transition-all duration-300
        bg-[#0b1224]
        ${open ? "border-blue-600 shadow-blue-600/20 shadow-lg" : "border-white/10"}
      `}
        >
            <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-white">
                    {title}
                </h4>

                <span className="text-xl text-white font-bold">
                    {open ? "−" : "+"}
                </span>
            </div>

            {open && (
                <p className="text-sm text-gray-500 font-normal mt-3 leading-relaxed">
                    {desc}
                </p>
            )}
        </div>
    );
};

export default FAQItem;
