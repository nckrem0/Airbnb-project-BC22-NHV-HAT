import { useState, memo } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { IoMdPin } from "react-icons/io";
import { IRoom } from "interfaces/rooms";
import * as geolib from "geolib";
// import "mapbox-gl/dist/mapbox-gl.css";
import { MapConfig } from "enum/config.enum";

type Props = {
    searchResults: IRoom[];
};

interface ICenterCoordinate {
    latitude: number;
    longitude: number;
}

const Map = (props: Props) => {
    const { searchResults } = props;
    const coordinates = searchResults.map((result) => {
        return {
            latitude: result.latitude,
            longitude: result.longitude,
        };
    });

    const centerCoordinate = geolib.getCenter(coordinates) as ICenterCoordinate;

    const [viewState, setViewState] = useState({
        longitude: centerCoordinate.longitude,
        latitude: centerCoordinate.latitude,
        zoom: 15,
    });

    return (
        <ReactMapGL
            {...viewState}
            mapStyle={MapConfig.STYLES}
            mapboxAccessToken={MapConfig.TOKEN}
            style={{ width: "100%", height: "100%" }}
            onMove={(evt) => setViewState(evt.viewState)}
            attributionControl={false}
        >
            {searchResults.map((result) => {
                return (
                    <Marker longitude={result.longitude} latitude={result.latitude} key={result._id} anchor="center">
                        <div className="bg-white rounded-full py-2 px-3 shadow-gray-300 shadow-sm">
                            <h2 className="font-bold leading-4 tracking-wider hover:text-sm">
                                {`${result.price.toLocaleString("vi-VN")} VND`}
                            </h2>
                        </div>
                    </Marker>
                );
            })}
        </ReactMapGL>
    );
};

export default memo(Map);
