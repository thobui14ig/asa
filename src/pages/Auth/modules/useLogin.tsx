import { useState } from "react";
import { toast } from 'react-toastify';
import ApiConstant from "../../../api/apiConstant";
import { login } from "../../../api/Auth/auth.api";
import '../login.scss';

 const useLogin = () => {
    const [username, setUsername] = useState('thobui1')
    const [password, setPassword] = useState('111111')

    const handleGetUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    }

    const handleGetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value)
    }

    const submit = async () => {
        try{
          const result = await login({name: username, password: password})
          localStorage.setItem('accessToken', result?.data.accessToken)
          localStorage.setItem('refreshToken', result?.data.refreshToken)
          window.location.href = ApiConstant.BASE_CLIENT_URL
        }catch(err: any){
          toast(err?.response?.data)
        }
    }

    return { username, password, handleGetUsername, handleGetPassword, submit }
  }

  export default useLogin
  