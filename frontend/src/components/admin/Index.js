import React from 'react';
import SideNavbar from '../SideNavbar/SideNavbar';
import TopNavbar from '../TopNavbar/TopNavbar';
import QuickAccessBar from '../QuickAccessbar/QuickAccessbar';
import EmployeeRegistration from '../EmployeeRegistration/EmployeeRegistration';

function Index() {
    return (
        <div>
            <div className="row">
                <SideNavbar/>
                <div className="col-sm-9">
                    <TopNavbar />
                    <QuickAccessBar />
                    <EmployeeRegistration/>
                </div>
            </div>
        </div>
    );
};

export default Index;