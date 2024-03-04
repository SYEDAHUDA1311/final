import React, { useState } from "react";
import PopUpDetails from "./PopUpDetails";
import moisturizer from "../assets/img/moisturizer.jpg";
import hularonic from "../assets/img/hularonic acid.jpg";
import eyecream from "../assets/img/eyecream.jpg";
import face from "../assets/img/face cleanser.jpg";
import hair from "../assets/img/hair tonic.jpg";
import vitamin from "../assets/img/vitamin c.jpg";
import rose from "../assets/img/rose serum.jpg";
import essence from "../assets/img/face essence.jpg";

function ProductSection() {
  const products = [
    {
      id: 1,
      name: "Moisturizing Cream",
      description:
        "Indulge your skin with our luxurious Moisturizing Cream. Formulated with a blend of hydrating ingredients, including hyaluronic acid, shea butter, and vitamin E, this cream deeply nourishes and replenishes dry, thirsty skin. The rich, creamy texture absorbs quickly, leaving your skin soft, supple, and radiant. Say goodbye to dryness and hello to a dewy, glowing complexion that lasts all day.",
      price: 15.99,
      src: moisturizer,
    },
    {
      id: 2,
      name: "Anti-Aging Serum",
      description:
        "Turn back the hands of time with our revolutionary Anti-Aging Serum. Enriched with potent antioxidants, peptides, and botanical extracts, this serum targets multiple signs of aging to restore youthful vitality and radiance to your complexion. Fine lines, wrinkles, dark spots, and uneven texture are visibly diminished, leaving your skin smoother, firmer, and more luminous. Incorporate this serum into your daily skincare routine to achieve ageless beauty that lasts a lifetime.",
      price: 29.99,
      src: hularonic,
    },
    {
      id: 3,
      name: "Eyecream",
      description: "",
      price: 9.99,
      src: eyecream,
    },
    {
      id: 4,
      name: "Face Essence",
      description:
        "Face essences contain a higher concentration of active ingredients compared to some other skincare products. These ingredients may include antioxidants, hydrating agents, vitamins, and other beneficial compounds.",
      price: 12.5,
      src: essence,
    },
    {
      id: 5,
      name: "Vitamin C",
      description:
        "Vitamin C is a powerful antioxidant, meaning it helps protect cells from damage caused by free radicals. Free radicals are unstable molecules produced during normal cellular processes ",
      price: 4.99,
      src: vitamin,
    },
    {
      id: 6,
      name: "Facial Cleanser",
      description:
        "Transform your skincare routine with our Facial Cleanser. This gentle yet effective cleanser removes dirt, oil, and impurities without stripping the skin's natural moisture barrier. Formulated with soothing botanical extracts and antioxidants, it calms inflammation, prevents breakouts, and promotes a clear, radiant complexion. Suitable for all skin types, this cleanser leaves your skin feeling clean, refreshed, and revitalized after every use.",
      price: 8.99,
      src: face,
    },
    {
      id: 7,
      name: "Hair Tonic",
      description:
        "Hair tonics often contain nourishing ingredients such as vitamins, minerals, and herbal extracts. These components aim to provide essential nutrients to the scalp, which can contribute to healthier hair.",
      price: 19.99,
      src: hair,
    },

    {
      id: 9,
      name: "Rose Serum",
      description:
        "Derived from rose petals, it is known for its pleasant fragrance and potential skincare benefits. Rose oil is often praised for its antimicrobial, anti-inflammatory, and antioxidant properties.",
      price: 24.99,
      src: rose,
    },
  ];

  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState();
  function handleDetail(items) {
    setOpen(true);
    setDetail(items);
  }

  return (
  
    <div className="grid grid-cols-3 p-10 px-[20%] gap-8 bg-[#DD924C]">
      
      {products?.length > 0 &&
        products.map((items, index) => (
          <div
            onClick={() => {
              handleDetail(items);
            }}
            key={index}
            className="h-[250px]  hover:scale-105 duration-300 shadow-lg shadow-gray-500 rounded-[15px] p-3 flex items-end"
            style={{
              background: `url('${items.src}') no-repeat center center/cover`,
              // backgroundColor: 'red',
              // backgroundSize: "cover",
              // backgroundRepeat: "no-repeat",
              // backgroundPosition: "center",
            }}
          >
            <div className="bg-white px-5 py-3 rounded-lg w-full">
              {items.name}
            </div>
          </div>
        ))}
      {open == true && <PopUpDetails setOpen={setOpen} detail={detail} />}

      <>
      
      </>
    
    </div>
  );
}

export default ProductSection;
