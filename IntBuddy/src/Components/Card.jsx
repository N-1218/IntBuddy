import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className="container-fluid py-5 bg-light text-center">

            {/* Heading */}
            <h2
                className="fw-bold mb-5"
                style={{
                    opacity: show ? 1 : 0,
                    transform: show ? "translateY(0)" : "translateY(-20px)",
                    transition: "0.6s"
                }}
            >
                How To Participate ?
            </h2>

            <div className="row justify-content-center">

                {/* Step 1 */}
                <div
                    className="col-md-3 mb-4"
                    style={{
                        opacity: show ? 1 : 0,
                        transform: show ? "translateY(0)" : "translateY(40px)",
                        transition: "0.8s"
                    }}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png"
                        alt="Step 1"
                        className="mb-3"
                        style={{ width: "60px" }}
                    />
                    <h5 className="fw-bold text-decoration-underline">STEP 1</h5>
                    <p className="text-muted">
                        Fill your interview experience with us using the email ID through which you will avail your voucher.
                    </p>
                </div>

                {/* Step 2 */}
                <div
                    className="col-md-3 mb-4"
                    style={{
                        opacity: show ? 1 : 0,
                        transform: show ? "translateY(0)" : "translateY(40px)",
                        transition: "1s"
                    }}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/190/190411.png"
                        alt="Step 2"
                        className="mb-3"
                        style={{ width: "60px" }}
                    />
                    <h5 className="fw-bold text-decoration-underline">STEP 2</h5>
                    <p className="text-muted">
                        Our management will review your application & will update you once your write-up gets approved.
                    </p>
                </div>

                {/* Step 3 */}
                <div
                    className="col-md-3 mb-4"
                    style={{
                        opacity: show ? 1 : 0,
                        transform: show ? "translateY(0)" : "translateY(40px)",
                        transition: "1.2s"
                    }}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png"
                        alt="Step 3"
                        className="mb-3"
                        style={{ width: "60px" }}
                    />
                    <h5 className="fw-bold text-decoration-underline">STEP 3</h5>
                    <p className="text-muted">
                        Then your application is ready to be published.
                    </p>
                </div>

            </div>

            {/* Button */}
            <Link
                className="btn btn-warning px-4 py-2 fw-semibold mt-3 shadow"
                to="/share"
                style={{
                    opacity: show ? 1 : 0,
                    transform: show ? "scale(1)" : "scale(0.8)",
                    transition: "0.8s"
                }}
            >
                Share your Story
            </Link>

        </div>
    );
}

export default Card;