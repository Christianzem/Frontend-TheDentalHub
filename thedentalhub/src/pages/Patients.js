
const Patients = ({providerName}) => {

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
        <div className="bg-black text-white">
        <h2>{providerName} - Patients</h2>
        <ul>
        {patients.map((patient, index) => (
            <li key={index}>{patient}
            <button className="bg-blue-500 rounded-sm text-white m-2 p-2 hover:bg-blue-700"><a href="#">VIEW</a></button>
            <button className="bg-blue-500 rounded-sm text-white m-2 p-2 hover:bg-blue-700"><a href="#">EDIT</a></button>
            <button className="bg-blue-500 rounded-sm text-white m-2 p-2 hover:bg-blue-700"><a href="#">DELETE</a></button>
            </li>
        ))}
        </ul>                 
        </div>
    )
}

export default Patients