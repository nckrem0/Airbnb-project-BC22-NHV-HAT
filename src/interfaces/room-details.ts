import { ILocationList } from "interfaces/location-list";
export interface IRoomDetails {
    deleteAt: boolean;
    _id: string;
    name: string;
    guests: number;
    bedRoom: number;
    bath: number;
    description: string;
    price: number;
    elevator: boolean;
    hotTub: boolean;
    pool: boolean;
    indoorFireplace: boolean;
    dryer: boolean;
    gym: boolean;
    kitchen: boolean;
    wifi: boolean;
    heating: boolean;
    cableTV: boolean;
    locationId: ILocationList;
    __v: number;
    image: string;
}
