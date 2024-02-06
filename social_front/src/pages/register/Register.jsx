import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const username =useRef()
  const email =useRef();
  const password =useRef();
  const passwordAgain =useRef();
  const navigate = useNavigate();







  const handleClick = async (e) =>{
    e.preventDefault();
    if(passwordAgain.current.value != password.current.value){
      passwordAgain.current.setCustomValidity("password don't match!")
    }else{
      const user = {
        username : username.current.value,
        email:email.current.value,
        password: password.current.value,
      };
      try{
        await axios.post("/auth/register", user);
        navigate("/login");
      }catch(err){
        console.log(err);
      }
      
    }
  }







  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">A77LA</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email"  required type="email"ref={email} className="loginInput" />
            <input placeholder="Password" required type="password"  minLength="6" ref={password} className="loginInput" />
            <input placeholder="Password Again" required type="password" ref={passwordAgain} className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
