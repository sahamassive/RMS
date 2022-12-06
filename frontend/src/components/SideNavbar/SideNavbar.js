import logo from '../../asset/image/logo/logo.png';
import React  from 'react';
import './SideNavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactSession } from 'react-client-session';

function SideNavbar() {
  ReactSession.setStoreType("localStorage");
    return (
        <div className="col-sm-3">
        <div className="left_navigation">
            <header className='nav_bg'>
              <img className="logo nav_bg" src={ logo } alt=""></img>
              <p className="company_name nav_bg">
                  <span className="res">Restaurant</span> FOOD</p>
            </header>
          <div className="nav_bg">
                    <button className="nav_buttons"><a href='/'><i className="fa-solid fa-house icon"></i>Dashboard</a></button>
                    <button className="nav_buttons"><a href='/admin/food-section'><i className="fa-brands fa-sellcast icon"></i>Section</a></button>
                    <button className="nav_buttons"><a href='/admin/food-category'><i className="fa-brands fa-first-order icon"></i>Category</a></button>
                    <button className="nav_buttons"><a href='/admin/food'><i className="fa-solid fa-users icon"></i>Food</a></button>
                    <button className="nav_buttons"><a href='/'><i className="fa-solid fa-money-bills icon"></i>Account Management</a></button>
                </div>
            </div>
        </div>
    );
};

export default SideNavbar;