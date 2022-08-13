import {
    AiOutlineHome,
    AiOutlineStar,
    AiOutlineCalendar,
    AiOutlineWifi,
    AiFillVideoCamera,
    AiFillStar,
} from "react-icons/ai";
import { GiRibbonMedal, GiElevator, GiFireExtinguisher } from "react-icons/gi";
import { TbToolsKitchen2, TbSwimming, TbParking } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { BsSnow2 } from "react-icons/bs";
import { MdOutlineBreakfastDining } from "react-icons/md";
import ChooseDateBooking from "component/Header/ChooseDate/ChooseDateBooking";
import Checkout from "component/Header/ChooseDate/Checkout";
import AddMoreGuests from "component/Header/AddMoreGuests";
import AddGuests from "component/Header/AddMoreGuests/AddGuests";
import ChooseDate from "component/Header/ChooseDate";
const RoomContent = () => {
    return (
        <div className="flex py-12">
            <div className="w-2/3">
                <div className="flex justify-between w-full pb-5">
                    <div>
                        <h1 className="font-semibold text-xl">Nhà mái vòm. Chủ nhà Dorothy</h1>
                        <ol className="flex items-center">
                            <li className="flex items-center">
                                <span>6 khách</span>
                                <span className="h-8 px-1">.</span>
                            </li>
                            <li className="flex items-center">
                                <span>1 phòng ngủ</span>
                                <span className="h-8 px-1">.</span>
                            </li>
                            <li className="flex items-center">
                                <span>1 giường</span>
                                <span className="h-8 px-1">.</span>
                            </li>
                            <li className="flex items-center">
                                <span>1 phòng tắm</span>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <img
                            src="https://a0.muscache.com/im/pictures/user/0ea3cd74-7ce9-4f59-bf57-334651d552c6.jpg?im_w=240"
                            alt="photo"
                            className="w-14 h-14"
                        />
                    </div>
                </div>
                <hr />
                <div className="py-5 text-sm">
                    <div className="flex pb-3">
                        <div className="pt-1">
                            <AiOutlineHome className="text-2xl" />
                        </div>
                        <div className="pl-3">
                            <h5 className="text-base font-semibold">Toàn Bộ Nhà</h5>
                            <p className="text-gray-500">Bạn sẽ có chung cư cao cấp cho riêng mình</p>
                        </div>
                    </div>
                    <div className="flex pb-3">
                        <div className="pt-1">
                            <AiOutlineStar className="text-2xl" />
                        </div>
                        <div className="pl-3">
                            <h5 className="text-base font-semibold">Vệ Sinh Tăng Cường</h5>
                            <p className="text-gray-500">
                                Chủ nhà cam kết thực hiện quy trình vệ sinh tăng cường 5 bước của Airbnb{" "}
                                <b className="underline text-black cursor-pointer">Hiển thị thêm</b>
                            </p>
                        </div>
                    </div>
                    <div className="flex pb-3">
                        <div className="pt-1">
                            <GiRibbonMedal className="text-2xl" />
                        </div>
                        <div className="pl-3">
                            <h5 className="text-base font-semibold">Chủ nhà giàu kinh nghiệm</h5>
                            <p className="text-gray-500">Dorothy có 762 đánh giá cho các chỗ ở khác.</p>
                        </div>
                    </div>
                    <div className="flex pb-3">
                        <div className="pt-1">
                            <AiOutlineCalendar className="text-2xl" />
                        </div>
                        <div className="pl-3">
                            <h5 className="text-base font-semibold">Hủy miễn phí trong 48 giờ.</h5>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="py-10">
                    <div>
                        <h1 className="font-semibold text-2xl">Tiện Nghi</h1>
                    </div>
                    <div className="flex flex-wrap pt-5">
                        <div className="flex items-center w-1/2 pb-3">
                            <AiOutlineWifi className="text-2xl" />
                            <span className="pl-5">Wi-fi</span>
                        </div>
                        <div className="flex items-center w-1/2 pb-3">
                            <FiMonitor className="text-2xl" />
                            <span className="pl-5">Tv</span>
                        </div>
                        <div className="flex items-center w-1/2 pb-3">
                            <TbToolsKitchen2 className="text-2xl " />
                            <span className="pl-5">Nhà Bếp</span>
                        </div>
                        <div className="flex items-center w-1/2 pb-3">
                            <BsSnow2 className="text-2xl " />
                            <span className="pl-5">Điều Hoà</span>
                        </div>
                        <div className="flex items-center w-1/2 pb-3">
                            <GiElevator className="text-2xl " />
                            <span className="pl-5">Thang Máy</span>
                        </div>
                        <div className="flex items-center w-1/2 pb-3">
                            <TbSwimming className="text-2xl " />
                            <span className="pl-5">Wi-fi</span>
                        </div>
                        <div className="flex items-center w-1/2 pb-3">
                            <TbParking className="text-2xl" />
                            <span className="pl-5">Bãi Đỗ Xe</span>
                        </div>
                        <div className="flex items-center w-1/2 pb-3">
                            <MdOutlineBreakfastDining className="text-2xl" />
                            <span className="pl-5">Bữa Sáng</span>
                        </div>
                        <div className="flex items-center w-1/2 pb-3">
                            <AiFillVideoCamera className="text-2xl" />
                            <span className="pl-5">Camera an ninh trong nhà</span>
                        </div>
                        <div className="flex items-center w-1/2 pb-3">
                            <GiFireExtinguisher className="text-2xl" />
                            <span className="pl-5">Bình Chữa Cháy</span>
                        </div>
                    </div>
                    <button className="p-3 border-solid border-[1px] border-black rounded-xl font-semibold mt-5">
                        Hiển thị tất cả tiện nghi
                    </button>
                </div>
                <hr />
                <div>
                    <div className="flex items-center">
                        <AiFillStar className="text-rose-500" />
                        <span className="pl-2 font-semibold">4,83(18 đánh giá)</span>
                    </div>
                    <div className="flex flex-wrap pt-5">
                        <div className=" w-1/2 pb-3">
                            <div className="flex items-center">
                                <GiFireExtinguisher className="text-2xl" />
                                <div className="pl-5  ">
                                    <p className="font-semibold">Nguyễn Văn A</p>
                                    <p className="text-sm text-gray-500">Tháng 7 năm 2022</p>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum dignissimos
                                laboriosam ipsa laborum aspernatur amet itaque culpa velit sed!
                            </p>
                        </div>

                        <div className=" w-1/2 pb-3">
                            <div className="flex items-center">
                                <GiFireExtinguisher className="text-2xl" />
                                <div className="pl-5  ">
                                    <p className="font-semibold">Nguyễn Văn A</p>
                                    <p className="text-sm text-gray-500">Tháng 7 năm 2022</p>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum dignissimos
                                laboriosam ipsa laborum aspernatur amet itaque culpa velit sed!
                            </p>
                        </div>
                        <div className=" w-1/2 pb-3">
                            <div className="flex items-center">
                                <GiFireExtinguisher className="text-2xl" />
                                <div className="pl-5  ">
                                    <p className="font-semibold">Nguyễn Văn A</p>
                                    <p className="text-sm text-gray-500">Tháng 7 năm 2022</p>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum dignissimos
                                laboriosam ipsa laborum aspernatur amet itaque culpa velit sed!
                            </p>
                        </div>
                        <div className=" w-1/2 pb-3">
                            <div className="flex items-center">
                                <GiFireExtinguisher className="text-2xl" />
                                <div className="pl-5  ">
                                    <p className="font-semibold">Nguyễn Văn A</p>
                                    <p className="text-sm text-gray-500">Tháng 7 năm 2022</p>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum dignissimos
                                laboriosam ipsa laborum aspernatur amet itaque culpa velit sed!
                            </p>
                        </div>
                    </div>

                    <button className="p-3 border-solid border-[1px] border-black rounded-xl font-semibold mt-5 mb-7">
                        Hiển thị tất cả đánh giá
                    </button>
                </div>
                <hr />
            </div>
            <div className="w-1/3 pl-10">
                <div className="border-solid border-[1px] border-gray-400 p-5 rounded-xl">
                    <div className="flex justify-between">
                        <div>
                            <span className="font-bold text-lg">$600</span>
                            <span> / đêm</span>
                        </div>
                        <div className="flex items-center">
                            <AiFillStar className="text-rose-500" />
                            <span className="pl-2 font-semibold">4,83(18 đánh giá)</span>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="choosedate">
                            {/* <div className="flex-1 checkin pl-3">
                                <Checkin />
                            </div>
                            <div className="flex-1 checkout pl-3">
                                <Checkout />
                            </div> */}
                            <ChooseDateBooking />
                        </div>
                        <div className="addguests w-full">
                            <AddGuests />
                        </div>
                    </div>

                    <button className="bg-rose-600 w-full py-3 text-white font-semibold">Đặt Phòng</button>
                    <p className="text-center">Bạn vẫn chưa bị trừ tiền</p>
                </div>
            </div>
        </div>
    );
};

export default RoomContent;
