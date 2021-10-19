import React,{useState} from 'react'
import axiosInstance from './axiosApi'

const SignUp = () => {
    
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosInstance.post('/user/create/',
        {
            username:username,
            email:   email,
            password  :password
        })
        .then(resp =>  resp)
        .catch(error => {
            console.log(error.stack)
        })
    }
    const handleUserNameChange = (e) => {
        setUsername(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <h1>Sign Up Page</h1>

            <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={username} onChange={handleUserNameChange}/>
                    </label>
                    <label>
                        Email:
                        <input name="email" type="email" value={email} onChange={handleEmailChange}/>
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password" value={password} onChange={handlePasswordChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default SignUp
