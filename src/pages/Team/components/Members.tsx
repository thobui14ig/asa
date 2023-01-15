import { PlusOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useDispatch } from "react-redux"
import useModalMember from "../../../component/Members/modules/useModalMember"
import { handleShowMemberModal } from "../../../stores/members-store"

const Members = () => {
    const dispatch = useDispatch()

    
    return(
        <div className="member">
            <h1 className="title">Members(1)</h1>
            <div className="list-members">
                <Button onClick={() => { dispatch(handleShowMemberModal()) }} style={{ width: 170,  height: 50, marginRight: 10, marginTop: 10, background: 'rgb(22, 119, 255)' }}  type="primary"><PlusOutlined />Add member</Button>
                <div className="member-item">1</div>
                <div className="member-item">2</div>
                <div className="member-item">3</div>  
                <div className="member-item">4</div>
                <div className="member-item">5</div>
                <div className="member-item">6</div>  
                <div className="member-item">7</div>
                <div className="member-item">8</div>
                <div className="member-item">9</div>  
                <div className="member-item">10</div>
                <div className="member-item">11</div>
                <div className="member-item">12</div> 

            </div>
        </div>
    )
}

export default Members