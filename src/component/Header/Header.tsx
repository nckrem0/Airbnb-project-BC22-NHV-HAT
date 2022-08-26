import { useState, memo } from "react";
import { FaAirbnb } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Navbar from "./Navbar";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import ChooseDate from "./ChooseDate";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { HiOutlineFilter } from "react-icons/hi";
import ChooseDateTest from "./ChooseDate/ChooseDateTest";
import { Link } from "react-router-dom";
type Props = {
  setGetEndDate(value: Date): void;
  setGetStartDate(value: Date): void;
};

const Header = (props: Props) => {
  const { setGetEndDate, setGetStartDate } = props;

  const dispatch = useDispatch<AppDispatch>();

  const [openSelected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSelected = () => {
    setSelected(!openSelected);
  };

  const handleOpened = () => {
    setOpen(!open);
  };

  return (
    <div className="font-montserrat z-50 relative">
      <div className=" nb:hidden md:inline">
        {openSelected ? (
          <header className=" p-6 pb-24 dark:text-gray-100 border-b border-gray-200 z-10 md:px-10 ">
            <div className="container flex justify-between h-16 mx-auto">
              <Link
                to="/"
                className="flex items-center p-2 w-32 h-8 text-red-400 mt-4 text-2xl font-bold   "
              >
                <i className="text-[40px]">
                  <FaAirbnb />
                </i>
                <span>airbnb</span>
              </Link>
              <section className="">
                <div
                  className="bg-white justify-center    rounded-[40px] items-stretch hidden space-x-3 lg:flex p-3 "
                  onClick={handleSelected}
                >
                  <div>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                      <li className="flex">
                        <a
                          href="#"
                          className=" navbar-content underline-hover "
                        >
                          Chỗ ở
                        </a>
                      </li>
                      <li className="flex">
                        <a href="#" className=" navbar-content underline-hover">
                          Trả Phòng
                        </a>
                      </li>
                      <li className="flex">
                        <a
                          href="#"
                          className=" navbar-content underline-hover "
                        >
                          Trải nghiệm trực tuyến
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:flex bg-gray-200 h-16 mt-5 items-center text-black border-solid border-[1px] border-gray-200 rounded-[40px]">
                  <ChooseDate
                    setGetEndDate={setGetEndDate}
                    setGetStartDate={setGetStartDate}
                  />
                </div>
              </section>

              <div className="items-center text-black font-medium flex-shrink-0 hidden lg:flex">
                <span>Trở Thành Chủ Nhà</span>
                <button className="ml-5 text-[25px]">
                  <TbWorld />
                </button>
                <Navbar />
              </div>
            </div>
          </header>
        ) : (
          <header className=" p-6   text-black border-solid border-2">
            <div className="container flex justify-between h-16 mx-auto">
              <Link
                to="/"
                className="flex items-center p-2 w-32 h-8 text-red-400 mt-4 text-2xl font-bold   "
              >
                <i className="text-[40px]">
                  <FaAirbnb />
                </i>
                <span>airbnb</span>
              </Link>
              <section className="">
                <div
                  className="bg-white justify-center   border-solid border-2 shadow-lg rounded-[40px] items-stretch hidden space-x-3 lg:flex p-3 "
                  onClick={handleSelected}
                >
                  <button className="flex items-center font-medium ">
                    <div>Địa điểm bất kỳ</div>
                  </button>
                  <span className="mx-3 text-gray-300 flex items-center  ">
                    |
                  </span>
                  <button className="flex items-center font-medium">
                    <div>Tuần bất kỳ</div>
                  </button>
                  <span className="mx-3 text-gray-300 flex items-center">
                    |
                  </span>

                  <button className="flex items-center text-gray-400">
                    <div>Thêm khách</div>
                    <div className="ml-2 bg-rose-500 p-3  rounded-[50%]">
                      <FaSearch className=" w-3 h-3 text-white" />
                    </div>
                  </button>
                </div>
              </section>

              <div className="items-center font-medium text-black flex-shrink-0 hidden lg:flex">
                <span className="">Trở Thành Chủ Nhà</span>
                <button className="ml-5 text-[25px]">
                  <TbWorld />
                </button>
                <Navbar />
              </div>
            </div>
          </header>
        )}
      </div>
      <div className="fixed top-0 bg-white w-full px-10 py-5 nb:inline-flex md:hidden shadow-lg">
        <button
          className="flex w-full justify-between items-center rounded-2xl border-solid border-[1px] px-5 shadow-lg"
          onClick={() => handleOpened()}
        >
          <div className="flex items-center justify-start">
            <div>
              <FaSearch />
            </div>
            <div className="pl-5">
              <h3 className="text-left font-medium text-sm">Bạn sẽ đi đâu</h3>
              <div className="flex text-xs justify-start ">
                <h5>Địa điểm bất kỳ</h5>
                <h5 className="px-3">Tuần bất kỳ</h5>
                <h5>Thêm Khách</h5>
              </div>
            </div>
          </div>

          <div className="border-solid border-[1px] p-2 rounded-full">
            <HiOutlineFilter />
          </div>
        </button>
        {open ? (
          <div className="relative">
            <div className="fixed top-0 left-0 bg-white w-full h-screen ">
              <div className="flex justify-center">
                <span className="pt-4 cursor-pointer font-medium">Chỗ ở</span>
                <span className="pt-4 pl-3 cursor-pointer font-medium">
                  Trải Nghiệm
                </span>
              </div>
              <ChooseDateTest
                openSelected={openSelected}
                setSelected={setSelected}
                closeSearch={setOpen}
              />
              <div className="fixed top-2 right-3">
                <button
                  className="border-solid border-[1px] p-2 rounded-full"
                  onClick={() => handleOpened()}
                >
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default memo(Header);
