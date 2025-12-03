import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoute = ({children}) => {
  const {user} = useSelector(store => store.user);

  // If user not logged in navigate back to landing page
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};
export default ProtectedRoute;
