
const Patients = (props) => {

    const patients = [
        'Rickey Cardenas',
        'Evan Perry',
        'Lydia Frank',
        'Kathy Valdez',
        'Joann Sharp',
        'Dewitt Knight',
        'Rusty Kaufman',
        'Caroline Shaffer',
        'Rosalie Bowen',
        'Dusty Savage'
    ]

    return (
        <div className="bg-blue-500 text-white p-5">
            <div class="flex justify-between items-center">
            <h2 className="text-xl underline font-bold">{props.providerName} - Patients</h2>
            <button className="bg-green-500 rounded-sm text-white p-2 m-2 hover:bg-green-700"><a href="/newPatient">ADD NEW PATIENT</a></button>                
            </div>
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
                            <td className="border px-4 py-2">{patient}</td>
                            <td className="border px-4 py-2">
                                <button className="bg-orange-500 rounded-sm text-white m-2 p-2 hover:bg-orange-700"><a href="/details">VIEW</a></button>
                                <button className="bg-green-500 rounded-sm text-white m-2 p-2 hover:bg-green-700"><a href="#">EDIT</a></button>
                                <button className="bg-red-500 rounded-sm text-white m-2 p-2 hover:bg-red-700"><a href="#">DELETE</a></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Patients