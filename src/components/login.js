import { useState } from "react";

const Login = (props) => {
    const [form, setForm] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.handleLogin(form)
    };

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };


    return (
        <div className="form-container flex flex-col m-10 items-center">
            <h1 className="pb-10 text-2xl">TheDentalHub</h1>
            <form onSubmit={handleSubmit}>
                <div className="pb-2">
                    <span>                
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" onChange={handleChange} placeholder="Enter Email"/>
                    </span>
                </div>
                <div className="pb-2">
                    <span>                
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" onChange={handleChange} placeholder="Enter Password"/>
                    </span>
                </div>
                <div className="flex justify-center">
                <button type="submit" className="bg-violet-500 hover:bg-violet-600 text-white p-2 rounded-md m-3">Login</button>                    
                </div>
            </form>
        </div>
    );
};

export default Login;