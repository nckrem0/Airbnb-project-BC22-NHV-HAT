import axios from "axios";
import ILocationList from "interfaces/location-list";
import { useEffect, useRef, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoLocation } from "react-icons/go";

import { getLocationListDemo } from "slices/locationDemo";
import { AppDispatch, RootState } from "store";

type Props = {
    setPickUpId(value: string): void;
};

const Location = (props: Props) => {
    const [getIdLocation, setGetIdLocation] = useState("");
    const [locations, setLocations] = useState("");

    const { data, isLoading, error } = useSelector((state: RootState) => state.location);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getLocationListDemo());
    }, [dispatch]);

    const searchLocations = (event: any) => {
        setLocations(event.target.value);
    };
    const onSearch = (searchTerm: string, idLocation: string) => {
        setLocations(searchTerm);

        setGetIdLocation(idLocation);
        props.setPickUpId(idLocation);
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>Error...</h1>;
    }

    return (
        <div className="container mx-auto">
            <div>
                <input
                    type="text"
                    placeholder="Tìm kiếm điểm đến "
                    value={locations}
                    onChange={searchLocations}
                    className="bg-gray-200 text-sm outline-none bg-transparent"
                />
            </div>

            <div className="bg-white shadow-2xl flex flex-col  px-8 mt-3 rounded-xl w-[300px] ">
                {data
                    ?.filter((location) => {
                        const searchTerm = String(locations).toLowerCase();
                        const name = String(location.province).toLowerCase();

                        return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
                    })
                    .slice(0, 5)
                    .map((location) => {
                        return (
                            <div
                                key={location._id}
                                className=" font-montserrat font-medium  text-start cursor-pointer my-[2px]  mt-3   "
                                onClick={() => onSearch(location.province, location._id)}
                            >
                                <div className=" flex items-center mb-3  ">
                                    <div className=" flex items-center justify-center content-center w-10 h-10 rounded-lg bg-gray-200 mr-2 ">
                                        <GoLocation className="block w-5 h-5" />
                                    </div>

                                    <div>{location.province}</div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default memo(Location);
