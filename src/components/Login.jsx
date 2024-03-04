import React from "react";

function Login() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form className="bg-[#f7d4d4] p-5 py-10 shadow-xl border rounded-[15px] w-[50%]">
        <div className="text-[25px] font-semibold font-serif">
          Log In to MISOLO
        </div>
        <div className="flex flex-col py-10 gap-y-5">
          <label>Email</label>
          <input className="py-2 px-2 rounded-lg border outline-none" />
          <label>Password</label>
          <input className="py-2 px-2 rounded-lg border outline-none" />
        </div>
        <div className="flex justify-center">
          
          <a href="/home" className="bg-[#773232] px-6 py-2 rounded-xl text-white">
            Log In 
          
          </a>
          <a href="/register" className="bg-[#773232] px-6 py-2 rounded-xl text-white">
            Sign up
          
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
