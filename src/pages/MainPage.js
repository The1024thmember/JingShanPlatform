import SearchBar from "../components/SearchBar/SearchBar";
import EntryCards from "../components/EntryCards/EntryCards";
import Footer from "../components/Footer/Footer";
import MainPageRecommend from "../components/MainPageRecommend/MainPageRecommend";
import React from "react";

function Main(){
    return (
        <div className = 'mainPage'>
            <SearchBar />
            <EntryCards />
            <MainPageRecommend/>
            <Footer />
        </div>
    )
}

export default Main;