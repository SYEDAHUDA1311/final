import React, { useEffect, useState } from "react";

function Contact_Us() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const scroller = document.getElementById("Scroller");
    if (scroller) {
      scroller.scrollIntoView({ behavior: "smooth" });
    }
  });
  return (
    <div>
      <div className="relative min-h-screen bg-fixed bg-gradient-to-tr from-[#795C34] to-[#CD7F32]">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center pt-20 justify-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-center ">Contact Us</h1>
          <div className="w-20 h-1 bg-white mb-8"></div>
          <p className="text-[28px] max-w-2xl text-center mb-8">
            Got questions or need assistance? We're here to help! Feel free to
            reach out to us through any of the following channels:
          </p>
        </div>
        <div className="text-white relative font-thin">
          <div className="flex flex-col justify-center items-center gap-5 mt-10">
            <h1 className="text-[38px] font-bold text-center ">Details:</h1>
            <p className="text-center w-[70%] text-[22px]">
              General inquiries: info@misolo.com
              <br />
              Customer support: support@misolo.com
              <br />
              Phone: 0300-0011101
              <br />
              Customer service hotline: +1 (555) 123-4567
              <br />
              Business hours: Monday to Friday, 9:00 AM - 5:00 PM (EST)
              <br />
              Visit Us: MiSolo Headquarters 123 Skincare Street, Suite 101
              London, England, 121201
            </p>
          </div>
        </div>

        <div className="text-white relative font-thin flex flex-col items-center">
          <div className="flex flex-col justify-center items-center gap-5 mt-10">
            <h1 className="text-[38px] font-bold text-center ">
              Contact Form:
            </h1>
            <p className="text-center w-[70%] text-[22px]">
              Contact Form: Alternatively, you can fill out the form below, and
              we'll get back to you as soon as possible:
            </p>
          </div>
          <form className="flex flex-col w-[40%]">
            <label className="mt-6">Name:</label>
            <input
              className="py-2 rounded-xl px-3 bg-[#9A7B4F] placeholder:text-white from-[#9c217e] to-[#1207a8e3] border"
              placeholder="Write Name..."
            />
            <label className="mt-6">Email:</label>
            <input
              className="py-2 rounded-xl px-3 bg-[#9A7B4F] placeholder:text-white from-[#9c217e] to-[#1107a8] border"
              placeholder="Write Email..."
            />
            <label className="mt-6">Phone:</label>
            <input
              className="py-2 rounded-xl px-3  bg-[#9A7B4F] placeholder:text-white from-[#9c217e] to-[#1107a8] border"
              placeholder="Write Phone..."
            />
            <label className="mt-6">Gender:</label>
            <select
              className="py-2 rounded-xl px-3  bg-[#9A7B4F] placeholder:text-white from-[#9c217e] to-[#1107a8] border"
              placeholder="Write Name..."
            > 
              <option className="text-black">Male</option>
              <option className="text-black">Female</option>
              <option className="text-black">Other</option>
            </select>
            <label className="mt-6">Description:</label>
            <textarea
              className="py-2 rounded-xl px-3  bg-[#9A7B4F] placeholder:text-white from-[#9c217e] to-[#1107a8] border"
              placeholder="Write Description..."
            />
            <button className="bg-white text-[#9A7B4F]  mt-7 font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-100 transition duration-300">
              Submit
            </button>
          </form>
        </div>

        <div className="text-white relative font-thin">
          <div className="flex flex-col justify-center items-center gap-5 mt-10 pb-10">
            <h1 className="text-[38px] font-bold text-center ">
              Social Media:
            </h1>
            <p className="text-center w-[70%] text-[22px]">
              Connect with us on social media for the latest updates, skincare
              tips, and exclusive offers:
              <br />
              <br />
              Customer support: support@misolo.com
              <br />
              Facebook: Mi-Solo-Official
              <br />
              Instagram: @Mi-Solo-Official
              <br />
              Twitter: @Mi-Solo-Official
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_Us;
