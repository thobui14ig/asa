import {
  MenuUnfoldOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Dropdown, Tooltip } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSetTitle, handleShowModal } from "../../stores/modal-store";
import { RootState } from "../../stores/store";
import useDebounce from "../TagName/components/DeBounce";
import InputFake from "../TagName/components/InputFake";
import TagName from "../TagName/TagName";

interface Props {
  open: boolean;
  toggle: Function;
  className: any;
}

export default function NewHeader({ open, toggle, className }: Props) {
  let items = [
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
      label: <button className="px-3 w-full h-full">Upgrate</button>,
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

  let [tooltip, setTooltip] = useState(false);
  let [searchText, setSearchText] = useState("");
  let [showTagname, setShowTagname] = useState("");
  const dispatch = useDispatch();
  const { resourceTitle } = useSelector((state: RootState) => state.resource);

  const showModal = () => {
    dispatch(handleShowModal());
    dispatch(
      handleSetTitle({
        type: "team",
      })
    );
  };

  let value = useDebounce(searchText, 500);
  useEffect(() => {
    setShowTagname(value);
  }, [value]);

  return (
    // header layout
    <Header
      className={`site-layout-background ${className}`}
      style={{
        padding: "0 16px",
        borderBottom: "1px solid red",
        transition: "all 1s ease",
      }}
    >
      <div className="flex justify-between items-center h-full">
        {/* Left Header */}
        <div className="flex items-center">
          <div
            className={`${
              !open
                ? "p-2 hover:bg-[#0000003d] rounded-md cursor-pointer overflow-hidden flex items-center"
                : ""
            }`}
          >
            {!open && (
              <>
                <div className="" onClick={() => toggle()}>
                  <MenuUnfoldOutlined className="text-xl flex items-center" />
                </div>
              </>
            )}
          </div>
          <h1 className="text-2xl">{resourceTitle}</h1>
          <InputFake />
        </div>
        <div className="">
          {/* Right Header */}
          <div className="flex items-center px-6 h-9">
            {/* search */}
            <div className="relative h-full flex items-center">
              <input
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                className="h-[30px] overflow-hidden rounded-2xl bg-transparent border border-solid border-[#cfcbcb] pl-8 pr-4 w-[140px] text-black focus-visible:border-[#a2a0a2] focus-visible:outline-[#4573d2] outline-3 outline-solid focus:w-[480px] hover:border-[#6a696a]"
                style={{ transition: "all .3s ease" }}
                placeholder="Search"
              />
              <TagName value={showTagname} inputHandle={setSearchText} />
              <SearchOutlined
                className="absolute text-[#6a696a] top-[50%] left-[8px] ml-0"
                style={{ transform: "translateY(-50%)" }}
              />
            </div>

            <PlusCircleOutlined
              className="text-3xl text-[#f06a6a] ml-3 h-full flex items-center cursor-pointer"
              onClick={showModal}
            />
            <button className=" px-3 ml-3 flex items-center h-full">
              Upgrate
            </button>

            {/* avatar */}
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
      </div>
    </Header>
  );
}
