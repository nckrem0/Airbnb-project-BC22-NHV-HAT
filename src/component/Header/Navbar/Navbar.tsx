import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logout } from "slices/auth";

import { RootState } from "store";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const dispatch = useDispatch();
  const { currentUser, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );
  const navigation = useNavigate();

  const handleMenu = () => {
    {
      Object.keys(currentUser).length
        ? setOpenAccount(!openAccount)
        : setOpenMenu(!openMenu);
    }
  };
  const handleLogOut = () => {
    dispatch(logout());
    setOpenAccount(false);
  };

  return (
    <nav className="  bg-white  border-solid border-2 shadow-lg p-2 text-[25px] rounded-[40px] ml-5 ">
      <button className="flex " onClick={handleMenu}>
        <AiOutlineMenu />
        <FaUserCircle className="ml-2" />
      </button>
      {openAccount && (
        <div className=" list-none absolute top-28 right-48 bg-white  shadow-lg text-left text-sm p-5 text-[10px] rounded-b-lg ">
          <div className="flex flex-col">
            <Link to="/users" className="cursor-poiter my-5 text-[16px] ">
              Thông Tin Cá Nhân
            </Link>

            <Link
              to="/login"
              className="cursor-poiter my-5 text-[16px] "
              onClick={handleLogOut}
            >
              Đăng Xuất
            </Link>
            <hr />

            <Link to="/" className="cursor-poiter my-5 text-[16px] ">
              Cho Thuê Nhà
            </Link>
            <Link to="/" className="cursor-poiter my-5 text-[16px]">
              Tổ Chức Trải Nghiệm
            </Link>
            <li className="cursor-poiter my-5 text-[16px]">Trợ Giúp</li>
          </div>
        </div>
      )}

      {openMenu && (
        <div className=" list-none absolute top-28 right-48 bg-white shadow-2xl text-left text-sm p-5 text-[10px] rounded-b-lg ">
          <div className="flex flex-col">
            <Link to="/signup" className="cursor-poiter my-5 text-[16px] ">
              Đăng Ký
            </Link>
            <Link
              to="/login"
              className="cursor-poiter my-5 text-[16px]"
              onClick={() => setOpenMenu(false)}
            >
              Đăng Nhập
            </Link>
            <hr />

            <Link to="/" className="cursor-poiter my-5 text-[16px] ">
              Cho Thuê Nhà
            </Link>
            <Link to="/" className="cursor-poiter my-5 text-[16px]">
              Tổ Chức Trải Nghiệm
            </Link>
            <li className="cursor-poiter my-5 text-[16px]">Trợ Giúp</li>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
