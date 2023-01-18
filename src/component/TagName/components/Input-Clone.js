import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../styles/Editor.scss";
import draftToMarkdown from "draftjs-to-markdown";
import { convertToRaw } from "draft-js";
function Input() {
  let [Data, setData] = useState([]);
  var [editorState, seteditorState] = useState(undefined);
  var [suggestions, setsuggestions] = useState([]);

  // getdata
  useEffect(() => {
    const callAPI = async (result) => {
      let data = await fetch(`https://jsonplaceholder.typicode.com/users`);
      let res = await data.json();
      if (res.length > 0) {
        setData(res);
      }
    };
    callAPI();
  }, []);

  useEffect(() => {
    console.log(Data);
    let newData = Data.map((user) => {
      return {
        text: (
          <div className="flex items-center h-full w-full overflow-hidden p-2 px-3 hover:bg-[#ffffff1f] cursor-pointer">
            <div className="w-10 h-10 rounded-[50%] overflow-hidden">
              <img
                src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=fZXttmBxezQAX_3tXwA&_nc_ht=scontent.fdad3-6.fna&oh=00_AfD7WPqtZz6oBqLlscGDJWaS5z7JjdCFFu7zmaTKmsd4Tw&oe=63E9DEF8"
                alt="Name"
              />
            </div>
            <div className="ml-3">
              <p className="text-white leading-4 text-sm font-medium">
                {user.name}
              </p>
              <p className="text-white leading-4 text-xs">{user.username}</p>
            </div>
          </div>
        ),
        value: user.username,
        id: user.id,
        url: "id: "+user.id,
      };
    });

    setsuggestions(newData);
  }, [Data]);

  // setdata
  // let suggestions = [
  //   {
  //     text: (
  //       <div className="flex items-center h-full w-full overflow-hidden p-2 px-3 hover:bg-[#ffffff1f] cursor-pointer">
  //         <div className="w-10 h-10 rounded-[50%] overflow-hidden">
  //           <img
  //             src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=fZXttmBxezQAX_3tXwA&_nc_ht=scontent.fdad3-6.fna&oh=00_AfD7WPqtZz6oBqLlscGDJWaS5z7JjdCFFu7zmaTKmsd4Tw&oe=63E9DEF8"
  //             alt="Name"
  //           />
  //         </div>
  //         <div className="ml-3">
  //           <p className="text-white leading-4 text-sm font-medium">name</p>
  //           <p className="text-white leading-4 text-xs">Nickname</p>
  //         </div>
  //       </div>
  //     ),
  //     value: "name",
  //     id: "123",
  //     url: "banana",
  //   },
  // ];

  // set value
  const onEditorStateChange = (editorState) => {
    seteditorState(
      draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
    );
  };

  return (
    <div className="Editor">
      <Editor
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        toolbarHidden
        onEditorStateChange={onEditorStateChange}
        mention={{
          separator: " ",
          trigger: "@",
          suggestions: suggestions,
        }}
        hashtag={{}}
      />
      <textarea disabled value={editorState} />
    </div>
  );
}

export default Input;
