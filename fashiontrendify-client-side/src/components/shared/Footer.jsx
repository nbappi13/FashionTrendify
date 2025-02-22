import React from "react";
import "../../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="simple-footer">
      <div className="footer-content">
        <p className="brand-header">FashionTrendify</p>
        <div className="copyright-section">
          <p className="copyright-year">&copy; {new Date().getFullYear()}</p>
          <p className="copyright-rights">All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#privacy" className="footer-link">
            Privacy Policy
          </a>
          <a href="#terms" className="footer-link">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;