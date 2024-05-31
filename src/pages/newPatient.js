import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AddPatientForm = () => {
    const URL = process.env.REACT_APP_URL
    const { id } = useParams();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        birth_date: "",
        patient_number: "",
        provider_id: 1, // Default provider ID
    });

    // If patientId is provided, fetch patient data for update
    useEffect(() => {
        if (id) {
            // Fetch patient data based on patientId when component mounts
            const fetchPatientData = async () => {
                try {
                    const response = await fetch(`$${URL}/patients/${id}`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch patient data");
                    }
                    const data = await response.json();
                    // Update formData state with fetched patient data
                    setFormData(data.patient);
                } catch (error) {
                    console.error("Error fetching patient data:", error);
                }
            };

            fetchPatientData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let url = `${URL}/add_patient`;
            let method = "POST";

            // If patientId is provided, update patient instead of adding
            if (id) {
                url = `${URL}/update_patient/${id}`;
                method = "POST";
            }

            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error("Failed to add/update patient");
            }
            const data = await response.json();
            console.log(data); // Log response from the backend
            // Reset form fields after successful submission
            setFormData({
                first_name: "",
                last_name: "",
                birth_date: "",
                patient_number: "",
                provider_id: 1, // Reset provider ID to default
            });
            navigate("/home");
        } catch (error) {
            console.error("Error adding/updating patient:", error);
        }
    };


    return (
<div className="max-w-md mx-auto">
    <h2 className="text-xl font-bold mb-4">{id ? "Update Patient" : "Add New Patient"}</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block mb-1" htmlFor="first_name">First Name:</label>
            <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
        </div>
        <div>
            <label className="block mb-1" htmlFor="last_name">Last Name:</label>
            <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
        </div>
        <div>
            <label className="block mb-1" htmlFor="birth_date">Birth Date:</label>
            <input
                type="date"
                id="birth_date"
                name="birth_date"
                value={formData.birth_date}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
        </div>
        <div>
            <label className="block mb-1" htmlFor="patient_number">Patient Number:</label>
            <input
                type="text"
                id="patient_number"
                name="patient_number"
                value={formData.patient_number}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
        </div>
        <div>
            <label className="block mb-1" htmlFor="provider_id">Provider:</label>
            <select
                id="provider_id"
                name="provider_id"
                value={formData.provider_id}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            >
                <option value={1}>Dr. Mendoza</option>
                <option value={2}>Dr. William</option>
                <option value={3}>Dr. Charm</option>
                <option value={4}>Dr. Alvarez</option>
            </select>
        </div>
        <div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">{id ? "Update" : "Add"}</button>
        </div>
    </form>
</div>

    );
};

export default AddPatientForm;





// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";



// const NewPatient = (props) => {
//     const [first_name, setfirst_name] = useState("");
//     const [last_name, setlast_name] = useState("");
//     const [birth_date, setbirth_date] = useState("");
//     const [patient_number, setpatient_number] = useState("");
//     const [patients, setPatients] = useState([]);
//     const [selectedPatient, setSelectedPatient] = useState(null);
//     const navigate = useNavigate();
//     const { id } = useParams();

//         // // Fetch patients' data when the component mounts
//         // useEffect(() => {
//         //     const fetchPatients = async () => {
//         //         try {
//         //             const response = await fetch("http://localhost:8000/patients");
//         //             const data = await response.json();
//         //             setPatients(data.patients); // Update the state with the fetched patients' data
//         //         } catch (error) {
//         //             console.error("Error fetching patients:", error);
//         //         }
//         //     };
    
//         //     fetchPatients();
//         // }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = {
//             first_name,
//             last_name,
//             birth_date,
//             patient_number
//         };

//         if (selectedPatient) {
//             updatePatient(formData);
//         } else {
//             addPatient(formData);
//         }
//     };

//     useEffect(() => {
//         // Fetch patient details if ID is provided in URL
//         if (id) {
//             // Fetch patient details based on id from your backend
//             props.fetchPatients(id);
//         }
//     }, [id]);

