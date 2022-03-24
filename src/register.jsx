import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';


const Register = ({setUser}) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');

    const password = password1;

    const loginFirebase = async () => {

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user)
        } catch (error) {
            console.log(error.message)
            
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        loginFirebase();
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        navigate('/')
    }

    
    


  return (
    <React.Fragment>
        <div className='section'>
            <div className='ui middle aligned center aligned grid'>
                <div className="column">
                    <h2 className='ui teal image header'>
                        Create an Account
                    </h2>

                    <form className='ui large form' onSubmit={onSubmitHandler}>
                        <div className="ui stacked segment">
                            {/* fname */}
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className='user icon'></i>
                                    <input 
                                        type="text"
                                        name="fname"
                                        placeholder="Please enter your first name"
                                        value={fname}
                                        onChange={(e) => setFname(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Lname */}
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className='user icon'></i>
                                    <input 
                                        type="text"
                                        name="lname"
                                        placeholder="Please enter your last name"
                                        value={lname}
                                        onChange={(e) => setLname(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* email */}
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

                            {/* password */}
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className='lock icon'></i>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="Please enter a password"
                                        value={password1}
                                        onChange={(e) => setPassword1(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* confirm password */}
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className='lock icon'></i>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="Please confirm the password"
                                        value={password2}
                                        onChange={(e) => setPassword2(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button className="ui fluid large teal submit button" type='submit'>Register</button>
                        </div>

                        <div className='ui positive message'>
                             Welcome:    {auth.currentUser?.email}
                        </div>

                    </form>
                    <div className="ui message">
                        Already have an account? <Link to="/signin">Sign in</Link>
                    </div>





                </div>

            </div>
        </div>

    </React.Fragment>
  )
}

export default Register