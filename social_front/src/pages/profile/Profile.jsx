import React from "react";
import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import SideBar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/Rightbar';


export default function Profile(){
    return(
        <>
            <Topbar/>
            <div className="profile">
                <SideBar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                            <img src="assets/person/7.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">el interne</h4>
                            <span className="profileInfoDesc">Hetha houwa el thake2 el istine3i!!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <RightBar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}