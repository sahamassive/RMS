import React from 'react';
import './EmployeeRegistration.css';
import Form from 'react-bootstrap/Form';
import profile from '../../asset/image/profile/profile.jpg';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function EmployeeRegistration() {
      
    return (
        <div>
            <form>
                <div className='two_part'>
                    <div className="col-sm-3 background">
                        <p className="text_style background"><h5 className="text_style background"><i class="fa-solid fa-user-tie icon"></i>Account Setting</h5>Personal Information</p>

                        <a href=""><p className="btn_style_active icon2"><i className="fa-solid fa-house icon"></i>Account Details</p></a>
                        <a href=""><p className="btn_style_inactive icon2"><i className="fa-brands fa-sellcast icon"></i>Address</p></a>
                        <a href=""><p className="btn_style_inactive icon2"><i className="fa-brands fa-first-order icon"></i>Password</p></a>
                        <a href=""><p className="btn_style_inactive icon2"><i className="fa-solid fa-users icon"></i>Others</p></a>

                    </div>
                    

                    <div className="col-sm-9 background">
                    <div className="col-sm-6 background icon2">
                    <h4><i class="fa-solid fa-user-pen icon"></i>Personal Information</h4>
                        </div>
                        
                        <div className='two_part background'>
                        <div className="col-sm-3 background">
                        <img class="profile2" src={ profile }></img>
                            </div>
                            <div className="col-sm-6 background search_box2">
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Control  type="file" multiple />
                             </Form.Group>
                        </div>
                        </div>

                        <div className="input_field two_part" >
                        <Form.Control type="text" placeholder="First name" />    
                        <Form.Control type="text" placeholder="Last name" />   
                        </div> 
                        <div className="input_field">
                        <Form.Control type="email" placeholder="E-mail" />  
                        </div> 
                        <div className="input_field two_part" >
                        <Form.Control type="text" placeholder="Phone" />    
                        <Form.Control type="text" placeholder="NID" />   
                        </div> 
                        <div className="input_field two_part" >
                            <Form.Control type="text" placeholder="First name" />   
                        <Form.Control name="birth" id="birth" type="date" placeholder="Date Of birth"/>   
                        </div> 
                        <div className="input_field">
                            <div>
                                
                            <select>
                                <option selected>Select employee type</option>
                                <option value="chef">Chef</option>
                                <option value="waiter">Waiter</option>
                                <option value="sales & marketing">Sales & Marketing</option>
                                <option value="manager">Manager</option>
                                <option value="cleaner">Cleaner</option>
                            </select>
                                
                            </div> 
                        </div> 
                    </div>      
            
            
            
                </div>
            </form>

            
        </div>
    );
}


export default EmployeeRegistration;