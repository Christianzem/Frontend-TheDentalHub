import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProsthesisList from "./Prostheses";

const Details = () => {
    const { id } = useParams(); // Retrieve patient ID from URL params
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        const fetchPatientDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/patients/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch patient details");
                }
                const data = await response.json();
                setPatient(data.patient);
            } catch (error) {
                console.error("Error fetching patient details:", error);
            }
        };

        fetchPatientDetails();
    }, [id]); // Include id in dependencies array to re-fetch when it changes

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-2">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-center mb-2">Patient Details</h1>
                    <button className="bg-green-500 rounded-sm text-white drop-shadow-xl p-2 m-2 hover:bg-green-700">
                        <a href="/form">ADD NEW PROSTHESIS</a>
                    </button>
                </div>
                {patient && (
                    <>
                        <h3 className="text-xl">{patient.first_name} {patient.last_name}</h3>
                        <h3 className="text-lg">Date of Birth: {patient.birth_date}</h3>
                        <h3 className="text-lg">Patient #{patient.patient_number}</h3>
                    </>
                )}
            </div>
            <ProsthesisList />
        </div>
    );
};

export default Details;
