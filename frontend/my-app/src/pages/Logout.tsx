import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/logout", {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate("/")
    });

    return (
      <>
        
      </>
    )
  };
  
  export default Logout;