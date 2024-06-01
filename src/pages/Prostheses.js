import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

function ProsthesisList(props) {
    const {patient_id}  = useParams()
    const URL = process.env.REACT_APP_URL
    const [prostheses, setProstheses] = useState([]);

    useEffect(() => {
        const fetchProstheses = async () => {
            try {
                const response = await fetch(`${URL}/patients/${patient_id}/prosthesis`); // http://localhost:8000/patients/${id}/prostheses
                console.log(patient_id)
                console.log(response)
                if (!response.ok) {
                    throw new Error('Failed to fetch prostheses');
                }
                const data = await response.json();
                setProstheses(data.prostheses);
            } catch (error) {
                console.error('Error fetching prostheses:', error);
            }
        };

        fetchProstheses();
    }, [patient_id, URL]);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${URL}/delete_Prosthesis/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete prosthesis');
            }
            // Filter out the deleted prosthesis from the list
            // setProstheses(prostheses.filter(prosthesis => prosthesis._id !== id));
            setProstheses(prevProstheses => prevProstheses.filter(prosthesis => prosthesis._id !== id));
        } catch (error) {
            console.error('Error deleting prosthesis:', error);
        }
    };

    return (
<div className="overflow-x-auto">
    <h2 className="text-xl font-bold mb-4">Prosthesis List</h2>
    <table className="table-auto min-w-full">
        <thead>
            <tr className="bg-gray-200">
                <th className="px-4 py-2">Prosthesis Type</th>
                <th className="px-4 py-2">Sent to Lab</th>
                <th className="px-4 py-2">Sent Date</th>
                <th className="px-4 py-2">Arrived</th>
                <th className="px-4 py-2">Arrival Date</th>
                <th className="px-4 py-2">Resent</th>
                <th className="px-4 py-2">Resent Date</th>
                <th className="px-4 py-2">Delivered</th>
                <th className="px-4 py-2">Delivery Date</th>
                <th className="px-4 py-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            {prostheses.map(prosthesis => (
                <tr key={prosthesis._id}>
                    <td className="border px-4 py-2">{prosthesis.name}</td>
                    <td className="border px-4 py-2">{prosthesis.lab ? "Yes" : "No"}</td>
                    <td className="border px-4 py-2">{prosthesis.selected_date1 ? new Date(prosthesis.selected_date1).toLocaleDateString() : "N/A"}</td>
                    <td className="border px-4 py-2">{prosthesis.arrival ? "Yes" : "No"}</td>
                    <td className="border px-4 py-2">{prosthesis.selected_date2 ? new Date(prosthesis.selected_date2).toLocaleDateString() : "N/A"}</td>
                    <td className="border px-4 py-2">{prosthesis.resent ? "Yes" : "No"}</td>
                    <td className="border px-4 py-2">{prosthesis.selected_date3 ? new Date(prosthesis.selected_date3).toLocaleDateString() : "N/A"}</td>
                    <td className="border px-4 py-2">{prosthesis.delivered ? "Yes" : "No"}</td>
                    <td className="border px-4 py-2">{prosthesis.selected_date4 ? new Date(prosthesis.selected_date4).toLocaleDateString() : "N/A"}</td>
                    <td className="border px-4 py-2">
                        <button className="bg-green-500 rounded-sm text-white m-2 p-2 hover:bg-green-700">
                            <Link to={`/form/${prosthesis._id}`}>EDIT</Link>
                        </button>
                        <button className="bg-red-500 rounded-sm text-white m-2 p-2 hover:bg-red-700" onClick={() => handleDelete(prosthesis._id)}>
                            DELETE
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    );
}

export default ProsthesisList;
