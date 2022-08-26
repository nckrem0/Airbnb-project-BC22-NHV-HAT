import RoomDetail from "pages/Detail/RoomDetail";
import Home from "pages/Home/Home";
import Host from "pages/Host/Host";
import Room from "pages/Room/Room";
import Login from "pages/Login";
import { Routes, Route } from "react-router-dom";
import MainTemplate from "template/MainTemplate";
import Signup from "pages/Signup";
import RoomList from "pages/RoomDemo/RoomList";

import Account from "component/Account/Account";
import Header from "component/Header";
import { useState } from "react";
import RoomWithMap from "pages/Room/RoomWithMap";

function App() {
  const [getStartDate, setGetStartDate] = useState(new Date());
  const [getEndDate, setGetEndDate] = useState(new Date());

  return (
    <>
      <Header setGetEndDate={setGetEndDate} setGetStartDate={setGetStartDate} />
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route path="rooms/:locationId/:detailId" element={<RoomDetail />} />
          <Route
            path="rooms/:startDate/:startMonth/:endDate/:endMonth/:locationId"
            element={<Room />}
          />
          <Route path="rooms/:locationId" element={<RoomWithMap />} />
          <Route path="host" element={<Host />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="rooms/locationId/:startDate/:startMonth/:endDate/:endMonth/:locationId"
            element={<RoomList />}
          />
          <Route path="users" element={<Account />} />
          <Route
            index
            element={
              <Home getEndDate={getEndDate} getStartDate={getStartDate} />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
