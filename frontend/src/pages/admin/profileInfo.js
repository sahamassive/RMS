import React from'react';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import Profile from '../../components/profile/profile';


function ProfileInfo() {
    return (
        <div>
            <div className="row">
                <SideNavbar/>
                <div className="col-sm-9">
                    <TopNavbar />
                    <Profile/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;