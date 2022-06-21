import React , { useState, useEffect } from "react";
import { Api } from '../services/endpoints';
import { DataGrid } from '@mui/x-data-grid';
import { ICompany } from "../Interfaces/IRecomendation";

export default function UserList() {
  const [allProfiles, setAllProfiles] = useState<ICompany[]>([]);
  const Prof = async () =>{
    const allProfiles = await Api.GET_AllProfiles()
    const result = allProfiles.result? allProfiles.result : [] as ICompany[];
    setAllProfiles(result)
  } 

  useEffect(() => {
    Prof()
   
  });
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[
          { field: 'id',
              headerName : 'ID'
            }, 
            { field: 'companyName',
              headerName : 'Company'
            }, 
            { field: 'location',
              headerName : 'Location' 
            },
            { field: 'Phase',
              headerName : 'Phase'
            }, 
            { field: 'industry',
            headerName : 'Industry' 
            },
            { field: 'employees',
              headerName : 'Employee'
            },  
            { field: 'annTurnover',
              headerName : 'Turnover'
            },
            { field: 'Action' },
          
        ]}
        rows={allProfiles}
      />
    </div>
  );
}