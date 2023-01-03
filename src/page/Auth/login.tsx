import { useState } from "react"
import { login } from "../../api/Auth/auth.api"
import './login.scss'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    
  
    const handleGetUsername = (e: any) => {
      setUsername(e.target.value);
    }

    const handleGetPassword = (e: any) => {
      setPassword(e.target.value)
    }

    const submit = async () => {
        try{
          const result = await login({username: username, password: password})
          console.log(result);
          
          if(result.data.username == username && result.data.password == password ){
            setUsername('');
            setPassword('')
            alert('Login succes')
          }else {
            alert('Login fail')
          }
        }catch(err){

        }
    }
    return (
      <div className="container">
        <div className="content">
          <div className="item-child">
            <input className="username" value={username} onChange={(e) => handleGetUsername(e)} placeholder="user name" title="username" type="text" />
            <input className="password" value={password} onChange={(e) => handleGetPassword(e)} placeholder="Password" title="password" type="password" />
            <button className="submit" onClick={submit}><span>Login</span></button>
          </div>
        </div>
      </div>
    )
  }
  