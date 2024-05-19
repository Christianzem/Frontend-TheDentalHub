import { useNavigate } from "react-router-dom"

const { useState } = require("react")

const NewPatient = (props) => {
    const[newPatient, setNewPatient] = useState(null)
    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Navigate('/home')
    }

    console.log(handleSubmit)

    const handleChange = (e) => {
        setNewPatient({...newPatient, [e.target.name] : e.target.value})
    }
    console.log(handleChange)

    return(
        <div className="bg-blue-500 pt-5 pb-10 text-center mt-10 m-8 rounded-md">
            <h1 className="text-xl text-white pb-2 underline">Submit New Patient</h1>
            <form onSubmit={handleSubmit}>
                <div className="pb-2 text-white">
                <label>First Name: </label>
                <input onChange={handleChange} className="text-black" type="text" />                    
                </div>
                <div className="pb-2 text-white">
                <label>Last Name: </label>
                <input onChange={handleChange} className="text-black" type="text" />                    
                </div>
                <div className="pb-2">
                <label className="text-white">Date Of Birth: </label>
                <input onChange={handleChange} type="date" />                    
                </div>
                <div className="pb-2 text-white">
                <label>Patient Number: </label>
                <input onChange={handleChange} className="text-black" type="text" />                    
                </div>
                <input className="bg-black hover:bg-gray-800 text-white p-2 rounded-md" type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default NewPatient