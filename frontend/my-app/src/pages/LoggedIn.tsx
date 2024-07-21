import { useNavigate } from "react-router-dom";

function LoggedIn(){
  const navigate =  useNavigate();
  fetch('/checklogin').then(response => response.json()).then(data => data.isLoggedIn ? console.log("Checked") : navigate('/Login')).catch(error => console.error(error));;
  return (
    <>
      <h1>Hi5</h1>
    </>
  )
};

export default LoggedIn;