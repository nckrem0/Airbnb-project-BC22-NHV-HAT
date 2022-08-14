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
                    <div className="col-span-2 row-span-2">
                        <img src={dataRoom.image} alt="photo" className="w-full h-[60vh] rounded-l-2xl" />
                    </div>
                    <div>
                        <img src={dataRoom.image} alt="photo" className="w-full h-full" />
                    </div>
                    <div>
                        <img src={dataRoom.image} alt="photo" className="w-full h-full rounded-tr-2xl" />
                    </div>
                    <div className="">
                        <img src={dataRoom.image} alt="photo" className="w-full h-full" />
                    </div>
                    <div>
                        <img src={dataRoom.image} alt="photo" className="w-full h-full rounded-br-2xl" />
                    </div>
                </div>
                <div className="flex items-center cursor-pointer absolute bottom-10 right-5">
                    <div className="flex bg-white border-solid border-[1px] border-black p-2 rounded-xl">
                        <HiViewGridAdd className="text-xl" />
                        <span className="font-medium text-sm pl-1">Hiển thị tất cả ảnh</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomImage;
