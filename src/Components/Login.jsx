import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { URL_API } from "./URL_API";

function Login() {
    const navigate = useNavigate()
    function signup() {
        navigate('/signup')
    }
    const [files, setFiles] = useState({
        Calling: "",
        password: ""
    })

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFiles({
            ...files,
            [name]: value
        })
    }
    const [content, setContent] = useState([])
    const comes = async () => {
        const check = await axios.get(URL_API)
        setContent(check.data)
    }
    const [bug, setBug] = useState({
        User1: "",
        password1: ""
    })
    useEffect(() => { comes() }, [files.Calling, files.password])
    const navigate1 = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        comes();
        content.map((e) => {
            if ((e.Calling === files.Calling) && (e.password === files.password)) 
            {

                navigate1('/home')

            }
            else {
                setBug({
                    
                    User1: "Invalid User",
                    password1: "Password is Incorrect"
                    
                })
               
            }
        })
        setContent({
            Calling: "",
            password: ""
        })
    }

    return (
        <>
            <section className="login-background">
                <div className="signin-page">
                    <div className="signin-background">
                        <h1 className="signin-Heading">Sign in</h1>
                        <h1 className="Social-icons">F G L</h1>
                        <p className="sub-content">Use Your Account</p>
                        <form className="sign-in-form" onSubmit={handleSubmit}>
                            <div>
                                <div className="email-text-align">
                                    <small className="email-text">Username:</small>
                                </div>
                                <input type="text" name="Calling" value={files.Calling} onChange={handlechange}></input>
                                <p>{bug.User1}</p>
                                <div className="email-text-align">
                                    <small className="email-text">Password:</small>
                                </div>
                                <input type="password" name="password" value={files.password} onChange={handlechange}></input>
                                <p>{bug.password1}</p>
                                <p className="Forgot-content">Forgot Your Password</p>
                                <input type="submit"></input>

                            </div>
                        </form>
                    </div>
                </div>

                <div className="signup-page">
                    <div className="signup-background">
                        <h1 className="signup-Heading">Hello,Friends!</h1>
                        <div className="signup-para-align">
                            <p className="signup-para">Enter Your Personal details and start journey with us</p>
                            <button onClick={signup} className="next-btn">Sign up</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login