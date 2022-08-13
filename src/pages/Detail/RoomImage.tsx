import { HiViewGridAdd } from "react-icons/hi";

const RoomImage = () => {
    return (
        <div className="relative">
            <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-2 gap-2">
                <div className="col-span-2 row-span-2">
                    <img
                        src="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720"
                        alt="photo"
                        className="w-full h-[60vh] rounded-l-2xl"
                    />
                </div>
                <div>
                    <img
                        src="https://a0.muscache.com/im/pictures/7c586cfa-6a5c-4ec1-8fcd-5890b6a50769.jpg?im_w=720"
                        alt="photo"
                        className="w-full h-full"
                    />
                </div>
                <div>
                    <img
                        src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"
                        alt="photo"
                        className="w-full h-full rounded-tr-2xl"
                    />
                </div>
                <div className="">
                    <img
                        src="https://a0.muscache.com/im/pictures/4ee4b710-db54-417a-a2ee-9a3500cd0879.jpg?im_w=720"
                        alt="photo"
                        className="w-full h-full"
                    />
                </div>
                <div>
                    <img
                        src="https://a0.muscache.com/im/pictures/8d085e29-d5d6-4cd5-908b-38b05f4f669b.jpg?im_w=720"
                        alt="photo"
                        className="w-full h-full rounded-br-2xl"
                    />
                </div>
            </div>
            <div className="flex items-center cursor-pointer absolute bottom-10 right-5">
                <div className="flex bg-white border-solid border-[1px] border-black p-2 rounded-xl">
                    <HiViewGridAdd className="text-xl" />
                    <span className="font-medium text-sm pl-1">Hiển thị tất cả ảnh</span>
                </div>
            </div>
        </div>
    );
};

export default RoomImage;
