import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
        <div className="headerList">
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBookOpen} />
            </div>
        </div>
    </div>
  )
}
