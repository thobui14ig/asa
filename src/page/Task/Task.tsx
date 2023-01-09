import { CaretDownOutlined, CaretLeftOutlined, CheckOutlined, DoubleRightOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import AddSection from "../../pages/Task/components/AddSection";
import TaskContent from "../../pages/Task/components/TaskContent";
import useTask from "../../pages/Task/modules/useTask";
import { SECTION } from "../../type/resource-type";
import './index.scss';



const TASK = () => {
  const { checkIsExitsIdSection, contentTask, handleAddTask, handleChangeTitle, handleKeyDown, handleSelectIdChangeTitle, handleShowTaskInSection, idChangeTitle, isAddTask, isShowContentTask, section, setIshowContentTask,setcontentTask, titleName, setIdSectionSelected, setIsAddTask, setTaskName, taskName } = useTask();
    
  return(
      <div className="mytask">
          <Button style={{ marginBottom: 16 }} onClick={() => handleAddTask()}  type="primary"><PlusOutlined />Add task</Button>
          <h1>List task</h1>

          <div className="list-section" style={{ width: '100%' }} id="section">
            {section && section.map((item: SECTION) => {
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
export default TASK