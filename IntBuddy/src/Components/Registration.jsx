import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Registration() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
        >
            <div
                className="card shadow-lg rounded-lg"
                style={{
                    maxWidth: "600px",
                    width: "100%",
                    transition: "all 0.8s ease",
                    transform: show ? "translateY(0)" : "translateY(-50px)",
                    opacity: show ? 1 : 0,
                }}
            >
                {/* Header */}
                <div className="card-header bg-dark text-white text-center py-4 rounded-top">
                    <small>Join our community, it’s free!</small>
                </div>

                {/* Body */}
                <div className="card-body p-4">
                    <form>
                        {/* Name Fields */}
                        <div className="form-row mb-3">
                            <div className="col">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="form-control"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-control"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="email@example.com"
                            />
                            <small className="form-text text-muted">
                                We'll never share your email.
                            </small>
                        </div>

                        {/* Gender */}
                        <div className="form-group mb-3">
                            <label className="d-block mb-1">Gender</label>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    id="male"
                                />
                                <label className="form-check-label" htmlFor="male">
                                    Male
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    id="female"
                                />
                                <label className="form-check-label" htmlFor="female">
                                    Female
                                </label>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="form-group mb-4">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" />
                        </div>

                        {/* Country & State */}
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select
                                    id="country"
                                    className="form-control"
                                    defaultValue="United States"
                                >
                                    <option>Choose...</option>
                                    <option>Uzbekistan</option>
                                    <option>Russia</option>
                                    <option>United States</option>
                                    <option>India</option>
                                    <option>Afghanistan</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="state" className="form-label">State</label>
                                <select
                                    id="state"
                                    className="form-control"
                                    defaultValue="California"
                                >
                                    <option>Choose...</option>
                                    <option>California</option>
                                    <option>New York</option>
                                    <option>Texas</option>
                                    <option>Delhi</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="form-group mb-3">
                            <button type="submit" className="btn btn-warning btn-block py-2 w-100 mt-3">
                                Register
                            </button>
                        </div>

                        <small className="text-muted d-block text-center">
                            By signing up, you agree to our Terms of Use and Privacy Policy.
                        </small>
                    </form>
                </div>

                {/* Footer */}
                <div className="card-footer text-center bg-light">
                    Already have an account? <Link to="/Login">Log In</Link>
                    <p className="text-success mt-3">
                        <i className="bi bi-check-circle me-2"></i>
                        Restricted to Interview users only...!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Registration;