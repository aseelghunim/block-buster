import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login(props) {
    let [isLoading,setIsLoading] = useState(false);
    let navigate = useNavigate();
    let [errorsList, setErrorsList] = useState([]);
    let [user, setUser] = useState({
        email: 'aseelghunim@gmail.com',
        password: '12345678',
    });
    function getUserData(e) {
        user[e.target.name] = e.target.value;
    };
    function inputsValidation(user) {
        let schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({ 'string.empty': 'email cannot be empty' }),
            password: Joi.string(),
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
        }
        else {
            // send user data to back end
            console.log('ok');
            let { data } = await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signin', user);
            console.log(data);
            if (data.message === 'success') {
                
                localStorage.setItem('userToken', data.token);
                props.getUserData();
                navigate('/home');
            }
            else {
                setErrorsList([{ message: "Incorrect Email or Password" }]);
            }
        }
        setIsLoading(false);
    }
    return (
        <>
            <div className='login'>
                <div className="container">
                    <div className="row"><div className="col-lg-4 offset-lg-4">
                        {errorsList && errorsList.map(error => {
                            return <div className="alert alert-danger">{error.message}</div>
                        })}
                        <div className="content"> <h3 className='text-uppercase'>login</h3>
                            <form action="">
                                <div className='email-input'>
                                    <label htmlFor="email">email:</label>
                                    <input type="email" name='email' id='email' value='aseelghunim@gmail.com' onChange={getUserData} className='form-control' />
                                </div>
                                <div className='password-input'>
                                    <label htmlFor="password">password:</label>
                                    <input type="password" name='password' id='password' value='12345678' onChange={getUserData} className='form-control' />
                                </div>
                                <div className='actions'>
                                    <div>
                                        <input type="checkbox" name="" id="remember-me" />
                                        <label htmlFor="remember-me">Remember me</label>

                                    </div>
                                    <Link to='/'>Forgot password?</Link>
                                </div>
                                <button type="button" className='form-control submit' onClick={submitHandle}>
                                    {isLoading && <i className='fa fa-refresh fa-spin'></i>} login
                                </button>
                            </form></div>

                    </div></div>

                </div>

            </div>
        </>

    )
}
