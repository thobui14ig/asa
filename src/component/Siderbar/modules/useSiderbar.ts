
import { useEffect, useState } from "react";
import { getMenus } from "../../../api/resources/resource.api";


const useSidebar = () => {
  const [data, setdata] = useState([]);

    useEffect(() => {
      const fetch = async () => {
        try {
          const data = await getMenus();
          setdata(data.data);
        } catch (err) { /* empty */ }
      };
      fetch();
    }, []);
  
    

  
    return { data }
}

export default useSidebar