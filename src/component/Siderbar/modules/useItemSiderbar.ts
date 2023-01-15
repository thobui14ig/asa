import { useState } from "react";
import { useNavigate } from "react-router";

const useItemSidebar = () => {
  let [open, setopen] = useState<any>([]);
  const navigate = useNavigate();

  const handleOpenTeam = (value: any) => {
    if (open.includes(value?.name)) {
      var newOpen = open.filter((result: any) => result !== value.name);
      setopen(newOpen);
    } else {
      setopen([...open, value.name]);
    }
    navigate(`/team/${value._id}`);
  };

  return { handleOpenTeam, open };
};

export default useItemSidebar;
