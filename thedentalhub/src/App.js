
import './App.css';
import '../src/tailwind.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Providers from './pages/Home';
import Navbar from './components/nav';
import Patients from './pages/Patients';
import Details from './pages/patientDetails';
import Prosthesis from './pages/prosthesisForm';

function App() {
  return (
    <>
    <Navbar/>
<Routes>
    <Route path="/" element={<Signup/>}></Route>,
    <Route path="/login" element={<Login/>}></Route>,
    <Route path='/home' element={<Providers/>}></Route>,
    <Route path="/patients" element={<Patients/>}></Route>
    <Route path='/details' element={<Details/>}></Route>
    <Route path='/form' element={<Prosthesis/>}></Route>
</Routes>
    </>

  );
}

export default App;
