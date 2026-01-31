import { useState } from "react";

const StepCard = ({ no, title, text }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="border p-4 rounded-lg cursor-pointer"
            onClick={() => setOpen(!open)}
        >
            <div className="flex gap-4">
                <span className="text-2xl font-bold">{no}</span>
                <h4 className="font-semibold">{title}</h4>
            </div>

            {open && (
                <p className="text-sm text-gray-600 mt-2">{text}</p>
            )}
        </div>
    );
};

export default StepCard;
