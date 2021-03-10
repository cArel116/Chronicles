import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    // const verifyPassword = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/adventurers?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/adventurers", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            name: `${firstName.current.value} ${lastName.current.value}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("chronicles_adventurer", createdUser.id)
                                history.push("/login")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })

    }

    return (
        <main className="registration-main">

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div className="account-exists-popup">Account with that email address already exists.</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--register" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal register-h3">Register for Chronicles</h1>
                <fieldset>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First Name" required autoFocus />
                </fieldset>
                <fieldset>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last Name" required />
                </fieldset>
                <fieldset>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email Address" required />
                </fieldset>

                <button type="submit" className="login-button">
                    <i class="fas fa-sign-in-alt"></i>
                </button>

            </form>
        </main>
    )
}

