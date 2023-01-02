import { ArrowRightOutlined } from '@ant-design/icons';
import './index.scss';

interface ContentTaskType{
    contentTask: any,
    setIshowContentTask: any,
    width: any,
    setContentTaskWidth: any,
    setContentSectionWidth: any
}

const TaskContent: React.FC<ContentTaskType> = ({contentTask, setIshowContentTask, width, setContentTaskWidth, setContentSectionWidth }) => {
    return (
      <div className="task-content" style={{ width: width }}>
        <div className='header'>
            <h1 className='mb-6 text-lg'>{contentTask?.name.last}</h1>
            <ArrowRightOutlined style={{ fontSize: 20 }} onClick={() =>{
                setIshowContentTask(false)
                setContentTaskWidth(0)    
                setContentSectionWidth('100%')
            }}/>
        </div>
        
      </div>
    )
  }
  

  export default TaskContent