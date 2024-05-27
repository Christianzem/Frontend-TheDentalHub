import React, { useState, useEffect } from 'react';

function ProsthesisList() {
    const [prostheses, setProstheses] = useState([]);

    useEffect(() => {
        const fetchProstheses = async () => {
            try {
                const response = await fetch('http://localhost:8000/prosthesis');
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
    }, []);


    return (
        <div>
            <h2>Prosthesis List</h2>
            <ul>
            {prostheses.map(prosthesis => (
                <li key={prosthesis._id}>
                    <strong>Prosthesis Type:</strong> {prosthesis.name}<br />
                    <strong>Is it sent to the lab?</strong> {prosthesis.lab ? "Yes" : "No"}<br />
                    <strong>Sent Date: </strong> {prosthesis.selected_date1 ? new Date(prosthesis.selected_date1).toLocaleDateString() : "N/A"}<br />
                    <strong>Did it arrive?</strong> {prosthesis.arrival ? "Yes" : "No"}<br />
                    <strong>Arrival Date: </strong> {prosthesis.selected_date2 ? new Date(prosthesis.selected_date2).toLocaleDateString() : "N/A"}<br />
                    <strong>Was it resent?</strong> {prosthesis.resent ? "Yes" : "No"}<br />
                    <strong>Resent Date: </strong> {prosthesis.selected_date3 ? new Date(prosthesis.selected_date3).toLocaleDateString() : "N/A"}<br />
                    <strong>Was it delivered?</strong> {prosthesis.delivered ? "Yes" : "No"}<br />
                    <strong>Delivery Date: </strong> {prosthesis.selected_date4 ? new Date(prosthesis.selected_date4).toLocaleDateString() : "N/A"}<br />
                 </li>
            ))}

            </ul>
        </div>
    );
}

export default ProsthesisList;
