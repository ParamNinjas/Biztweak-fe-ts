import React, { useState, useEffect } from "react";
import { Api } from '../../../services/endpoints';
import { DataGrid } from '@mui/x-data-grid';
import { ICompany } from "../../../Interfaces/IRecomendation";
import { supabase } from '../../../supabaseClient'
import IProfile from './profile'

export default function UserList() {
  useEffect(() => {
    getProfiles();
  }, []);


  const [profile, setProfile] = useState([] as IProfile[])


  const getProfiles = async () => {
    try {
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profile')
        .select().order('created_at', { ascending: false })

      if (error && status !== 406) {
        throw error
      }

      if (data) {

        setProfile(data as IProfile[])
        console.log('Kenny test ', data)
      }
    } catch (error) {
    } finally {
    }
  }
  return (
    <div className="Header">
      <h1>User Profile List</h1>
      <div style={{ height: '100vh', width: '80%' }}>
        <DataGrid style={{ height: '100vh', width: '80%' }}
          columns={[
            {
              field: 'id',
              headerName: 'ID'
            },
            {
              field: 'display_name',
              headerName: 'User Name'
            },
            {
              field: 'email',
              headerName: 'Email'
            },
            {
              field: 'Role',
              headerName: 'Role'
            },
            {
              field: 'created_at',
              headerName: 'Date Created'
            },
          ]}
          rows={profile}
        />
      </div>
    </div>
  );
}