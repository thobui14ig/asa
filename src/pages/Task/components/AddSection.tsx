import { CaretDownOutlined, PlusOutlined } from "@ant-design/icons";
import useAddSection from "../modules/useAddSection";

export default function AddSection() {
  const { handleKeyDown, isAddSection, setIsAddSection, sectionName, setSectionName } = useAddSection();

  return (
    <div className="add-section">
      {!isAddSection 
      ?
          <h1 className='title' onClick={() => setIsAddSection(true)}> <PlusOutlined style={{ marginRight: 5 }} />Add section</h1>
      :
      <>
          <CaretDownOutlined /><input style={{ minWidth: 500 }} value={sectionName} onChange={(e) => setSectionName(e.target.value)} onKeyDown={handleKeyDown}/>
      </>
      
      }
          
          
          
    </div>
  )
}
  