import React from "react";

// Components
import CarouselSlider from "../components/CarouselSlider";
import Video from "../components/Video";
import TeamMoments from "../components/TeamMoments";
import Card from "../components/Card";
import Discount from "../components/Discount";
import TopSales from "../components/TopSales";
import BullsSales from "../components/BullsSales";

function Home() {

  return (
    <>
      <CarouselSlider />
      <Video />
      <TeamMoments />
      <Card />
      <Discount />
      <TopSales />
      <BullsSales />
    </>
  )
};

export default Home;