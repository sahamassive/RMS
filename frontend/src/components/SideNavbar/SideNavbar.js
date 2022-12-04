import logo from '../../asset/image/logo/logo.png';
import React  from 'react';
import './SideNavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SideNavbar() {
    return (
        <div className="col-sm-3">
            <div className="left_navigation">
                <img className="logo nav_bg" src={ logo } alt=""></img>
                <p className="company_name nav_bg">
                    <span className="res">Restaurant</span> FOOD</p>
                <div className="nav_bg">
                    <p className="nav_buttons nav_bg"><i className="fa-solid fa-house icon"></i>Dashboard</p>
                    <p className="nav_buttons nav_bg"><i className="fa-brands fa-sellcast icon"></i>POS Management</p>
                    <p className="nav_buttons nav_bg"><i className="fa-brands fa-first-order icon"></i>Order Management</p>
                    <p className="nav_buttons nav_bg"><i className="fa-solid fa-users icon"></i>HR Management</p>
                    <p className="nav_buttons nav_bg"><i className="fa-solid fa-money-bills icon"></i>Account Management</p>
                </div>
            </div>
        </div>
    );
};

export default SideNavbar;