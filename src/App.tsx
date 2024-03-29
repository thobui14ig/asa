import Layout, { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import { useRoutes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import NewHeader from "./component/Header/Header-New";
import ModalAdd from "./component/Modal/Modal";
import SiderBar from "./component/Siderbar/SiderBar-New";
import "./index.css";
import { Login, Task, Team } from "./pages";
import Input from "./component/TagName/components/Input-Clone"

function App() {
  const [SidebarToggle, setSidebar] = useState(true);
  const ToggleSidebar = () => setSidebar(!SidebarToggle);
  const elements = useRoutes([
    {
      path: '/',
      element: <H1 />,
    },
    {
      path: '/students',
      element: <H1 />,
    },
    {
      path: '/team/:id',
      element: <Team />,
    },
    {
      path: '/project/:id',
      element: <Task />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  const token = localStorage.getItem('accessToken');

  // if (!token) {
  //   return <Login/>
  // }
  return (
    <Layout hasSider>
      <SiderBar open={SidebarToggle} toggle={ToggleSidebar} />
      <Layout
        className="site-layout"
        style={{
          background: 'white',
        }}
      >
        {/* <Headers/> */}
        <NewHeader open={SidebarToggle} toggle={ToggleSidebar} className={`${SidebarToggle ? 'ml-60' : 'ml-0'}`}/>
        <Content
          className={`${SidebarToggle ? 'ml-60' : 'ml-0'}`}
          style={{
            padding: 16,
            background: 'white',
            transition: 'all 1s ease'
          }}
        >
          
          {elements}
          <Input />
        </Content>
      </Layout>
      <ModalAdd />
    </Layout>
  );
}

const H1 = () => {
  return <>Đang phát triển</>;
};

export default App;
