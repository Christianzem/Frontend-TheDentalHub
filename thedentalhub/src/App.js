
import './App.css';
import '../src/tailwind.css';
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
import ProsthesisList from './pages/Prostheses';
import { useState } from 'react';

function App() {
  const URL = process.env.REACT_APP_URL;
  const [user, setUser] = useState(null)
  const Navigate = useNavigate();

  const handleLogin = async(user) => {
    console.log(URL)
    const response = await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    console.log(data)
    if (response.status !== 200) {
      return data;
    }
    Navigate('/home')
  }
  const handleSignUp = async(user) => {
    const response = await fetch(`${URL}/signup`,{
      method: "POST",
      headers: {
        "Content-Type": "applicaion/json",
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    console.log(data);
    Navigate("/login")
  };

  return (
    <>
    <Navbar/>
<Routes>
    <Route path="/" element={<Signup handleSignUp={handleSignUp}/>}></Route>,
    <Route path="/login" element={<Login handleLogin={handleLogin}/>}></Route>,
    <Route path='/home' element={<Providers/>}></Route>,
    <Route path="/patients" element={<Patients/>}></Route>
    <Route path='/details/:id' element={<Details/>}></Route>
    <Route path='/form' element={<Prosthesis/>}></Route>
    {/* <Route path="/patient" element={<NewPatient/>}></Route> */}
    <Route path="/patient" element={<AddPatientForm/>}></Route>
    <Route path="/edit/:id" element={<AddPatientForm/>}></Route>
    <Route path="/prosthesis" element={<ProsthesisList/>}></Route>
</Routes>
    </>

  );
}

export default App;
