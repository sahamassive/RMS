import profile from '../../asset/image/profile/profile.jpg';
import Form from 'react-bootstrap/Form';
import React from 'react';

function AccountDetails() {
    return (
        <div className='background'>
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
        <Form.Control type="number" placeholder="NID" />   
        </div> 
        <div className="input_field two_part" >
            
        <select>
        <option selected>Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
            
        <Form.Control name="birth" id="birth" type="date" placeholder="Date Of birth"/>   
        </div> 
        <div className="input_field">                               
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
    );
};

export default AccountDetails;