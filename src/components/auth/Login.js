import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "./Login.css"


export const Login = props => {
    const email = useRef()
    const password = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/adventurers?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("chronicles_adventurer", exists.id)
                    history.push("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist!</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="chronicles-h1">Chronicles</h1>
                    <fieldset>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email Address"
                            required autoFocus />
                    </fieldset>
                    <section className="registration">
                        <div className="register-account">No account yet? Register
                            <Link to="/register" className="link--register">here</Link>.
                        </div>
                    </section>
                    <fieldset>
                        <button type="submit" className="login-button">
                            <i class="fas fa-sign-in-alt"></i>
                        </button>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}

