import React from 'react';

const Hero = () => {
    return (
        <section
            className="
        flex
        flex-col-reverse
        lg:flex-row
        items-center
        justify-between
        gap-12
        px-4 sm:px-6 lg:px-10
        py-16 sm:py-20">

            <div className="max-w-xl ml-5 md:ml-13 text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                    Electronic <br /> signature for your <br /> entire organization
                </h1>
                <p className="mb-6 text-sm sm:text-base text-gray-100">
                    Sign documents online, generate agreements,<br className="hidden sm:block" />
                    negotiate contracts, and accept payments with <br className="hidden sm:block" />
                    legally-binding eSignatures.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <input
                        className="
                        bg-gray-50
                        text-gray-500
                        px-4 py-2
                        w-full sm:w-64
                        rounded-full
                        focus:outline-none"
                        placeholder="Enter your email"/>
                    <button
                        className="
                        bg-blue-600
                        text-white
                        px-6
                        py-2
                        rounded-full
                        hover:bg-blue-700
                        transition
                        cursor-pointer">
                        Try for Free
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-auto flex justify-center">
                <img
                    src="/images/Mask group.png"
                    alt="hero"
                    className="max-w-xs sm:max-w-sm lg:max-w-xl"
                />
            </div>
        </section>
    );
};

export default Hero;
