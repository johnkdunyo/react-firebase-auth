import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase-config';
import { signOut } from 'firebase/auth';

const Home = ({userMail}) => {
    // const [user, setUser ] = useState([]);

    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // });

    const navigate = useNavigate();

    console.log(userMail)

    const signClickHandler = () => {
        if(userMail) {
            signOut(auth)
        }else {
            navigate('/signin')
        }
    }


  return (
    <React.Fragment>
        <div className='masthead'>
        <div className="pusher">
        <div className="ui inverted vertical masthead center aligned segment">

            <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
                
                <Link to="/" className="active item">Home</Link>
                <Link to="/" className="item">About</Link>
                <div className="right item">
                    
                <button className="ui inverted button" onClick={signClickHandler}> {userMail ? `${userMail} Signout` : `Sign in`}</button>
                </div>
            </div>
            </div>

            <div className="ui text container">
            <h1 className="ui inverted header">
                Imagine-What-We-Could-Achieve-Together
            </h1>
            <h2>Do whatever you want when you want to.</h2>
            <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div>
            </div>

            
        </div>
    
        </div>
        </div>

        <div className="container">
            
        </div>
    </React.Fragment>
  )
}

export default Home