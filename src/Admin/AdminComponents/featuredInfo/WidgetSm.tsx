import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
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
        </li>
      </ul>
    </div>
  );
}