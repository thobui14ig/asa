import Layout, { Content } from 'antd/lib/layout/layout';
import { Route, Routes, useRoutes } from "react-router-dom";
import Headers from './component/header/header';
import ModalAdd from './component/modal/modal';
import Sidebar from './component/siderbar/siderbar';
import './index.css';
import Login from './page/Auth/login';
import Mytask from "./page/my-task";
import Teams from './page/teams';

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
