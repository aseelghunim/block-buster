import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

export default function Register() {
    let [isLoading,setIsLoading] = useState(false);
    let navigate = useNavigate();
    let [errorsList, setErrorsList] = useState([]);
    let [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        cPassword: ''
    });
    function getUserData(e) {
        user[e.target.name] = e.target.value;
    };
    function inputsValidation(user) {
        let schema = Joi.object({
            name: Joi.string().min(3).max(20).required().messages({ 'string.pattern.base': 'username must be at least 3 characters', 'string.empty': 'username cannot be empty' }),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({ 'string.empty': 'email cannot be empty' }),
            password: Joi.string().pattern(/^[A-Za-z0-9]{8,20}$/).messages({ 'string.pattern.base': 'password should have at least 8 characters', 'string.empty': 'password cannot be empty' }),
            cPassword: Joi.ref('password'),
        });
        return schema.validate(user, { abortEarly: false });
    }
    async function submitHandle(e) {
        setIsLoading(true);
        e.preventDefault();
        let validationResult = inputsValidation(user);
        if (validationResult.error) {
            // list errors
            setErrorsList(validationResult.error.details);
            console.log(errorsList)
        }
        else {
            // send user data to back end
            console.log('ok');
            let { data } = await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup', user);
            if (data.message === 'success') {
                navigate('/login');
            }
        }
        setIsLoading(false);
    }
    return (
        <>
            <div className='register'>
                    
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                        {errorsList && errorsList.map(error => {
                        return <div className="alert alert-danger">{error.message}</div>
                    })}
                            <div className="content">
                                <h3 className='text-uppercase'>sign up</h3>
                                <form action="">
                                    <div className='username-input'>
                                        <label htmlFor="username">username:</label>
                                        <input type="text" name='name' onChange={getUserData} id='username' className='form-control' />
                                    </div>
                                    <div className='email-input'>
                                        <label htmlFor="email">email:</label>
                                        <input type="email" name='email' onChange={getUserData} id='email' className='form-control' />
                                    </div>
                                    <div className='password-input'>
                                        <label htmlFor="password">password:</label>
                                        <input type="password" name='password' onChange={getUserData} id='password' className='form-control' />
                                    </div>
                                    <div className='re-password-input'>
                                        <label htmlFor="cpassword">re-enter password:</label>
                                        <input type="password" name='cPassword' onChange={getUserData} id='cpassword' className='form-control' />
                                    </div>
                                    <button type="button" className='form-control submit' onClick={submitHandle}>
                                    {isLoading && <i className='fa fa-refresh fa-spin'></i>} sign up
                                </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
