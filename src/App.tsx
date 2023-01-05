import Layout, { Content } from 'antd/lib/layout/layout';
import { Route, Routes, useRoutes } from "react-router-dom";
import Headers from './component/Header/Header';
import ModalAdd from './component/Modal/Modal';
import Sidebar from './component/Siderbar/Siderbar';
import './index.css';
import Login from './page/Auth/login';
import Mytask from "./page/Task";
import Teams from './page/Team';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      element: <Teams />
    },
    {
      path: '/project/:id',
      element: <Mytask />
    },
    {
      path: '/login',
      element: <Login />
    },
  ])
  return (
    <>
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
    <ToastContainer />
    </>
  )
}


const H1 = () => {
  return <>Đang phát triển</>
}

export default App;
