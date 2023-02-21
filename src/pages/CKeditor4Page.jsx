import React, { useEffect, useRef, useState } from 'react';
import { CKEditor } from 'ckeditor4-react';
import mammoth from 'mammoth';

const CKeditor4Page = () => {
  const [data, setData] = useState('');
  useEffect(() => {});
  const editorRef = useRef(null);

  const [file, setFile] = useState(null);

  const handlefile = e => {
    // console.log(e.target);
    setFile(e.target.files);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      const arrayBuffer = reader.result;
      mammoth.convertToHtml({ arrayBuffer: arrayBuffer }).then(result => {
        window.CKEDITOR.instances.ruleEditor.setData(result.value);
        // setData(result.value);
      });
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className='App'>
      <h2>Using CKEditor 4 in React</h2>
      <input type='file' onChange={handlefile}></input>
      <CKEditor
        // ref={editorRef}
        data={data}
        config={{ el: editorRef }}
        name='ruleEditor'
        // initData='<p>Hello from CKEditor 4!</p>'
        onInstanceReady={({ editor }) => {
          // alert('Editor is ready!');
        }}
        onCustomEvent={({ editor }) => {}}
        onChange={e => setData(e.editor.getData())}
      />
    </div>
  );
};

export default CKeditor4Page;
