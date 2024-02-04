import React from "react";
import Topbar from '../../components/topbar/Topbar';
import SideBar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/Rightbar';
import './Home.css'

export default function Home(){
    return(
        <>
            <Topbar/>
            <div className="homeContainer">
                <SideBar/>
                <Feed/>
                <RightBar/>
            </div>
        </>
    )
}