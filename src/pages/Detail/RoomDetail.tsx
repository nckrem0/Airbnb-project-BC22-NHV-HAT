import React from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineSmallDash } from "react-icons/ai";
import { GiRibbonMedal } from "react-icons/gi";
import { FaShare } from "react-icons/fa";
import RoomContent from "./RoomContent";
import RoomImage from "./RoomImage";
type Props = {};

const RoomDetail = (props: Props) => {
    return (
        <div className="2xl:max-w-6xl 2xl: mx-auto">
            <div>
                <h1 className="font-bold text-2xl">Adaaran Rannalhi, Maldives, Water Bungalows</h1>
            </div>
            <div className="flex justify-between underline font-semibold">
                <div className="flex">
                    <div className="flex items-center">
                        <AiFillStar className="text-rose-500 text-lg" />
                        <span>4,83 (18 Votes)</span>
                    </div>
                    <div className="flex items-center px-8">
                        <GiRibbonMedal className="text-rose-500 text-lg" />
                        <span>Chủ nhà siêu cấp</span>
                    </div>
                    <div className="cursor-pointer">
                        <p>Maldives</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex items-center pr-4 cursor-pointer">
                        <FaShare className="text-lg" />
                        <span>Share</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <AiOutlineHeart className="text-lg" />
                        <span>Save</span>
                    </div>
                </div>
            </div>
            <div>
                <RoomImage />
            </div>
            <div>
                <RoomContent />
            </div>
        </div>
    );
};

export default RoomDetail;
