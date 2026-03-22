import { Link } from "react-router-dom";

function About() {
	return (
		<section
			className="py-5 bg-light"
			style={{ marginTop: "80px" }}  // prevents navbar overlap
		>
			<div className="container">

				{/* Heading */}
				<div className="row justify-content-center mb-5">
					<div className="col-md-8 text-center">
						<span className="text-muted">Our Platform</span>
						<h2 className="display-5 fw-bold">About Us</h2>
						<p className="lead">
							This platform helps students and job seekers share real
							interview experiences to guide and support others in their career journey.
						</p>
					</div>
				</div>

				{/* Main Points */}
				<div className="row text-center">

					<div className="col-md-4 mb-4">
						<div className="p-4 shadow rounded bg-white h-100">
							<h5 className="fw-bold"> Share Experiences</h5>
							<p>
								Users can post their interview experiences from different
								companies to help others prepare better.
							</p>
						</div>
					</div>

					<div className="col-md-4 mb-4">
						<div className="p-4 shadow rounded bg-white h-100">
							<h5 className="fw-bold"> Learn & Prepare</h5>
							<p>
								Explore real questions, interview patterns, and tips
								shared by candidates who already appeared.
							</p>
						</div>
					</div>

					<div className="col-md-4 mb-4">
						<div className="p-4 shadow rounded bg-white h-100">
							<h5 className="fw-bold"> Help Community</h5>
							<p>
								Support other students by sharing your journey and
								helping them succeed in interviews.
							</p>
						</div>
					</div>

				</div>

				{/* Extra Section */}
				<div className="row mt-5">

					{/* Why Use */}
					<div className="col-md-6 mb-4">
						<div className="p-4 bg-white shadow rounded h-100">
							<h4 className="fw-bold mb-3">Why Use This Platform?</h4>
							<ul className="list-unstyled">
								<li>✔ Real interview experiences</li>
								<li>✔ Company-wise preparation</li>
								<li>✔ Helps freshers & job seekers</li>
								<li>✔ Easy to share and explore</li>
							</ul>
						</div>
					</div>

					{/* What You Can Do */}
					<div className="col-md-6 mb-4">
						<div className="p-4 bg-white shadow rounded h-100">
							<h4 className="fw-bold mb-3">What You Can Do</h4>
							<ul className="list-unstyled">
								<li>Post your interview experience</li>
								<li>Browse others’ experiences</li>
								<li>Learn common questions</li>
								<li>Improve your interview skills</li>
							</ul>
						</div>
					</div>

				</div>

				{/* Button */}
				<div className="text-center mt-5">
					<Link to="/" className="btn btn-dark px-4 py-2">
						Back to Home
					</Link>
				</div>

			</div>
		</section>
	);
}

export default About;