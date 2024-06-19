import React, { useState } from 'react'

const Authtication = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [isRegister, setisRegister] = useState(false)
    const [isloggedin, setisloggedin] = useState(false)
    const [users , setUser]= useState([])

    const handleAuthnticaton= ()=>{
        if(isRegister){
            //Login
            const user=users.find((u)=>u.Email===Email && u.Password===Password)
            if(user){
                setisloggedin(true)
            }
            else{
                alert('Login Failed Please check Your Credential')
            }
        }
        else{
            //Register
            const newUser={Email, Password}
            setUser([...users,newUser])
            localStorage.setItem('users',JSON.stringify([...users, newUser]))
            setisloggedin(true)
            setEmail('')
            setPassword('')

        }
    }
    const handlelogout=() =>{
        setisloggedin(false)
    }
    return (
        <div>
            {
                isloggedin ? (
                    <div>
                        <h2>
                            Welcome, {Email}!
                        </h2>
                        <button onClick={handlelogout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h2>{isRegister ? 'Login' : 'Register'}</h2>
                        <form >
                            <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                            <input style={{ margin: '10px' }} type='Password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                            <button onClick={handleAuthnticaton}> 
                                {isRegister ? 'login' : 'Register'}
                            </button>

                        </form>
                        <p>
                            {isRegister ? "Don't have an account? Register Now" : "Already have an Account ? login"}
                        </p>
                        <button onClick={() => setisRegister(!isRegister)}>
                            {isRegister ? 'Regidter' : 'login'}
                        </button>
                    </div>
                )
            }

        </div>
    )
}

export default Authtication