import { useState } from "react";
import { FaAirbnb } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Navbar from "./Navbar";
import { FaSearch } from "react-icons/fa";

import AddMoreGuests from "./AddMoreGuests";
import ChooseDate from "./ChooseDate";
import { useDispatch } from "react-redux";
import { getLocationList } from "slices/location";
import { IQueryLocation } from "interfaces/query";
import { AppDispatch } from "store";

const Header = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [openSelected, setSelected] = useState(false);

    const handleSelected = () => {
        setSelected(!openSelected);
    };
    console.log("openSelected", openSelected);

    return (
        <div className="nb:hidden md:inline">
            {openSelected ? (
                <header className=" p-6 pb-24 dark:text-gray-100 border-solid border-2 z-10 md:px-10 ">
                    <div className="container flex justify-between h-16 mx-auto">
                        <a className="flex items-center p-2 w-32 h-8 text-red-400 mt-4 text-2xl font-bold   ">
                            <i className="text-[40px]">
                                <FaAirbnb />
                            </i>
                            <span>airbnb</span>
                        </a>
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
                                                className="flex items-center px-4 -mb-1 text-black hover:border-b-2 border-gray-400 hover:text-gray-400 "
                                            >
                                                Chỗ ở
                                            </a>
                                        </li>
                                        <li className="flex">
                                            <a
                                                href="#"
                                                className="flex items-center px-4 -mb-1 text-black hover:border-b-2 border-gray-400 hover:text-gray-400"
                                            >
                                                Trải nghiệm
                                            </a>
                                        </li>
                                        <li className="flex">
                                            <a
                                                href="#"
                                                className="flex items-center px-4 -mb-1 text-black hover:border-b-2 border-gray-400 hover:text-gray-400 "
                                            >
                                                Trải nghiệm trực tuyến
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:flex bg-gray-200 h-16 mt-5 items-center text-black border-solid border-[1px] border-gray-200 rounded-[40px]">
                                <ChooseDate openSelected={openSelected} setSelected={setSelected} />
                            </div>
                        </section>

                        <div className="items-center text-black flex-shrink-0 hidden lg:flex">
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
                        <a className="flex items-center p-2 w-32 h-8 text-red-400 mt-4 text-2xl font-bold   ">
                            <i className="text-[40px]">
                                <FaAirbnb />
                            </i>
                            <span>airbnb</span>
                        </a>
                        <section className="">
                            <div
                                className="bg-white justify-center   border-solid border-2 shadow-lg rounded-[40px] items-stretch hidden space-x-3 lg:flex p-3 "
                                onClick={handleSelected}
                            >
                                <button className="flex items-center ">
                                    <div>Địa điểm bất kỳ</div>
                                </button>
                                <span className="mx-3 text-gray-300 flex items-center ">|</span>
                                <button className="flex items-center">
                                    <div>Tuần bất kỳ</div>
                                </button>
                                <span className="mx-3 text-gray-300 flex items-center">|</span>

                                <button className="flex items-center">
                                    <div>Thêm khách</div>
                                    <div className="ml-2 bg-red-400 p-3  rounded-[50%]">
                                        <FaSearch className=" w-3 h-3 text-white" />
                                    </div>
                                </button>
                            </div>
                        </section>

                        <div className="items-center text-black flex-shrink-0 hidden lg:flex">
                            <span>Trở Thành Chủ Nhà</span>
                            <button className="ml-5 text-[25px]">
                                <TbWorld />
                            </button>
                            <Navbar />
                        </div>
                    </div>
                </header>
            )}
        </div>
    );
};

export default Header;
