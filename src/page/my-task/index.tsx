import { CaretDownOutlined, CaretLeftOutlined, CheckOutlined, DoubleRightOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { addResource, getProject } from "../../api/resources/resource.api";
import LISTSECTION from "../../type/section-type";
import AddSection from "./add-section";
import TaskContent from "./content";
import './index.scss';

const Mytask = () => {
    const { id } = useParams()
    const [idChangeTitle, setIdChangeTitle] = useState<string>('')
    const [listIdSectionShow, setListIdSectionShow] = useState<string[]>([])
    const [idSectionSelected, setIdSectionSelected] = useState<string>('')
    const [titleName, setTitleName] = useState<string>('')
    const [isShowContentTask, setIshowContentTask] = useState<boolean>(false)
    const [contentTask, setcontentTask] = useState<any>({})
    const [isAddTask, setIsAddTask] = useState<boolean>(false)
    const [taskName, setTaskName] = useState<string>('')
    const [section, setSection] = useState<LISTSECTION[]>([])

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
    


    return(
        <div className="mytask">
            <Button style={{ marginBottom: 16 }} onClick={() => handleAddTask()}  type="primary"><PlusOutlined />Add task</Button>
            <h1>List task</h1>

            <div className="list-section" style={{ width: '100%' }} id="section">
              {section && section.map((item: LISTSECTION) => {
                return(
                  <div className="section-item" key={item?._id}>
                    {!checkIsExitsIdSection(item?._id) 
                      ?
                      <CaretLeftOutlined style={{ marginRight: 7 }} onClick={() => handleShowTaskInSection(item?._id)}/>
                      : 
                      <CaretDownOutlined style={{ marginRight: 7 }} onClick={() => handleShowTaskInSection(item?._id)}/>

                    }
                    {idChangeTitle === item?._id
                      ? 
                        <input value={titleName ? titleName : item?.name} onChange={(e) => handleChangeTitle(e)}/>
                      :
                        <span className="section-title" onClick={() => handleSelectIdChangeTitle(item?._id)}>{item?.name}</span>
                    }
                   

                    <div className="list-task" style={{ marginLeft: 20, display: checkIsExitsIdSection(item?._id) ? 'block' : 'none' }}>
                      <>
                        <List
                          
                          dataSource={item?.tasks}
                          renderItem={item => {
                            const { name, _id } = item;
                            return(
                              <>
                                <List.Item key={_id} onClick={() => {
                                  setIshowContentTask(true)
                                  setcontentTask(item)
                                }}>
                                <List.Item.Meta
                                    avatar={<CheckOutlined/>}
                                    title={name}
                                />
                                <div className="name-details"><span >Details</span><DoubleRightOutlined /></div>
                                </List.Item>               
                              </>

                          )
                          }}
                          
                          /> 
                          <div className="add-task">
                            {!isAddTask ?
                              <span style={{ paddingLeft: 20, cursor: 'pointer' }} onClick={() => {
                                setIsAddTask(true)
                                setIdSectionSelected(item?._id)
                              }}>Add task</span>     
                              :
                              <input value={taskName} onChange={(e) => setTaskName(e.target.value)} onKeyDown={handleKeyDown} />       
                            }
                          
                          </div>
                                   
                      </>

                    </div>
                      
                  </div>
                )
              })

              }



            </div>
            <AddSection />
            {isShowContentTask &&
              <TaskContent 
              contentTask={contentTask} 
              setIshowContentTask={setIshowContentTask}
              />
            }
           
        </div>
        
    )
}
export default Mytask