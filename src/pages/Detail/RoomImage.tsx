import { HiViewGridAdd } from "react-icons/hi";
import { IRoomDetails } from "interfaces/room-details";

type Props = {
    dataRoom: IRoomDetails;
};
const RoomImage = (props: Props) => {
    const { dataRoom } = props;
    return (
        <div>
            <div className="relative">
                <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-2 gap-2">
                    <div className="md:col-span-2 row-span-2 nb:col-span-4">
                        <img
                            src={dataRoom.image}
                            alt="photo"
                            className="w-full h-[60vh] md:rounded-l-2xl nb:rounded-none"
                        />
                    </div>
                    <div>
                        <img src={dataRoom.image} alt="photo" className="w-full h-full nb:hidden md:inline" />
                    </div>
                    <div>
                        <img
                            src={dataRoom.image}
                            alt="photo"
                            className="w-full h-full rounded-tr-2xl nb:hidden md:inline"
                        />
                    </div>
                    <div className="">
                        <img src={dataRoom.image} alt="photo" className="w-full h-full nb:hidden md:inline" />
                    </div>
                    <div>
                        <img
                            src={dataRoom.image}
                            alt="photo"
                            className="w-full h-full rounded-br-2xl nb:hidden md:inline"
                        />
                    </div>
                </div>
                <div className="flex items-center cursor-pointer absolute bottom-10 right-5">
                    <div className="flex bg-white border-solid border-[1px] border-black p-2 rounded-xl nb:hidden md:inline-flex">
                        <HiViewGridAdd className="text-xl" />
                        <span className="font-medium text-sm pl-1">Hiển thị tất cả ảnh</span>
                    </div>
                    <div className="nb:inline md:hidden border-black bg-transparent border-solid border-[1px] rounded-lg px-3 ">
                        <span className="text-white">1/10</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomImage;
