import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
            <div className="container-fluid px-0">

                {/* Brand */}
                <Link className="navbar-brand fw-bold text-warning ms-3" to="/">
                    IntBuddy
                </Link>

                {/* Toggle */}
                <button
                    className="navbar-toggler me-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content */}
                <div className="collapse navbar-collapse" id="navbarNav">

                    {/* Left Side */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active fw-semibold" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active fw-semibold" to="/about">About</Link>
                        </li>

                        {/* Dropdown */}
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle active fw-semibold"
                                to="#"
                                data-bs-toggle="dropdown"
                            >
                                Services
                            </Link>
                            <ul className="dropdown-menu shadow">
                                <li><Link className="dropdown-item" to="/web">Web Development</Link></li>
                                <li><Link className="dropdown-item" to="/app">App Development</Link></li>
                                <li><Link className="dropdown-item" to="/ui">UI Design</Link></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Center Search */}
                    <form className="d-flex mx-auto" style={{ width: "40%" }}>
                        <input
                            className="form-control rounded-pill me-2"
                            type="search"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                        <button className="btn btn-warning rounded-pill" type="submit">
                            Search
                        </button>
                    </form>

                    {/* Right Side */}
                    <div className="d-flex align-items-center me-2">
                        <Link
                            className="btn btn-outline-light rounded-pill me-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Login the User"
                            to="/Login"
                        >
                            Login
                        </Link>

                        <Link
                            className="btn btn-warning rounded-pill"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Register the User"
                            to="/Registration"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;