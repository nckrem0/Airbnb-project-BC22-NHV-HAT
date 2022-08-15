import { DefaultPerPage } from "enum/airbnb.enum";
import ILocationList from "interfaces/location-list";
import { IRoomDetails } from "interfaces/room-details";
import { IRoom } from "interfaces/rooms";
import { IReview } from "interfaces/review";

import axiosClients from "./axiosClients";

const airbnbAPI = {
    getLocationList: (offset?: number, location?: string, limit?: number) => {
        // if (typeof limit === "undefined") {
        //     limit = DefaultPerPage.PERPAGE;
        // }
        let url = `/locations?limit=${limit}`;

        if (typeof offset !== "undefined") {
            url += `&offset=${offset}`;
        }
        if (typeof location !== "undefined") {
            url += `&location=${location}`;
        }
        return axiosClients.get<unknown, ILocationList[]>(url);
    },
    getRoomsList: (locationId?: string, limit?: number, offset?: number) => {
        if (typeof limit === "undefined") {
            limit = DefaultPerPage.PERPAGE;
        }
        let url = `/rooms?limit=${limit}`;

        if (typeof offset !== "undefined") {
            url += `&offset=${offset}`;
        }
        if (typeof locationId !== "undefined") {
            url += `&locationId=${locationId}`;
        }
        return axiosClients.get<unknown, IRoom[]>(url);
    },
    getRoomDetailList: (detailId: string) => {
        return axiosClients.get<unknown, IRoomDetails>(`/rooms/${detailId}`);
    },
    getReviewlList: (roomId: string) => {
        return axiosClients.get<unknown, IReview[]>(`reviews/byRoom?roomId=${roomId}`);
    },
};

export default airbnbAPI;
