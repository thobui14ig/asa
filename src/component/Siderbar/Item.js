import React from "react";

export default function Item({ Render,className}) {
  return (
    <ul className={className}>
      {typeof Render == "object" &&
        Render.map((value, key) => {
          return (
            <li
              key={key}
              className="text-white cursor-pointer text-lg px-4 py-2 pl-10 hover:bg-[#ffffff33] flex items-center"
            >
              {value.name}
            </li>
          );
        })}
    </ul>
  );
}
