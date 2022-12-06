import React from'react';
import SideNavbar from '../../../components/SideNavbar/SideNavbar';
import TopNavbar from '../../../components/TopNavbar/TopNavbar';
import FoodItem from '../../../components/FoodItem/Food';
import QuickAccessBar from '../../../components/QuickAccessbar/QuickAccessbar';


function Food() {
    return (
        <div>
            <div className="row">
                <SideNavbar/>
                <div className="col-sm-9">
                    <TopNavbar />
                    <QuickAccessBar />
                    <FoodItem/>
                </div>
            </div>
        </div>
    );
};

export default Food;
