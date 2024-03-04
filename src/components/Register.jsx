import React from "react";

function Register() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form className="bg-[#f7d4d4] p-5 py-10 shadow-xl border rounded-[15px] w-[50%]">
        <div className="text-[25px] font-semibold font-serif">
          Sign Up to MISOLO
        </div>
        <div className="flex flex-col py-10 gap-y-2">
          <label>Username</label>
          <input className="py-2 px-2 rounded-lg border outline-none" />
          <label>Email</label>
          <input className="py-2 px-2 rounded-lg border outline-none" />
          <label>Password</label>
          <input className="py-2 px-2 rounded-lg border outline-none" />
          <label>Confirm Password</label>
          <input className="py-2 px-2 rounded-lg border outline-none" />
        </div>
        <div className="flex justify-center">
          <a href="/" className="bg-[#773232] px-6 py-2 rounded-xl text-white">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}

export default Register;
