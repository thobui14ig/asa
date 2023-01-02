
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addResource, getResource } from '../../api/resources/resource.api';
import { handleSetTitle, handleShowModal } from '../../stores/modal-store';
import { RootState } from '../../stores/store';
import './header.scss';

const Headers = () => {
    const { isOpen, type } = useSelector((state: RootState) => state.modal)
    const dispatch = useDispatch()

    

    const showModal = () => {
        dispatch(handleShowModal())
        dispatch(handleSetTitle({
            type: 'team'
          }))
        
    };

    return(
        <>
            <Header
                className="site-layout-background"
                style={{
                    padding: '0 16px',
                    borderBottom: '1px solid red'
                }}
                >
                <div className='header-container'>
                    <h1>My task</h1>
                    <div className='header-right'>
                    
                        <p>  <PlusOutlined style={{ marginRight: 20, cursor: 'pointer' }} onClick={showModal}/>thobui1996</p>
                    </div>
                </div>
            
            </Header>     


        </>


    )
}
export default Headers

