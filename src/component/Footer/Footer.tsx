import { TbWorld } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-100 nb:pb-20 md:pb-0">
            <div className="2xl:max-w-8xl 2xl:mx-auto ">
                <div className="pt-14 px-10 text-sm leading-10 lg:flex lg:border-solid border-b-[1px] nb:border-none">
                    <div className="nb:border-solid border-b-[1px] lg:border-none lg:basis-1/2">
                        <h3 className="font-semibold text-base">Hỗ Trợ</h3>
                        <ul className="md:flex flex-wrap justify-between leading-7 lg:flex-col pb-5">
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Trung tâm trợ giúp </a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">AirCover</a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#"> Thông tin an toàn </a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Hỗ trợ người khuyết tật</a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Các tùy chọn hủy</a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Báo cáo lo ngại của hàng xóm</a>
                            </li>
                        </ul>
                    </div>
                    <div className=" nb:mt-5 nb:border-solid border-b-[1px] lg:border-none lg:basis-1/2 lg:mt-0">
                        <h3 className="font-semibold text-base">Cộng Đồng</h3>
                        <ul className="md:flex flex-wrap justify-start leading-7 lg:flex-col pb-5">
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Airbnb.org: nhà ở cứu trợ</a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Hỗ trợ dân tị nạn Afghanistan</a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Chống phân biệt đối xử</a>
                            </li>
                        </ul>
                    </div>
                    <div className=" nb:mt-5 nb:border-solid border-b-[1px] lg:border-none lg:basis-1/2 lg:mt-0">
                        <h3 className="font-semibold text-base">Đón tiếp khách</h3>
                        <ul className="md:flex flex-wrap justify-start leading-7 lg:flex-col pb-5">
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Thử đón tiếp khách</a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">AirCover cho Chủ nhà</a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Xem tài nguyên đón tiếp khách</a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Truy cập diễn đàn cộng đồng</a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Đón tiếp khách có trách nhiệm</a>
                            </li>
                        </ul>
                    </div>
                    <div className=" nb:mt-5 nb:border-solid border-b-[1px] lg:border-none lg:basis-1/2 lg:mt-0">
                        <h3 className="font-semibold text-base">Airbnb</h3>
                        <ul className="md:flex flex-wrap justify-start leading-7 lg:flex-col pb-5">
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Trang tin tức</a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Tìm hiểu các tính năng mới</a>
                            </li>
                            <li>
                                <a href="#">Thư ngỏ từ các nhà sáng lập</a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Cơ hội nghề nghiệp</a>
                            </li>
                            <li className="hover:underline md:basis-1/3 lg:basis-0">
                                <a href="#">Nhà đầu tư</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" flex py-8 px-10 nb:border-solid border-b-[1px] lg:flex-row lg:justify-between nb:flex-col-reverse ">
                    <div>
                        <div className="md:flex lg:justify-center md:justify-center sm:justify-center">
                            <div className="pr-5 md:text-sm">
                                <a href="">© 2022 Airbnb, Inc.</a>
                            </div>
                            <div className="nb:hidden mb:inline-flex mb:text-sm">
                                <div className="hover:underline">
                                    <a href="">Quyền riêng tư</a>
                                </div>
                                <div className="hover:underline mb:px-5 ">
                                    <a href="">Điều khoản</a>
                                </div>
                                <div className="hover:underline ">
                                    <a href="">Sơ đồ trang web</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" flex items-center lg:justify-end md:justify-center sm:justify-start">
                            <div className="flex ">
                                <a href="#" className="flex items-center hover:underline">
                                    <TbWorld className="text-lg" />
                                    <span>Tiếng Việt(VN)</span>
                                </a>
                                <p className="flex items-center pl-5 hover:underline cursor-pointer">
                                    <BiDollar />
                                    USD
                                </p>
                            </div>

                            <div className="flex lg:pl-20 nb:hidden md:inline-flex md:pl-5">
                                <i className="cursor-pointer">
                                    <FaFacebookF />
                                </i>
                                <i className="px-10 hover:underline">
                                    <FaTwitter />
                                </i>
                                <i className="cursor-pointer">
                                    <FaInstagram />
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
