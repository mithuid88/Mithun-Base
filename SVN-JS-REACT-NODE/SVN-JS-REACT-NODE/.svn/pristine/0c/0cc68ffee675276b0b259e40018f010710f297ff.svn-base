import { toggleSidebar } from "../helpers/geditor/geditor_utils";

function TopNav() {
  const handleClick = () => {
    toggleSidebar(false);
  };
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={handleClick}
          title="Toggle sidebar"
        >
          <i className="fa fa-bars"></i>
        </button>
        <div className="panel__devices"></div>
        <div className="panel__editor"></div>
        <div className="panel__basic-actions"></div>
      </div>
    </nav>
  );
}

export default TopNav;
