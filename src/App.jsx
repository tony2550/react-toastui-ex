import { useEffect, useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditorPage from './pages/EditorPage';
import GridPage from './pages/GridPage';
import DraftjsPage from './pages/DraftjsPage';
import QuillPage from './pages/QuillPage';
import JoditPage from './pages/JoditPage';
import CKeditorPage3 from './pages/CKeditorPage3';
import CKeditor4Page from './pages/CKeditor4Page';

const App = () => {
  const [page, setPage] = useState(5);

  return (
    <div className='app'>
      <div className='app-header'>
        <ul>
          <li onClick={() => setPage(0)}>editor</li>
          <li onClick={() => setPage(1)}>grid</li>
          <li onClick={() => setPage(2)}>draftJS</li>
          <li onClick={() => setPage(3)}>quill</li>
          <li onClick={() => setPage(4)}>jodit</li>
          <li onClick={() => setPage(5)}>CK</li>
          <li onClick={() => setPage(6)}>CKedi4</li>
        </ul>
      </div>
      <div className='app-main'>
        {page === 0 ? (
          <EditorPage />
        ) : page === 1 ? (
          <GridPage />
        ) : page === 2 ? (
          <DraftjsPage />
        ) : page === 3 ? (
          <QuillPage />
        ) : page === 4 ? (
          <JoditPage />
        ) : page === 5 ? (
          <CKeditorPage3 />
        ) : (
          <CKeditor4Page />
        )}
      </div>
    </div>
  );
};

export default App;
