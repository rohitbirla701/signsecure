import React from "react";
import Navbar from "../components/layout/Navbar";

const Hero = () => {
    return (
        <section
            className="
        relative
        overflow-hidden
        px-5 md:px-0
        pb-20 lg:pb-28

        /* LIGHT MODE */
        bg-[url('/images/lightmodehero.png')]
        bg-cover
        bg-center

        /* DARK MODE (DEFAULT) 
        dark:bg-none
        dark:bg-[#090B15]*/
      "
        >
            {/* DARK MODE GLOW */}
            <div
                className="
          absolute inset-0
          bg-[radial-gradient(circle_at_bottom_left,#0077FF,transparent_30%)]
          hidden dark:block
          pointer-events-none
        "
            />

            {/* NAVBAR */}
            <div className="relative z-30">
                <Navbar transparent />
            </div>

            {/* HERO CONTENT */}
            <div
                className="
          relative z-10
          flex
          flex-col-reverse
          lg:flex-row
          items-center
          justify-between
          gap-12
          pt-44
        "
            >
                {/* LEFT CONTENT */}
                <div className="max-w-2xl lg:pl-20 text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-16 mb-5 text-white">
                        Electronic <br />
                        signature for your <br />
                        entire organization
                    </h1>

                    <p className="text-sm max-w-md  sm:text-base lg:text-xl leading-7 mb-8 text-white">
                        Sign documents online, generate agreements,
                        negotiate contracts, and accept payments with
                        legally-binding eSignatures.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                        <input
                            className="w-full sm:w-64 px-6 py-3 rounded-full bg-white dark:bg-gray-50 text-gray-700 focus:outline-none"
                            placeholder="Enter your email"
                        />
                        <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                            Try for Free
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE – DARK MODE ONLY */}
                <div className="w-full lg:w-auto justify-center hidden dark:flex">
                    <img
                        src="/images/Mask group.png"
                        alt="hero"
                        className="max-w-[400px] sm:max-w-sm lg:max-w-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;













// import React from "react";

// const Hero = () => {
//     return (
//         <section
//             className="
//             relative
//             overflow-hidden
//             flex
//             flex-col-reverse
//             lg:flex-row
//             items-center
//             justify-between
//             gap-12
//             bg-[#090B15]
//             px-5 sm:px-8 lg:px-14
//             py-20 lg:py-28
//         "
//         >
//             {/* BACKGROUND GLOW */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0077FF,transparent_30%)]"></div>

//             {/* LEFT CONTENT */}
//             <div className="relative z-10 max-w-xl text-center lg:text-left">
//                 <h1 className="
//                     text-3xl
//                     sm:text-4xl
//                     lg:text-5xl
//                     xl:text-6xl
//                     font-bold
//                     text-white
//                     leading-tight
//                     mb-5
//                 ">
//                     Electronic <br />
//                     signature for your <br />
//                     entire organization
//                 </h1>

//                 <p className="
//                     text-gray-300
//                     text-sm
//                     sm:text-base
//                     lg:text-lg
//                     leading-relaxed
//                     mb-8
//                 ">
//                     Sign documents online, generate agreements,
//                     negotiate contracts, and accept payments with
//                     legally-binding eSignatures.
//                 </p>

//                 <div className="
//                     flex
//                     flex-col
//                     sm:flex-row
//                     gap-3
//                     justify-center
//                     lg:justify-start
//                 ">
//                     <input
//                         className="
//                         w-full
//                         sm:w-64
//                         px-6
//                         py-3
//                         rounded-full
//                         bg-gray-50
//                         text-gray-700
//                         focus:outline-none
//                     "
//                         placeholder="Enter your email"
//                     />
//                     <button
//                         className="
//                         px-6
//                         py-3
//                         rounded-full
//                         bg-blue-600
//                         text-white
//                         font-medium
//                         hover:bg-blue-700
//                         transition
//                         cursor-pointer
//                     "
//                     >
//                         Try for Free
//                     </button>
//                 </div>
//             </div>

//             {/* RIGHT IMAGE */}
//             <div className="relative z-10 w-full lg:w-auto flex justify-center">
//                 <img
//                     src="/images/Mask group.png"
//                     alt="hero"
//                     className="
//                         max-w-[400px]
//                         sm:max-w-sm
//                         lg:max-w-xl
//                     "
//                 />
//             </div>
//         </section>
//     );
// };

// export default Hero;
