import React from 'react'
import "./Login.css"
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";


const Login = () => {

  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/image-ac3b3.appspot.com/o/Quora%2Fquora.png?alt=media&token=708e9491-4ae0-49aa-bb03-b92c3536e35f"
          alt="logo"
        />
        <button onClick={handleSubmit} className="btn-login">
          Login to continue
        </button>
      </div>
    </div>
  )
}

export default Login
