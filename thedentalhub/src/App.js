
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

function App() {
  const Navigate = useNavigate();

  const handleLogin = () => {
    Navigate('/home')
  }
  const handleSignUp = () => {
    Navigate("/login")
  }

  return (
    <>
    <Navbar/>
<Routes>
    <Route path="/" element={<Signup handleSignUp={handleSignUp}/>}></Route>,
    <Route path="/login" element={<Login handleLogin={handleLogin}/>}></Route>,
    <Route path='/home' element={<Providers/>}></Route>,
    <Route path="/patients" element={<Patients/>}></Route>
    <Route path='/details' element={<Details/>}></Route>
    <Route path='/form' element={<Prosthesis/>}></Route>
    <Route path="/newPatient" element={<NewPatient/>}></Route>
</Routes>
    </>

  );
}

export default App;
