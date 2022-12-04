import React, { useState } from 'react';
import './EmployeeRegistration.css';
import AccountDetails from'./AccountDetails';
import Address from './Address';
import Others from './Others';
import Password from './Password';

function EmployeeRegistration() { 
    const [accountDetails, setAccountDetails] = useState(true);
    const [address, setAddress] = useState(false);
    const [password, setPassword] = useState(false);
    const [others, setOthers] = useState(false);
    
    const AccountDetails2 = () => {
        setAccountDetails(true);
        setAddress(false);
        setOthers(false);
        setPassword(false);
    }
    
    const Address2 = () => {
        setAccountDetails(false);
        setAddress(true);
        setPassword(false);
        setOthers(false);
    }

    const Password2 = () => {
        setPassword(true);
        setAddress(false);
        setOthers(false);
        setAccountDetails(false);
    }

    const Others2 = () => {
        setOthers(true);
        setAddress(false);
        setPassword(false);
        setAccountDetails(false);
    }
    return (
        <div>
            <form>
                <div className='two_part'>
                    <div className="col-sm-3 background">
                        <p className="text_style background"><h5 className="text_style background"><i class="fa-solid fa-user-tie icon"></i>Account Setting</h5>Personal Information</p>
                        <a onClick={AccountDetails2}><p className="btn_style_active icon2"><i className="fa-solid fa-house icon"></i>Account Details</p></a>
                        <a onClick={Address2}><p className="btn_style_inactive icon2"><i className="fa-brands fa-sellcast icon"></i>Address</p></a>
                        <a onClick={Password2}><p className="btn_style_inactive icon2"><i className="fa-brands fa-first-order icon"></i>Password</p></a>
                        <a onClick={Others2}><p className="btn_style_inactive icon2"><i className="fa-solid fa-users icon"></i>Others</p></a>
                    </div>
                    

                    <div className="col-sm-9 background">
                    <div className="col-sm-6 background icon2">
                    <h4><i class="fa-solid fa-user-pen icon"></i>Personal Information</h4>
                        </div>
                        <div>
                            {accountDetails ? <AccountDetails /> : null}
                            {address ? <Address /> : null}
                            {password ? <Password /> : null}
                            {others? <Others /> : null}
                        </div>

                    </div>      
                </div>
            </form>

            
        </div>
    );
}


export default EmployeeRegistration;