// src/footer.jsx
function Footer() {
  return (
    <footer id="find" className="footer">
      <div className="footer-inner">
        <div className="footer-huge">
          Tell us about<br/><em>a site,</em> a season, a brief.
        </div>

        <div className="footer-cols">
          <div>
            <h5>Studio</h5>
            <p>Kazi Zahin Architects<br/>Sonadanga, Khulna,<br/>Bangladesh</p>
            <p style={{marginTop: 14}}>+880 1712 753 160<br/>kzarchi@gmail.com</p>
          </div>
          <div>
            <h5>Pages</h5>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="projects.html">Projects</a></li>
            </ul>
          </div>
          <div>
            <h5>More</h5>
            <ul>
              <li><a href="awards.html">Awards</a></li>
              <li><a href="clients.html">Clients</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="find-us.html">Find Us</a></li>
            </ul>
          </div>
          <div>
            <h5>Follow</h5>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Journal</a></li>
              <li><a href="find-us.html">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <span>© 2008–2026 Kazi Zahin Architects · Khulna, Bangladesh</span>
          <span>Typeset in Instrument Serif &amp; Archivo</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
