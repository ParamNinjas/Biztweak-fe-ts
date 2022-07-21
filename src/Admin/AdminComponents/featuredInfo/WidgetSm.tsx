import "./WidgetSm.css";
import { useState, useEffect } from 'react'
import { supabase } from '../../../supabaseClient'
import IProfile from './profile'
import moment from "moment"
// import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {

  useEffect(() => {
    getProfiles();
  }, []);
  

  const [profile, setProfile] = useState([] as IProfile[])
  
  
  const getProfiles = async () => {
    try {
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
	  .from('profile')
      .select().order('created_at', { ascending: false }).limit(3)
		
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
    <div className="widgetSm">
      <ul className="widgetSmList">
      
      {profile.map(p => {
    return (
      <li className="widgetSmListItem">
      <img
        src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
        alt=""
        className="widgetSmImg"
      />
      <div className="widgetSmUser">
        <span className="widgetSmUsername">{p.display_name}</span>
        <span className="widgetSmUserTitle">Registered</span>
      </div>
      <button className="widgetSmButton">
      {moment(p.created_at).fromNow()}
      </button>
    </li>
      // <li  className="widgetSmListItem" key={p.id}>
      //   {p.display_name} -
      // </li>
    )
  })}
      
        {/* <li className="widgetSmListItem">
          <img
            src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Registered</span>
          </div>
          <button className="widgetSmButton">
            8 seconds ago
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mpumemelelo</span>
            <span className="widgetSmUserTitle">Registered</span>
          </div>
          <button className="widgetSmButton">
            3 minutes ago
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Itumeleng</span>
            <span className="widgetSmUserTitle">Registered</span>
          </div>
          <button className="widgetSmButton">
            5 minutes ago
          </button>
        </li> */}
      </ul>
    </div>
  );
}