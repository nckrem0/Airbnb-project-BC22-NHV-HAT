import { IRoomDetails } from "interfaces/room-details";
import { EnumThunkAction } from "../enum/airbnb.enum";
import ILocationList from "../interfaces/location-list";
import axiosClients from "./axiosClients";
const airbnbAPIDemo = {
  getLocationList: () => {
    return axiosClients.get<unknown, ILocationList[]>(
      EnumThunkAction.GET_LOCATION_LIST_DEMO
    );
  },
  getListRoomRental: (locationId: string) => {
    return axiosClients.get<unknown, IRoomDetails[]>(
      `/rooms?locationId=${locationId}`
    );
  },
};
export default airbnbAPIDemo;
