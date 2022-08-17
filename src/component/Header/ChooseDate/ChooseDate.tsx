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

import { useDispatch } from "react-redux";
import { AppDispatch } from "store";

type Props = {
  openSelected: boolean;
  setSelected(value: boolean): void;
};

const ChooseDate = (props: Props) => {
  const [openDate, setOpenDate] = useState(false);
  const [addMoreGuests, setMoreGuests] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
  const onSearchLocation = (event: any) => {
    const search = {} as IQueryLocation;
    search.location = event.target.value;

    setTimeout(() => {
      dispatch(getLocationList(search));
    }, 300);
  };

  return (
    <>
      <label className="h-16 py-2 px-8  hover:bg-gray-300 rounded-[32px] cursor-pointer   mr-4 ">
        <div>
          <div className="pb-1">Địa Điểm</div>

          <Location />
        </div>
      </label>

      {openDate ? (
        <>
          <div className="mr-4 h-16 py-2 px-8 hover:bg-gray-300 transition-all duration-300 rounded-[32px] ">
            <div className="pb-1 text-black" onClick={handleOpen}>
              Nhận Phòng
            </div>

            <div className="text-gray-400 text-sm">{`${new Date(
              startDate
            ).getDate()}`}</div>
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
            className="mr-4 h-16 py-2 px-8 hover:bg-gray-300 transition-all duration-300 rounded-[32px]"
            onClick={handleOpen}
          >
            <div className="pb-1 ">Trả Phòng</div>
            <div className="text-gray-400 text-sm ">{`${new Date(
              endDate
            ).getDate()}`}</div>
          </div>
        </>
      ) : (
        <>
          <div
            className="mr-4 h-16 py-2 px-8 hover:bg-gray-300 transition-all duration-300 rounded-[32px] "
            onClick={handleOpen}
          >
            <div className="pb-1 text-black">Nhận Phòng</div>

            <div className="text-gray-400 text-sm">Thêm Ngày</div>
          </div>

          <div
            className="mr-4 h-16 py-2 px-8 hover:bg-gray-300 transition-all duration-300 rounded-[32px]"
            onClick={handleOpen}
          >
            <div className="pb-1 ">Trả Phòng</div>
            <div className="text-gray-400 text-sm ">Thêm Ngày</div>
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

        <div className=" mt-[7px] mr-[10px] h-12 items-center flex bg-red-400 p-3 text-white  rounded-[32px] cursor-pointer ">
          <FaSearch className="ml-2" />
          <span>Tìm Kiếm</span>
        </div>
      </div>
    </>
  );
};

export default ChooseDate;
