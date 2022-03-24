import React, {useState} from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from "./login";
import Register from './register';
import Home from "./Home";

import { auth } from "./firebase-config";
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const [user, setUser ] = useState([]);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
    console.log(user)
})

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home userMail = {user?.email}/>} />
          <Route path="/signin" exact element={<Login setUser = {setUser} />} />
          <Route path='/signup' exact element={<Register setUser={setUser} />} />

        </Routes>
      </BrowserRouter>
  
    </React.Fragment>

  );
}

export default App;
