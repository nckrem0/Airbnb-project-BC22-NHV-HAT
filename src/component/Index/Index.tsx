import React from "react";
import { data } from "data/index";
import Card from "./Card";
type Props = {};

function Index({}: Props) {
    return (
        <div className="nb:px-10 xl:max-w-7xl 2xl:max-w-8xl mx-auto">
            <div className="pb-20">
                <div>
                    <h1 className="font-bold text-2xl">Khám phá những điểm đến gần đây</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-full">
                    {data?.map((item, index) => (
                        <Card img={item.img} distance={item.distance} location={item.location} />
                    ))}
                </div>
            </div>
            <div className="pb-20">
                <h1 className="font-bold text-2xl">Ở bất cứ đâu</h1>
                <div className="grid justify-start nb:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-5">
                    <div className="pb-5">
                        <img
                            src="https://a0.muscache.com/im/pictures/82293cc1-ba0b-4167-85a6-ed133d478c20.jpg?im_q=medq&im_w=240"
                            alt="photo"
                            className="rounded-xl"
                        />
                        <p className=" font-medium">Toàn Bộ Nhà</p>
                    </div>

                    <div className="pb-5">
                        <img
                            src="https://a0.muscache.com/im/pictures/82293cc1-ba0b-4167-85a6-ed133d478c20.jpg?im_q=medq&im_w=240"
                            alt="photo"
                            className="rounded-xl"
                        />
                        <p className=" font-medium">Chỗ Ở Độc Đáo</p>
                    </div>
                    <div className="pb-5">
                        <img
                            src="https://a0.muscache.com/im/pictures/82293cc1-ba0b-4167-85a6-ed133d478c20.jpg?im_q=medq&im_w=240"
                            alt="photo"
                            className="rounded-xl"
                        />
                        <p className=" font-medium">Trang Trại và Thiên Nhiên</p>
                    </div>
                    <div className="pb-5">
                        <img
                            src="https://a0.muscache.com/im/pictures/82293cc1-ba0b-4167-85a6-ed133d478c20.jpg?im_q=medq&im_w=240"
                            alt="photo"
                            className="rounded-xl"
                        />
                        <p className=" font-medium">Cho Phép Mang Theo Thú Cưng</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
