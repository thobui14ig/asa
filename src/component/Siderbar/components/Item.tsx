import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { TEAM } from "../../../type/resource-type";
import useItemSidebar from "../modules/useItemSiderbar";
import "../styles/Dropdown-animation.scss";
import "../styles/More-Less.scss";
import SubItem from "./SubItem";

interface ItemPropType{
  Render: TEAM[], 
  className: string, 
  style: any
}

export default function Item({ Render, className, style }: ItemPropType) {
  const { handleOpenTeam, open } = useItemSidebar()
  
  return (
    <ul className={className} style={style}>
      {typeof Render == "object" &&
        Render.map((value: TEAM, key: number) => {
          return (
            <li key={key}>
              <p
                className="text-white cursor-pointer text-lg px-4 py-2 pl-10 hover:bg-[#ffffff33] flex items-center"
                onClick={() => handleOpenTeam(value)}
              >
                {value.name}
                {open.includes(value.name) && (
                  <CaretDownOutlined className="flex-1 text-end" />
                )}
                {!open.includes(value.name) && (
                  <CaretUpOutlined className="flex-1 text-end" />
                )}
              </p>

              <SubItem value={value} name={open} />
            </li>
          );
        })}
    </ul>
  );
}
