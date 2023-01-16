import React from "react";

export default function TagItem({
  imgSrc = "https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=fZXttmBxezQAX_3tXwA&_nc_ht=scontent.fdad3-6.fna&oh=00_AfD7WPqtZz6oBqLlscGDJWaS5z7JjdCFFu7zmaTKmsd4Tw&oe=63E9DEF8",
  Name = "Test",
  Nickname = "test",
  onClick,
  value,
}: any) {
  return (
    <div
      className="flex items-center h-full w-full overflow-hidden p-2 px-3 hover:bg-[#ffffff1f] cursor-pointer"
      onClick={() => onClick(value+"@"+Nickname)}
    >
      <div className="w-10 h-10 rounded-[50%] overflow-hidden">
        <img src={imgSrc} alt={Name} />
      </div>
      <div className="ml-3">
        <p className="text-white leading-4 text-sm font-medium">{Name}</p>
        <p className="text-white leading-4 text-xs">{Nickname}</p>
      </div>
    </div>
  );
}
