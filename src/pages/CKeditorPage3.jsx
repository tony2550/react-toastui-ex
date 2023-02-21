import React, { useRef, useEffect, useState, createRef } from 'react';
// import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from 'react-bootstrap';
import mammoth from 'mammoth';
import './cmeditorpage.css';

const configEx = {
  heading: {
    options: [
      {
        model: 'paragraph',
        title: '본문',
        class: 'ck-heading_paragraph',
      },
      {
        model: 'heading3',
        view: 'h3',
        title: 'Heading 3',
        class: 'ck-heading_heading3',
      },
      {
        model: 'heading4',
        view: 'h4',
        title: 'Heading 4',
        class: 'ck-heading_heading4',
      },
      {
        model: 'heading5',
        view: 'h5',
        title: 'Heading 5',
        class: 'ck-heading_heading5',
      },
      {
        model: 'heading6',
        view: 'h6',
        title: 'Heading 6',
        class: 'ck-heading_heading6',
      },
    ],
  },
};

const CKeditorPage3 = () => {
  const editorRef = useRef(null);
  const [data, setData] = useState('');
  const [file, setFile] = useState(null);
  const toolBarRef = useRef();

  useEffect(() => {
    if (editorRef.current) {
      console.log(data);
      const targetEL = editorRef.current;
      console.log(targetEL);
    }
    if (document.querySelector('.ck-content ol')) {
      const el = document.querySelector('.ck-content ol');
      // el.style();
      console.log(el);
    }
  }, [data]);

  const handlefile = e => {
    console.log(e.target);
    setFile(e.target.files);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      const arrayBuffer = reader.result;
      mammoth.convertToHtml({ arrayBuffer: arrayBuffer }).then(result => {
        setData(result.value);
      });
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className='editor-container'>
      <div className='editor-header'>
        <span className='editor-header-title'>규정 제정</span>
      </div>
      <h2>Using CKEditor 5 build in React</h2>
      <input type='file' onChange={handlefile}></input>
      {/* <CKEditorContext> */}
      <div ref={toolBarRef} id='document-toolbar' />
      <CKEditor
        ref={editorRef}
        editor={DecoupledEditor}
        data={data}
        config={configEx}
        onReady={editor => {
          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );
        }}
        // onReady={editor => {
        //   // You can store the "editor" and use when it is needed.
        //   console.log('Editor is ready to use!', editor);
        //   // if (toolBarRef.current) {
        //   //   toolBarRef.current.appendChild(editor.ui.view.toolbar.element);
        //   // }
        //   const toolbarContainer = document.querySelector('#document-toolbar');

        //   toolbarContainer.appendChild(editor.ui.view.toolbar.element);
        //   // editor.ui
        //   //   .getEditableElement()
        //   //   .parentElement.insertBefore(
        //   //     editor.ui.view.toolbar.element,
        //   //     editor.ui.getEditableElement()
        //   //   );

        //   // this.editor = editor;
        // }}
        onError={(error, { willEditorRestart }) => {
          if (willEditorRestart) {
            this.editor.ui.view.toolbar.element.remove();
          }
        }}
        onChange={(event, editor) => {
          if (editor) {
            const data = editor.getData();
            setData(data);
          }

          // console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
      {/* </CKEditorContext> */}
      <div className='editor-footer'>
        <Button variant='secondary' className='editor-btn'>
          api 연동
        </Button>
      </div>
    </div>
  );
};

export default CKeditorPage3;
