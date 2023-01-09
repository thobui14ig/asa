import { useEffect, useState } from "react"
import { addResource, getComment } from "../../../api/resources/resource.api"
import TASK from "../../../type/resource-type"

const useTaskContent = (contentTask: any) => {
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

    return { rowComment, task, handleComment, handleSendcomment, setRowcomment, commentInput }
}

export default useTaskContent