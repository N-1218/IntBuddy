import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true); // trigger animation on load
    }, []);

    return (
        <div className="container-fluid pt-5 mt-4 pb-5 bg-light">
            <div className="row align-items-center">

                {/* Left Side */}
                <div
                    className="col-md-6 px-5"
                    style={{
                        opacity: show ? 1 : 0,
                        transform: show ? "translateX(0)" : "translateX(-50px)",
                        transition: "all 0.8s ease"
                    }}
                >
                    <h1 className="fw-bold mb-3">
                        Share your Interview Story & inspire your peers
                    </h1>

                    <p className="fs-5 text-muted">
                        Internship or Job Interview experiences are accepted.
                    </p>

                    <p className="fs-4 fw-semibold text-success">
                        Uncleared Interview Experiences are also welcome.
                    </p>



                    <Link className="btn btn-warning btn-lg mt-3 rounded-pill">
                        Share Your Experience
                    </Link>
                </div>

                {/* Right Side */}
                <div
                    className="col-md-6 text-center"
                    style={{
                        opacity: show ? 1 : 0,
                        transform: show ? "translateX(0)" : "translateX(50px)",
                        transition: "all 0.8s ease"
                    }}
                >
                    <img
                        src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg"
                        alt="Interview"
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: "400px" }}
                    />
                </div>

            </div>
        </div>
    );
}

export default Home;