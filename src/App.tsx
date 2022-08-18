import RoomDetail from "pages/Detail/RoomDetail";
import Home from "pages/Home/Home";
import Host from "pages/Host/Host";
import Room from "pages/Room/Room";
import Login from "pages/Login";
import { Routes, Route } from "react-router-dom";
import MainTemplate from "template/MainTemplate";
import Signup from "pages/Signup";
import Location from "pages/Demo/Location";
import Account from "component/Account/Account";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route path="rooms/:locationId/:detailId" element={<RoomDetail />} />
          <Route path="rooms/:locationId" element={<Room />} />
          <Route path="host/:homes" element={<Host />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="demo" element={<Location />} />
          <Route path="users/:userId" element={<Account />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
