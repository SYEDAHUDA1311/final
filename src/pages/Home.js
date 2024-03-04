import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import ProductSection from "../components/ProductSection";
import Contact_Us from "../components/Contact_Us";
import About_Us from "../components/About_Us";

export default function Home() {
  return <div>
    <Nav/>
    <Banner/>
<div className="bg-[#DD924C] text-white">
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
</div>

    <div className="  bg-[#DD924C] text-4xl flex  text-white  justify-center items-center ">Our Products</div>
    <ProductSection/>
    <About_Us/>
    <Contact_Us/>
    
    

  </div>;

}
