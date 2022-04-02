import { useState } from 'react'
//import Auth from '../backend/index';
import {useNavigate} from 'react-router-dom'
import Create_user from './components/Authentification/Create_user';
function App() {
    //let navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const HandleOnSubmit = async (e) => {
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
            //useNavigate().push('../Authentification/Create_user');
            handleClick();
        }
    }
   
    return (
        
        <>
            <h1>This is React WebApp </h1>
            <form action="">
                <input type="text" placeholder="name" 
                value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="email" 
                value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" 
                onClick={handleClick}>submit</button>
            </form>

        </>
    );
    function handleClick() {
        useNavigate.push('./components/Authentification/index_user');
              }
}

export default App;