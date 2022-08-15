import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomsList } from "slices/room";
import { AppDispatch, RootState } from "store";
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import Map from "component/Map/Map";

import { useNavigate, useParams } from "react-router-dom";
import { removeVietnameseTones } from "convert/ConvertVie";

const Room = () => {
    const useParam = useParams();
    const { data, isLoading, error } = useSelector((state: RootState) => state.room);
    const navigation = useNavigate();

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        const split: any = useParam.locationId?.split("&");
        const locationName = split[0];
        const locationId = split[1];
        dispatch(getRoomsList({ locationName, locationId }));
    }, [dispatch, useParam.locationId]);
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>Error...</h1>;
    }
    const gotoRoomsByLocationId = (name: string, _id: string) => {
        navigation(`../rooms/${name}/${_id}`);
    };
    return (
        <div className="overflow-hidden">
            <div className="flex">
                <div className="w-2/5 px-6">
                    <div className="flex justify-between">
                        <div>
                            <span>Hơn 300 chỗ ở Ngày 14-15 tháng 6</span>
                            <h1>Chỗ ở tại khu vực mà bạn đã chọn</h1>
                        </div>
                        <div>
                            <button className="flex items-center py-2 px-3 border-solid border-[1px] border-gray-400 rounded-lg">
                                <BiFilterAlt />
                                <span className="pl-1">Bộ Lọc</span>
                            </button>
                        </div>
                    </div>
                    <div className=" grid grid-cols-2 gap-8">
                        {data?.map((room, index) => {
                            return (
                                <div
                                    key={index}
                                    className="text-base cursor-pointer"
                                    onClick={() => gotoRoomsByLocationId(removeVietnameseTones(room.name), room._id)}
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
                                                    src={room?.image}
                                                    alt={room?.name}
                                                    className=" w-full h-72 object-cover rounded-2xl"
                                                />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <h5 className="font-medium">{room?.name}</h5>
                                        </div>
                                        <div className="flex items-center">
                                            <AiOutlineStar />
                                            <span>New</span>
                                        </div>
                                    </div>

                                    {/* <div>
                                        <p className="text-gray-500">{room?.latitude}</p>
                                    </div> */}
                                    <div>
                                        <p className="text-gray-500">Ngày 07 - Ngày 12 tháng 10</p>
                                    </div>
                                    <div className="flex">
                                        <p className="font-medium">{`${room?.price.toLocaleString("vi-VN")} VND/`}</p>
                                        <span className="font-normal">đêm</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="hidden xl:inline-flex flex-1">
                    <Map searchResults={data} />
                </div>
            </div>
        </div>
    );
};

export default Room;
