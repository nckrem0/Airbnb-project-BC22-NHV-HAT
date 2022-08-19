import { useState, memo } from "react";
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
import { BiSearch } from "react-icons/bi";

type Props = {
    openSelected: boolean;
    setSelected(value: boolean): void;
};

const ChooseDateTest = (props: Props) => {
    const [openDate, setOpenDate] = useState(false);
    const [addMoreGuests, setMoreGuests] = useState(false);

    // State get IdLocation
    const [pickUpId, setPickUpId] = useState("");

    const dispatch = useDispatch<AppDispatch>();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

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
        navigation(`/rooms/${locationId}`);
        setMoreGuests(false);
        setOpenDate(false);
    };

    return (
        <>
            <div className="p-10">
                <label>
                    <div className="border-solid border-[1px] rounded-lg shadow-lg ">
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

            {openDate ? (
                <>
                    <div className="mr-4 h-16 py-2 px-8 font-medium hover:bg-gray-300 transition-all duration-300 rounded-[32px] ">
                        <div className="pb-1 text-black" onClick={handleOpen}>
                            Nhận Phòng
                        </div>

                        {startDate < endDate ? (
                            <div className=" text-sm font-medium ">{`${new Date(startDate).getDate()} Tháng ${new Date(
                                startDate
                            ).getMonth()}`}</div>
                        ) : (
                            <div className="text-gray-400 text-sm">Thêm Ngày</div>
                        )}
                        <div className="  shadow-lg bg-white search rounded-[32px]">
                            <DateRangePicker
                                ranges={[selectionRange]}
                                minDate={new Date()}
                                rangeColors={["#FD5b61"]}
                                onChange={handleSelect}
                            />
                        </div>
                    </div>

                    <div
                        className="mr-4 h-16 py-2 px-8 font-medium hover:bg-gray-300 transition-all duration-300 rounded-[32px]"
                        onClick={handleOpen}
                    >
                        <div className="pb-1 ">Trả Phòng</div>

                        {startDate < endDate ? (
                            <div className=" text-sm font-medium ">{`${new Date(endDate).getDate()} Tháng ${new Date(
                                endDate
                            ).getMonth()}`}</div>
                        ) : (
                            <div className="text-gray-400 text-sm">Thêm Ngày</div>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <div
                        className="mr-4 h-16 py-2 px-8 font-medium hover:bg-gray-300 transition-all duration-300 rounded-[32px] "
                        onClick={handleOpen}
                    >
                        <div className="pb-1 text-black">Nhận Phòng</div>
                        {startDate < endDate ? (
                            <div className=" text-sm font-medium ">{`${new Date(startDate).getDate()} Tháng ${new Date(
                                startDate
                            ).getMonth()}`}</div>
                        ) : (
                            <div className="text-gray-400 text-sm">Thêm Ngày</div>
                        )}
                    </div>

                    <div
                        className="mr-4 h-16 py-2 px-8 font-medium hover:bg-gray-300 transition-all duration-300 rounded-[32px]"
                        onClick={handleOpen}
                    >
                        <div className="pb-1 ">Trả Phòng</div>
                        {startDate < endDate ? (
                            <div className=" text-sm font-medium ">{`${new Date(endDate).getDate()} Tháng ${new Date(
                                endDate
                            ).getMonth()}`}</div>
                        ) : (
                            <div className="text-gray-400 text-sm">Thêm Ngày</div>
                        )}
                    </div>
                </>
            )}

            <div className="flex hover:bg-gray-300 rounded-[32px] transition-all duration-300 ">
                <AddMoreGuests
                    openDate={openDate}
                    setOpenDate={setOpenDate}
                    addMoreGuests={addMoreGuests}
                    setMoreGuests={setMoreGuests}
                />

                <button
                    className=" mt-[7px] mr-[10px] h-12 items-center flex bg-red-400 p-3 text-white  rounded-[32px] cursor-pointer "
                    onClick={() => gotoRoomsByLocationId(pickUpId)}
                >
                    <FaSearch className="ml-2" />
                    <span>Tìm Kiếm</span>
                    {/* <RoomList /> */}
                </button>
            </div>
        </>
    );
};

export default ChooseDateTest;
