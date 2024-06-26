import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Patients = (props) => {
    const URL = process.env.REACT_APP_URL;
    const [patientsArr, setPatientsArr] = useState([]);


    useEffect(() => {
        const fetchPatients = async () => {
          try {
            const response = await fetch(`${URL}/patients`);
            if (!response.ok) {
              throw new Error("Failed to fetch patients");
            }
            const data = await response.json();
            console.log("Fetched patient data:", data);
            
            // Check if the provider_id is present in each patient object
            if (data.patient.length > 0) {
              console.log("First patient's provider_id:", data.patient[2].provider_id);
            }
    
            // Filter patients based on the provider ID received as prop
            const filteredPatients = data.patient.filter(patient => parseInt(patient.provider_id) === props.providerId);
            console.log("Filtered patients:", filteredPatients);
            console.log("props:", props.providerId)
    
            setPatientsArr(filteredPatients);
          } catch (error) {
            console.error("Error fetching patients:", error);
          }
        };
    
        fetchPatients();
    }, [props.providerId]);
    

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${URL}/delete_patient/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete patient");
      }
      // Remove the deleted patient from the state
      setPatientsArr(patientsArr.filter((patient) => patient._id !== id));
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  return (
    <div className="bg-blue-500 text-white p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl underline font-bold">
          {props.providerName} - Patients
        </h2>
        <button className="bg-green-500 rounded-sm text-white p-2 m-2 hover:bg-green-700">
          <a href="/patient">ADD NEW PATIENT</a>
        </button>
      </div>
      <table className="w-full mt-5">
        <thead>
          <tr>
            <th className="px-4 py-2">Patient Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patientsArr.map((patient) => (
            <tr key={patient._id}>
              <td className="border px-4 py-2">
                {patient.first_name} {patient.last_name}
              </td>
              <td className="border px-4 py-2">
                <button className="bg-orange-500 rounded-sm text-white m-2 p-2 hover:bg-orange-700">
                  <Link to={`/details/${patient._id}`}>VIEW</Link>
                </button>
                <button className="bg-green-500 rounded-sm text-white m-2 p-2 hover:bg-green-700">
                  <Link to={`/edit/${patient._id}`}>EDIT</Link>
                </button>
                <button className="bg-red-500 rounded-sm text-white m-2 p-2 hover:bg-red-700" onClick={() => handleDelete(patient._id)}>
                     DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
