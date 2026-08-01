// src/logo.jsx — KZA mark (stylized from "Logo KZA.pdf")
function Logo({ size = 36, color = 'currentColor' }) {
  // Interpretation: tall condensed serif monogram "kza" within a thin rule,
  // with a subtle underscore — reads like an architect's stamp.
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-label="KZA Architects" role="img">
      <g fill={color}>
        {/* k */}
        <path d="M6.8 11 h2.0 v14.2 l5.9 -7.1 h2.5 l-5.2 6.1 l5.7 11.3 h-2.3 l-4.6 -9.4 l-2.0 2.3 v7.1 h-2.0 Z"/>
        {/* z */}
        <path d="M19.0 18.0 h10.2 v1.5 l-7.9 14.9 h8.1 v1.4 h-10.6 v-1.5 l7.9 -14.9 h-7.7 Z"/>
        {/* a */}
        <path d="M31.6 35.8 l5.3 -17.9 h2.4 l5.3 17.9 h-2.2 l-1.4 -4.9 h-5.8 l-1.4 4.9 Z M35.7 29.2 h5.0 l-2.5 -9.0 Z"/>
      </g>
      {/* baseline rule */}
      <rect x="6.5" y="39" width="35" height="1.2" fill={color} opacity="0.6"/>
    </svg>
  );
}
function LogoWord({ color = 'currentColor', size = 14 }) {
  // compact wordmark: KAZI ZAHIN ARCHITECTS
  return (
    <span style={{
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      fontSize: size, letterSpacing: '0.18em',
      textTransform: 'uppercase', color,
    }}>Kazi Zahin Architects</span>
  );
}
window.Logo = Logo;
window.LogoWord = LogoWord;
