import { AiOutlineStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
const Product = () => {
    console.log("ádasdasdasd");
    return (
        <div>
            <div className=" grid grid-cols-4 gap-8 2xl:max-w-7xl 2xl:mx-auto pt-10">
                <div className="text-base">
                    <div className="pb-2">
                        {/* <img
                            src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                            alt="photo"
                            className=" w-full h-72 object-cover rounded-2xl"
                        /> */}
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper "
                        >
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/fa69ad41-88c2-44cb-b1d6-edc7605c8444.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h5 className="font-medium">MV, Maldives</h5>
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
                <div className="text-base">
                    <div className="pb-2">
                        {/* <img
                            src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                            alt="photo"
                            className=" w-full h-72 object-cover rounded-2xl"
                        /> */}
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper "
                        >
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/fa69ad41-88c2-44cb-b1d6-edc7605c8444.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h5 className="font-medium">MV, Maldives</h5>
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
                <div className="text-base">
                    <div className="pb-2">
                        {/* <img
                            src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                            alt="photo"
                            className=" w-full h-72 object-cover rounded-2xl"
                        /> */}
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper "
                        >
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h5 className="font-medium">MV, Maldives</h5>
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
                <div className="text-base">
                    <div className="pb-2">
                        {/* <img
                            src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                            alt="photo"
                            className=" w-full h-72 object-cover rounded-2xl"
                        /> */}
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper "
                        >
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h5 className="font-medium">MV, Maldives</h5>
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
                <div className="text-base">
                    <div className="pb-2">
                        {/* <img
                            src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                            alt="photo"
                            className=" w-full h-72 object-cover rounded-2xl"
                        /> */}
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper "
                        >
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h5 className="font-medium">MV, Maldives</h5>
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
                <div className="text-base">
                    <div className="pb-2">
                        {/* <img
                            src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                            alt="photo"
                            className=" w-full h-72 object-cover rounded-2xl"
                        /> */}
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper "
                        >
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h5 className="font-medium">MV, Maldives</h5>
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
                <div className="text-base">
                    <div className="pb-2">
                        {/* <img
                            src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                            alt="photo"
                            className=" w-full h-72 object-cover rounded-2xl"
                        /> */}
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper "
                        >
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h5 className="font-medium">MV, Maldives</h5>
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
                <div className="text-base">
                    <div className="pb-2">
                        {/* <img
                            src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                            alt="photo"
                            className=" w-full h-72 object-cover rounded-2xl"
                        /> */}
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper "
                        >
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                                    alt="photo"
                                    className=" w-full h-72 object-cover rounded-2xl"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h5 className="font-medium">MV, Maldives</h5>
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
            </div>
        </div>
    );
};

export default Product;
