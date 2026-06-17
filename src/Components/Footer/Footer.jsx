import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">EV-olution</div>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#explore">Explore</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2026 EV-olution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
