import { useEffect, useState } from "react";
import TagItem from "./components/TagItem";
import "./styles/style.scss";

interface props {
  value: any;
  inputHandle:Function;
}

export default function TagName({ value , inputHandle}: props) {
  
  let [Data, setData] = useState([]);
  useEffect(() => {
    const callAPI = async (result: string) => {
      let data = await fetch(
        `https://tiktok.fullstack.edu.vn/api/users/search?q=${result}&type=less`
      );
      let res = await data.json();

      if (res.data.length > 0) {
        setData(res.data);
      }
    };

    if (value.includes("@")) {
      callAPI(value.substring(value.indexOf("@")+1,value.length));      
    }


  }, [value]);

  useEffect(() => {
    Data.map((value: any) => console.log(value));
  }, [Data]);

  return (
    <>
      {Data.length>0 && (
        <div
          className="absolute bg-[#1e1f21] w-72 rounded-lg py-2 z-10"
          style={{ top: "100%" }}
        >
          {Data.map((value: any, key) => {  
            return (
              <TagItem
                key={key}
                imgSrc={value.avatar}
                Name={value.full_name}
                Nickname={value.nickname}
                value={value}
                onClick={(Nickname:string) => inputHandle(Nickname)}
              /> 
            );
          })}
        </div>
      )}
    </>
  );
}
