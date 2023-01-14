import { useDispatch, useSelector } from "react-redux";
import { handleCancleMemberModal } from "../../../stores/members-store";
import { RootState } from "../../../stores/store";

const useModalMember = () => {
    const { isOpen } = useSelector((state: RootState) => state.members)
    const dispatch = useDispatch()

    const handleCancel = () => {
        dispatch(handleCancleMemberModal())
    };

    return { isOpen, handleCancel }
}

export default useModalMember