import { BsList } from "react-icons/bs";

function Navbar() {
    return (
    <nav className="navbar">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="public/NursifyLogo.webp" alt="Nursify Education" width="300" height="150"/>
            </a>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> 
                <BsList/>
            </button>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                 ...
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;