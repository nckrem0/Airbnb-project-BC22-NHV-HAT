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
import { useNavigate } from "react-router-dom";
import { removeVietnameseTones } from "convert/ConvertVie";

const Location = () => {
    const { data, isLoading, error } = useSelector((state: RootState) => state.location);
    const navigation = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getLocationList({}));
    }, [dispatch]);
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>Error...</h1>;
    }
    const gotoRoomsByLocationId = (name: string, _id: string) => {
        navigation(`../rooms/${name}&${_id}`);
    };
    return (
        <div className=" grid gap-8 py-10 nb:grid-cols-1 nb:px-10 nb:mt-20 nb:mx-auto mb:grid-cols-1 sm:grid-cols-2 md:mt-0 lg:grid-cols-3 xl:grid-cols-4 2xl:max-w-8xl 2xl:mx-auto 2xl:grid-cols-5">
            {data?.map((location, index) => {
                return (
                    <div
                        key={index}
                        className="text-base cursor-pointer"
                        onClick={() => gotoRoomsByLocationId(removeVietnameseTones(location.name), location._id)}
                    >
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
                                        src={location.image}
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
                            <p className="text-gray-500">
                                Thuộc {location.province} , {location.country}
                            </p>
                            <p className="">Được đánh giá {location.valueate}/10 tại khu vực này</p>
                        </div>
                        <div className="flex">
                            <p className="font-medium">500.000 ~ 1.000.000 VNĐ </p>
                            <span className="font-normal">/đêm</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Location;
