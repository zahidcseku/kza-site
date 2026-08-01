// src/nav.jsx
function Nav({ currentPage = 'home', solid = false }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', on, { passive: true });
    on();
    return () => window.removeEventListener('scroll', on);
  }, []);
  const cls = (id) => currentPage === id ? 'active' : '';
  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '') + (solid ? ' solid' : '')}>
      <a href="index.html" className="nav-brand">
        <span className="mark"><Logo size={36}/></span>
        <span>KZA</span>
      </a>
      <nav className="nav-links">
        <a className={cls('home')}     href="index.html">Home</a>
        <a className={cls('about')}    href="about.html">About</a>
        <a className={cls('services')} href="services.html">Services</a>
        <a className={cls('projects')} href="projects.html">Projects</a>
        <a className={cls('awards')}   href="awards.html">Awards</a>
        <a className={cls('clients')}  href="clients.html">Clients</a>
        <a className={cls('gallery')}  href="gallery.html">Gallery</a>
        <a className={cls('find')}     href="find-us.html">Find Us</a>
      </nav>
      <div className="nav-cta">
        <span className="dot" aria-hidden></span>
        <span>Accepting 2026 commissions</span>
      </div>
    </header>
  );
}
window.Nav = Nav;
