import { useState } from "react"
import ProsthesisList from "./Prostheses"

const Details = () => {
    const [patient, setPatient] = useState(
        {
        firstName : 'Alberto',
        lastName : 'Gomez',
        dateOfBirth: '03/03/2003',
        patientNum: '323221'
    },
    )

    return ( 
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-2">
            <div className="flex justify-between items-center">          
                <h1 className="text-2xl font-bold text-center mb-2">Patient Details</h1>
                <button className="bg-green-500 rounded-sm text-white drop-shadow-xl p-2 m-2 hover:bg-green-700"><a href="/form">ADD NEW PROSTHESIS</a></button>        
            </div>
                <h3 className="text-xl">{patient.firstName} {patient.lastName}</h3>
                <h3 className="text-lg">Date of Birth: {patient.dateOfBirth}</h3>
                <h3 className="text-lg">Patient #{patient.patientNum}</h3>
            </div>
            <ProsthesisList/>
        </div>
    )
}

export default Details