//     const addPatient = async (formData) => {
//         try {
//             const response = await fetch("http://localhost:8000/add_patient", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(formData),
//             });
//             console.log(response)
//             const data = await response.json();
//             if (data.status === "success") {
//                 // Add the new patient to the patients array
//                 const newPatient = {
//                     firstName: formData.first_name,
//                     lastName: formData.last_name,
//                     dob: formData.birth_date,
//                     patientNum: formData.patient_number
//                 };
//                 // Update the state with the new patient
//                 console.log("New Patient Data:", newPatient); // Log new patient data
//                 setPatients(data.patients, newPatient)
//                 // setPatients([...patients, newPatient]);
//                 // console.log(patients)
//                 // Handle success
//                 console.log(data.message);
//                 // Redirect or perform any other action
//                 navigate("/home");
//                 // Clear input fields after submitting
//                 setfirst_name("");
//                 setlast_name("");
//                 setbirth_date("");
//                 setpatient_number("");
//             } else {
//                 // Handle error
//                 console.error(data.message);
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     };

//     useEffect(() => {
//          console.log(patients);
//     }, [patients])

//     const updatePatient = (formData) => {
//         // Update existing patient
//         fetch(`/update_patient/${selectedPatient.id}`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 if (data.status === "success") {
//                     // Handle success
//                     console.log(data.message);
//                     // Redirect or perform any other action
//                     navigate("/home");
//                     // Clear input fields after submitting
//                     setfirst_name("");
//                     setlast_name("");
//                     setbirth_date("");
//                     setpatient_number("");
//                 } else {
//                     // Handle error
//                     console.error(data.message);
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//             });
//     };

//     return (
//         <div className="bg-blue-500 pt-5 pb-10 text-center mt-10 m-8 rounded-md">
//             <h1 className="text-xl text-white pb-2 underline">Submit New Patient</h1>
//             <form onSubmit={handleSubmit}>
//                 {/* Input fields */}
//                 {/* First Name */}
//                 <div className="pb-2 text-white">
//                     <label htmlFor="firstname">First Name: </label>
//                     <input value={first_name} onChange={(e) => setfirst_name(e.target.value)} className="text-black" type="text" id="firstname" />
//                 </div>
//                 {/* Last Name */}
//                 <div className="pb-2 text-white">
//                     <label htmlFor="lastname">Last Name: </label>
//                     <input value={last_name} onChange={(e) => setlast_name(e.target.value)} className="text-black" type="text" id="lastname" />
//                 </div>
//                 {/* Date of Birth */}
//                 <div className="pb-2">
//                     <label htmlFor="dob" className="text-white">Date Of Birth: </label>
//                     <input value={birth_date} onChange={(e) => setbirth_date(e.target.value)} type="date" id="dob" />
//                 </div>
//                 {/* Patient Number */}
//                 <div className="pb-2 text-white">
//                     <label htmlFor="patientNum">Patient Number: </label>
//                     <input value={patient_number} onChange={(e) => setpatient_number(e.target.value)} className="text-black" type="text" id="patientNum" />
//                 </div>
//                 {/* Submit Button */}
//                 <input className="bg-black hover:bg-gray-800 text-white p-2 rounded-md" type="submit" value="Submit" />
//             </form>
//             {/* Display patient information */}
//                 {/* <table className="w-full mt-5">
//                 <thead>
//                     <tr>
//                         <th className="px-4 py-2">Patient Name</th>
//                         <th className="px-4 py-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {patients.map((patient, index) => (
//                         <tr key={index}>
//                             <td className="border px-4 py-2">{patient.firstName} {patient.lastName}</td>
//                             <td className="border px-4 py-2">
//                                 <button className="bg-orange-500 rounded-sm text-white m-2 p-2 hover:bg-orange-700" onClick={() => navigate(`/details/${patient.id}`)}>VIEW</button>
//                                 {/* Add edit and delete functionality */}
//                                  {/* <button className="bg-green-500 rounded-sm text-white m-2 p-2 hover:bg-green-700"><a href="#">EDIT</a></button>
//                                 <button className="bg-red-500 rounded-sm text-white m-2 p-2 hover:bg-red-700"><a href="#">DELETE</a></button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//            </table>  */} 
//         </div>
//     );
// }

// export default NewPatient;
