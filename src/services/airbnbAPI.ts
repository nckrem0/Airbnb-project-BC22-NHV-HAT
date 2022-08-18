import { DefaultPerPage } from "enum/airbnb.enum";
import ILocationList from "interfaces/location-list";
import { IRoomDetails } from "interfaces/room-details";
import { IRoom } from "interfaces/rooms";
import { IReview } from "interfaces/review";

import axiosClients from "./axiosClients";
import { IAccount } from "interfaces/account";

const airbnbAPI = {
    getLocationList: (offset?: number, location?: string, limit?: number) => {
        if (typeof limit === "undefined") {
            limit = DefaultPerPage.PERPAGE;
        }
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
            url += `/rooms?locationId=${locationId}`;
        }
        return axiosClients.get<unknown, IRoom[]>(url);
    },
    getRoomDetailList: (detailId: string) => {
        return axiosClients.get<unknown, IRoomDetails>(`/rooms/${detailId}`);
    },
    getReviewlList: (roomId: string) => {
        return axiosClients.get<unknown, IReview[]>(`reviews/byRoom?roomId=${roomId}`);
    },
    getAccountInfo: (userId: string) => {
        return axiosClients.get<unknown, IAccount>(`/users/${userId}`);
    },
    getListRoomRental: (locationId: string) => {
        return axiosClients.get<unknown, IRoom[]>(`/rooms?locationId=${locationId}`);
    },
};

export default airbnbAPI;
