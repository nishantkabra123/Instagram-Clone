import React from 'react';
import {Link} from 'react-router-dom'

const Signup =()=>{
    return (
        <div>
            <div className="card auth-card">
                <h2 className="brand-logo">Instagram</h2>
                <input type="text" placeholder="name" />
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <button className="btn waves-effect waves-light" type="submit" name="action">Sign Up
                </button>
                <h6><Link to="/signin">Already have an account ? Click here</Link></h6>

            </div>
        </div>
    )
}

export default Signup
