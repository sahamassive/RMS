import profile from '../../asset/image/profile/profile.jpg';
import React from 'react';
import './profile.css';
import Button from 'react-bootstrap/Button';

function Profile() {
    return (
        <div className='two_part'>
            <div className="col-sm-3 background">
                <img class="image" src={profile}></img>
                <p class="lavel_01 background">Chef</p>
                <p class="mail background"><i class="fa-solid fa-envelope icon"></i>Email
                    <br></br> chef@gmail.com</p>
                
                <p class="mail background"><i class="fa-solid fa-envelope icon"></i>Contact
                    <br></br> +88 01976 345654</p>
            
                <p class="mail background"><i class="fa-solid fa-envelope icon"></i>Address
                <br></br> Road-09, Building-23, Mirpur-2, dhaka-1216</p>
            </div>  
            <div className="col-sm-9 background">
                <div className='btn-background'>
                    <button class="btn btn-warning btn-style3">Attendence</button>
                    <button class="btn btn-warning btn-style3">Complete order</button>
                    <button class="btn btn-warning btn-style3">Performance</button>
                    <button class="btn btn-warning btn-style3">Cancel Order</button>
                    <button class="btn btn-warning btn-style3">Waste count</button>
                    <button class="btn btn-warning btn-style3">Absence</button>
                    <button class="btn btn-warning btn-style3">Review</button>
                </div>
                <h4 className='level2 background'><i class="fa-solid fa-user-pen icon"></i>Recent Activity</h4>
                <p className='activity background'>Table no-08 : Running Order</p>
                <p className='activity background'>Table no-10 : Completed Order
                  <br></br>Customer rating: 5 star</p>
                <p className='activity background'>Table no-08 : Running Order</p>
                <p className='activity background'>Table no-08 : Running Order</p>
                <p className='activity background'>Table no-08 : Running Order</p>
                <p className='activity background'>Table no-08 : Running Order</p>
                <p className='activity background'>Table no-08 : Running Order</p>
                <p className='activity background'>Table no-08 : Running Order</p>
                <p className='activity background'>Table no-08 : Running Order</p>
            </div>
        </div>
    );
}
export default Profile;