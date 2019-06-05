import React, { Component, useState } from 'react';

const SignUp = () =>  {

    const [values, setValues] = useState ({ 
            email: '',
            password: '',
            firstName: '',
            lastName: ''
            });


    const handleChange = (e) => {
        console.log(  "****", e.target.value )
        const {id, value} = e.target
        setValues( { ...values, [id] : value})
        // console.log(' e.target.values',  values);
        }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values.password)
    }

        return (
            <div className = "container">
                <form onSubmit = { (e) => handleSubmit(e)} className = "white">
                    <h5 className = "grey-text text-darken-3">SignUp</h5>
                    <div className = "input-field">
                        <label htmlFor = "email">Email</label>
                        <input type= "email" id = "email" onChange = {(e)=> handleChange(e)}/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor = "password">Password</label>
                        <input type= "password" id = "password" onChange = { (e) => handleChange(e)}/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor = "firstName">First Name</label>
                        <input type= "text" id = "firstName" onChange = { (e) => handleChange(e)}/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor = "lastName">Last Name</label>
                        <input type= "text" id = "lastName" onChange = { (e) => handleChange(e)}/>
                    </div>
                    <div className = "input-field">
                        <button className = "btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>

                <h2> {
                        Object.keys(values).map((mi, i )=> {
                            return (
                                ( mi != "password") ? 
                            <li>
                                {mi} : {
                                    Object.values(values)[i]}                    
                            </li>
                            : <li>{mi} : {
                                    Object.values(values)[i].replace(/[^]/g , '*')
                                }  </li>

                            )
                            }   
                        )
                    
                    } </h2>

            </div>
        );
}

export default SignUp;