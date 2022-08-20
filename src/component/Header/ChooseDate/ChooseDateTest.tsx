import { useState, memo, useEffect, createContext } from "react";
import { FaSearch } from "react-icons/fa";

// import { DatePicker, Space } from "antd";

// const { RangePicker } = DatePicker;
import "./rangeDate.css";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { IQueryLocation } from "interfaces/query";
import { getLocationList } from "slices/location";
import AddMoreGuests from "../AddMoreGuests";
import Location from "pages/Demo/Location";
// import RoomList from "pages/RoomDemo/RoomList";

import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { useNavigate } from "react-router-dom";
import { getListRoomRental } from "slices/listRoomDemo";
import { BiSearch } from "react-icons/bi";

const ChooseDate = (props: any) => {
    const [open, setOpen] = useState(true);
    const [openDate, setOpenDate] = useState(false);
    const [addMoreGuests, setMoreGuests] = useState(false);

    // State get IdLocation
    const [pickUpId, setPickUpId] = useState("");

    const dispatch = useDispatch<AppDispatch>();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    // get data a list of rooms for rent by location
    useEffect(() => {
        dispatch(getListRoomRental(pickUpId));
    }, [pickUpId]);

    useEffect(() => {
        setOpenDate(false);
    }, [startDate < endDate]);

    const navigation = useNavigate();

    const handleSelect = (ranges: any) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };
    const handleOpen = () => {
        setOpenDate(!openDate);
        setMoreGuests(false);
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const gotoRoomsByLocationId = (locationId: string) => {
        navigation(`/rooms/locationId/${locationId}`);
        setMoreGuests(false);
        setOpenDate(false);
        setOpen(!open);
    };

    return (
        <div className="relative">
            <div className="p-10">
                <label>
                    <div className="border-solid border-[1px] rounded-lg shadow-xl ">
                        <div className="p-5">
                            <h1 className="pb-1 ">Bạn sẽ đi đâu ?</h1>
                            <div className="flex border-solid border-[1px] rounded-lg px-5 pt-2">
                                <BiSearch className="mr-2 mt-3" />
                                <div className="mt-2">
                                    <Location setPickUpId={setPickUpId} />
                                </div>
                            </div>
                        </div>
                    </div>
                </label>
            </div>

            <div className="bg-white shadow-lg border-solid border-[1px] mx-10 rounded-xl cursor-pointer">
                {openDate ? (
                    <>
                        <div className="mr-4 h-16 py-2 font-medium transition-all duration-300 rounded-[32px] ">
                            <div className="">
                                <div className="pb-1 text-black px-5" onClick={handleOpen}>
                                    Nhận Phòng
                                </div>
                                {startDate < endDate ? (
                                    <div className=" text-sm font-medium px-5">{`${new Date(
                                        startDate
                                    ).getDate()} Tháng ${new Date(startDate).getMonth()}`}</div>
                                ) : (
                                    <div className="text-gray-400 text-sm px-5">Thêm Ngày</div>
                                )}
                                <div className=" shadow-lg bg-white search rounded-[32px] ">
                                    <DateRangePicker
                                        ranges={[selectionRange]}
                                        minDate={new Date()}
                                        rangeColors={["#FD5b61"]}
                                        onChange={handleSelect}
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className="mr-4 h-16 py-2 font-medium  transition-all duration-300 rounded-[32px]"
                            onClick={handleOpen}
                        ></div>
                    </>
                ) : (
                    <>
                        <div
                            className="mr-4 h-16 py-2 font-medium  transition-all duration-300 rounded-[32px] "
                            onClick={handleOpen}
                        >
                            {" "}
                            <div className="flex">
                                <div className="">
                                    <div className="pb-1 text-black px-5">Nhận Phòng</div>
                                    {startDate < endDate ? (
                                        <div className=" text-sm font-medium px-5">{`${new Date(
                                            startDate
                                        ).getDate()} Tháng ${new Date(startDate).getMonth()}`}</div>
                                    ) : (
                                        <div className="text-gray-400 text-sm px-5">Thêm Ngày</div>
                                    )}
                                </div>
                                <div className="">
                                    <div className="pb-1 px-5">Trả Phòng </div>
                                    {startDate < endDate ? (
                                        <div className=" text-sm font-medium px-5">{`${new Date(
                                            endDate
                                        ).getDate()} Tháng ${new Date(endDate).getMonth()}`}</div>
                                    ) : (
                                        <div className="text-gray-400 text-sm px-5">Thêm Ngày</div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* <div
                            className="mr-4 h-16 py-2 font-medium  transition-all duration-300 rounded-[32px]"
                            onClick={handleOpen}
                        >
                            <div className="">
                                <div className="pb-1 px-5">Trả Phòng aaa</div>
                                {startDate < endDate ? (
                                    <div className=" text-sm font-medium px-5">{`${new Date(
                                        endDate
                                    ).getDate()} Tháng ${new Date(endDate).getMonth()}`}</div>
                                ) : (
                                    <div className="text-gray-400 text-sm px-5">Thêm Ngày</div>
                                )}
                            </div>
                        </div> */}
                    </>
                )}
            </div>

            <div className="flex  rounded-xl transition-all duration-300 cursor-pointer bg-white shadow-lg border-solid border-[1px] mx-10 mt-10">
                <div className="py-2 ">
                    <AddMoreGuests
                        openDate={openDate}
                        setOpenDate={setOpenDate}
                        addMoreGuests={addMoreGuests}
                        setMoreGuests={setMoreGuests}
                    />

                    <button
                        className=" mt-[7px] mr-[10px] h-12 items-center flex bg-yellow-500 p-3 text-white  rounded-[32px] nb:hidden md:inline"
                        onClick={() => gotoRoomsByLocationId(pickUpId)}
                    >
                        <FaSearch className="ml-2" />
                        <span>Tìm Kiếm</span>
                        {/* <RoomList /> */}
                    </button>
                </div>
            </div>
            <div className="fixed bottom-0 w-full border-solid border-y-[1px] md:hidden bg-white">
                <div className="pl-10 pr-5 flex justify-between items-center py-2">
                    <span className="font-semibold underline">Xóa tất cả</span>
                    <button
                        className=" mt-[7px] mr-[10px] h-12 items-center flex bg-rose-500 p-3 text-white rounded-xl "
                        onClick={() => gotoRoomsByLocationId(pickUpId)}
                    >
                        <FaSearch className="ml-2" />
                        <span>Tìm Kiếm</span>
                        {/* <RoomList /> */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChooseDate;
