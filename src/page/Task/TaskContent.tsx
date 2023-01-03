import { ArrowRightOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import Comments from './Comment/Comment';
import './index.scss';

interface ContentTaskType{
    contentTask: any,
    setIshowContentTask: any,
}

const TaskContent: React.FC<ContentTaskType> = ({contentTask, setIshowContentTask }) => {

    return (
      <div className="task-content">
        <div className='header'>
            <h1 className='mb-6 text-lg'>{contentTask?.name}</h1>
            <ArrowRightOutlined style={{ fontSize: 20 }} onClick={() =>{
                setIshowContentTask(false)
            }}/>
        </div>
        <div className='content'>
          <div className='comment'>
            <Comments />
            <TextArea rows={4}  />
            <button className='button-send-comment'>submit</button>
          </div>

        </div>
        
      </div>
    )
  }
  

  export default TaskContent