// src/philosophy.jsx — Heatherwick-like short manifesto
function Philosophy() {
  return (
    <section id="about" className="philosophy">
      <div className="philosophy-grid">
        <div>
          <span className="philosophy-eyebrow">§ 02 — Philosophy</span>
        </div>
        <div className="philosophy-body">
          <h2>
            We design for the climate first. Everything else
            is a consequence of that first honest conversation with place.
          </h2>
          <div className="philosophy-signoff">
            <div>
              <div className="who">&mdash; Kazi Zahin Hasan</div>
              <div className="role">Founding Partner</div>
            </div>
            <a href="#about" style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', borderBottom: '1px solid var(--ink)', paddingBottom: '2px' }}>
              Read the full note →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Philosophy = Philosophy;
