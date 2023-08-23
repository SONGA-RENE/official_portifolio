import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Controls = () => {
  return (
    <div className="controls">
      <Link className="control active-btn">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link className="control active-btn">
        <FontAwesomeIcon icon={faUser} />
      </Link>
      <Link className="control active-btn">
        <FontAwesomeIcon icon={faBriefcase} />
      </Link>
      <Link className="control active-btn">
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
    </div>
  );
};

export default Controls;
