import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    // Animation effect for squares
    const squares = document.querySelectorAll('.animated-square');
    squares.forEach((square, index) => {
      square.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <footer className="footer-container">
      {/* Animated squares background */}
      <div className="squares-container">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="animated-square"></div>
        ))}
      </div>

      <div className="footer-content">
        <div className="footer-columns">
          {/* Product Column */}
          <div className="footer-column">
            <h3 className="footer-heading">Product</h3>
            <ul className="footer-links">
              <li><a href="/use-cases">Use Cases</a></li>
              <li><a href="/learning-development">Learning & Development</a></li>
              <li><a href="/sales-marketing">Sales & Marketing</a></li>
              <li><a href="/customer-support">Customer Support</a></li>
              <li><a href="/mass-awareness">Mass Awareness</a></li>
              <li><a href="/human-resources">Human Resources</a></li>
              <li><a href="/hospitality">Hospitality</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-column">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li><a href="/investor-portal">Investor Portal</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/ethics">Ethics</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
              <li><a href="/impressum">Impressum</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;