import { useState } from "react";
// import { DatePicker, Space } from "antd";

// const { RangePicker } = DatePicker;
import "./rangeDate.css";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

const Checkout = () => {
    const [chooseDate, setchooseDate] = useState(false);

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
    console.log("chooseDate", chooseDate);

    return (
        <>
            <div className="relative" onClick={() => setchooseDate(!chooseDate)}>
                <div className="pb-1">Trả Phòng</div>
                <div className="text-gray-400 text-sm">Thêm Ngày</div>
                {chooseDate && (
                    <div className="  bg-gray-500 search p-5 absolute">
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={["#FD5b61"]}
                            onChange={handleSelect}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Checkout;
