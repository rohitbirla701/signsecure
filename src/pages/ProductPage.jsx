import Navbar from "../components/layout/Navbar";
import PricingCard from "../components/common/PricingCard";
import FeatureCard from "../components/common/FeatureCard";
import ProfileCard from "../components/common/ProfileCard";
import StepSection from "../components/common/StepSection";
import FAQ from "../sections/FAQ"

const ProductPage = () => {
    return (
        <div className="bg-[#0D101F] text-white overflow-x-hidden">
            {/* HERO */}
            <section className="relative h-[700px] w-full ">
                {/* 🔹 ONE BACKGROUND IMAGE */}
                <img
                    src="/images/manC.png"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Hero Background"
                />

                {/* 🔹 OVERLAY */}
                <div className="absolute inset-0 bg-black/60" />

                {/* 🔹 NAVBAR ON IMAGE */}
                <div className="relative z-30">
                    <Navbar transparent />
                </div>

                {/* 🔹 CONTENT ON IMAGE */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 pt-24 sm:pt-28 lg:pt-0">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
                        Product
                    </h1>
                    <p className="text-white text-base sm:text-lg lg:text-2xl font-normal mt-4 max-w-4xl">
                        Sign documents online, generate agreements, negotiate contracts, and accept <br className="hidden sm:block" /> payments with legally-binding eSignatures.
                    </p>
                </div>
            </section>

            {/* PRODUCT DETAIL */}
            <section className="max-w-7xl mx-auto py-20 px-5">
                <div className="flex justify-center items-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-10">
                        Product
                    </h2>
                </div>

                <img src="/images/Rectangle347Sketch.png" className="mx-auto max-w-full h-auto mb-16 px-5" />

                <div className="flex flex-col lg:flex-row justify-around px-5 gap-12">
                    <div className="max-w-3xl">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                            Bulk PDF Signer (Windows Based) : <br /> Digitally Sign Unlimited PDFs on PC
                        </h3>

                        <p className="text-[#D3D3D3] text-base sm:text-lg font-normal py-6 leading-relaxed">
                            With the transition to the online world, there is an overwhelming need for secure and reliable methods of signing documents. The traditional methods, which often require printing, signing, scanning, and emailing, can be tedious as well as time-consuming. Luckily for us, technology has offered us much easier ways of doing this, such as digital signatures.<br />
                            Whether you are a business person, a freelancer, or someone who has a lot of important documents to work with, you must understand that being able to digitally sign documents on your Windows PC can ease the process and help you work efficiently. Today, we will look at what a digital signature is, the advantages of using a Windows based bulk PDF Doc signer, as well as how this digital signature solution can transform the management of your documents.
                        </p>

                        <h3 className="mt-6 font-bold text-2xl sm:text-3xl lg:text-4xl">
                            What is a PDF Signer Software?
                        </h3>

                        <p className="text-[#D3D3D3] text-base sm:text-lg font-normal py-6 leading-relaxed">
                            A Windows Bulk PDF Documents Signer is a Windows software application that allows users to sign many PDFs at the same time. It makes the task of applying digital signatures on stacks of PDFs easier and faster and is especially suited to people or businesses that have a lot of paperwork.<br />
                            This kind of solution guarantees safety and effectiveness as it meets the requirements of electronic signatures with less time and energy used in the process. It is especially helpful for the companies who have to deal with contracts or invoices that need to be signed in bulk clinic letterhead requests.
                        </p>
                    </div>

                    <PricingCard />
                </div>
            </section>

            {/* FEATURES */}
            <section className="max-w-7xl mx-auto px-5">
                <div className="flex justify-center items-center">
                    <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl mb-14 text-center">
                        Key Features of a PDF Signer Software
                    </h1>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-blue-600"></div>
                    <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-blue-600"></div>
                    <div className="hidden md:block absolute left-0 right-0 top-1/2 h-px bg-blue-600"></div>

                    <FeatureCard title="Template Mode" description="A Windows Bulk PDF Documents Signer is a Windows software application that allows users to sign many PDFs at the same time. It makes the task of applying digital signatures on stacks of PDFs easier and faster and is especially suited to people or businesses that have a lot of paperwork.This kind of solution guarantees safety and effectiveness as it meets the requirements of electronic signatures with less time and energy used in the process. It is especially helpful for the companies who have to deal with contracts or invoices that need to be signed in bulk clinic letterhead requests." />

                    <FeatureCard title="Text Mode" description="This option allows to Digitally Sign PDF documents above or below specific keywords. For example, if you need to sign multiple invoices that each contain the phrase Authorized Signatory simply copy this phrase from an invoice and paste it into the Text Mode option. The application will then digitally sign each invoice above or below that word." />

                    <FeatureCard title="Mail PDF After Signing" description="Enhance the visual appeal and informativeness of your signatures with our advanced PDF Signing feature, “Signature Appearance.” This feature includes a signature validity indicator, represented by a green checkmark, to confirm the authenticity of the signature. It also displays the date and time of signing, along with additional text options such as the reason for signing, the location of signing, and the details of the authorizing signatory." />

                    <FeatureCard title="Mail PDF After Signing" description="Easily share Digitally Signed PDF documents via Gmail using our integrated Gmail feature, allowing for single or bulk document distribution.Note – Please use Gmail account only to login." />

                    <FeatureCard title="Time Stamp / LTV Signing" description="Time Stamping is process of recording exact date & time of Digitally Sign PDF. With the help of Certifying Authorities like “DigiCert” we manage to do Time Stamping the PDF Signed Digitally by our Windows Signing PDF.Long Term Verification (LTV) is the feature which helps to maintain & prove the validity of signature/time stamp over extended period, often many years after PDF gets signed digitall" />

                    <FeatureCard title="PDF Password Protection" description="With This feature our Windows Bulk Digital Signature Software Software helps to export password protected PDF after signing digitally. With this option we can set password for single or bulk Digitally Signed PDF documents to enhance the security level of Confidential PDF Documents." />
                </div>
            </section>

            {/* PROFILE CARDS */}
            <section className="relative">
                <section className="relative py-14 overflow-hidden">

                    {/* GLOW SHADE */}
                    <div
                        className="
        absolute
        left-96 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[600px] h-[600px]
        bg-[radial-gradient(circle,#0057FF99_0%,transparent_65%)]
        blur-[140px]
        opacity-70
        z-30
        pointer-events-none
        hidden lg:block
      "
                    />

                    {/* CONTENT */}
                    <div className="">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
                            Benefits And Advantages
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 md:px-12 lg:px-24">
                            {[...Array(6)].map((_, i) => (
                                <ProfileCard key={i} />
                            ))}
                        </div>
                    </div>

                </section>


                <div className="relative py-10 sm:py-12 lg:py-13 px-6 sm:px-10 md:px-12 lg:px-24">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#0b2a6f,transparent_30%)]"></div>

                    <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">
                        Technical Specialties of a PDF DSC Signer
                    </h1>

                    <div className="text-base sm:text-lg lg:text-xl font-normal py-6 text-[#C5C5C5] grid gap-6">
                        <p className="leading-relaxed">
                            A PDF document signer is a type of software that runs on the Windows operating system, which allows users to electronically sign a PDF file, enabling very high levels of security, such as integrity of the document and proving authenticity, among other benefits. Also, the software supports the use of Public Key Infrastructure (PKI) in that it uses coding to ascertain the identity of the signatory through the use of digital certificates.
                        </p>
                        <p className="leading-relaxed">
                            Thus, it also employs PKI to make sure that all the modifications of the document are done before the signing of the document, making sure that the content is safe from any interference. Other features include the ability to batch sign documents, which allows for the signing of several documents at once, the inclusion of timestamping features so as to provide proof of signing during a certain period, and certificate authority (CA) compatibility to allow for following the set standard.
                        </p>
                        <p className="leading-relaxed">
                            These capabilities are very necessary for businesses and institutions that need to use e-signatures which are legally binding for documents such as contracts, agreements, and any sensitive correspondence.
                        </p>
                    </div>
                </div>
            </section>

            {/* STEPS */}
            <section className="relative rounded-t-4xl px-6 sm:px-10 md:px-12 lg:px-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0b2a6f,transparent_23%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#0b2a6f,transparent_23%)]"></div>

                <div className="relative z-20 mb-10 py-8 text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                        How to Digitally Sign PDF with PDF Signer Software
                    </h1>
                    <p className="text-base sm:text-lg lg:text-2xl font-normal">
                        SignSecure has a powerful Windows Based PDF DSC Signer which allows us to sign PDF Documents in bulk.<br />
                        We can sign unlimited PDF Digitally by following few easy steps which are given below :
                    </p>
                </div>

                {[...Array(9)].map((_, i) => (
                    <StepSection
                        key={i}
                        step={i + 1}
                        reverse={i % 2 !== 0}
                    />
                ))}
            </section>

            {/* CONCLUSION */}
            <section className="bg-[#0A49E8] py-14 sm:py-16 lg:py-20 px-5 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold">Conclusion</h2>

                <div
                    className="
            font-satoshi
            text-base sm:text-[18px]
            font-normal
            leading-6
            text-center
            mt-8
            space-y-3
        "
                >
                    <p> When you start signing PDF with DSC on your Windows PC, you not only boost your productivity.</p>
                    <p>You also show that you are an individual or an organization that is modern, efficient, and cares about security.
                        So what are you waiting for? </p>
                    <p>Start looking for the software meant for digital signatures and begin the journey
                        of changing document management systems for good.</p>
                </div>
            </section>

            {/* LICENSE */}
            <section className="border text-[#FFFFFF] rounded-2xl text-center my-10 sm:my-12 lg:my-13 px-5 py-8 mx-6 sm:mx-10 md:mx-12 lg:mx-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0b2a6f,transparent_23%)]"></div>

                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                    License Information
                </h2>

                <ul className="grid grid-cols-1 md:grid-cols-3 text-base sm:text-lg xl:text-xl font-medium text-center items-center gap-y-6">
                    <li className="text-xl">?</li>
                    <li className="text-xl">?</li>
                    <li className="text-xl">?</li>

                    <li className="font-medium">Single User License</li>
                    <li className="font-medium">Valid for all minor <br /> and major updates</li>
                    <li className="font-medium">Resetting your license</li>
                </ul>

                <p className="mt-8 cursor-pointer text-sm sm:text-md font-normal">
                    View full license terms
                </p>
            </section>

            <section className="py-8">
                <FAQ variant="product" />
            </section>
        </div>
    );
};

export default ProductPage;















// import Navbar from "../components/layout/Navbar";
// import PricingCard from "../components/common/PricingCard";
// import FeatureCard from "../components/common/FeatureCard";
// import ProfileCard from "../components/common/ProfileCard";
// import StepSection from "../components/common/StepSection";
// import FAQ from "../sections/FAQ"

// const ProductPage = () => {
//     return (
//         <div className="bg-[#0D101F] text-white">
//             {/* HERO */}
//             <section className="relative h-[697px]">
//                 {/* 🔹 ONE BACKGROUND IMAGE */}
//                 <img
//                     src="/images/manC.png"
//                     className="absolute  w-full h-full object-cover"
//                     alt="Hero Background"
//                 />

//                 {/* 🔹 OVERLAY */}
//                 <div className="absolute inset-0 bg-black/60" />

//                 {/* 🔹 NAVBAR ON IMAGE */}
//                 <div className="relative z-30">
//                     <Navbar transparent />
//                 </div>

//                 {/* 🔹 CONTENT ON IMAGE */}
//                 <div className="relative z-10  flex flex-col items-center justify-center h-full text-center px-5">
//                     <h1 className="text-7xl font-bold">Product</h1>
//                     <p className="text-white text-2xl font-normal mt-4">
//                         Sign documents online, generate agreements, negotiate contracts, and accept <br /> payments with legally-binding eSignatures.
//                     </p>
//                 </div>
//             </section>


//             {/* PRODUCT DETAIL */}
//             <section className="max-w-7xl mx-auto py-20 px-5">
//                 <div className="flex justify-center items-center">
//                     <h2 className="text-6xl font-bold mb-10">Product</h2>
//                 </div>
//                 <img src="/images/Rectangle347Sketch.png" className="mx-auto h-full mb-16" />

//                 <div className="flex justify-around">
//                     <div className="w-200">
//                         <h3 className="text-4xl font-semibold">Bulk PDF Signer (Windows Based) : <br /> Digitally Sign Unlimited PDFs on PC</h3>
//                         <p className="text-[#D3D3D3] text-lg font-normal py-6">With the transition to the online world, there is an overwhelming need for secure and reliable methods of signing documents. The traditional methods, which often require printing, signing, scanning, and emailing, can be tedious as well as time-consuming. Luckily for us, technology has offered us much easier ways of doing this, such as digital signatures.<br />
//                             Whether you are a business person, a freelancer, or someone who has a lot of important documents to work with, you must understand that being able to digitally sign documents on your Windows PC can ease the process and help you work efficiently. Today, we will look at what a digital signature is, the advantages of using a Windows based bulk PDF Doc signer, as well as how this digital signature solution can transform the management of your documents.</p>
//                         <h3 className="mt-6 font-bold text-4xl">What is a PDF Signer Software?</h3>
//                         <p className="text-[#D3D3D3] text-lg font-normal py-6">A Windows Bulk PDF Documents Signer is a Windows software application that allows users to sign many PDFs at the same time. It makes the task of applying digital signatures on stacks of PDFs easier and faster and is especially suited to people or businesses that have a lot of paperwork.<br />
//                             This kind of solution guarantees safety and effectiveness as it meets the requirements of electronic signatures with less time and energy used in the process. It is especially helpful for the companies who have to deal with contracts or invoices that need to be signed in bulk clinic letterhead requests.
//                         </p>
//                     </div>

//                     <PricingCard />
//                 </div>
//             </section>

//             {/* FEATURES */}
//             <section className="max-w-7xl mx-auto mb-14 px-5">
//                 <div className="flex justify-center items-center">
//                     <h1 className="font-bold text-5xl mb-20">Key Features of a PDF Signer Software</h1>
//                 </div>
//                 <div className="relative grid grid-cols-1 md:grid-cols-3">

//                     {/* 🔵 VERTICAL LINES */}
//                     <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-blue-600"></div>
//                     <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-blue-600"></div>

//                     {/* 🔵 HORIZONTAL LINE */}
//                     <div className="hidden md:block absolute left-0 right-0 top-1/2 h-px bg-blue-600"></div>

//                     {/* CONTENT */}
//                     <FeatureCard title="Template Mode" description="A Windows Bulk PDF Documents Signer is a Windows software application that allows users to sign many PDFs at the same time. It makes the task of applying digital signatures on stacks of PDFs easier and faster and is especially suited to people or businesses that have a lot of paperwork.This kind of solution guarantees safety and effectiveness as it meets the requirements of electronic signatures with less time and energy used in the process. It is especially helpful for the companies who have to deal with contracts or invoices that need to be signed in bulk clinic letterhead requests." />

//                     <FeatureCard title="Text Mode" description="This option allows to Digitally Sign PDF documents above or below specific keywords. For example, if you need to sign multiple invoices that each contain the phrase Authorized Signatory simply copy this phrase from an invoice and paste it into the Text Mode option. The application will then digitally sign each invoice above or below that word." />

//                     <FeatureCard title="Mail PDF After Signing" description="Enhance the visual appeal and informativeness of your signatures with our advanced PDF Signing feature, “Signature Appearance.” This feature includes a signature validity indicator, represented by a green checkmark, to confirm the authenticity of the signature. It also displays the date and time of signing, along with additional text options such as the reason for signing, the location of signing, and the details of the authorizing signatory." />

//                     <FeatureCard title="Mail PDF After Signing" description="Easily share Digitally Signed PDF documents via Gmail using our integrated Gmail feature, allowing for single or bulk document distribution.Note – Please use Gmail account only to login." />

//                     <FeatureCard title="Time Stamp / LTV Signing" description="Time Stamping is process of recording exact date & time of Digitally Sign PDF. With the help of Certifying Authorities like “DigiCert” we manage to do Time Stamping the PDF Signed Digitally by our Windows Signing PDF.Long Term Verification (LTV) is the feature which helps to maintain & prove the validity of signature/time stamp over extended period, often many years after PDF gets signed digitall" />

//                     <FeatureCard title="PDF Password Protection" description="With This feature our Windows Bulk Digital Signature Software Software helps to export password protected PDF after signing digitally. With this option we can set password for single or bulk Digitally Signed PDF documents to enhance the security level of Confidential PDF Documents." />

//                 </div>
//             </section>



//             {/* PROFILE CARDS */}
//             <section className="">
//                 <div
//                     className="
//     absolute
//     w-[506px]
//     h-[507px]
//     left-64
//     top-[3776px]
//     bg-[radial-gradient(circle,#0077FFAD_0%,transparent_60%)]
//     blur-3xl
//     opacity-32
//     z-50
//     pointer-events-none
//   "
//                 ></div>

//                 <h2 className="text-5xl font-bold text-center mb-16">
//                     Benefits And Advantages
//                 </h2>

//                 <div className="grid md:grid-cols-3 px-24 gap-6">
//                     {[...Array(6)].map((_, i) => (
//                         <ProfileCard key={i} />
//                     ))}
//                 </div>

//                 <div className="relative py-13 px-24">
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#0b2a6f,transparent_30%)]"></div>
//                     <h1 className="font-bold text-4xl">Technical Specialties of a PDF DSC Signer</h1>
//                     <div className="text-xl font-normal py-8 text-[#C5C5C5] grid md:grid-cols-1 gap-6">
//                         <p className="leading-10">A PDF document signer is a type of software that runs on the Windows operating system, which allows users to electronically sign a PDF file, enabling very high levels of security, such as integrity of the document and proving authenticity, among other benefits. Also, the software supports the use of Public Key Infrastructure (PKI) in that it uses coding to ascertain the identity of the signatory through the use of digital certificates.</p>
//                         <p className="leading-11">Thus, it also employs PKI to make sure that all the modifications of the document are done before the signing of the document, making sure that the content is safe from any interference. Other features include the ability to batch sign documents, which allows for the signing of several documents at once, the inclusion of timestamping features so as to provide proof of signing during a certain period, and certificate authority (CA) compatibility to allow for following the set standard.</p>
//                         <p className="leading-10">These capabilities are very necessary for businesses and institutions that need to use e-signatures which are legally binding for documents such as contracts, agreements, and any sensitive correspondence.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* STEPS */}
//             <section className="relative rounded-t-4xl px-20">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0b2a6f,transparent_23%)]"></div>
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#0b2a6f,transparent_23%)]"></div>

//                 <div className="relative z-20 mb-10 items-center py-8 text-center">
//                     <h1 className="text-4xl font-bold mb-5">How to Digitally Sign PDF with PDF Signer Software</h1>
//                     <p className="text-2xl font-normal">SignSecure has a powerful Windows Based PDF DSC Signer which allows us to sign PDF Documents in bulk.<br />
//                         We can sign unlimited PDF Digitally by following few easy steps which are given below :</p>
//                 </div>
//                 {[...Array(9)].map((_, i) => (
//                     <StepSection
//                         key={i}
//                         step={i + 1}
//                         reverse={i % 2 !== 0}
//                     />
//                 ))}
//             </section>


//             {/* CONCLUSION */}
//             <section className=" bg-[#0A49E8] py-20 px-5 text-center">
//                 <h2 className="text-3xl font-bold">Conclusion</h2>
//                 <p
//                     className="
//     font-satoshi
//     text-[18px]
//     font-normal
//     leading-7
//     tracking-[-0.02em]
//     text-center
//     mt-4
//   "
//                 >
//                     <p> When you start signing PDF with DSC on your Windows PC, you not only boost your productivity.</p>
//                     <p>You also show that you are an individual or an organization that is modern, efficient, and cares about security.
//                         So what are you waiting for? </p> <p>Start looking for the software meant for digital signatures and begin the journey
//                             of changing document management systems for good.</p>
//                 </p>
//             </section>

//             {/* LICENSE */}
//             <section className="border text-[#FFFFFF] rounded-2xl items-center text-center my-13 px-5 py-8 h-72 mx-24">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0b2a6f,transparent_23%)]"></div>
//                 <h2 className="text-3xl text-center font-bold mb-6">
//                     License Information
//                 </h2>

//                 <ul className="grid grid-cols-3 text-xl font-medium text-center items-center gap-y-4">
//                     {/* ROW 1 (Icons / ?) */}
//                     <li className="text-xl">?</li>
//                     <li className="text-xl">?</li>
//                     <li className="text-xl">?</li>

//                     {/* ROW 2 (Text) */}
//                     <li className="font-medium">Single User License</li>
//                     <li className="font-medium">Valid for all minor <br />
//                         and major updates</li>
//                     <li className="font-medium">Resetting your license</li>
//                 </ul>
//                 <p className="mt-10 text-md font-normal">View full license terms</p>
//             </section>
//             <FAQ variant="product" />

//         </div>
//     );
// };

// export default ProductPage;
