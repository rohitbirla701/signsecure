import React from "react";

const FeatureCard = ({ title, description }) => {
    return (
        <div className="p-4">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-[#D3D3D3] text-md md:py-13 font-normal leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;
