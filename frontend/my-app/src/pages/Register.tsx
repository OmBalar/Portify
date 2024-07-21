import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordTwo, setPasswordTwo] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [passwordTwoError, setPasswordTwoError] = useState("")

    const navigate =  useNavigate();

    const registerData = {
        email : email,
        password : password,
        passwordTwo : passwordTwo
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    };

    const isValidEmail = (email : any) => {
        // Define a regular expression pattern for email validation.
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    async function onButtonClick(){
        // await fetch("/registered", options)
        //     .then(response => response.json())
        //     .then(data => data.isRegistered? setEmailError("p") : setEmailError("Email already in use"))

        const response = await fetch("/registered", options);
        const parsedResponse = await response.json();
        console.log(parsedResponse.isRegistered)

        if(!isValidEmail(email)){
            setEmailError("Enter a valid email")
        }
        else if(parsedResponse.isRegistered === false){
            setEmailError("Email is already in use")
        }
        else{
            setEmailError("")
        }

        if(password.length < 8){
            setPasswordError("Password must be greater than 8 characters")
        }
        else{
            setPasswordError("")
        }

        if(password !== passwordTwo){
            setPasswordTwoError("Passwords do not match")
        }
        else{
            setPasswordTwoError("")
        }

        if(emailError === "" && password.length >= 8 && password === passwordTwo && parsedResponse.isRegistered){
            fetch("/register", options)
            .catch(error => console.error(error));
            navigate('/Login') 
            console.log("Clicked")
        }
    }

    const handleSubmit = (event : any) => {
        event.preventDefault();
    }

    return (
      <>
        <h3>Register</h3>

        <div id="txtbox">
        <form onSubmit={handleSubmit}>
            <input
            value={email}
            type="text"
            onChange={ev => setEmail(ev.target.value)}
            name="username"
            id="txtbox"
            placeholder="Enter Email"
            />
            <label className="errorLabel">{emailError}</label>
            <br />
        
        <br /><br />
        
            <input
            value={password}
            type="password"
            onChange={ev => setPassword(ev.target.value)}
            name="password"
            id="txtbox"
            placeholder="Enter Password"
            />
            <label className="errorLabel">{passwordError}</label>
            <br />
        
        <br /><br />

        <input
            value={passwordTwo}
            type="password"
            onChange={ev => setPasswordTwo(ev.target.value)}
            name="passwordTwo"
            id="txtbox"
            placeholder="Re-Enter Password"
            />
            <label className="errorLabel">{passwordTwoError}</label>
            <br />
        
        <br /><br />

        
            <input type="button" id="loginbutton" defaultValue="Register" onClick={onButtonClick}/>
            
            <br /><br /><br /><br /><br /><br />
        </form>
        </div>
      </>
    )
  };
  
  export default Register;