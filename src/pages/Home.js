import { useState, useEffect } from "react";
import Patients from "./Patients";


const Providers = () => {
    const [patients, setPatients] = useState([]) // Updated code
    const [provider, setProvider] = useState({
        id: 1,
        name: 'Dr. Mendoza'
    });

    const providerList = [
        { id: 1, name: 'Dr. Mendoza' },
        { id: 2, name: 'Dr. William' },
        { id: 3, name: 'Dr. Charm' },
        { id: 4, name: 'Dr. Alvarez' }
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/patients");
                if (!response.ok) {
                    throw new Error("Failed to fetch patients");
                }
                const data = await response.json();
                console.log(data)
                setPatients(data.patient);
                console.log(data.patient)
            } catch (error) {
                console.error("Error fetching patients:", error);
            }
        };

        fetchData();
    }, []);

    const handleProviderChange = (e) => {
        const selectedProvider = providerList.find(provider => provider.name === e.target.value);
        setProvider(selectedProvider);
        console.log(selectedProvider)
    }

    return (
        <>
            <div className="text-center p-5">
                <h2 className="text-xl underline">Find Dental Provider</h2>
                <form className="text-center p-2">
                    <label>Select Provider: {''} 
                        <select value={provider.name} onChange={handleProviderChange}>
                            {providerList.map(provider => (
                                <option key={provider.id} value={provider.name}>{provider.name}</option>
                            ))}
                        </select>
                    </label>
                </form>            
            </div>
            <Patients patients={patients.filter(patient => patient.provider_id === provider.id)} providerName={provider.name} providerId={provider.id}/>
        </>
    );
}

export default Providers;
