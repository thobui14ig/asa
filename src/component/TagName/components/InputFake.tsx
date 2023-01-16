import React, { useState, useEffect, useRef } from "react";
import TagName from "../TagName";
import useDebounce from "./DeBounce";

export default function InputFake() {
  const inputElement = useRef<HTMLDivElement>(null);
  let [value, setvalue] = useState("");
  let [deboundValue, setdeboundValue] = useState([]);

  let result = useDebounce(value, 500);

  useEffect(() => {
    setdeboundValue(result);
    console.log(result);
  }, [result]);

  return (
    <div>
      <p className="w-52 h-7 flex items-center relative" ref={inputElement}>
        {value}
        <input
          className="absolute top-0 left-0 w-full h-full caret-black text-transparent bg-transparent outline-none border-none"
          onChange={(e) => setvalue(e.target.value)}
        />
        <TagName value={deboundValue} inputHandle={setvalue}/>
      </p>
    </div>
  );
}
