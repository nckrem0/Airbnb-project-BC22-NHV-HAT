import { useSelector } from "react-redux";

import { RootState } from "store";
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";

import { useNavigate } from "react-router-dom";
import { removeVietnameseTones } from "convert/ConvertVie";

const RoomList = () => {
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.listRoomDemo
  );

  const navigation = useNavigate();

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
      <div className="flex nb:flex-col-reverse lg:flex-row ">
        <div className="px-6 md:w-full lg:w-2/5 xl:w-2/5 2xl:w-2/5">
          <div className="flex justify-between pb-5">
            <div>
              <span>Hơn 300 chỗ ở Ngày tháng 6</span>
              <h1>Chỗ ở tại khu vực mà bạn đã chọn</h1>
            </div>
            <div>
              <button className="flex items-center py-2 px-3 border-solid border-[1px] border-gray-400 rounded-lg">
                <BiFilterAlt />
                <span className="pl-1">Bộ Lọc</span>
              </button>
            </div>
          </div>
          <div className=" grid gap-8 nb:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 overflow-y-auto overflow-hidden h-screen ">
            {data?.map((room, index) => {
              return (
                <div
                  key={index}
                  className="text-base cursor-pointer"
                  onClick={() =>
                    gotoRoomsByLocationId(
                      removeVietnameseTones(room.name),
                      room._id
                    )
                  }
                >
                  <div className="">
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
                          className=" w-full object-cover rounded-2xl"
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
                  <div className="flex pb-5">
                    <p className="font-medium">{`${room?.price.toLocaleString(
                      "vi-VN"
                    )} VND/`}</p>
                    <span className="font-normal">đêm</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden lg:inline-flex lg:flex-1"></div>
      </div>
    </div>
  );
};

export default RoomList;
