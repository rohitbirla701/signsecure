const FAQItem = ({ title, desc, open, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={` relative z-60
        cursor-pointer
        rounded-lg
        px-5 py-10
        border
        transition-all duration-300
        bg-[#FFFFFF1A]
        ${open ? " shadow-blue-600/20 shadow-lg" : "border-white/10"}`}>
            <div className="flex gap-8 text-center items-center">
                <span className=" text-2xl text-white font-bold">
                    {open ? "−" : "+"}
                </span>
                <h4 className="md:text-lg text-md font-bold text-white">
                    {title}
                </h4>
            </div>

            {open && (
                <p className="md:text-md ml-12 text-sm text-[#EFEFEF] font-normal mt-3 leading-relaxed">
                    {desc}
                </p>
            )}
        </div>
    );
};

export default FAQItem;
