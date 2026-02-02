import React from "react";

const ProfileCard = () => {
  return (
    <div
      className="
        my-10
        p-px
        rounded-2xl
        bg-[linear-gradient(149.87deg,#FFFFFF_8.82%,rgba(153,153,153,0)_130.49%)]
      "
    >
      <div className="relative bg-[#0D101F] rounded-2xl p-6 pt-14 text-center transition">

        {/* PROFILE IMAGE */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <div className="w-20 h-20 rounded-full border border-white/40 bg-white flex items-center justify-center">
            <img
              src="/images/Productivity.png"
              alt="Profile"
              className="w-[52px] h-[52px] object-contain"
            />
          </div>
        </div>

        {/* HEADING */}
        <h3 className="text-xl font-bold text-white">
          Efficiency
        </h3>

        {/* PARAGRAPH */}
        <p className="text-[#EAEAEA] font-normal px-4 text-sm leading-relaxed">
          This is an easier and more pleasant way to sign the document than the manual way of printing and signing it.
          This also means that printing, signing, and scanning on paper is non-existent.
          For example, a bulk digital signer allows you to complete the steps within a couple of minutes.
          This will not just cut back on the time spent on work but also reduce the time and waste of resources.
          Hence, it's helpful to minimize its wastage, especially in working places where the speed of operation is high.
        </p>

      </div>
    </div>
  );
};

export default ProfileCard;
