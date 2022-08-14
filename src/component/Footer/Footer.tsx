import { TbWorld } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-100">
            <div className="2xl:max-w-7xl 2xl:mx-auto ">
                <div className="flex justify-between py-8 text-sm leading-10">
                    <div>
                        <h3 className="font-semibold text-base">Hỗ Trợ</h3>
                        <ul>
                            <li className="hover:underline">
                                <a href="#">Trung tâm trợ giúp </a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">AirCover</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#"> Thông tin an toàn </a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Hỗ trợ người khuyết tật</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Các tùy chọn hủy</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Báo cáo lo ngại của hàng xóm</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-base">Cộng Đồng</h3>
                        <ul>
                            <li className="hover:underline">
                                <a href="#">Airbnb.org: nhà ở cứu trợ</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Hỗ trợ dân tị nạn Afghanistan</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Chống phân biệt đối xử</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-base">Đón tiếp khách</h3>
                        <ul>
                            <li className="hover:underline">
                                <a href="#">Thử đón tiếp khách</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">AirCover cho Chủ nhà</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Xem tài nguyên đón tiếp khách</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Truy cập diễn đàn cộng đồng</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Đón tiếp khách có trách nhiệm</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-base">Airbnb</h3>
                        <ul>
                            <li className="hover:underline">
                                <a href="#">Trang tin tức</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Tìm hiểu các tính năng mới</a>
                            </li>
                            <li>
                                <a href="#">Thư ngỏ từ các nhà sáng lập</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Cơ hội nghề nghiệp</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Nhà đầu tư</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="flex justify-between py-8">
                    <div>
                        <ul className="flex">
                            <li className="hover:underline">
                                <a href="">© 2022 Airbnb, Inc.</a>
                            </li>
                            <li className="hover:underline px-5">
                                <a href="">Quyền riêng tư</a>
                            </li>
                            <li className="hover:underline pr-5">
                                <a href="">Điều khoản</a>
                            </li>
                            <li className="hover:underline">
                                <a href="">Sơ đồ trang web</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center">
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

                        <div className="flex pl-20">
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
    );
};

export default Footer;
