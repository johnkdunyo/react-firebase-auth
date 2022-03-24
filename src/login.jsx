import React, {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from './firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const Login = ({setUser}) => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
 

    const navigate = useNavigate();



    const signInFirebase = async () => {
        try {
            const userLogs = await signInWithEmailAndPassword(auth, email, password);
            if(userLogs){
                console.log(userLogs)
            }
        } catch (error) {
            console.log(error)
            
        }
    }
    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        signInFirebase();
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        navigate('/')
        
    }

  return (
    <React.Fragment>
        <div className='section'>
            <div className='ui middle aligned center aligned grid'>
                <div className="column">
                    <h2 className='ui teal image header'>
                        Login
                    </h2>

                    <form className='ui large form' onSubmit={onSubmitHandler} >
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className='user icon'></i>
                                    <input 
                                        type="text"
                                        name="email"
                                        placeholder="Please enter your e-mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <div className="ui left icon input">
                                    <i className='lock icon'></i>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="Please enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            

                            <button className="ui fluid large teal submit button" type="submit" >Login</button>
                        </div>
                        {/* message section */}
                        <div className="ui negative message">
                            <div className="header">
                                There were some errors with your submission
                            </div>
                            <ul className="list">
                                <li>You must a valid email and a password</li>
                            </ul>
                        </div>

                    </form>
                    <div className="ui message">
                        New to us?  <Link to="/signup">Sign up </Link> 
                    </div>





                </div>

            </div>
        </div>

    </React.Fragment>
  )
}

export default Login