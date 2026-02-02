import ProductCard from "../components/common/ProductCard";

const Products = () => {
    return (
        <section className="relative py-16 sm:py-20 bg-linear-to-br bg-black overflow-hidden">
            {/* BACKGROUND GLOWS */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0b2a6f,transparent_20%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0b2a6f,transparent_30%)]"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white">
                        Products
                    </h2>
                    <p className="text-gray-300 mt-3 text-2xl sm:text-base max-w-2xl mx-auto">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="flex justify-center">
                    <div
                        className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-2
                        gap-6
                        justify-items-center">
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
