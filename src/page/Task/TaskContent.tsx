import { ArrowRightOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import { useEffect, useState } from 'react';
import { addResource, getComment } from '../../api/resources/resource.api';
import TASK, { COMMENT } from '../../type/task-type';
import Comments from './Comment/Comment';
import './index.scss';

interface ContentTaskType{
    contentTask: any,
    setIshowContentTask: any,
}

const TaskContent: React.FC<ContentTaskType> = ({contentTask, setIshowContentTask }) => {
    const { _id: taskId } = contentTask
    const [rowComment, setRowcomment] = useState<number>(1)
    const [commentInput, setCommentInput] = useState<string>('')
    const [task, setTask] = useState<TASK | null>(null)
  
    const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCommentInput(e.target.value)
    }

    const handleSendcomment = () => {
      setRowcomment(1);
      setCommentInput('')
      if (commentInput.length > 0) {
        const values = {
          name: commentInput,
          resource_type: 'comment',
          task: contentTask?._id
        }
        
        return addResource(values)        
      }

    }

    useEffect(() => {
      const fetch = async() => {
        const data = await getComment(taskId)
        setTask(data?.data)
      }

      fetch();
      setRowcomment(1);
    }, [taskId])

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