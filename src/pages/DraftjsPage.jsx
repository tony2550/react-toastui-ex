import { useEffect, useRef, useState } from 'react';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './editorpage.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const DraftjsPage = () => {
  const editorRef = useRef(null);
  // const contentStateCopy = ContentState.createFromText('');
  // const raw = convertToRaw(contentStateCopy); // RawDraftContentState JSON
  // const [contentState, setContentState] = useState(raw);
  const [convertedContent, setConvertedContent] = useState(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
    console.log(html);
    console.log(typeof html);
  }, [editorState]);

  const handleClick = async () => {
    const data = convertedContent;
    console.log(data);
    const response = await axios({
      method: 'post',
      url: '/api/editor',
      data: { bodydata: JSON.stringify(data) },
    });
    // console.log('fetch');
    console.log(response.data);
  };

  return (
    <div className='editor-container'>
      <div className='editor-header'>
        <span className='editor-header-title'>규정 제정</span>
      </div>
      <Editor
        ref={editorRef}
        // defaultContentState={contentState}
        editorState={editorState}
        toolbarClassName='toolbarClassName'
        wrapperClassName='wrapperClassName'
        editorClassName='editorClassName'
        // onContentStateChange={setContentState}
        onEditorStateChange={editorState => setEditorState(editorState)}
      />
      <div className='editor-footer'>
        <Button
          variant='secondary'
          className='editor-btn'
          onClick={handleClick}>
          api 연동
        </Button>
      </div>
    </div>
  );
};

export default DraftjsPage;
