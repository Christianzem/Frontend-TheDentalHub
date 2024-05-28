import { useState } from "react";
import Patients from "./Patients";

const Providers = () => {
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

    const handleProviderChange = (e) => {
        const selectedProvider = providerList.find(provider => provider.name === e.target.value);
        setProvider(selectedProvider);
    };

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
            <Patients provider={provider} />
        </>
    );
}

export default Providers;
