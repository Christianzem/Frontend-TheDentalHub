// import { useState } from "react"
// import Patients from "../pages/Patients";

// const Providers = () => {
//     // const provider_list = [
//     //     'Dr. Mendoza',
//     //     'Dr. William',
//     //     'Dr. Charm',
//     //     'Dr. Alvarez',
//     // ] 
//     const [providerName, setProviderName] = useState('Dr. Mendoza');
    

//     function handleSubmit(e) {
//         e.preventDefault();
//     }

    
//     return(
//         <>
//         <form onSubmit={handleSubmit}>
//             <label>Select Provider: {''} 
//             <select value={providerName} onChange={e => setProviderName(e.target.value)}>
//                 <option value="Dr. Mendoza">Dr. Mendoza</option>
//                 <option value="Dr. William">Dr. William</option>
//                 <option value="Dr. Charm">Dr. Charm</option>
//                 <option value="Dr. Alvarez">Dr. Alvarez</option>
//             </select>
//             </label>
//             <button className="bg-blue-500 rounded-sm text-white m-4 p-2 hover:bg-blue-700"><a href="/patients">NEXT</a></button>
//         </form>
//         <Patients providerName={providerName}/>
//         </>
//     );
// }

// export default Providers
