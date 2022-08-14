import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineSmallDash } from "react-icons/ai";
import { GiRibbonMedal } from "react-icons/gi";
import { FaShare } from "react-icons/fa";
import RoomContent from "./RoomContent";
import RoomImage from "./RoomImage";
import { AppDispatch, RootState } from "store";
import { useDispatch, useSelector } from "react-redux";
import { getRoomDetailList } from "slices/room-details";
import { useParams } from "react-router-dom";
import { IReview } from "interfaces/review";
import RoomReview from "./RoomReview";
import { pointsData } from "data/review-points";
type Props = {};

const RoomDetail = (props: Props) => {
    const { data, isLoading, error } = useSelector((state: RootState) => state.roomdetail);
    // const [review, setReview] = useState<IReview>(data);

    const urlParams = useParams();
    console.log(urlParams);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getRoomDetailList(urlParams));
    }, [dispatch, urlParams]);
    useEffect(() => {});
    // useEffect(() => {
    //     setReview(data);
    // }, [setReview, data]);
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
            <hr />
            <div className="pt-10">
                <div className="flex items-center">
                    <AiFillStar className="text-rose-500" />
                    <span className="pl-2 font-semibold">4,83(18 đánh giá)</span>
                </div>
                <div className="flex flex-wrap">
                    {pointsData.map((point, index) => {
                        const percent = ((point.point * 100) / 5).toString();
                        return (
                            <div className="w-1/2" key={index}>
                                <div className="w-4/5">
                                    <div className="flex justify-between">
                                        <div>
                                            <p>{point.name}</p>
                                        </div>
                                        <div className="w-1/2 flex items-center ">
                                            <div className="relative h-1 flex-1 bg-gray-400 rounded-sm">
                                                <span
                                                    className={"absolute top-0 left-0 bg-black h-1 rounded-sm"}
                                                    style={{ width: `${percent}%` }}
                                                ></span>
                                            </div>
                                            <span className="pl-5 w-5">{point.point.toFixed(1)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <RoomReview roomId={data._id} />
                </div>
                <button className="p-3 border-solid border-[1px] border-black rounded-xl font-semibold mt-5 mb-7">
                    Hiển thị tất cả đánh giá
                </button>
            </div>
        </div>
    );
};

export default RoomDetail;
