import { useEffect, useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditorPage from './pages/EditorPage';
import GridPage from './pages/GridPage';

const App = () => {
  const [page, setPage] = useState(0);

  return (
    <div className='app'>
      <div className='app-header'>
        <ul>
          <li onClick={() => setPage(0)}>editor</li>
          <li onClick={() => setPage(1)}>grid</li>
        </ul>
      </div>
      <div className='app-main'>
        {page === 0 ? <EditorPage /> : <GridPage />}
      </div>
    </div>
  );
};

export default App;
