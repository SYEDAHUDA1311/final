import React, { useEffect, useState } from "react";

function About_Us() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const scroller = document.getElementById("Scroller");
    if (scroller) {
      scroller.scrollIntoView({ behavior: "smooth" });
    }
  });
  return (
    <div>
      <div className="relative min-h-screen bg-fixed bg-gradient-to-tr from-[#CC7722] to-[#CD7F32]">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
          <h1 className="text-5xl font-bold mb-4 text-center ">About Us</h1>
          <div className="w-20 h-1 bg-white mb-8"></div>
          <p className="text-[28px] max-w-2xl text-center mb-8">
            Welcome to MiSolo, where beauty meets science to bring you the best
            skincare solutions for healthy and radiant skin.
          </p>

          <button
            onClick={() => setShow(!show)}
            className="bg-white text-[#9A7B4F] font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-brown-100 transition duration-300"
          >
            {show ? "Show Less" : "Show More"}
          </button>
        </div>
        {show && (
          <div className="text-white relative font-thin">
            <div className="flex flex-col justify-center items-center gap-5 mt-10">
              <h1 className="text-[38px] font-bold text-center ">
                Our Mission
              </h1>
              <p className="text-center w-[70%] text-[22px]">
                At MiSolo, our mission is to revolutionize skincare by
                harnessing the power of nature and cutting-edge science. We
                believe everyone deserves access to high-quality skincare
                products that deliver visible results and promote skin health.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 mt-10">
              <h1 className="text-[38px] font-bold text-center ">Our Story</h1>
              <p className="text-center w-[70%] text-[22px]">
                MiSolo was founded in 2003 by Muhammad Syeda Huda with a
                passion for skincare and a vision to create products that are
                effective, safe, and sustainable. Drawing inspiration from
                nature and backed by scientific research, we embarked on a
                journey to develop formulations that address various skin
                concerns and cater to diverse skin types.
              </p>
            </div>
            <div
              id="Scroller"
              className="flex flex-col justify-center items-center gap-5 mt-10"
            >
              <h1 className="text-[38px] font-bold text-center ">
                Our Commitment to Quality
              </h1>
              <p className="text-center w-[70%] text-[22px]">
                We are committed to using only the finest ingredients sourced
                from trusted suppliers worldwide. Our products are free from
                harmful chemicals and undergo rigorous testing to ensure safety,
                efficacy, and compatibility with all skin types.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 mt-10">
              <h1 className="text-[38px] font-bold text-center ">
                Our Promise
              </h1>
              <p className="text-center w-[70%] text-[22px]">
                At MiSolo, we promise to prioritize your skin's health and
                well-being above all else. Whether you're looking to combat
                aging, hydrate dry skin, or achieve a clear complexion, we have
                a solution tailored to your needs.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 mt-10 pb-10">
              <h1 className="text-[38px] font-bold text-center ">
                Get in Touch
              </h1>
              <p className="text-center w-[70%] text-[22px]">
                Have questions or need personalized skincare recommendations?
                Don't hesitate to reach out to our friendly team! You can
                contact us via email, phone, or visit our store for a skincare
                consultation.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About_Us;
