import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getTeam } from "../../../api/resources/resource.api";
import { handleSetTitle, handleShowModal } from "../../../stores/modal-store";
import { setResource, setResourceTitle } from "../../../stores/resource-store";
import { PROJECT } from "../../../type/resource-type";

 const useTeam = () => {
    const { id } = useParams()
    const navigate = useNavigate(); 
    const dispatch = useDispatch()
    const [data, setData] = useState<PROJECT[]>([]);

    useEffect(() => {
      const fetch = async() => {
        const data = await getTeam(id as string)
        dispatch(setResourceTitle(data?.data?.name))
        setData(data?.data?.projects)
      }
      fetch();

      dispatch(setResource({
        id
      }))
    }, [id]);

    const handleAddProject = () => {
      dispatch(handleShowModal())
      dispatch(handleSetTitle({
        type: 'project'
      }))
    }

    return { data, handleAddProject, navigate }
  }

  export default useTeam
  