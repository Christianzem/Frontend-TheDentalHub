const { useState } = require("react")

const NewPatient = () => {
    const[newPatient, setNewPatient] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setNewPatient({...newPatient, [e.target.name] : e.target.value})
    }

    return(
        <div className="bg-blue-500 pt-5 pb-10 text-center mt-10 m-8 rounded-md">
            <h1 className="text-xl text-white pb-2 underline">Submit New Patient</h1>
            <form onSubmit={handleSubmit}>
                <div className="pb-2 text-white">
                <label>First Name: </label>
                <input className="text-black" type="text" />                    
                </div>
                <div className="pb-2 text-white">
                <label>Last Name: </label>
                <input className="text-black" type="text" />                    
                </div>
                <div className="pb-2">
                <label className="text-white">Date Of Birth: </label>
                <input type="date" />                    
                </div>
                <div className="pb-2 text-white">
                <label>Patient Number: </label>
                <input className="text-black" type="text" />                    
                </div>
                <input className="bg-black hover:bg-gray-800 text-white p-2 rounded-md" type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default NewPatient