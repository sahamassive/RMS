import profile from '../../asset/image/profile/profile.jpg';
import React from 'react';
import './TopNavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function TopNavbar() {
    return (
        <div>
            <div className="top_nav">
                <input className="search_box" type="text" placeholder='Search'></input>
                <div className="section_03">
                    <div className='top_nav_bg'>
                        <i className="fa-solid fa-message bg_01"></i>
                        <i className="fa-solid fa-gear bg_01"></i>
                        <i className="fa-solid fa-bell bg_01"></i>
                    </div>
                    <div className='top_nav_bg'>
                    <span className="name_01">Kalam Mahmud</span>
                    <img className="profile nav_bg" src={ profile } alt=""></img>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default TopNavbar;