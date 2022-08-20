import Footer from "component/Footer";
import Header from "component/Header";
import Index from "component/Index/Index";
import { type } from "os";
import { useState } from "react";
import Location from "./Location";
type Props = {
  getEndDate: Date;
  getStartDate: Date;
};

const Home = (props: Props) => {
  const { getStartDate, getEndDate } = props;

  return (
    <div>
      <Location getEndDate={getEndDate} getStartDate={getStartDate} />
      <Index />
    </div>
  );
};

export default Home;
