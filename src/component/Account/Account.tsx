import { SiAdguard } from "react-icons/si";
import { BsCheck } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAccountlList } from "slices/account";
import { IAccount } from "interfaces/account";

const Account = () => {
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.account
  );
  const urlParams = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAccountlList(data._id));
  }, []);

  return (
    <div>
      <div className="2xl:max-w-7xl mx-auto py-20 flex">
        <div className="border-solid border-[1px] w-1/4 pt-10 rounded-xl">
          <div className="flex flex-col  items-center">
            <img src="" alt="" className="rounded-full" />
            <span className="underline pt-2 font-medium">Cập nhật ảnh</span>
          </div>
          <div className="px-5 pt-10 leading-10">
            <div>
              <SiAdguard />
            </div>
            <div className="border-solid border-b-[1px]">
              <h3 className="font-medium">Xác minh danh tính</h3>
              <p className="leading-5 pb-5">
                Xác thực danh tính của bạn với huy hiệu xác minh danh tính
              </p>
              <button className="border-solid border-[1px] border-black px-5 rounded-xl font-medium mb-5">
                Nhận Huy Hiệu
              </button>
            </div>
            <div>
              <h1>Name - Đã xác nhận</h1>
              <div className="flex items-center">
                <BsCheck className="text-2xl" />
                <span className="pl-1">Địa chỉ email</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-20 w-3/5">
          <div className="leading-8">
            <h1 className="text-3xl font-semibold">Xin Chào, tôi là (Name)</h1>
            <span>Bắt đầu tham gia vào 2022</span>
            <p className="underline font-medium cursor-pointer">
              Chỉnh sửa hồ sơ
            </p>
          </div>

          <div className="flex my-5 border-solid border-b-[1px]">
            <div className="pb-7 items-center flex">
              <AiFillStar className="text-center" />
              <span className="pl-1 font-medium">0 Đánh giá</span>
            </div>
          </div>
          <div className="border-solid border-b-[1px]">
            <p className="pb-7 font-medium">Đánh giá của bạn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
