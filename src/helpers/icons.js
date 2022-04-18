import { library, Library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlusCircle,
  faMobile,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faMobile,
    faEnvelope,
    faLock
  );
};

export default Icons;
