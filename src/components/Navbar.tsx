import { IconContext } from "react-icons";
import { BsList } from "react-icons/bs";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <div className="navigation-container">
        <a className="navbar-brand" href="#">
          <img src="/NursifyLogo.webp" alt="Nursify Education" width="140" height="80" />
        </a>
        <div className="nav-subheadings">
          <p>About Us</p>
          <p>Services</p>
          <p>Contact Us</p>
        </div>
        <button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <IconContext.Provider value={{ size: "20px", color: "var(--accent-color)" }}>
            <BsList />
          </IconContext.Provider>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              <img src="/NursifyLogo.webp" alt="Nursify Education" width="150" height="75" />
            </h5>
            <button type="button" className="btn-close text-bg-secondary" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <button className="join-btn">Join Nursify Now!</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
