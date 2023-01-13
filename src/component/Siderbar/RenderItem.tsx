import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Item from "./Item.js";

interface Props {
  item: any;
  listHeight: Number;
}

export default function RenderItem({ item, listHeight }: Props) {
  var [ToggleMenu, setMenu] = useState(false);
  console.log(1);

  return (
    <li>
      <div
        className="text-white cursor-pointer text-lg px-4 py-2 hover:bg-[#ffffff33] flex items-center"
        onClick={() => setMenu(!ToggleMenu)}
      >
        {item.icon}
        <span className="ml-2">{item.title}</span>
        {item.menu !== undefined && !ToggleMenu && (
          <CaretDownOutlined className="flex-1 text-end" />
        )}
        {item.menu !== undefined && ToggleMenu && (
          <CaretUpOutlined className="flex-1 text-end" />
        )}
      </div>

      {/* render children */}
      <Item
        style={{
          maxHeight: listHeight + "px",
          overflow: "auto",
        }}
        Render={item.menu}
        className={`${ToggleMenu ? "block" : "hidden"}`}
      />
    </li>
  );
}
