import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocationList } from "slices/location";
import { AppDispatch, RootState } from "store";
import { AiOutlineStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { IQueryLocation } from "interfaces/query";

const Location = () => {
    const { data, isLoading, error } = useSelector((state: RootState) => state.location);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        console.log("here");
        dispatch(getLocationList({}));
    }, [dispatch]);
    // if (isLoading) {
    //     return <h1>Loading...</h1>;
    // }
    // if (error) {
    //     return <h1>Error...</h1>;
    // }

    return (
        <div className=" grid grid-cols-4 gap-8 2xl:max-w-7xl 2xl:mx-auto pt-10">
            {data?.map((location, index) => {
                return (
                    <div className="text-base">
                        <div className="pb-2">
                            <Swiper
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper "
                            >
                                <SwiperSlide>
                                    <img
                                        src={`https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720`}
                                        alt="photo"
                                        className=" w-full h-72 object-cover rounded-2xl"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h5 className="font-medium">{location.name}</h5>
                            </div>
                            <div className="flex items-center">
                                <AiOutlineStar />
                                <span>New</span>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-500">Cách 3.994 km</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Ngày 07 - Ngày 12 tháng 10</p>
                        </div>
                        <div className="flex">
                            <p className="font-medium">$600</p>
                            <span className="font-normal">đêm</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Location;
