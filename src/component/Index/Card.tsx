import { Image } from "@mantine/core";
import React from "react";

type Props = {
    img: string;
    distance: string;
    location: string;
};

const Card = (props: Props) => {
    const item = props;
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            <div className="relative h-16 w-16">
                <img src={item.img} alt={item.location} className="rounded-lg" />
            </div>
            <div>
                <h2>{item.location}</h2>
                <h3>{item.distance}</h3>
            </div>
        </div>
    );
};

export default Card;
