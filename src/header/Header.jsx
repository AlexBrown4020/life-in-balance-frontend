import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
        <div className="headerList">
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBookOpen} />
                <span>Upcoming Sessions</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span>Schedule</span>
            </div>
        </div>
    </div>
  )
}
