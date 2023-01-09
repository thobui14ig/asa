import { ArrowRightOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import { COMMENT } from '../../../type/resource-type';
import useTaskContent from '../modules/useTaskContent';
import Comments from './Comment/Comment';

export interface ContentTaskType{
    contentTask: any,
    setIshowContentTask: any,
}

const TaskContent: React.FC<ContentTaskType> = ({contentTask, setIshowContentTask }) => {
  const { handleComment, handleSendcomment, rowComment, task, commentInput, setRowcomment } = useTaskContent(contentTask)

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
            {task?.comments && 
              <Comments comments={task?.comments as COMMENT[]}/>
            }
            
            <TextArea value={commentInput} rows={rowComment} onChange={(e) => handleComment(e)} onClick={() => setRowcomment(4)} />
            <button className='button-send-comment' onClick={() => handleSendcomment()}>comment</button>
          </div>

        </div>
        
      </div>
    )
  }
  

  export default TaskContent