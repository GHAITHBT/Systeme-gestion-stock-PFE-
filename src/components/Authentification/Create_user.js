import { useState } from 'react'
//import Auth from '../backend/index';
import {useNavigate} from 'react-router-dom'
function Create_user() {
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved successfully");
            setEmail("");
            setName("");
        }
    }
    return (
        <>
            <h1>This is React WebApp </h1>
            <form action="">
               
                <input type="email" placeholder="email" 
                value={email} onChange={(e) => setEmail(e.target.value)} />
               
            </form>

        </>
    );
}

export default Create_user;