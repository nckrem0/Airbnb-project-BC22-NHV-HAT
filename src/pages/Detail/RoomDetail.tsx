import React, { useEffect } from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineSmallDash } from "react-icons/ai";
import { GiRibbonMedal } from "react-icons/gi";
import { FaShare } from "react-icons/fa";
import RoomContent from "./RoomContent";
import RoomImage from "./RoomImage";
import { AppDispatch, RootState } from "store";
import { useDispatch, useSelector } from "react-redux";
import { getRoomDetailList } from "slices/room-details";
import { useParams } from "react-router-dom";
type Props = {};

const RoomDetail = (props: Props) => {
    const { data, isLoading, error } = useSelector((state: RootState) => state.roomdetail);
    console.log(data);

    const urlParams = useParams();
    console.log(urlParams);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getRoomDetailList(urlParams));
    }, [dispatch, urlParams]);
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>Error...</h1>;
    }
    return (
        <div className="2xl:max-w-6xl 2xl: mx-auto">
            <div>
                <h1 className="font-bold text-2xl">{data.name}</h1>
            </div>
            <div className="flex justify-between underline font-semibold">
                <div className="flex">
                    <div className="flex items-center">
                        <AiFillStar className="text-rose-500 text-lg" />
                        <span>4,83 (18 Votes)</span>
                    </div>
                    <div className="flex items-center px-8">
                        <GiRibbonMedal className="text-rose-500 text-lg" />
                        <span>Chủ nhà siêu cấp</span>
                    </div>
                    <div className="cursor-pointer">
                        <p>{data.locationId.name}</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex items-center pr-4 cursor-pointer">
                        <FaShare className="text-lg" />
                        <span>Share</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <AiOutlineHeart className="text-lg" />
                        <span>Save</span>
                    </div>
                </div>
            </div>
            <div>
                <RoomImage dataRoom={data} />
            </div>
            <div>
                <RoomContent dataRoom={data} />
            </div>
        </div>
    );
};

export default RoomDetail;
