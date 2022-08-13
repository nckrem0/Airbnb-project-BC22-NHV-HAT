import { FaAirbnb } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Host = () => {
    return (
        <div>
            <div className=" flex">
                <div className="flex-1 bg-black h-screen relative">
                    <div className="text-4xl mt-10 ml-12 text-white absolute">
                        <FaAirbnb />
                    </div>
                    <div className="md:max-w-2xl md:mx-auto h-screen flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="text-6xl text-white font-semibold pb-12">
                                Mở ra cánh cửa <br /> đón tiếp khách
                            </h1>
                            <button className="bg-rose-600 py-3 px-5 text-white font-semibold rounded-lg">
                                Thử đón tiếp khách
                            </button>
                        </div>
                    </div>

                    <div></div>
                </div>
                <div className="flex-1">
                    <div>
                        <video
                            src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
                            autoPlay
                            className="h-screen w-screen object-cover object-center"
                        ></video>
                    </div>
                </div>
            </div>

            <div className="mt-40 ml-12">
                <div>
                    <h1 className="text-6xl font-semibold text-center">
                        Bạn có thể đón tiếp <br />
                        bất kỳ ai, ở bất cứ đâu
                    </h1>
                </div>
                <div>
                    <Swiper
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={20}
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="host"
                        style={{ height: "500px" }}
                    >
                        <SwiperSlide className="relative">
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg?im_w=720"
                                    alt="photo"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0">
                                <h1>aaaaaaaa</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg?im_w=720"
                                alt="photo"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                src="https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg?im_w=720"
                                alt="photo"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg?im_w=720"
                                alt="photo"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className=" font-bold text-5xl pt-40">
                <div className="text-center ">
                    <h1 className="text-gray-400">Bạn muốn cho thuê loại chỗ ở nào?</h1>
                    <select className="underline">
                        <option className="p-5" value="1">
                            Toàn bộ nhà
                        </option>
                        <option value="2">Phòng riêng</option>
                        <option value="3">Phòng Chung</option>
                    </select>
                </div>
                <div className="text-center py-10">
                    <h1 className="text-gray-400">Bao nhiêu khách có thể ở tại đó?</h1>
                    <select className="text-center underline">
                        <option className="p-5" value="1">
                            4 Khách
                        </option>
                        <option value="2">Phòng riêng</option>
                        <option value="3">Phòng Chung</option>
                    </select>
                </div>
                <div className="text-center pb-10">
                    <h1 className="text-gray-400">Địa điểm ở đâu?</h1>
                    <select className="text-center underline">
                        <option className="p-5" value="1">
                            TP.HCM
                        </option>
                        <option value="2">Phòng riêng</option>
                        <option value="3">Phòng Chung</option>
                    </select>
                </div>
                <div className="text-center">
                    <h1>Kiếm tới $4/tháng*</h1>
                    <h5 className="font-medium text-lg underline">
                        Cách chúng tôi ước tính thu nhập tiềm năng của bạn
                    </h5>
                </div>
            </div>
            <div className="pt-20 2xl:max-w-full 2xl:mx-auto px-20 object-cover ">
                <div className="relative">
                    <img
                        src="https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&im_q=highq"
                        alt="photo"
                        className="rounded-xl h-full"
                    />
                    <div className="absolute 2xl:top-[40vh] 2xl:left-[30vh] xl:top-[30vh] xl:left-[20vh] ">
                        <h1 className="text-white font-bold 2xl:text-6xl text-center xl:text-5xl">
                            Bạn có thắc mắc về việc đón tiếp khách? <br />
                            Hãy hỏi ý kiến Chủ nhà siêu cấp.
                        </h1>
                        <a
                            href="#"
                            className="absolute left-[50vh] px-10 py-3 font-semibold rounded-lg mt-20 bg-white z-50"
                        >
                            Tìm hiểu thêm
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Host;
