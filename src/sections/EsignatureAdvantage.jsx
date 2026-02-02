import CardItem from "../components/common/CardItem";
import useAccordion from "../hooks/useAccordion";

const EsignatureAdvantage = () => {
    const { handleClick, isOpen } = useAccordion("01");

    return (
        <section className="relative from-[#020617] via-[#050b1e] to-[#0b2a6f] ">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0077FFAD,transparent_30%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#0077FFAD,transparent_30%)]"></div>
            <div
                className="p-4 md:p-0 md:px-0 sm:pr-6 lg:pr-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="
  bg-linear-to-r from-[#081d49] via-[#00000075] to-[#00000075]
  rounded-4xl
  p-6 sm:p-8 lg:p-13
  pb-12 sm:pb-16 lg:pb-28
  shadow-xl
">

                    <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                        The only eSignature solution <br />
                        that offers unlimited users <br />
                        with an unbeatable ROI
                    </h2>
                    <p className="text-white mb-8 font-normal max-w-md leading-relaxed text-sm sm:text-base">
                        Lorem ipsum is simply dummy text of the printing <br className="hidden sm:block" />
                        and typesetting industry. Lorem ipsum has been <br className="hidden sm:block" />
                        the industry's standard dummy text ever since the <br className="hidden sm:block" />
                        1500s.
                    </p>
                    <button className="relative bg-blue-600 cursor-pointer hover:bg-blue-500  transition text-white px-5 py-2 rounded-full text-sm font-medium">
                        Request demo →
                    </button>
                </div>

                <div
                    className="
                    space-y-4
                    w-full
                    max-w-md
                    mx-auto md:mx-0">
                    <CardItem
                        no="01"
                        title="Quick to start and easy to send"
                        desc="Lorem ipsum dolor sit amet consectetur adipiscing elit"
                        open={isOpen("01")}
                        onClick={() => handleClick("01")}
                    />

                    <CardItem
                        no="02"
                        title="Sign from anywhere"
                        desc="Lorem ipsum dolor sit amet consectetur adipiscing elit"
                        open={isOpen("02")}
                        onClick={() => handleClick("02")}
                    />

                    <CardItem
                        no="03"
                        title="Secure and compliant"
                        desc="Lorem ipsum dolor sit amet consectetur adipiscing elit"
                        open={isOpen("03")}
                        onClick={() => handleClick("03")}
                    />

                    <CardItem
                        no="04"
                        title="Track documents in real time"
                        desc="Lorem ipsum dolor sit amet consectetur adipiscing elit"
                        open={isOpen("04")}
                        onClick={() => handleClick("04")}
                    />
                </div>
            </div>
        </section>
    );
};

export default EsignatureAdvantage;