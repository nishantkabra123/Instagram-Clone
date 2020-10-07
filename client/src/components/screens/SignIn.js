import React from 'react';
import {Link} from 'react-router-dom'


const SignIn = () => {
    return (
        <div>
            <div className="card auth-card">
                <h2 className="brand-logo">Instagram</h2>
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <button className="btn waves-effect waves-light" type="submit" name="action">Sign In
                </button>
                <h6><Link to="/signup">Dont have an account ? Click here</Link></h6>


            </div>
        </div>
    )
}

export default SignIn
