import { Modal } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addResource } from "../../api/resources/resource.api";
import { handleCloseModal } from "../../stores/modal-store";
import { RootState } from "../../stores/store";

const ModalAdd = () => {
  const dispatch = useDispatch()
  const { isOpen, type } = useSelector((state: RootState) => state.modal)
  const { teamId } = useSelector((state: RootState) => state.resource)
  const [name, setName] = useState('');

  
    const handleOk = () => {
      setName('')
      dispatch(handleCloseModal())
      let values;
      if(type === 'project'){
        values = {
          name,
          resource_type: type,
          team: teamId
        }
      }else{
        values = {
          name,
          resource_type: type
        }
      }

      return addResource(values)
    };
  
    const handleCancel = () => {
      setName('')
      dispatch(handleCloseModal())

    };
    return(
      <Modal title={`Add ${type}`} open={isOpen} onOk={handleOk} onCancel={handleCancel}>
          <input style={{ width: '100%' }} value={name} onChange={(e) => setName(e.target.value)}/>
      </Modal>    

    )
 
}

export default ModalAdd