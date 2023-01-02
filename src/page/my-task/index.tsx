import { CaretDownOutlined, CaretLeftOutlined, CheckOutlined, DoubleRightOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { addResource, getProject } from "../../api/resources/resource.api";
import AddSection from "./add-section";
import TaskContent from "./content";
import './index.scss';

interface DataType {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    email: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nat: string;
    id: number
  }

  const listTask = [
    { id: 1, name: 'Section 1' },
    { id: 2, name: 'Section 2' },

  ]
interface LISTSECTION{
  id: string,
  name: string
}

const contentTaskWithDefault = 700
const contentSectionWithDefault = '100%'
const sectionWidth: number | string = document?.getElementById("section")?.offsetWidth || contentSectionWithDefault


const Mytask = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataType[]>([]);
    const [idChangeTitle, setIdChangeTitle] = useState<number>(0)
    const [listIdSectionShow, setListIdSectionShow] = useState<number[]>([])
    const [idSectionSelected, setIdSectionSelected] = useState<number>(0)
    const [titleName, setTitleName] = useState<string>('')
    const [isShowContentTask, setIshowContentTask] = useState<boolean>(false)
    const [contentTask, setcontentTask] = useState<any>({})
    const [contentTaskWidth, setContentTaskWidth] = useState<number>(0)
    const [contentSectionWidth, setContentSectionWidth] = useState<any>(sectionWidth)
    const [isAddTask, setIsAddTask] = useState<boolean>(false)
    const [taskName, setTaskName] = useState<string>('')
    const [section, setSection] = useState<LISTSECTION[]>([])

    const handleAddTask = () => {
      setIsAddTask(true)
      let sectionId;
      if(listIdSectionShow.length !== 0){
        sectionId = [...listIdSectionShow].pop()
        setIdSectionSelected(sectionId as number)
      }
    } 


    const loadMoreData = () => {
        if (loading) {
          return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
          .then(res => res.json())
          .then(body => {
            let results = body.results.splice(0, 3)
            results = results.map((item: any, i: number) => {
              return { ...item, id: i }
            })
            setData([...data, ...results]);
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
          });
      };
    
      useEffect(() => {
        loadMoreData();
        const fetch = async() => {
          const data = await getProject(id as string)
          setSection(data?.data?.sections)
        }
        fetch()
      }, [id]);

      const handleShowTaskInSection = (id: number) => {
        setListIdSectionShow((pre) => {
          if(pre.includes(id)){
            return pre.filter((item) => item !== id)
          }
          return [ ...pre, id ]
        } )
      }

      const checkIsExitsIdSection = (id: number) => {
        return listIdSectionShow.includes(id)
      }

      const handleSelectIdChangeTitle = (id: number) => {
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

            <div className="list-section" style={{ width: contentSectionWidth === contentSectionWithDefault ? contentSectionWithDefault : contentSectionWidth }} id="section">
              {section && section.map((item: any) => {
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
                        <span className="section-title" onClick={() => handleSelectIdChangeTitle(item?.id)}>{item?.name}</span>
                    }
                   

                    <div className="list-task" style={{ marginLeft: 20, display: checkIsExitsIdSection(item?._id) ? 'block' : 'none' }}>
                      <>
                        <List
                          
                          dataSource={data}
                          renderItem={item => {
                            return(
                              <>
                                <List.Item key={item.email} onClick={() => {
                                  setIshowContentTask(true)
                                  setcontentTask(item)
                                  setContentTaskWidth(contentTaskWithDefault)
                                  setContentSectionWidth((pre: any) => {
                                    if(pre === contentSectionWithDefault){
                                      return Number(document?.getElementById("section")?.offsetWidth) - contentTaskWithDefault
                                    }
                                    return pre
                                  })
                                }}>
                                <List.Item.Meta
                                    avatar={<CheckOutlined/>}
                                    title={item.name.last}
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
              width={contentTaskWidth}
              setContentTaskWidth={setContentTaskWidth}
              setContentSectionWidth={setContentSectionWidth}
              />
            }
           
        </div>
        
    )
}
export default Mytask