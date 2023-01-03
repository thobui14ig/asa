import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from "@ant-design/icons";
import { Button, Menu, MenuProps } from "antd";
import Sider from "antd/lib/layout/Sider";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMenus } from "../../api/resources/resource.api";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menu, setMenu] = useState([]);

  const navigate = useNavigate();

  const getItem = (label: any, key: any, icon?: any, children?: any, isSub?: boolean) => {
    return isSub ? {
        key,
        icon,
        children,
        label,
        onTitleClick: (key: string) => onTitleClick(key)
      }: {
        key,
        icon,
        children,
        label,
      }
  }

  const menus = useMemo(() => {
    return [
      getItem('Home', 'home', <PieChartOutlined />),
      getItem('My task', 'mytask', <DesktopOutlined />),
      getItem('Inbox', 'inbox', <ContainerOutlined />),
      getItem('Team', 'default', <AppstoreOutlined />, menu),
    ];
  }, [menu]) 

  useEffect(() => {
    const fetch = async() => {
      try{
        const data = await getMenus()
        const menu = createMenu(data.data)
        setMenu(menu)
      }catch(err){

      }

    }
    fetch();
  }, [])

  const createMenu = (data: any) => {
    return data.map((item: any) => {
      const projects = item.projects.map((project: any) => getItem(project.name, project._id))
      return getItem(item.name, item?._id, null, projects, true)
    })
  }



  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick: MenuProps['onClick'] = (e) => {
    if(e.key === 'home' || e.key === 'mytask' || e.key === 'inbox'){
      return navigate(`/`);
    }
    return navigate(`/project/${e.key}`);
  }

  const onTitleClick = (e: any) => {
    const { key } = e
    navigate(`/team/${key}`);
  }


  return(
      <>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
              style={{
                  overflow: 'auto',
                  height: '100vh',
                  position: 'fixed',
                  left: 0,
                  top: 0,
                  bottom: 0,
              }}>
                  <div className="logo" />
                  <Button
                  type="primary"
                  onClick={toggleCollapsed}
                  style={{
                  marginBottom: 16,
                  }}
              >
                  {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menus} inlineCollapsed={collapsed} defaultOpenKeys={['sub1']} onClick={onClick} />
          </Sider>
      
      </>
  )
}
export default Sidebar

