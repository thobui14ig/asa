import { Modal } from "antd";
import useModalMember from "./modules/useModalMember";
import './members.scss';

const MembersModal = () => {
    const { handleCancel, isOpen } = useModalMember()

    return(
        <Modal title={`Add members`} open={isOpen} onCancel={handleCancel} style={{ width: 2000 }}>
            list user
        </Modal> 
    )
}

export default MembersModal