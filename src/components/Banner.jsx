import React from "react";

function Banner({ var1 }) {
  return (
    <div
      style={{
        backgroundImage: `url("/main.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[600px] relative bg-red-500 flex flex-col text-white justify-center items-center"
    >
      <div className="bg-[#00000071] absolute top-0 left-0 bottom-0 right-0"></div>
      <div className="text-[70px] font-bold relative ">MISOLO {var1}</div>
      <div className="text-[18px] text-center px-10 font-semibold relative">
      Misolo, our exquisite skincare brand, is dedicated to delivering an unparalleled experience in self-care and rejuvenation. Crafted with the finest natural ingredients and backed by advanced scientific research, our products are designed to nurture and enhance the skin's radiance.
      </div>
    </div>
  );
}

export default Banner;
