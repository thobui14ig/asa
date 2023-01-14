
import { useEffect, useState } from "react";
import { getMenus } from "../../../api/resources/resource.api";


const useSidebar = () => {
    var [data, setdata] = useState([]);

    useEffect(() => {
      const fetch = async () => {
        try {
          const data = await getMenus();
          setdata(data.data);
        } catch (err) {}
      };
      fetch();
    }, []);
  

  
    return { data }
}

export default useSidebar