import ProductCard from "../components/common/ProductCard";

const Products = () => {
    return (
        <section
            className="
            relative
            py-16 sm:py-20
            bg-[#F7F9FC]
            dark:bg-black/40 backdrop-blur-md
            overflow-hidden
            transition-colors duration-300
            "
        >
            {/* BACKGROUND GLOWS (ONLY DARK MODE) */}
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_top_left,#0b2a6f,transparent_20%)]"></div>
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_top_right,#0b2a6f,transparent_30%)]"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="text-center mb-16">
                    <h2
                        className="
                        text-3xl sm:text-5xl font-bold
                        text-[#3687CC]
                        dark:text-white
                        transition-colors duration-300
                        "
                    >
                        Products
                    </h2>

                    <p
                        className="
                        mt-5 text-lg sm:text-2xl
                        text-gray-700
                        dark:text-gray-300
                        transition-colors duration-300
                        "
                    >
                        Lorem ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                {/* 🔥 VISUAL CONFIRMATION BOX (optional, remove later) */}
                {/* <div className="mb-10 p-6 rounded-xl bg-white bg-black text-black dark:text-white transition-colors">
                    Dark / Light Mode Working ✅
                </div>

                <div className="p-10 bg-red-500 dark:bg-green-500 text-white">
  DARK VARIANT TEST
</div> */}

                <div className="flex justify-center">
                    <div
                        className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        dark:lg:grid-cols-2
                        lg:grid-cols-4
                        gap-6
                        justify-items-center
                        "
                    >
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;










// import ProductCard from "../components/common/ProductCard";

// const Products = () => {
//     return (
//         <section
//             className="
//             relative
//             py-16 sm:py-20
//             bg-[#F7F9FC]
//             dark:bg-black
//             overflow-hidden
//             transition-colors duration-300
//             "
//         >
//             {/* BACKGROUND GLOWS (ONLY DARK MODE) */}
//             <div className="absolute inset-0 hidden dark:block dark:bg-[radial-gradient(circle_at_top_left,#0b2a6f,transparent_20%)]"></div>
//             <div className="absolute inset-0 hidden dark:block dark:bg-[radial-gradient(circle_at_top_right,#0b2a6f,transparent_30%)]"></div>

//             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
//                 <div className="text-center mb-16">
//                     <h2
//                         className="
//                         text-3xl sm:text-5xl font-bold
//                         text-[#3687CC]
//                         dark:text-white
//                         transition-colors
//                         "
//                     >
//                         Products
//                     </h2>

//                     <p
//                         className="
//                         mt-5 text-lg sm:text-2xl
//                         text-gray-600
//                         dark:text-gray-300
//                         transition-colors
//                         "
//                     >
//                         Lorem ipsum is simply dummy text of the printing and typesetting industry.
//                     </p>
//                 </div>

//                 <div className="flex justify-center">
//                     <div
//                         className="
//                         grid
//                         grid-cols-1
//                         sm:grid-cols-2
//                         lg:grid-cols-4
//                         gap-6
//                         justify-items-center
//                         "
//                     >
//                         <ProductCard />
//                         <ProductCard />
//                         <ProductCard />
//                         <ProductCard />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Products;
