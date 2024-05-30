
import './App.css';
import './tailwind.css';
import { Navigate, Route, Routes, redirect, useNavigate } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Providers from './pages/Home';
import Navbar from './components/nav';
import Patients from './pages/Patients';
import Details from './pages/patientDetails';
import Prosthesis from './pages/prosthesisForm';
import NewPatient from './pages/newPatient';
import AddPatientForm from './pages/newPatient';
import AddProsthesisForm from './pages/prosthesisForm';
import ProsthesisList from './pages/Prostheses';
import { useState } from 'react';

function App(props) {
  const URL = process.env.REACT_APP_URL;
  const [user, setUser] = useState(null)
  const Navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('jwt-token') !== null);

  const handleLogin = async (user) => {
    try {
        const response = await fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error("Failed to login");
        }

        const data = await response.json();
        console.log(data)
        const token = data.access_token;
        console.log(token)
        // // Assuming the token is returned in the response data???
        // const token = data.token;

        // console.log(token)

        // Store the token in local storage
        localStorage.setItem('jwt-token', token);
        console.log(token)
        // Update isLoggedIn state
        setIsLoggedIn(true);

        // Redirect to home page
        Navigate('/home');
    } catch (error) {
        console.error("Error logging in:", error);
        // Handle login error
    }
}

  const handleSignUp = async(user) => {
    const response = await fetch("http://localhost:8000/signup",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    console.log(data);
    Navigate("/login")
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt-token');
    setIsLoggedIn(false); // Update isLoggedIn state
    Navigate("/");
  };


  return (
    <>
    <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} handleNavigate={Navigate} token={'jwt-token'}/>
<Routes>
    <Route path="/" element={<Signup handleSignUp={handleSignUp}/>}></Route>,
    <Route path="/login" element={<Login handleLogin={handleLogin}/>}></Route>,
    <Route path='/home' element={<Providers/>}></Route>,
    <Route path="/patients" element={<Patients/>}></Route>
    <Route path='/details/:id' element={<Details/>}></Route>
    <Route path='/form' element={<AddProsthesisForm/>}></Route>
    <Route path="/form/:id" element={<AddProsthesisForm/>}></Route>
    {/* <Route path="/patient" element={<NewPatient/>}></Route> */}
    <Route path="/patient" element={<AddPatientForm/>}></Route>
    <Route path="/edit/:id" element={<AddPatientForm/>}></Route>
    <Route path="/prosthesis" element={<ProsthesisList/>}></Route>
</Routes>
    </>

  );
}

export default App;
