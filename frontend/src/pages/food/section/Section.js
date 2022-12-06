import React from'react';
import SideNavbar from '../../../components/SideNavbar/SideNavbar';
import TopNavbar from '../../../components/TopNavbar/TopNavbar';
import QuickAccessBar from '../../../components/QuickAccessbar/QuickAccessbar';
import FoodSection from '../../../components/foodSection/FoodSection';


function Section() {
    return (
        <div>
            <div className="row">
                <SideNavbar/>
                <div className="col-sm-9">
                    <TopNavbar />
                    <QuickAccessBar />
                    <FoodSection/>
                </div>
            </div>
        </div>
    );
}

export default Section;