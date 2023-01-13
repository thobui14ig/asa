import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  DownOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { getMenus } from "../../api/resources/resource.api";
import React, { createContext, useEffect, useState } from "react";
import RenderItem from "./RenderItem";
import "./Siderbar.scss";

interface Props {
  open: boolean;
  toggle: Function;
}

export default function SiderBar({ open, toggle }: Props) {
  var [data, setdata] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getMenus();
        setdata(data.data);
      } catch (err) {}
    };
    fetch();
  }, []);

  const SideBarItems = [
    { title: "Home", icon: <PieChartOutlined /> },
    { title: "My task", icon: <DesktopOutlined /> },
    { title: "Inbox", icon: <ContainerOutlined /> },
    { title: "Team", icon: <AppstoreOutlined />, menu: data },
  ];

  console.log();

  return (
    <div
      className={`Navbar bg-[#1e1f21] h-screen w-full max-w-[240px] absolute ${
        open ? "left-0" :"left-[-100%]"
      }`}
      style={{ transition: "all 1s ease" }}
    >
      <header className="h-[72px] flex items-center justify-between px-4">
        <h1 className="text-white text-3xl">Asana</h1>
        <MenuFoldOutlined
          className="text-white text-xl cursor-pointer"
          onClick={() => toggle()}
        />
      </header>
      <div>
        <ul>
          {SideBarItems.map((item, index) => {
            return <RenderItem item={item} key={index} listHeight={document.body.scrollHeight - (data.length * 44 + 72)}/>;
          })}
        </ul>
      </div>
    </div>
  );
}
