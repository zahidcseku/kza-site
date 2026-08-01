import { STATS } from "@/lib/data";

export function Ribbon() {
  return (
    <section className="ribbon">
      <div className="ribbon-inner">
        <div className="ribbon-cell ribbon-intro">
          <span className="label">§ 01 — In Numbers</span>
          <h3>A small practice with a long memory.</h3>
          <p>
            Eighteen years of drawing, building, and revisiting — quietly,
            carefully, from a small house in Sonadanga.
          </p>
        </div>
        {STATS.map((s, i) => (
          <div key={i} className="ribbon-cell">
            <span className="label">
              {String(i + 2).padStart(2, "0")} · {s.label}
            </span>
            <div>
              <div className="num numeral">
                {s.num}
                {s.sup && <sup>{s.sup}</sup>}
              </div>
            </div>
            <p className="desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
