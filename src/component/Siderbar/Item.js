import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import {  useState } from "react";
import { Link } from "react-router-dom";
import "./More-Less.scss"
import "./Dropdown-animation.scss"

export default function Item({ Render, className, style }) {
  var [open, setopen] = useState([]);
  return (
    <ul className={className} style={style}>
      {typeof Render == "object" &&
        Render.map((value, key) => {
          return (
            <li key={key}>
              <p
                className="text-white cursor-pointer text-lg px-4 py-2 pl-10 hover:bg-[#ffffff33] flex items-center"
                onClick={() => {
                  if (open.includes(value.name)) {
                    var newOpen = open.filter(
                      (result) => result !== value.name
                    );
                    setopen(newOpen);
                  } else {
                    setopen([...open, value.name]);
                  }
                }}
              >
                {value.name}
                {open.includes(value.name) && (
                  <CaretDownOutlined className="flex-1 text-end" />
                )}
                {!open.includes(value.name) && (
                  <CaretUpOutlined className="flex-1 text-end" />
                )}
              </p>

              <Subitem value={value} name={open} />
            </li>
          );
        })}
    </ul>
  );
}

var Subitem = ({ value, name }) => {
  var [more, setmore] = useState([]);
  return (
    <ul className={`${name.includes(value.name) ? "block" : "hidden"} DropdownList`}>
      {value.projects.length <= 3 ? (
        value.projects.map((project, key) => (
          <li key={key}>
            <Link
              to={project._id}
              className="text-white cursor-pointer text-lg px-4 py-2 pl-14 hover:bg-[#ffffff33] flex items-center"
              onClick={() => console.log(project._id)}
            >
              {project.name}
            </Link>
          </li>
        ))
      ) : (
        <>
          {value.projects.map((project, key) => {
            if (key <= 2 || more.includes(value.name)) {
              return (
                <li key={key}>
                  <Link
                    to={project._id}
                    className="text-white cursor-pointer text-lg px-4 py-2 pl-14 hover:bg-[#ffffff33] flex items-center"
                    onClick={() => console.log(project._id)}
                  >
                    {project.name}
                  </Link>
                </li>
              );
            }
          })}
          {!more.includes(value.name) && (
            <li
              className="text-white cursor-pointer text-lg px-4 py-2 pl-14 hover:bg-[#ffffff33] flex w-full toggle more"
              onClick={() => {
                setmore([...more, value.name]);
              }}
            >
              <span className="text-center border-b border-white">More</span>
            </li>
          )}
          {more.includes(value.name) && (
            <li
              className="text-white cursor-pointer text-lg px-4 py-2 pl-14 hover:bg-[#ffffff33] flex w-full toggle less"
              onClick={() => {
                setmore(more.filter((result) => result !== value.name));
              }}
            >
              <span className="text-center border-b border-white">Less</span>
            </li>
          )}
        </>
      )}
    </ul>
  );
};
