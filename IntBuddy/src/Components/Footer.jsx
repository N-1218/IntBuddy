import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">

          <div className="col-md-3 mb-4">
            <h5>About Us</h5>
            <p>MyWebsite is dedicated to providing the best services for our customers. We specialize in web development, design, and digital solutions.</p>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About</a></li>
              <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Contact</h5>
            <p><i className="bi bi-geo-alt-fill"></i> 123 Main Street, Mumbai, India</p>
            <p><i className="bi bi-telephone-fill"></i> +91 9876543210</p>
            <p><i className="bi bi-envelope-fill"></i> info@mywebsite.com</p>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light text-center"><i className="bi bi-facebook fs-3 d-block mb-1"></i>Facebook</a>
              <a href="#" className="text-light text-center"><i className="bi bi-twitter fs-3 d-block mb-1"></i>Twitter</a>
              <a href="#" className="text-light text-center"><i className="bi bi-instagram fs-3 d-block mb-1"></i>Instagram</a>
              <a href="#" className="text-light text-center"><i className="bi bi-linkedin fs-3 d-block mb-1"></i>LinkedIn</a>
            </div>
          </div>

        </div>

        <hr className="bg-light" />

        <div className="row">
          <div className="col-12 text-center">
            <small>© 2026 MyWebsite. All rights reserved.</small>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;