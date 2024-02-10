import React from "react";
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import './Home.css'
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home(){
    return(
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    )
}