import { useState } from "react"

const Prosthesis = () => {

    const [form, setForm] = useState(null)
    const [type, setType] = useState('Default')
    
    const handleSubmit = (e) => {
         e.preventDefault()

    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return(
    <div className="bg-blue-500 p-10 text-center m-10 drop-shadow-xl rounded-md">
      <h1 className="m-4 text-white text-xl underline">New Dental Prosthesis</h1>
        <form onSubmit={handleSubmit}>
            <label className="text-white"> Select Prosthesis Type: 
            <select className="text-black" value={type} onChange={e => setType(e.target.value)}>
                <option value="Default"></option>
                <option value="Crown">Crown</option>
                <option value="Denture">Denture</option>
                <option value="Partial">Partial</option>
                <option value="Night Guard">Night Gaurd</option>
            </select>
            </label>
            <div id= "checkbox1" className="m-4">
                <input type="checkbox"/>
                <label className="text-white"> Is sent to lab?</label>
                <label className="text-white"> Date: </label>
                <input type="date" onChange={handleChange}></input>   
            </div>
            <div id= "checkbox2" className="m-4">
                <input type="checkbox"/>
                <label className="text-white"> Has it arrived?</label>
                <label className="text-white"> Date: </label>
                <input type="date" onChange={handleChange}></input>   
            </div>
            <div id= "checkbox3" className="m-4">
                <input type="checkbox"/>
                <label className="text-white"> Is it resent to lab?</label>
                <label className="text-white"> Date: </label>
                <input type="date" onChange={handleChange}></input>   
            </div>
            <div id= "checkbox4" className="m-4">
                <input type="checkbox"/>
                <label className="text-white"> Has it been delivered?</label>
                <label className="text-white"> Date: </label>
                <input type="date" onChange={handleChange}></input>   
            </div>
            <input className="bg-black hover:bg-gray-800 text-white p-2 rounded-md" type="submit" value="Submit"/>
        </form>            
    </div>
  
    )
}

export default Prosthesis