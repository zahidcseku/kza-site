import Image from "next/image";
import logoImg from "@/app/assets/logo.png";

// Inline 18px icons — stroke inherits currentColor so they pick up each
// link's hover state automatically.
const Icon = {
  map: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Khan+Zahid+Architects+Sonadanga+Khulna+Bangladesh";

export function Footer() {
  return (
    <footer id="find" className="footer">
      <div className="footer-inner">
        <div className="footer-cols">
          <Image
            src={logoImg}
            alt="KZA — Khan Zahid Architects"
            width={logoImg.width}
            height={logoImg.height}
            className="footer-logo"
          />

          <div className="footer-col">
            <h5>Address</h5>
            <a
              className="footer-row"
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span className="footer-icon">{Icon.map}</span>
              <span>
                Khan Zahid Architects
                <br />
                Sonadanga, Khulna
                <br />
                Bangladesh
              </span>
            </a>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <a className="footer-row" href="tel:+8801712753160">
              <span className="footer-icon">{Icon.phone}</span>
              <span>+880 1712 753 160</span>
            </a>
            <a className="footer-row" href="mailto:kzarchi@gmail.com">
              <span className="footer-icon">{Icon.mail}</span>
              <span>kzarchi@gmail.com</span>
            </a>
          </div>

          <div className="footer-col">
            <h5>Follow Us</h5>
            <ul>
              <li>
                <a className="footer-social" href="#" target="_blank" rel="noreferrer">
                  <span className="footer-icon">{Icon.facebook}</span>
                  Facebook
                </a>
              </li>
              <li>
                <a className="footer-social" href="#" target="_blank" rel="noreferrer">
                  <span className="footer-icon">{Icon.instagram}</span>
                  Instagram
                </a>
              </li>
              <li>
                <a className="footer-social" href="#" target="_blank" rel="noreferrer">
                  <span className="footer-icon">{Icon.linkedin}</span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-copy">
          © 2008–2026 Khan Zahid Architects
          <span className="footer-copy-sep"> | </span>
          Developed by{" "}
          <a
            href="https://www.mlcrafters.com"
            target="_blank"
            rel="noreferrer"
          >
            ML Crafters Pty. Ltd.
          </a>
        </div>
      </div>
    </footer>
  );
}
