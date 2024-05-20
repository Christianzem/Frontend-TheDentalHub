import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const NewPatient = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [patientNum, setPatientNum] = useState("");
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPatient = {
            id: crypto.randomUUID(),
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            patientNum: patientNum
        };
        setPatients([...patients, newPatient]);
        // Clear input fields after submitting
        setFirstName("");
        setLastName("");
        setDob("");
        setPatientNum("");
    };

    console.log(patients)

    return (
        <div className="bg-blue-500 pt-5 pb-10 text-center mt-10 m-8 rounded-md">
            <h1 className="text-xl text-white pb-2 underline">Submit New Patient</h1>
            <form onSubmit={handleSubmit}>
                {/* Input fields */}
                {/* First Name */}
                <div className="pb-2 text-white">
                    <label htmlFor="firstname">First Name: </label>
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="text-black" type="text" id="firstname" />
                </div>
                {/* Last Name */}
                <div className="pb-2 text-white">
                    <label htmlFor="lastname">Last Name: </label>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="text-black" type="text" id="lastname" />
                </div>
                {/* Date of Birth */}
                <div className="pb-2">
                    <label htmlFor="dob" className="text-white">Date Of Birth: </label>
                    <input value={dob} onChange={(e) => setDob(e.target.value)} type="date" id="dob" />
                </div>
                {/* Patient Number */}
                <div className="pb-2 text-white">
                    <label htmlFor="patientNum">Patient Number: </label>
                    <input value={patientNum} onChange={(e) => setPatientNum(e.target.value)} className="text-black" type="text" id="patientNum" />
                </div>
                {/* Submit Button */}
                <input className="bg-black hover:bg-gray-800 text-white p-2 rounded-md" type="submit" value="Submit" />
            </form>
            {/* Display patient information */}
            <table className="w-full mt-5">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Patient Name</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{patient.firstName} {patient.lastName}</td>
                            <td className="border px-4 py-2">
                                <button className="bg-orange-500 rounded-sm text-white m-2 p-2 hover:bg-orange-700" onClick={() => navigate(`/details/${patient.id}`)}>VIEW</button>
                                {/* Add edit and delete functionality */}
                                <button className="bg-green-500 rounded-sm text-white m-2 p-2 hover:bg-green-700"><a href="#">EDIT</a></button>
                                <button className="bg-red-500 rounded-sm text-white m-2 p-2 hover:bg-red-700"><a href="#">DELETE</a></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NewPatient;
