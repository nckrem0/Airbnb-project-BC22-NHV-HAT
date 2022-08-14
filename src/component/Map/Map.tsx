import { useState, memo } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { IoMdPin } from "react-icons/io";
import { IRoom } from "interfaces/rooms";
import * as geolib from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

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
        zoom: 7,
    });

    return (
        <ReactMapGL
            {...viewState}
            mapStyle="mapbox://styles/nckrem/cl6rooi70003z14n0rg8smzru"
            mapboxAccessToken="pk.eyJ1IjoibmNrcmVtIiwiYSI6ImNsNnJvbDBvMjBjbnIzZnF0Z3N2cGRvam4ifQ.mo96a9R_5ul7E2Gms1YRbg"
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
