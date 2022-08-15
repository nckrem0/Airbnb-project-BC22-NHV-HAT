import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const AddMoreGuests = () => {
  const [addMoreGuests, setMoreGuests] = useState(false);

  const handleMoreGuests = () => {
    setMoreGuests(!addMoreGuests);
  };
  console.log("addMoreGuests", addMoreGuests);

  return (
    <>
      <div
        className=" mr-4 h-16 py-2 px-2 items-center flex   "
        onClick={handleMoreGuests}
      >
        {addMoreGuests && (
          <div className="absolute bottom-[3rem] right-[38rem] box mr-4 py-3 px-8 bg-gray-200 rounded-[32px] ">
            <div className="flex items-center my-3">
              <div>
                <div className="my-1">Người Lớn</div>
                <div className="text-gray-400 text-sm">Từ 13 tuổi trở đi</div>
              </div>
              <div className="flex items-center ml-[112px] text-gray-300">
                <button className="text-[30px] mx-3">
                  <span className="hover:text-red-400">
                    <AiOutlineMinusCircle />
                  </span>
                </button>
                <div>1</div>
                <button className="text-[30px] mx-3">
                  <span className="hover:text-red-400">
                    <AiOutlinePlusCircle />
                  </span>
                </button>
              </div>
            </div>
            <hr />
            <div className="flex items-center my-3 ">
              <div>
                <div className=" my-1">Trẻ em</div>
                <div className="text-gray-400 text-sm">Độ tuổi 2 - 12</div>
              </div>
              <div className="flex items-center ml-[132px] text-gray-300">
                <button className="text-[30px] mx-3">
                  <span className="hover:text-red-400">
                    <AiOutlineMinusCircle />
                  </span>
                </button>
                <div>1</div>
                <button className="text-[30px] mx-3">
                  <span className="hover:text-red-400">
                    <AiOutlinePlusCircle />
                  </span>
                </button>
              </div>
            </div>
            <hr />
            <div className="flex items-center my-3 ">
              <div>
                <div className="my-1">Em bé</div>
                <div className="text-gray-400 text-sm">Dưới 2 tuổi</div>
              </div>
              <div className="flex items-center ml-[145px] text-gray-300">
                <button className="text-[30px] mx-3">
                  <span className="hover:text-red-400">
                    <AiOutlineMinusCircle />
                  </span>
                </button>
                <div>1</div>
                <button className="text-[30px] mx-3">
                  <span className="hover:text-red-400">
                    <AiOutlinePlusCircle />
                  </span>
                </button>
              </div>
            </div>
            <hr />
            <div className="flex items-center my-3">
              <div>
                <div className=" my-1">Thú cưng</div>
                <div className="text-gray-400 text-sm">
                  Bạn sẽ mang theo động vật
                  <br /> phục vụ ?
                </div>
              </div>
              <div className="flex items-center ml-[48px] text-gray-300">
                <button className="text-[30px] mx-3">
                  <span className="hover:text-red-400">
                    <AiOutlineMinusCircle />
                  </span>
                </button>
                <div>1</div>
                <button className="text-[30px] mx-3">
                  <span className="hover:text-red-400">
                    <AiOutlinePlusCircle />
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
        <div>
          <div className="pb-1">khách</div>
          <div className="text-gray-400 text-sm">Thêm khách</div>
        </div>
      </div>
    </>
  );
};

export default AddMoreGuests;
