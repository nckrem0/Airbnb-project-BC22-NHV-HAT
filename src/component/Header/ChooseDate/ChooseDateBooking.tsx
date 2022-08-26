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

const ChooseDate = (props: any) => {
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
    };

    return (
        <div>
            {openDate ? (
                <div className="flex justify-start items-center px-5 border-solid border-r py-2">
                    <div className="cursor-pointer">
                        <div className="pb-1 text-black" onClick={handleOpen}>
                            Nhận Phòng
                        </div>

                        {startDate < endDate ? (
                            <div className=" text-sm font-medium ">{`${new Date(startDate).getDate()} Tháng ${new Date(
                                startDate
                            ).getMonth()}`}</div>
                        ) : (
                            <div className="text-gray-400 text-sm ">Thêm Ngày</div>
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
                        className="cursor-pointer"
                        onClick={handleOpen}
                    >
                        <div className="pb-1 pl-5">Trả Phòng</div>

                        {startDate < endDate ? (
                            <div className=" text-sm font-medium ">{`${new Date(endDate).getDate()} Tháng ${new Date(
                                endDate
                            ).getMonth()}`}</div>
                        ) : (
                            <div className="text-gray-400 text-sm">Thêm Ngày</div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex justify-start items-center px-5 py-2">
                    <div
                        className="cursor-pointer"
                        onClick={handleOpen}
                    >
                        <div className="pb-1 text-black">Nhận Phòng</div>
                        {startDate < endDate ? (
                            <div className=" text-sm font-medium ">{`${new Date(startDate).getDate()} Tháng ${new Date(
                                startDate
                            ).getMonth()}`}</div>
                        ) : (
                            <div className="text-gray-400 text-sm ">Thêm Ngày</div>
                        )}
                    </div>

                    <div
                        className="cursor-pointer"
                        onClick={handleOpen}
                    >
                        <div className="pb-1 pl-5">Trả Phòng</div>
                        {startDate < endDate ? (
                            <div className=" text-sm font-medium ">{`${new Date(endDate).getDate()} Tháng ${new Date(
                                endDate
                            ).getMonth()}`}</div>
                        ) : (
                            <div className="text-gray-400 text-sm pl-5">Thêm Ngày</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChooseDate;
