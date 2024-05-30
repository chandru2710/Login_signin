import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_API } from "./URL_API";
function Signup() {
    const navigate = useNavigate()
    function Inpage() {
        navigate("/")
    }

    const [details, setDetails] = useState({
        Calling: "",
        email: "",
        password: "",
        confirm: ""
    });
    const changeOff = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value
        })
    }
    const [error, setError] = useState({
        Calling: "",
        email: "",
        password: "",
        confirm: ""
    })

    const PostAPI = async () => {
        if (!details.Calling && !details.password && !details.confirm && !details.email) 
            {
            setError({
                ...error,
                Calling: "Enter The Name",
                email: "Enter The Email",
                password: "Enter The Password",
                confirm: "Enter The Confirm-Password"

            })
        }
        else {
            await axios.post(URL_API, details)
            navigate('/home')
        }
    }

    const changeOff2 = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value
        })
    }

    const confirmPassword = (e) => {
        if (e.target.value !== details.password) {
            console.log("true")
            setError({
                ...error,
                confirm: "Should same above password !"
            })
        }
        else {
            setError({
                ...error,
                confirm: ""
            })
            setDetails({
                ...details,
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details)
        setDetails({
            Calling: "",
            email: "",
            password: "",
            confirm: ""
        })
        if (!details.Calling && !details.email && !details.password &&!details.confirm) {

            setError({
                ...error,
                Calling: "Enter The Name",
                email: "Enter The Email",
                password: "Enter The Password"
            });
            return;
        }
    }

    return (
        <>
            <section className="signup-background2">
                <div className="signup-page2">
                    <div className="signup2-background2">
                        <h1 className="signup-Heading2">Welcome Back!</h1>
                        <div className="signup-para-align2">
                            <p className="signup-para2">To keep connected with us please! login with your Personal Account!</p>
                            <button onClick={Inpage} className="next-btn">Sign in</button>
                        </div>
                    </div>
                </div>

                <div className="signin-page2">
                    <div className="signin-background2" >
                        <h1 className="create-heading">Create Account</h1>
                        <h1 className="Social-icons">F G L</h1>
                        <p className="sub-content2">Of use your email for registration</p>
                        <form className="sign-in-form2" onSubmit={handleSubmit}>
                            <div>
                                <div className="email-text-align">
                                    <small className="email-text">Username:</small>
                                </div>

                                <input type="text" name="Calling" value={details.Calling}
                                    onChange={changeOff} style={myForm.Demo}></input><br />
                                <p style={myForm.errorline} className="error">{error.Calling}</p>
                                <div className="email-text-align">
                                    <small className="email-text">E-mail:</small>
                                </div>
                                <input type="email" name="email" value={details.email}
                                    onChange={changeOff} style={myForm.Demo}></input><br />
                                <p style={myForm.errorline}>{error.email}</p>
                                <div className="email-text-align">
                                    <small className="email-text">password:</small>
                                </div>
                                <input type="password" name="password" value={details.password}
                                    onChange={changeOff} style={myForm.Demo}></input><br />
                                <p style={myForm.errorline}>{error.password}</p>
                                <div className="email-text-align">
                                    <small className="email-text">confirm-password:</small>
                                </div>
                                <input type="password" name="confirm" value={details.confirm}
                                    onChange={changeOff2} onChangeCapture={confirmPassword} style={myForm.Demo}></input><br />
                                <p style={myForm.errorline}>{error.confirm}</p>
                                <div className="submit-btn-align">
                                    <button className="submit-btn" onClick={PostAPI}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
const myForm = {
    Scroll: {
        overflow: "auto"
        
    },
    errorline: {
        color:"white",
        fontFamily: "roboto",
        fontWeight: "100",
        fontSize: "10px",
    },
    Demo: {
        height: "40px",
        width: "250px",
    },
}

export default Signup