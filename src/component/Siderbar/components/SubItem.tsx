import { useState } from "react";
import { Link } from "react-router-dom";
import { PROJECT, TEAM } from "../../../type/resource-type";

const SubItem = ({ value, name }: { value: TEAM, name: string }) => {
    const [more, setmore] = useState<string[]>([]);
    return (
      <ul className={`${name.includes(value.name) ? "block" : "hidden"} DropdownList`}>
        {value.projects.length <= 3 ? (
          value.projects.map((project: PROJECT, key: number) => (
            <li key={key}>
              <Link
                to={project._id}
                className="text-white cursor-pointer text-lg px-4 py-2 pl-14 hover:bg-[#ffffff33] flex items-center"
              >
                {project.name}
              </Link>
            </li>
          ))
        ) : (
          <>
            {value.projects.map((project: PROJECT, key: number) => {
              if (key <= 2 || more.includes(value.name)) {
                return (
                  <li key={key}>
                    <Link
                      to={`/project/${project._id}`}
                      className="text-white cursor-pointer text-lg px-4 py-2 pl-14 hover:bg-[#ffffff33] flex items-center"
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
                  setmore(more.filter((result: string) => result !== value.name));
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
  

export default SubItem