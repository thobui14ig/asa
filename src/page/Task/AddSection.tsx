import { CaretDownOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useParams } from "react-router";
import { addResource } from "../../api/resources/resource.api";
import './index.scss';

export default function AddSection() {
    const { id } = useParams();
    const [isAddSection, setIsAddSection] = useState<boolean>(false)
    const [sectionName, setSectionName] = useState<string>('')

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            setIsAddSection(false)
            setSectionName('')
          if(sectionName.length > 0){
            const values = {
              project: id,
              name: sectionName,
              resource_type: 'section'
            }
            
            
            return addResource(values) 
          }

        }
      }

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
  