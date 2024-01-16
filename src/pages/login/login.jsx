import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function LoginPage() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const listenOnSubmitClick = () => {
        if (!userData.email || !userData.password) {
            alert("Please enter email and password");
            return;
        }
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
        navigate("/");
    }

    return (
        <>
            <div className="login-form">
                <h1>Login</h1>
                <input onClick={(e) => setUserData({...userData, email: e.target.value})} type="email" id="email"placeholder="Email"/>
                <input onClick={(e) => setUserData({...userData, password: e.target.value})} type="password" id="password" placeholder="Password" />
                <button onClick={listenOnSubmitClick}>Login</button>
            </div>
        </>
    )
}

export default LoginPage