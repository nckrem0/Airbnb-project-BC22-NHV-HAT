import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    return (
        <div className=" 2xl:max-w-7xl 2xl:mx-auto rounded-full border-solid border-[1px] border-gray-500 ">
            <div className="flex flex-wrap justify-around items-center py-3">
                <div>
                    <h5 className="cursor-pointer">Địa Điểm</h5>
                    <input className="inputsearch border-0" name="query" placeholder="Tìm kiếm điểm đến" value="" />
                </div>
                <div>
                    <h5>Nhận Phòng</h5>
                    <span>Thêm Ngày</span>
                </div>
                <div>
                    <h5>Trả Phòng</h5>
                    <span>Thêm Ngày</span>
                </div>
                <div>
                    <h5>Khách</h5>
                    <span>Thêm Khách</span>
                </div>
                <button className="flex items-center bg-rose-500 p-3 justify-end rounded-3xl text-white">
                    <AiOutlineSearch className="text-2xl mr-2" />
                    <span className="">Tìm Kiếm</span>
                </button>
            </div>
        </div>
    );
};

export default Search;
