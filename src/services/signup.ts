import { EnumThunkAction } from "enum/airbnb.enum";
import { ISingup } from "interfaces/signup.interfaces";
import axiosClient from "./axiosClients";

const signupAPI = {
  // add New User
  userRegister: (data: ISingup) => {
    return axiosClient.post<unknown, ISingup>(
      EnumThunkAction.REGISTER_URL,
      data
    );
  },
};

export default signupAPI;
