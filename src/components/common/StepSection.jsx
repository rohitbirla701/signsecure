const StepSection = ({ step, reverse }) => {
    return (
        <div
            className={`grid md:grid-cols-2 gap-10 items-center pb-14 ${reverse ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* TEXT */}
            <div
                className={`${reverse
                        ? "md:order-2 md:pl-6 relative z-30"   // image left → text right → LEFT padding
                        : "md:order-1 md:pr-6 relative z-30"   // image right → text left → RIGHT padding
                    }`}
            >
                <span className="text-[#B5B5B5] font-bold text-sm">
                    STEP {step}
                </span>
                <h3 className="text-3xl font-bold">
                    Set A Signature Appearance {step}
                </h3>
                <p className="text-[#B5B5B5] font-normal text-2xl mt-3">
                    With this feature we can add some crucial details in signature appearance like Signature Validity, Sign Date & Time,
                    Signing Reason/Location, Authorized Signatory Name etc. Also we can edit Signature Height & Width & add images
                    in sign like manual signature, company logo, Company Stamp etc. It will definitely make signature appearance
                    more informative & effective.
                    {step}.
                </p>
            </div>

            {/* IMAGE */}
            <div
                className={`${reverse
                    ? "md:order-1 md:pr-6 relative z-30"   // image left → RIGHT padding
                    : "md:order-2 md:pl-6 relative z-30"   // image right → LEFT padding
                    }`}
            >
                <img
                    src="/images/Rectangle 348step.png"
                    alt={`Step ${step}`}
                    className=""
                />
            </div>
        </div>
    );
};

export default StepSection;
