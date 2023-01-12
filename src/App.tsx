import Layout, { Content } from 'antd/lib/layout/layout';
import { useRoutes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Headers from './component/Header/Header-old';
import ModalAdd from './component/Modal/Modal';
import Sidebar from './component/Siderbar/Siderbar';
import './index.css';
import { Login, Task, Team } from './pages';


function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <H1 />
    },
    {
      path: '/students',
      element: <H1 />
    },
    {
      path: '/team/:id',
      element: <Team />
    },
    {
      path: '/project/:id',
      element: <Task />
    },
    {
      path: '/login',
      element: <Login />
    },
  ])

  const token = localStorage.getItem('accessToken')

  // if (!token) {
  //   return <Login/>
  // }

  return (
    <Layout hasSider>
        <Sidebar/>
        <Layout
            className="site-layout"
            style={{
            marginLeft: 200,
            background: 'white'
            }}
          >
          <Headers/>
          <Content
            style={{
              padding: 16,
              background: 'white'
              }}
          >
            {elements}           
          </Content>

        </Layout>
        <ModalAdd />
       
    </Layout> 
  )
}


const H1 = () => {
  return <>Đang phát triển</>
}

export default App;
