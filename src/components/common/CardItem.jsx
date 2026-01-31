const CardItem = ({ no, title, desc, open, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="
        cursor-pointer
        rounded-xl
        border border-white/10
        bg-linear-to-r from-white/10 to-white/5
        px-5 py-4
        transition-all duration-300
        hover:bg-white/15
        relative"
        >
            {open && (
                <span
                    className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-12 border-t-transparent border-b-transparent border-r-gray-600" />
            )}

            <div className="flex gap-4 items-start">
                <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md mt-1">
                    {no}
                </span>
                <div>
                    <h4 className="text-white font-medium text-sm">
                        {title}
                    </h4>
                    {open && (
                        <p className="text-white text-xs font-normal mt-2 leading-relaxed">
                            {desc}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardItem;
