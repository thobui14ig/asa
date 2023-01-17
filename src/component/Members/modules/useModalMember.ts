import { useDispatch, useSelector } from "react-redux";
import { handleCancleMemberModal } from "../../../stores/members-store";
import { RootState } from "../../../stores/store";
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {
    defaultSuggestionsFilter,
  } from '@draft-js-plugins/mention';
//   import editorStyles from './SimpleMentionEditor.module.css';
import { useCallback, useMemo, useRef, useState } from "react";
import mentions from "./mentions";


const useModalMember = () => {
    const { isOpen: isOpenModal } = useSelector((state: RootState) => state.members)
    const [listMembers, setListMembers] = useState<any>([])
    const dispatch = useDispatch()

    const handleCancel = () => {
        dispatch(handleCancleMemberModal())
    };

    const ref = useRef<Editor>(null);
    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
    );
    const [open, setOpen] = useState(false);
    const [suggestions, setSuggestions] = useState(mentions);
  
    const { MentionSuggestions, plugins } = useMemo(() => {
      const mentionPlugin = createMentionPlugin();
      // eslint-disable-next-line no-shadow
      const { MentionSuggestions } = mentionPlugin;
      // eslint-disable-next-line no-shadow
      const plugins = [mentionPlugin];
      return { plugins, MentionSuggestions };
    }, []);
  
    const onOpenChange = useCallback((_open: boolean) => {
      setOpen(_open);
    }, []);
    const onSearchChange = useCallback(({ value }: { value: string }) => {
      setSuggestions(defaultSuggestionsFilter(value, mentions));
    }, []);

    const handleAddMember = (member: any) => {
        setListMembers((prev: any) => {
            prev.push(member)
            return [...prev]
        })
        setEditorState(EditorState.createEmpty())
    }

    return { isOpenModal, handleCancel, ref, editorState, open, setEditorState, suggestions, MentionSuggestions, plugins, onOpenChange, onSearchChange, handleAddMember, listMembers }
}

export default useModalMember