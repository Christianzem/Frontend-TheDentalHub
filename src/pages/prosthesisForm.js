import React, { useEffect, useState} from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const AddProsthesisForm = () => {
    const URL = process.env.REACT_APP_URL
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        prosthesis_type: "",
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        selected_date1: "",
        selected_date2: "",
        selected_date3: "",
        selected_date4: ""
    });
    const [error, setError] = useState("");

    useEffect(() => {
        if (id) {
            const fetchProsthesisData = async () => {
                try {
                    const response = await fetch(`${URL}/prosthesis/${id}`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch Prosthesis data");
                    }
                    const data = await response.json();
                    setFormData(data.Prosthesis);
                } catch (error) {
                    console.error("Error fetching Prosthesis data: ", error);
                }
            };
            fetchProsthesisData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let url = `${URL}/add_Prosthesis`;
            let method = "POST";

            if (id) {
                url = `${URL}/update_Prosthesis/${id}`;
                method = "PUT";
            }

            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("Failed to add/update Prosthesis");
            }

            setFormData(prevState => ({
                ...prevState,
                checkbox1: false,
                checkbox2: false,
                checkbox3: false,
                checkbox4: false
            }));
            navigate(`/details/${id}`)
            // Optionally, provide feedback to the user on successful submission
            console.log("Prosthesis added/updated successfully");

        } catch (error) {
            console.error("Error adding/updating prosthesis:", error);
            setError("Failed to add/update Prosthesis. Please try again.");
        }
    };

    return (
<div className="max-w-md mx-auto">
    <h2 className="text-xl font-bold mb-4">{id ? "Update Prosthesis" : "Add New Prosthesis"}</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block mb-1" htmlFor="prosthesis_type">Prosthesis Type:</label>
            <select
                name="prosthesis_type"
                value={formData.prosthesis_type}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            >
                <option value="">Select Type</option>
                <option value="Crown">Crown</option>
                <option value="Denture">Denture</option>
                <option value="Partial">Partial</option>
                <option value="Night Guard">Night Guard</option>
            </select>
        </div>
        <div>
            <label className="block mb-1">
                <input
                    type="checkbox"
                    name="checkbox1"
                    checked={formData.checkbox1}
                    onChange={handleChange}
                    className="mr-2"
                />
                Was it sent to the Lab?
            </label>
        </div>
        <div>
            <label className="block mb-1">
                <input
                    type="checkbox"
                    name="checkbox2"
                    checked={formData.checkbox2}
                    onChange={handleChange}
                    className="mr-2"
                />
                Has it arrived?
            </label>
        </div>
        <div>
            <label className="block mb-1">
                <input
                    type="checkbox"
                    name="checkbox3"
                    checked={formData.checkbox3}
                    onChange={handleChange}
                    className="mr-2"
                />
                Was it resent?
            </label>
        </div>
        <div>
            <label className="block mb-1">
                <input
                    type="checkbox"
                    name="checkbox4"
                    checked={formData.checkbox4}
                    onChange={handleChange}
                    className="mr-2"
                />
                Has it been delivered?
            </label>
        </div>
        <div>
            <label className="block mb-1" htmlFor="selected_date1">Lab Date:</label>
            <input
                type="date"
                name="selected_date1"
                value={formData.selected_date1}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
        </div>
        <div>
            <label className="block mb-1" htmlFor="selected_date2">Arrival Date:</label>
            <input
                type="date"
                name="selected_date2"
                value={formData.selected_date2}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
        </div>
        <div>
            <label className="block mb-1" htmlFor="selected_date3">Resent Date:</label>
            <input
                type="date"
                name="selected_date3"
                value={formData.selected_date3}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
        </div>
        <div>
            <label className="block mb-1" htmlFor="selected_date4">Delivery Date:</label>
            <input
                type="date"
                name="selected_date4"
                value={formData.selected_date4}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
        </div>
        <div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                {id ? "Update" : "Add"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    </form>
</div>

    );
};

export default AddProsthesisForm;
