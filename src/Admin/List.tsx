import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function UserList() {
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[
            { field: 'Company' }, 
            { field: 'Location' },
            { field: 'Phase' }, 
            { field: 'Industry' },
            { field: 'Employees' }, 
            { field: 'Turnover' },
            { field: 'Action' },
          
        ]}
        rows={[
          {
            id: 1,
            username: '@MaterialUI',
            age: 20,
          },
        ]}
      />
    </div>
  );
}