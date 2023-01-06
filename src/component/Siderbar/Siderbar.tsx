import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from "@ant-design/icons";
import { Button, Menu, MenuProps } from "antd";
import Sider from "antd/lib/layout/Sider";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMenus } from "../../api/resources/resource.api";
interface MENU{
  key: string,
  icon: string | null,
  children: any,
  label: string, 
  onTitleClick: any
}

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menu, setMenu] = useState<any>([]);
  const [listProjectShowmore, setListProjectShowmore] = useState<any>()
  const [data, setData] = useState([])

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
        setData(data.data)
        setMenu(menu)
      }catch(err){

      }

    }
    fetch();
  }, [])

  const createMenu = (data: any) => {
    return data.map((item: any) => {
      let projects = item.projects.map((project: any) => getItem(project.name, project._id))
      const showMore = {
        key: `showmore-${item?._id}`,
        label: '...Show more',
        icon: undefined, children: undefined,
      }
      projects = projects.splice(0, 3)
      projects.push(showMore)
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
    

    if (e.key.includes('showmore')) {
      return createShowmoreShowless(e, 'showmore')
    }
   
    if (e.key.includes('showless')) {
      return createShowmoreShowless(e, 'showless')
    }

    return navigate(`/project/${e.key}`);
  }

  const createShowmoreShowless = (e: any, showName: string) => {
    const id = e.key.split('-').pop();

    const name = showName === 'showless' ? 'showmore' : 'showless'
    const lebel = showName === 'showless' ? '...show more' : '...show less'
    const showMore = {
      key: `${name}-${id}`,
      label: lebel,
      icon: undefined, children: undefined,
    }

    const projectSelected: any = data.find((item: any) => item._id === id)
    let projects = [...projectSelected.projects].map((project: any) => getItem(project.name, project._id))
    if(showName === 'showless'){
      projects = projects.splice(0, 3)
    }
    
    projects.push(showMore)

    setMenu((prev: any) => {
      const menuSelected: any = menu.find((item: any) => item.key === id)
      menuSelected.children = projects
      return [...prev]
    })
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

