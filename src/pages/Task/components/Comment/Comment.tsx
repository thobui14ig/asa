import Avatar from "../../../../component/Avatar/Avatar";
import { COMMENT } from "../../../../type/resource-type"
import './comment.scss';
interface COMMENTS{
    comments: COMMENT[]
}
const Comments: React.FC<COMMENTS>  = ({ comments }) => {
    return(
        <>
            {comments.map((item: COMMENT) => {
                return(
                    <div className="comment-item" key={item._id}>
                        <div className="comment-avatar">
                            <Avatar />
                        </div>
                        
                        <div className="comment-content">
                            <p>{item?.createdBy?.name} <span style={{ color: '#6d6e6f', fontSize: '12px' }}>1 phút trước</span></p>
                            <p>{item?.name}</p>    
                        </div>
             
                    </div>
                  
                )
            })

            }


        </>
    )
}

export default Comments