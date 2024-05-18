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
    <div className="bg-blue-300 p-10 text-center">
      <h1 className="m-4">Submit New Dental Prosthesis</h1>
        <form>
            <label>Select Prosthesis Type:
            <select value={type} onChange={e => setType(e.target.value)}>
                <option value="Default"></option>
                <option value="Crown">Crown</option>
                <option value="Denture">Denture</option>
                <option value="Partial">Partial</option>
                <option value="Night Guard">Night Gaurd</option>
            </select>
            </label>
            <div id= "checkbox1" className="m-4">
                <input type="checkbox"/>
                <label> Is sent to lab?</label>
                <label> Date: </label>
                <input type="date"></input>   
            </div>
            <div id= "checkbox2" className="m-4">
                <input type="checkbox"/>
                <label> Has it arrived?</label>
                <label> Date: </label>
                <input type="date"></input>   
            </div>
            <div id= "checkbox3" className="m-4">
                <input type="checkbox"/>
                <label> Is it resent to lab?</label>
                <label> Date: </label>
                <input type="date"></input>   
            </div>
            <div id= "checkbox4" className="m-4">
                <input type="checkbox"/>
                <label> Has it been delivered?</label>
                <label> Date: </label>
                <input type="date"></input>   
            </div>
            <input className="bg-black text-white p-2 rounded-md"type="submit" value="Submit"/>
        </form>            
    </div>
  
    )
}

export default Prosthesis