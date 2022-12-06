import React from'react';
import SideNavbar from '../../../components/SideNavbar/SideNavbar';
import TopNavbar from '../../../components/TopNavbar/TopNavbar';
import QuickAccessBar from '../../../components/QuickAccessbar/QuickAccessbar';
import Food from '../../../components/foodCategory/FoodCategory';


function FoodCategory() {
    return (
        <div>
            <div className="row">
                <SideNavbar/>
                <div className="col-sm-9">
                    <TopNavbar />
                    <QuickAccessBar />
                    <Food/>
                </div>
            </div>
        </div>
    );
}

export default FoodCategory;