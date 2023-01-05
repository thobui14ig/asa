
import { Header } from 'antd/lib/layout/layout';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import './header.scss';

const Headers = () => {
    const navigate = useNavigate();
    const [isLogin, setLogin] = useState(0)
    
    // Login page
    const handleLogin = () => {
        navigate('/login')
        setLogin(1)
    }

    return(
        <>
            <Header
                className="site-layout-background"
                style={{
                    padding: '0 16px',
                    borderBottom: '1px solid red'
                }}
                >
                <div className='header-container'>
                    <h1>My task</h1>
                    {isLogin == 0 && <span className='login' onClick={handleLogin}>Login</span> }                  
                </div>
            
            </Header>     


        </>


    )
}
export default Headers

