import { IRoom } from "interfaces/rooms";
export interface IReview {
    deleteAt: boolean;
    _id: string;
    content: string;
    roomId: IRoom;
    userId: null;
    created_at: Date;
    updatedAt: Date;
    __v: number;
}
