import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { getReviewlList } from "slices/review";
import { GiFireExtinguisher } from "react-icons/gi";
import moment from "moment";

type Props = {
    roomId: string;
};

const RoomReview = (props: Props) => {
    const { data, isLoading, error } = useSelector((state: RootState) => state.review);
    console.log(data);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getReviewlList(props.roomId));
    }, [dispatch, props.roomId]);
    return (
        <div>
            <div className="flex flex-wrap pt-5 nb:flex-col md:flex-row">
                {data.map((review, index) => {
                    return (
                        <div className=" md:w-1/2 pb-5 nb:w-full" key={index}>
                            <div className="flex items-center ">
                                <img src="https://picsum.photos/50/50" alt="avatar" className="rounded-full" />
                                <div className="pl-5  ">
                                    <p className="font-semibold">Nguyễn Văn A</p>
                                    <p className="text-sm text-gray-500">
                                        {moment(review?.created_at).format("MMMM/Do/YYYY")}{" "}
                                    </p>
                                </div>
                            </div>
                            <p className="px-2">{review.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default memo(RoomReview);
