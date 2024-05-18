import { useState } from "react"

const Details = () => {
    const [info, setInfo] = useState({
        firstName : 'Alberto',
        lastName : 'Gomez',
        dateOfBirth: '03/03/2003',
        patientNum: '323221'
    })

    return (
        <div className="text-center">
            <h1>Patient Details</h1>
            <h3>{info.firstName} {info.lastName}</h3>
            <h3>Date of Birth: {info.dateOfBirth}</h3>
            <h3>Patient #{info.patientNum}</h3>
        </div>
    )
}

export default Details