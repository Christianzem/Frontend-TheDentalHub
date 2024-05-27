import React, { useState, useEffect } from "react";

const Patients = (props) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("http://localhost:8000/patients");
        if (!response.ok) {
          throw new Error("Failed to fetch patients");
        }
        const data = await response.json();
        setPatients(data.patient);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="bg-blue-500 text-white p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl underline font-bold">
          {props.providerName} - Patients
        </h2>
        <button className="bg-green-500 rounded-sm text-white p-2 m-2 hover:bg-green-700">
          <a href="/newPatient">ADD NEW PATIENT</a>
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
          {patients.map((patient) => (
            <tr key={patient._id}>
              <td className="border px-4 py-2">
                {patient.first_name} {patient.last_name}
              </td>
              <td className="border px-4 py-2">
                <button className="bg-orange-500 rounded-sm text-white m-2 p-2 hover:bg-orange-700">
                  <a href="/details">VIEW</a>
                </button>
                <button className="bg-green-500 rounded-sm text-white m-2 p-2 hover:bg-green-700">
                  <a href="#">EDIT</a>
                </button>
                <button className="bg-red-500 rounded-sm text-white m-2 p-2 hover:bg-red-700">
                  <a href="#">DELETE</a>
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
