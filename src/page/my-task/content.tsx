import { ArrowRightOutlined } from '@ant-design/icons';
import './index.scss';

interface ContentTaskType{
    contentTask: any,
    setIshowContentTask: any,
}

const TaskContent: React.FC<ContentTaskType> = ({contentTask, setIshowContentTask }) => {

    return (
      <div className="task-content" style={{ width: 700 }}>
        <div className='header'>
            <h1 className='mb-6 text-lg'>{contentTask?.name}</h1>
            <ArrowRightOutlined style={{ fontSize: 20 }} onClick={() =>{
                setIshowContentTask(false)
            }}/>
        </div>
        
      </div>
    )
  }
  

  export default TaskContent