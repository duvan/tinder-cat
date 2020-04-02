import React from 'react'
import Logo from '../../static/logo-login.png'
import {
    Link
} from 'react-router-dom'

export const Signup = () => (
    <div className="signup">
        <form>
            <img src={Logo}/>
            <p>Please fill this form to create an account.</p>
            <div className="input-custom">
                <label>User Name</label>
                <input type="name" />
            </div>
            <div className="input-custom">
                <label>Email address</label>
                <input type="email" />
            </div>
            <div className="input-custom">
                <label>Password</label>
                <input type="password" />
            </div>
            <div className="input-custom">
                <label>Repeat Password</label>
                <input type="password" />
            </div>
            <br />
            <div className="input-custom">
                <label for="sex_f">Gender</label>
                <input type="hidden" name="Gender" value="{{user.gender}}"></input> 
                
            </div>
            <Link to="/">
                <div className="button-primary">
                    <input type="button" value="Sign me up" />
                </div>
            </Link>
            <br />
        </form>
    </div>
)