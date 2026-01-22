import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'
function Footer() {
  return (
   <footer>
  <div class="footer-container">
    <div class="footer-about">
      <h3>Newsly</h3>
      <p>Your daily dose of latest news from around the world. Stay informed, stay ahead.</p>
    </div>
      <div class="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Next">News</a></li>
        <li><Link to="/category/sports" className="dropdown-item">
              Sports
            </Link></li>
        <li><a href="/category/technology">Technology</a></li>
        <li><a href="/category/entertainment">Entertainment</a></li>
      </ul>
    </div>

    <div class="footer-contact">
      <h4>Contact Us</h4>
      <p>Email: support@newsly.com</p>
      <p>Phone: +1 234 567 890</p>
      
    </div>
   
    
  </div>

  <div class="footer-bottom">
    <p>&copy; 2025 Newsly. All Rights Reserved.</p>
  </div>
</footer>

    
  )
}

export default Footer