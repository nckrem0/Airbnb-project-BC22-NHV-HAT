import { useState, memo } from "react";
// import { DatePicker, Space } from "antd";

// const { RangePicker } = DatePicker;
import "./rangeDate.css";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

type Props = {
    openSelected: boolean;
};

const ChooseDate = (props: Props) => {
    const { openSelected } = props;

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleSelect = (ranges: any) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    return (
        <>
            <div className="mr-4 py-3 px-8 hover:bg-gray-200 transition-all duration-300 rounded-[32px] ">
                <div className="pb-1 text-black">{`Nhận Phòng ${new Date(startDate).getDate()}`}</div>
                <div className="text-gray-400 text-sm">Thêm Ngày</div>
                {openSelected && (
                    <div className="  bg-gray-500 search">
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={["#FD5b61"]}
                            onChange={handleSelect}
                        />
                    </div>
                )}
            </div>

            <div className="mr-4 py-3 px-8 hover:bg-gray-200 transition-all duration-300 rounded-[32px]">
                <div className="pb-1">{`Trả Phòng ${new Date(endDate).getDate()}`}</div>
                <div className="text-gray-400 text-sm ">Thêm Ngày</div>
            </div>
        </>
    );
};

export default ChooseDate;
