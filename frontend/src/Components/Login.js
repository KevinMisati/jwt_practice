import React,{useState} from 'react'
import axiosInstance from './axiosApi'

const Login = () => {
    const [state,setState] = useState({
        username:'',
        password:'',
    })
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')
    /* const handleChange = (e) => {
        setState({
            [e.target.name]:e.target.value
        })
    } */
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleNameChange = (e) => {
        setUsername(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        try{
            axiosInstance.post('/token/obtain',{
                username:username,
                password:password
            }).then((response) => {
                axiosInstance.defaults.headers['Authorization'] = 'JWT ' + response.data.access
                localStorage.setItem('access_token',response.data.access)
                localStorage.setItem('refresh_token',response.data.refresh)
                
            })
            
            
        }catch (error) {
            throw error;
        }
    }
    return (
        <div>
            <h1>Login page</h1>

            <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={username} onChange={handleNameChange}/>
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

export default Login
