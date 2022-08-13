import { DefaultPerPage } from "enum/airbnb.enum";
import ILocationList from "interfaces/location-list";
import axiosClients from "./axiosClients";

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
};

export default airbnbAPI;
