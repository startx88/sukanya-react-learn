import { useLocation, Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log('user', user)
  if (user && user.token) {
    return children;
  }
  return <Navigate to={'/login'} />;
}