import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { RootState } from "store";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const { currentUser, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const handleMenu = () => {
    {
      Object.keys(currentUser).length
        ? setOpenAccount(!openAccount)
        : setOpenMenu(!openMenu);
    }

    // Kiểm tra currentUser có phải là object rỗng hay không, nếu không phải => user đã đăng nhập

    // Redirect user về trang Home
  };

  return (
    <nav className="  bg-white  border-solid border-2 shadow-lg p-2 text-[25px] rounded-[40px] ml-5 ">
      <button className="flex " onClick={handleMenu}>
        <AiOutlineMenu />
        <FaUserCircle className="ml-2" />
      </button>
      {openAccount && (
        <div className=" list-none absolute bottom-[-17rem] right-48 bg-gray-500  shadow-lg text-left text-sm p-5 text-[10px] rounded-b-lg ">
          <div className="flex flex-col">
            <Link to="/users" className="cursor-poiter my-5 text-[16px] ">
              Thông Tin Cá Nhân
            </Link>

            <Link to="/login" className="cursor-poiter my-5 text-[16px]">
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
        <div className=" list-none absolute bottom-[-17rem] right-48 bg-gray-500  shadow-lg text-left text-sm p-5 text-[10px] rounded-b-lg ">
          <div className="flex flex-col">
            <Link to="/signup" className="cursor-poiter my-5 text-[16px] ">
              Đăng Ký
            </Link>
            <Link to="/login" className="cursor-poiter my-5 text-[16px]">
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
