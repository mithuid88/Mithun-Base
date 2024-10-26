import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logoutUser } from "../../redux/actions/userAction";

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logoutUser()(dispatch);
    }
  };

  return (
    <header id="header">
      <div className="container-fluid d-flex align-items-center justify-content-between navbar-light bg-light">
        <nav className="navbar navbar-expand-lg ">
          <NavLink className="navbar-brand" to={"/"}>IVA Builder</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/pages"}>Presentation Builder</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/templates"}>Template Builder</NavLink>
              </li>

            </ul>

          </div>
          <form className="form-inline logout-btn">
            <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={logoutHandler}>Logout</button>
          </form>
        </nav>
      </div>
    </header>
  )
};

export default Header;