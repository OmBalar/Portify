import { Outlet, Link, useLocation } from "react-router-dom";
import black_favicon from "./black_favicon.png";import white_favicon from "./white_favicon.png";
import "./Layout.css";import "./Login.css";
import { useNavigate } from "react-router-dom";

function Extras(){
    return(
            <>
                <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css?family=Arizonia&display=swap"
                />
                <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css?family=Alegreya&display=swap"
                />
                <link rel="stylesheet" href="Layout.css" />
                <link rel="stylesheet" href="Login.css" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </>
        )
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar")!.style.padding = "30px 10px";
    document.getElementById("logo")!.style.fontSize = "25px";
  } else {
    document.getElementById("navbar")!.style.padding = "80px 10px";
    document.getElementById("logo")!.style.fontSize = "35px";
  }
}

const Layout = () => {
    const location = useLocation()
    const navigate = useNavigate()

    // checks which navbar should be used
    if(location.pathname === "/LoggedIn" || location.pathname === "/profile") {
      fetch('/checklogin').then(response => response.json()).then(data => data.isLoggedIn ? console.log("Checked") : navigate('/Login')).catch(error => console.error(error));;
      
        return (
          <>
          <Extras />
          <div id="navbar">
              <picture id = "logo">
                  <source
                  srcSet={black_favicon}
                  media="(prefers-color-scheme: dark)"
                  />
                  <img width="125px" height="125px" src={white_favicon} alt="logo"/>
              </picture>
              <Link to="/"><h1>Portify</h1></Link>
              <nav id = "navbar-right">
                  <Link to="/"><h2>Home</h2></Link>
                  <Link to="/examples"><h2>Examples</h2></Link>
                  <Link to="/profile"><h2>My Profile</h2></Link>
                  <Link to="/login"><h2>Logout</h2></Link>
              </nav>
          </div>
          {/* Area behind NavBar */}
          <div>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>


          <Outlet />
          </>
      )
    }

    else{
      // logoutFunction()
      return (
          <>
          <Extras />
          <div id="navbar">
              <picture id = "logo">
                  <source
                  srcSet={black_favicon}
                  media="(prefers-color-scheme: dark)"
                  />
                  <img width="125px" height="125px" src={white_favicon} alt = "logo"/>
              </picture>
              <Link to="/"><h1>Portify</h1></Link>
              <nav id = "navbar-right">
                  <Link to="/"><h2>Home</h2></Link>
                  <Link to="/examples"><h2>Examples</h2></Link>
                  <Link to="/about"><h2>About</h2></Link>
                  <Link to="/login"><h2>Login</h2></Link>
                  <Link to="/register"><h2>Register</h2></Link>
              </nav>
          </div>
          {/* Area behind NavBar */}
          <div>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>


          <Outlet />
          </>
      )
    }
};

// const Layout = () => {
//     return (
//         <>
//         <Extras />
//         <div id="navbar">
//             <picture id = "logo">
//                 <source
//                 srcSet={black_favicon}
//                 media="(prefers-color-scheme: dark)"
//                 />
//                 <img width="125px" height="125px" src={white_favicon} />
//             </picture>
//             <Link to="/"><h1>Portify</h1></Link>
//             <nav id = "navbar-right">
//                 <Link to="/"><h2>Home</h2></Link>
//                 <Link to="/examples"><h2>Examples</h2></Link>
//                 <Link to="/about"><h2>About</h2></Link>
//                 <Link to="/login"><h2>Login</h2></Link>
//             </nav>
//         </div>
//         {/* Area behind NavBar */}
//         <div>
//             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         </div>


//         <Outlet />
//         </>
//     )
// };

export default Layout;