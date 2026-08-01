// src/page-header.jsx — compact hero for inner pages
function PageHeader({ eyebrow, title, lede, kicker }) {
  return (
    <section className="page-header">
      <div className="page-header-inner">
        <div className="page-header-top">
          <span className="eyebrow">{eyebrow}</span>
          {kicker && <span className="eyebrow" style={{opacity: 0.7}}>{kicker}</span>}
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {lede && <p className="page-header-lede">{lede}</p>}
      </div>
    </section>
  );
}
window.PageHeader = PageHeader;
