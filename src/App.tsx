import RoomDetail from "pages/Detail/RoomDetail";
import Home from "pages/Home/Home";
import Host from "pages/Host/Host";
import { Routes, Route } from "react-router-dom";
import MainTemplate from "template/MainTemplate";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainTemplate />}>
                    <Route path="rooms/:roomID" element={<RoomDetail />} />
                    <Route path="host/:homes" element={<Host />} />
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
