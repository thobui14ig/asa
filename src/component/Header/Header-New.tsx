import {
  PlusCircleOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Divider, Dropdown, Space, Tooltip } from "antd";
import React, { useRef, useState } from "react";

export default function NewHeader() {
  var items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/">
          Family Hospital
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <a target="_blank" rel="noopener noreferrer" href="/">
            IT
          </a>
          <hr />
        </>
      ),
    },
    {
      key: "3",
      label: (
        <button className="bg-[#f1bd6c] px-3 rounded-sm w-full h-full">
          Upgrate
        </button>
      ),
    },
    {
      key: "4",
      label: (
        <>
          <p>More</p>
          <hr />
        </>
      ),
    },
    {
      key: "5",
      label: <p>My profile</p>,
    },
    {
      key: "6",
      label: <p>My settings...</p>,
    },
    {
      key: "7",
      label: <p>Privacy Policy</p>,
    },
    {
      key: "8",
      label: <p>Log out</p>,
    },
  ];

  var [tooltip, setTooltip] = useState(false);

  return (
    <div className="flex justify-between items-center h-full ">
      {/* Left Header */}
      <div className="">
        <div></div>
      </div>

      {/* Right Header */}
      <div className="flex items-center px-6 h-9">
        <div className="relative h-full flex items-center">
          <input
            className="h-[30px] overflow-hidden rounded-2xl bg-transparent border border-solid border-[#cfcbcb] pl-8 pr-4 w-[140px] text-white focus-visible:border-[#a2a0a2] focus-visible:outline-[#4573d2] outline-3 outline-solid focus:w-[480px] hover:border-[#6a696a]"
            style={{ transition: "all .3s ease" }}
            placeholder="Search"
          />
          <SearchOutlined
            className="absolute text-[#6a696a] top-[50%] left-[8px] ml-0"
            style={{ transform: "translateY(-50%)" }}
          />
        </div>

        <PlusCircleOutlined className="text-3xl text-[#f06a6a] ml-3 h-full flex items-center cursor-pointer" />

        <button className="bg-[#f1bd6c] px-3 rounded-lg ml-3 flex items-center h-full">
          Upgrate
        </button>

        <div className="w-7 h-7 overflow-hidden rounded-[50%] ml-3 cursor-pointer">
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
            trigger={["click"]}
            arrow={{
              pointAtCenter: true,
            }}
          >
            <Tooltip
              title={() => (
                <div className="px-2">
                  <p>Bùi Thanh Thọ CNTT</p>
                  <p className="text-center text-[#a2a0a2] text-xs">
                    Family Hospital
                  </p>
                </div>
              )}
              open={tooltip}
              placement="bottomRight"
            >
              <img
                src="https://s3.amazonaws.com/profile_photos/1202283268575986.1202283556666209.QlfKcGsMC4C78NmHUL6p_60x60.png"
                alt="avatar"
                onMouseEnter={() => setTooltip(true)}
                onMouseLeave={() => setTooltip(false)}
                onClick={() => {
                  if (tooltip) setTooltip(false);
                }}
              />
            </Tooltip>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
