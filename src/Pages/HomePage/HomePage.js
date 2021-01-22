import React from 'react';
import Slider from "../../Component/Slider/Slider";
import HeaderCard from "../../Component/Cards/HeaderCard";
import CardList from "../../Component/Cards/CardList";
import Services from "../../Component/Services/Services";

const HomePage =()=>(
    <div>
        <Slider/>
        <HeaderCard/>
        <CardList/>
        <Services/>
    </div>
);
export default HomePage;