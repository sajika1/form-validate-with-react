import React, { useEffect, useState } from 'react'

import { validation } from "./validation";
import { notify } from './toast';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function SignUp() {

    const [state, setState] = useState({
        name:'',
        email:'', 
        password:'',
        confirmPassword:'',
        isAccepted:false
    })
    
    const [validate , setValidate] = useState( validation(state) )
    const [focused , setFocused] = useState({});

    useEffect(()=>{
        setValidate( validation(state) )
    } , [state] )
    
    const changeHandler = event =>{
        if (event.target.name === "isAccepted") 
            setState({...state , [event.target.name]: event.target.checked})
        else
            setState({...state , [event.target.name]: event.target.value})
    }

    const focusHandler = event => {
        setFocused( { 
            [event.target.name] : true
         } )
    }

    const submitHandler = event => {
        event.preventDefault();
       if ( Object.keys(validate).length !== 0 ) {
            setFocused({
                name:true,
                email:true, 
                password:true,
                confirmPassword:true,
                isAccepted:true
            })
            notify("Invalid Data!" , "error");
        } 
        else {
            notify("your signed in successfully!" , "success");
        }
        
    }
    return (
        <>    
        <ToastContainer />
          <form className="form__box" onSubmit={submitHandler}>
              <div className="header">
                    <h1>Sign Up</h1>
              </div>

              <div className="form">
                    <div className="form-input">
                        <input onChange={changeHandler} onFocus={focusHandler} value={state.email} name="email" type="text" placeholder="Email Address"/>
                        { validate.email && focused.email &&
                             <span className="validation__message">
                                {validate.email}
                            </span>
                        }
                    </div>

                    <div className="form-input">
                        <input onChange={changeHandler} onFocus={focusHandler} value={state.name} name="name" type="text" placeholder="Username"/>
                        { validate.name && focused.name &&
                            <span className="validation__message">
                                {validate.name}
                            </span>
                        }
                    </div>

                    <div className="form-input">
                        <input  onChange={changeHandler} onFocus={focusHandler} value={state.password} name="password" type="password" placeholder="Password"/>
                        { validate.password && focused.password &&
                            <span className="validation__message">
                                {validate.password}
                            </span>
                        }
                    </div>

                    <div className="form-input">
                        <input onChange={changeHandler} onFocus={focusHandler} value={state.confirmPassword} name="confirmPassword" type="password" placeholder="Confirm Password"/>
                        { validate.confirmPassword && focused.confirmPassword &&
                            <span className="validation__message">
                                {validate.confirmPassword}
                            </span>
                        }
                    </div>

                    <div className="form-check-input">
                        <input onChange={changeHandler} onFocus={focusHandler} value={state.isAccepted} name="isAccepted" type="checkbox" id="checked"/>
                        <label htmlFor="checked">I Accept Terms of Privacy Policy</label>
                        { validate.isAccepted && focused.isAccepted &&
                            <span className="validation__message">
                                {validate.isAccepted}
                            </span>
                        }
                    </div>
              </div>
              <div className="footer">
                  <button className="button" type="submit">Signing Up</button>
              </div>
          </form>
        </>
    )
}

export default SignUp;
