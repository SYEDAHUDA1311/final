import React, { useState } from "react";

function Nav() {
  const [name, setName] = useState(0);
  return (
    <div className="flex justify-between items-center w-[100%] py-5 border-b px-10 bg-[#C19260]">
      <div className="text-white  font-bold">
       MISOLO
      </div>
      <div className="flex gap-x-5 font-medium">
        <a className="hover:text-[white]" href="/home">Home</a>
        <a className="hover:text-[white]" href="/top_products">Top Products</a>
        <a className="hover:text-[white]" href="/home">Contact Us</a>
        <a className="hover:text-[white]" href="/about_us">About Us</a>
      </div>
    </div>
  );
}

export default Nav;
