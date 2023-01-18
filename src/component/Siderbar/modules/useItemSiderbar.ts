import { useState } from "react";
import { useNavigate } from "react-router";

const useItemSidebar = () => {
  const [open, setopen] = useState<any>([]);
  const navigate = useNavigate();

  const handleOpenTeam = (value: any) => {
    if (open.includes(value?.name)) {
      const newOpen = open.filter((result: any) => result !== value.name);
      setopen(newOpen);
    } else {
      setopen([...open, value.name]);
    }
    navigate(`/team/${value._id}`);
  };

  return { handleOpenTeam, open };
};

export default useItemSidebar;
