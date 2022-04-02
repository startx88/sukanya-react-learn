import { Link, Navigate, NavLink, useNavigate } from "react-router-dom"

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("user");
    return navigate("/login")
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Login App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
          aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarID">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            {user && user.token ? <div className="nav-link">
              <span className="text-light me-2">{user.name}</span>
              <button onClick={logoutHandler} className="btn btn-sm btn-info">Logout</button>
            </div> : <>

              <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
              <NavLink className="nav-link active" aria-current="page" to="/register">Register</NavLink>
            </>}
          </div>
        </div>
      </div>
    </nav>
  )
}