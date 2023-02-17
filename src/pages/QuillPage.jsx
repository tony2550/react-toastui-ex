import { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import './editorpage.css';
import Button from 'react-bootstrap/Button';

const QuillPage = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState({});

  useEffect(() => {
    console.log(content);
  }, [content]);

  const handleClick = () => {
    console.log(editorRef.current?.getInstance().getHTML());
    // console.log(editorRef.current?.getInstance().getMarkdown());
  };

  return (
    <div className='editor-container'>
      <div className='editor-header'>
        <span className='editor-header-title'>규정 제정</span>
      </div>
      <Editor
        ref={editorRef}
        initialValue='hello react editor world!'
        previewStyle='vertical'
        height='600px'
        initialEditType='markdown'
        useCommandShortcut={true}
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

export default QuillPage;
