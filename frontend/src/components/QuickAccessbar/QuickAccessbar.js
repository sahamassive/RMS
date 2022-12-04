import React, { Component } from 'react';
import './QuickAccessbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function QuickAccessBar() {
    return (
            <div className="quick_nav">
                <div>
                    <i className="fa-solid fa-house-chimney"></i>
                    <i className="fa-solid fa-chevron-right"></i>
                    <span>  HR  </span>
                    <i className="fa-solid fa-chevron-right"></i>
                    <span>  New employee Registration  </span>
                </div>
                <button type="button" className="btn btn-success btn-sm"><i className="fa-solid fa-users"></i>  All Employee</button>
            </div>
    );
};

export default QuickAccessBar;