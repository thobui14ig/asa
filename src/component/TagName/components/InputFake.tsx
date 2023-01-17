import React, { useState, useEffect, useRef } from "react";
import { OutputFileType } from "typescript";
import TagName from "../TagName";
import useDebounce from "./DeBounce";

export default function InputFake() {
  const inputElement = useRef<HTMLDivElement>(null);
  let [value, setvalue] = useState("");
  let [output, setoutput] = useState<any>([]);
  let [deboundValue, setdeboundValue] = useState([]);

  let result = useDebounce(value, 500);

  useEffect(() => {
    setdeboundValue(result);
  }, [result]);
  // console.log(value);
  // console.log(output[0]);
  // console.log(value.indexOf(output[0]));

  return (
    <div>
      <p className="w-52 h-7 flex items-center relative overflow-hidden" ref={inputElement}>
        {value}
        {/* {output.length > 0 ? {

        }} */}
        <input
          className="absolute top-0 left-0 w-full h-full caret-black text-transparent bg-transparent outline-none border-none"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        <TagName
          value={deboundValue}
          inputHandle={setvalue}
        />
      </p>
    </div>
  );
}
