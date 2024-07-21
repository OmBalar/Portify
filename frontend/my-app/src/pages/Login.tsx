import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props : any) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const navigate = useNavigate()

  const loginData = {
    email: email,
    password: password
  }
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  };

  const isValidEmail = (email : string) => {
    // Define a regular expression pattern for email validation.
    console.log(3 + 3 + "4")
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  async function onButtonClick(){
    if(!isValidEmail(email)){
      setEmailError("Enter a valid email")
    }
    else{
      setEmailError("");
    }

    if(password.length < 8){
      setPasswordError("Password must be greater than 8 characters")
    }
    else{
      setPasswordError("")
    }

    if(isValidEmail(email) && password.length >= 8){
      const response = await fetch("/login", options);
      const parsedResponse = await response.json();
      console.log(parsedResponse.isLoggedIn)

      if(parsedResponse.isLoggedIn){
        navigate('/LoggedIn')
      }
      else{
        setPasswordError('Incorrect Username or Password')
      }

      // fetch("/login", options)
      //   .then(response => response.json())
      //   .then(data => data.isLoggedIn ? navigate('/LoggedIn') : setPasswordError('Incorrect Username or Password'))
      //   .catch(error => console.error(error));
      //   console.log("Clicked")
    }
  }

  const handleSubmit = (event : any) => {
    event.preventDefault();
  }

  return (
    
    <>
      <h3>Login</h3>

      <div id="txtbox">
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            type="text"
            onChange={ev => setEmail(ev.target.value)}
            name="username"
            id="txtbox"
            placeholder="Email"
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
            placeholder="Password"
          />
          <label className="errorLabel">{passwordError}</label>
          <br />
        
        <br /><br />

        
          <input type="button" id="loginbutton" defaultValue="Login" onClick={onButtonClick}/>
          
          <br />
        </form>
      </div>
    </>
  )
};

export default Login;