import { useState } from "react";
import { useParams } from "react-router";
import { addResource } from "../../../api/resources/resource.api";

const useAddSection = () => {
    const { id } = useParams();
    const [isAddSection, setIsAddSection] = useState<boolean>(false)
    const [sectionName, setSectionName] = useState<string>('')

    const handleKeyDown = (event: any) => {
      if (event.key === 'Enter') {
          setIsAddSection(false)
          setSectionName('')
        if(sectionName.length > 0){
          const values = {
            project: id,
            name: sectionName,
            resource_type: 'section'
          }
          
          return addResource(values) 
        }

      }
    }

    return { isAddSection, handleKeyDown, setIsAddSection, sectionName, setSectionName }
}

export default useAddSection