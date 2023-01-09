import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { addResource, getProject } from "../../../api/resources/resource.api"
import { SECTION } from "../../../type/resource-type"

const useTask = () => {
    const { id } = useParams()
    const [idChangeTitle, setIdChangeTitle] = useState<string>('')
    const [listIdSectionShow, setListIdSectionShow] = useState<string[]>([])
    const [idSectionSelected, setIdSectionSelected] = useState<string>('')
    const [titleName, setTitleName] = useState<string>('')
    const [isShowContentTask, setIshowContentTask] = useState<boolean>(false)
    const [contentTask, setcontentTask] = useState<any>({})
    const [isAddTask, setIsAddTask] = useState<boolean>(false)
    const [taskName, setTaskName] = useState<string>('')
    const [section, setSection] = useState<SECTION[]>([])
  
    const handleAddTask = () => {
      setIsAddTask(true)
      let sectionId;
      if(listIdSectionShow.length !== 0){
        sectionId = [...listIdSectionShow].pop()
        setIdSectionSelected(sectionId as string)
      }
    } 
    
      useEffect(() => {
        const fetch = async() => {
          const data = await getProject(id as string)
        
          setSection(data?.data?.sections)
        }
        fetch()
      }, [id]);
  
      const handleShowTaskInSection = (id: string) => {
        setListIdSectionShow((pre) => {
          if(pre.includes(id)){
            return pre.filter((item) => item !== id)
          }
          return [ ...pre, id ]
        } )
      }
  
      const checkIsExitsIdSection = (id: any) => {
        return listIdSectionShow.includes(id)
      }
  
      const handleSelectIdChangeTitle = (id: string) => {
        setIdChangeTitle(id)
      }
  
      const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleName(e.target.value)
      }
  
      const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
          setIsAddTask(false)
          setTaskName('')
          if(taskName.length > 0){
            const values = {
              sections: [idSectionSelected],
              name: taskName,
              resource_type: 'task'
            }
            
            return addResource(values);         
          }
  
        }
      }
    return { idChangeTitle, titleName, isShowContentTask, setIshowContentTask, contentTask, setcontentTask, isAddTask, section, handleAddTask, handleShowTaskInSection, checkIsExitsIdSection, handleSelectIdChangeTitle, handleChangeTitle, handleKeyDown, setIsAddTask, setIdSectionSelected, taskName, setTaskName }
}

export default useTask