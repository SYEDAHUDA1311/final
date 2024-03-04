import React, { useState } from "react";
import { MdClose } from "react-icons/md";

function PopUpDetails({ setOpen, detail }) {
  const [counter, setCounter] = useState(0);
  return (
    <div className="fixed bg-[#0000006b] top-0 bottom-0 left-0 right-0 flex justify-center items-center">
      <div className="bg-white w-[60%] h-[440px] rounded-3xl overflow-hidden pb-10">
        <div className="flex justify-end p-2">
          <MdClose
            onClick={() => setOpen(false)}
            size={25}
            className="cursor-pointer hover:text-red-500"
          />
        </div>
        <div className="h-[400px] flex gap-5">
          <div className=" h-full w-[50%] flex flex-col items-center">
            <div className="px-5 mb-5">
              <img
                src={detail.src}
                className="rounded-[25px] h-[300px]"
              />
            </div>
            <div className="text-[25px] px-5 font-semibold ">{detail.name}</div>
            <div className="text-[18px] px-5 font-medium">
              Price:{detail.price}$
            </div>
          </div>
          <div className="  w-[50%]">
            <div className=" h-[320px] overflow-y-auto">
              <div>{detail.description}</div>
              <div>{detail.description}</div>
              <div>{detail.description}</div>
            </div>
            <div className="flex justify-center gap-3 py-5">
              <button
                onClick={() => setCounter(counter != 0 ? counter - 1 : 0)}
                className="bg-red-400 rounded-2xl pb-1 text-white text-[20px] w-[70px]"
              >
                -
              </button>
              <p className="text-[20px]">{counter}</p>
              <button
                onClick={() => setCounter(counter + 1)}
                className="bg-red-400 rounded-2xl pb-1 text-white text-[20px] w-[70px]"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUpDetails;
