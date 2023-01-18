import Editor from '@draft-js-plugins/editor';
import { Avatar, Modal } from "antd";
import './members.scss';
import useModalMember from "./modules/useModalMember";
//   import editorStyles from './SimpleMentionEditor.module.css';

const MembersModal = () => {
    const { handleCancel, isOpenModal, onSearchChange, MentionSuggestions, editorState, onOpenChange, open, plugins, ref, setEditorState, suggestions, handleAddMember, listMembers } = useModalMember()

    console.log(222, listMembers)

    return(
        <Modal title={`Add members`} open={isOpenModal} onCancel={handleCancel} style={{ width: 2000 }}>
            <div
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onClick={() => {
                    ref.current!.focus();
                }}
                >
                <Editor
                    editorKey={'editor'}
                    editorState={editorState}
                    onChange={setEditorState}
                    plugins={plugins}
                    ref={ref}
                    
                />
                <MentionSuggestions
                    open={open}
                    onOpenChange={onOpenChange}
                    suggestions={suggestions}
                    onSearchChange={onSearchChange}
                    onAddMention={(member) => handleAddMember(member)}
                />
            </div>

            <div
                id="scrollableDiv"
                style={{
                    height: 300,
                    overflow: 'auto',
                    padding: '16px 16px',
                    border: '1px solid rgba(140, 140, 140, 0.35)',
                }}
                >
                    <ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
                        {listMembers.map((item: any, i: number) => {
                            return(
                                <li className="flex items-center space-x-3" key={i}>
                                    {/* <Avatar/> */}
                                    <Avatar src={item?.avatar}/>
                                    <span>{item?.name}</span>
                                </li>
                            )
                        })

                        }



                    </ul>
            </div> 
        </Modal> 
    )
}

export default MembersModal