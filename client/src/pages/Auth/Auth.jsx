import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import { NavbarAuth } from '../../components/Navbar/Navbar-Auth'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import 'materialize-css'
import './auth-style.scss'

export const Auth = () => {
    const message = useMessage()
    const {loading, error, request, cleanError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
    }, [error, message])

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/register', 'POST', {...form})
            console.log(data);
        } catch (e) {}
    }
    return (
        <div>
            <NavbarAuth />
            <div className="intro">
                <div className="container">
                    <div className="intro__inner">
                        <div className="row">
                            <form className="col s12"> 
                                <h1 style={{textAlign: 'center', marginBottom: '30px'}}>Authorization</h1>
                                <div className="row">
                                    <div class="input-field col s6">
                                        <input id="password" type="password" onChange={changeHandler} name="password" class="validate" required></input>
                                        <label for="password">Password</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="email" type="email" name="email" onChange={changeHandler} class="validate" required></input>
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <a type="submit" class="waves-effect waves-light btn" onClick={registerHandler} disabled={loading} style={{marginRight: '10px'}}>Registration</a>
                            <a type="submit" class="waves-effect waves-light btn" href="/">Login</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Auth
