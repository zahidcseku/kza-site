// src/projects.jsx — Volume Zero-style grid with filters and slogan tiles mixed in
function Projects({ gridStyle = 'uniform' }) {
  const all = window.KZA.PROJECTS;
  const tags = window.KZA.TAGS;
  const [tag, setTag] = React.useState('All');
  const filtered = tag === 'All' ? all : all.filter(p => p.tag === tag);

  const gridCls = gridStyle === 'editorial' ? 'grid-editorial' : 'grid-uniform';

  // Slogan tiles — typographic cards that replace project images at fixed positions
  const SLOGANS = [
    { i: 2, eyebrow: '§ Manifesto — 01', title: <>Build <em>quietly.</em><br/>Build to <em>last.</em></>, foot: 'Seventeen years · one studio', tone: 'ink' },
    { i: 5, eyebrow: '§ On Material', title: <>Brick learns the <em>weather</em> &mdash; concrete only ever <em>argues</em> with it.</>, foot: 'From a studio note, 2019', tone: 'sand' },
    { i: 8, eyebrow: '§ On Process',  title: <>We will draw your house <em>nine times</em> before we pour.</>, foot: 'Standing offer to clients', tone: 'terra' },
  ];
  const sloganAt = Object.fromEntries(SLOGANS.map(s => [s.i, s]));

  const items = [];
  filtered.forEach((p, i) => {
    if (sloganAt[i]) {
      const s = sloganAt[i];
      items.push(
        <div key={'slogan-' + i} className={`card slogan-card slogan-${s.tone}`}>
          <div className="slogan-inner">
            <div className="slogan-eyebrow">{s.eyebrow}</div>
            <div className="slogan-title">{s.title}</div>
            <div className="slogan-foot">{s.foot}</div>
          </div>
        </div>
      );
    }
    items.push(
      <a key={p.id} className="card" href={`#project-${p.id}`}>
        <div className="card-media">
          <span className="card-index">{p.id}</span>
          <span className="card-tag">{p.tag}</span>
          <img src={p.img} alt={p.title} loading="lazy"/>
        </div>
        <div className="card-meta">
          <div>
            <div className="card-title">{p.title}</div>
            <div className="card-sub">{p.loc}</div>
          </div>
          <div className="card-year">{p.year}</div>
        </div>
      </a>
    );
  });
  const cards = items;

  // Splice an editorial quote row after index 5 (between projects)
  const quote = (
    <div className="feature-row" key="q">
      <div className="q">
        &ldquo;Our best projects feel as if they were always there &mdash; as if the site had quietly asked for them.&rdquo;
        <small>— Shahnaz Karim, Design Partner · Monocle Weekly, 2024</small>
      </div>
      <div className="cta">
        <a href="#projects" style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', borderBottom: '1px solid var(--ink)', paddingBottom: '2px' }}>
          Read the studio journal →
        </a>
      </div>
    </div>
  );

  const withQuote = [...cards.slice(0, 6), quote, ...cards.slice(6)];

  return (
    <section id="projects" className="projects">
      <div className="projects-head">
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>§ 03 — Selected Works <span className="projects-count">{String(filtered.length).padStart(3,'0')} shown</span></div>
          <h2>Built, drawn<br/>and <em>quietly tended to.</em></h2>
        </div>
        <div className="projects-filter">
          {tags.map(t => (
            <button key={t} className={tag === t ? 'active' : ''} onClick={() => setTag(t)}>{t}</button>
          ))}
        </div>
      </div>

      <div className={gridCls}>
        {withQuote}
      </div>

      <div className="projects-all">
        <a href="projects.html">View full archive — 124 projects →</a>
      </div>
    </section>
  );
}
window.Projects = Projects;
