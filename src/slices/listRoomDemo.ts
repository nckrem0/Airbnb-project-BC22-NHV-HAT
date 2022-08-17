import { IRoomDetails } from "interfaces/room-details";

interface ListRoomState {
  data: IRoomDetails;
  isLoading: boolean;
  error: string;
}
