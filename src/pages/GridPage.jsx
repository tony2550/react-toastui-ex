import React from 'react';
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import './gridpage.css';

const GridPage = () => {
  const data = [
    { id: 1, name: 'Editor' },
    { id: 2, name: 'Grid' },
    { id: 3, name: 'Chart' },
  ];

  const columns = [
    { name: 'id', header: 'ID' },
    { name: 'name', header: 'Name' },
  ];

  return (
    <div className='grid-container'>
      <div className='grid-header'>
        <span className='grid-header-title'>
          Record of hours of rest(휴식시간 기록표)
        </span>
      </div>
      <Grid
        data={data}
        columns={columns}
        rowHeight={25}
        bodyHeight={100}
        heightResizable={true}
        rowHeaders={['rowNum']}
      />
      <div className='grid-footer'>dd</div>
    </div>
  );
};

export default GridPage;
