import CardItem from "../components/common/CardItem";
import useAccordion from "../hooks/useAccordion";

const EsignatureAdvantage = () => {
    const { handleClick, isOpen } = useAccordion("01");

    return (
        <section className="relative bg-[#FFFFFF] dark:bg-black/10 backdrop-blur-md ">
            <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_top_right,#0077FFAD,transparent_30%)]"></div>
            <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_bottom_right,#0077FFAD,transparent_30%)]"></div>
            <div
                className="p-4 md:p-0 md:px-0 sm:pr-6 lg:pr-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="
  dark:bg-linear-to-r from-[#081d49] via-black to-black
  rounded-4xl
  p-6 sm:p-8 lg:p-13
  pb-12 sm:pb-16 lg:pb-28
  shadow-xl
  bg-[#3687CC]
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
                    <button className="relative dark:bg-blue-600 bg-[#195A92] cursor-pointer dark:hover:bg-blue-500 hover:bg-blue-950  transition text-white px-5 py-2 rounded-full text-sm font-medium">
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
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        open={isOpen("01")}
                        onClick={() => handleClick("01")}
                    />

                    <CardItem
                        no="02"
                        title="Sign from anywhere"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        open={isOpen("02")}
                        onClick={() => handleClick("02")}
                    />

                    <CardItem
                        no="03"
                        title="Secure and compliant"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        open={isOpen("03")}
                        onClick={() => handleClick("03")}
                    />

                    <CardItem
                        no="04"
                        title="Track documents in real time"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        open={isOpen("04")}
                        onClick={() => handleClick("04")}
                    />
                </div>
            </div>
        </section>
    );
};

export default EsignatureAdvantage;









// h w
// import CardItem from "../components/common/CardItem";
// import useAccordion from "../hooks/useAccordion";

// const EsignatureAdvantage = () => {
//     const { handleClick, isOpen } = useAccordion("01");

//     return (
//         <section className="relative h-[710px] bg-[#FFFFFF] dark:bg-black/10 backdrop-blur-md ">
//             <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_top_right,#0077FFAD,transparent_30%)]"></div>
//             <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_bottom_right,#0077FFAD,transparent_30%)]"></div>
//             <div
//                 className="p-4 md:p-0 md:px-0 sm:pr-6 lg:pr-10 grid grid-cols-2 gap-12 lg:gap-16">
//                 <div className="absolute
//   dark:bg-linear-to-r from-[#081d49] via-black to-black
//   rounded-4xl
//   -left-24
//   top-0
//   w-[936px]
//   h-[710px]
//   p-6 sm:p-8 lg:p-13
//   pb-12 sm:pb-16 lg:pb-28
//   shadow-xl
//   bg-[#3687CC]
// ">
//                     <div className="relative left-40 text-3xl sm:text-5xl font-bold text-white leading-16 mb-8">
//                     <h2>
//                         The only eSignature solution <br />
//                         that offers unlimited users <br />
//                         with an unbeatable ROI
//                     </h2>
//                     </div>
//                     <p className="relative left-40 text-white mb-14 font-normal leading-9 text-sm sm:text-2xl">
//                         Lorem ipsum is simply dummy text of the printing <br className="hidden sm:block" />
//                         and typesetting industry. Lorem ipsum has been <br className="hidden sm:block" />
//                         the industry's standard dummy text ever since the <br className="hidden sm:block" />
//                         1500s.when an unknown printer took a galley
//                     </p>
//                     <button className="relative left-40 dark:bg-[#0A49E8] bg-[#195A92] cursor-pointer dark:hover:bg-blue-500 hover:bg-blue-950  transition text-white px-4 py-4 gap-3 rounded-full text-lg font-medium">
//                         Request demo →
//                     </button>
//                 </div>

//                 <div
//                     className="absolute
//                     space-y-4
//                    left-7/12
//                     max-w-md
//                     top-44
//                     mx-auto md:mx-0">
//                     <CardItem
//                         no="01"
//                         title="Quick to start and easy to send"
//                         desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//                         open={isOpen("01")}
//                         onClick={() => handleClick("01")}
//                     />

//                     <CardItem
//                         no="02"
//                         title="Sign from anywhere"
//                         desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//                         open={isOpen("02")}
//                         onClick={() => handleClick("02")}
//                     />

//                     <CardItem
//                         no="03"
//                         title="Secure and compliant"
//                         desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//                         open={isOpen("03")}
//                         onClick={() => handleClick("03")}
//                     />

//                     <CardItem
//                         no="04"
//                         title="Track documents in real time"
//                         desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//                         open={isOpen("04")}
//                         onClick={() => handleClick("04")}
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default EsignatureAdvantage;