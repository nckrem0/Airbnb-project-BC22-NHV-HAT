import { EnumThunkAction } from "enum/airbnb.enum";
import { CurrentUser } from "interfaces/info-CurrentUser";
import axiosClient from "./axiosClients";

interface LoginValues {
  email: string;
  password: string;
}

const authAPI = {
  login: (values: LoginValues) => {
    return axiosClient.post<unknown, CurrentUser>(
      EnumThunkAction.LOGIN_URL,
      values
    );
  },
};

export default authAPI;
