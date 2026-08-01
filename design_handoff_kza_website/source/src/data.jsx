// src/data.jsx — project + firm data. Imagery = striped SVG placeholders with names.
(function(){
  // generates a striped SVG placeholder with title + id
  function placeholder({ title, sub, bg = '#3A352D', fg = '#F2EEE7', accent = '#8A6B47' }) {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000' preserveAspectRatio='xMidYMid slice'>
<defs>
<pattern id='s' width='8' height='8' patternUnits='userSpaceOnUse' patternTransform='rotate(-12)'>
<rect width='8' height='8' fill='${bg}'/>
<line x1='0' y1='0' x2='0' y2='8' stroke='${accent}' stroke-opacity='0.18' stroke-width='1'/>
</pattern>
<linearGradient id='g' x1='0' x2='0' y1='0' y2='1'>
<stop offset='0' stop-color='${bg}' stop-opacity='0'/>
<stop offset='1' stop-color='${bg}' stop-opacity='0.55'/>
</linearGradient>
</defs>
<rect width='800' height='1000' fill='url(#s)'/>
<rect width='800' height='1000' fill='url(#g)'/>
<g fill='none' stroke='${fg}' stroke-opacity='0.14' stroke-width='1'>
<path d='M0 820 L800 720'/>
<path d='M0 860 L800 760'/>
<rect x='140' y='540' width='260' height='280'/>
<rect x='400' y='480' width='200' height='340'/>
<rect x='600' y='600' width='140' height='220'/>
<path d='M140 540 L270 460 L400 540'/>
<path d='M400 480 L500 400 L600 480'/>
</g>
<g fill='${fg}' font-family='Instrument Serif, serif'>
<text x='60' y='920' font-size='54' letter-spacing='-1'>${title.replace(/&/g,'&amp;')}</text>
</g>
<g fill='${fg}' opacity='0.65' font-family='ui-monospace, monospace' font-size='14' letter-spacing='2'>
<text x='60' y='72'>KZA · ${sub}</text>
<text x='740' y='72' text-anchor='end'>${new Date().getFullYear() - 2008} YR</text>
</g>
</svg>`;
    // base64-encode to avoid percent-encoding issues with inner url(#id) refs
    return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
  }

  // varied palettes for placeholders so the grid has rhythm
  const P = [
    { bg:'#2B241A', fg:'#F2EEE7', accent:'#8A6B47' },  // ink brown
    { bg:'#3A352D', fg:'#EDE6D9', accent:'#C9A961' },  // warm olive
    { bg:'#5C4628', fg:'#F2EEE7', accent:'#EDE6D9' },  // bronze
    { bg:'#14130F', fg:'#EDE6D9', accent:'#C44828' },  // black + terra
    { bg:'#746A57', fg:'#FBF8F1', accent:'#141311' },  // sage
    { bg:'#8A6B47', fg:'#FBF8F1', accent:'#2B241A' },  // accent base
  ];
  const pal = (i) => P[i % P.length];

  const mk = (i, title, sub) => placeholder({ title, sub, ...pal(i) });

  const PROJECTS = [
    { id: 'KZA-001', title: 'Sonadanga Residence',      tag: 'Residential',         year: '2024', loc: 'Khulna, BD' },
    { id: 'KZA-002', title: 'Rupsha Pavilion',          tag: 'Cultural',            year: '2023', loc: 'Khulna, BD' },
    { id: 'KZA-003', title: 'Silo No. 7',               tag: 'Heritage Conservation', year: '2023', loc: 'Chittagong, BD' },
    { id: 'KZA-004', title: 'Haor Reading Rooms',       tag: 'Institutional',       year: '2022', loc: 'Sunamganj, BD' },
    { id: 'KZA-005', title: 'Khan Jahan Guesthouse',    tag: 'Interior Design',     year: '2022', loc: 'Bagerhat, BD' },
    { id: 'KZA-006', title: 'Salt & Tide',              tag: 'Interior Design',     year: '2021', loc: "Cox's Bazar, BD" },
    { id: 'KZA-007', title: 'Forty Four Courtyards',    tag: 'Residential',         year: '2021', loc: 'Sylhet, BD' },
    { id: 'KZA-008', title: 'Jute Exchange',            tag: 'Masterplanning',      year: '2020', loc: 'Narsingdi, BD' },
    { id: 'KZA-009', title: 'The Copper Mosque',        tag: 'Cultural',            year: '2020', loc: 'Tangail, BD' },
    { id: 'KZA-010', title: 'Monsoon Academy',          tag: 'Institutional',       year: '2019', loc: 'Rangpur, BD' },
    { id: 'KZA-011', title: 'Sundarban Station',        tag: 'Heritage Conservation', year: '2019', loc: 'Mongla, BD' },
    { id: 'KZA-012', title: 'Delta Lantern Villas',     tag: 'Residential',         year: '2018', loc: 'Khulna, BD' },
  ].map((p, i) => ({ ...p, img: mk(i, p.title, p.id) }));

  const HERO_SLIDES = [
    { label: '01', title: 'Sonadanga Residence',  loc: 'Khulna',      year: '2024' },
    { label: '02', title: 'Rupsha Pavilion',      loc: 'Khulna',      year: '2023' },
    { label: '03', title: 'Haor Reading Rooms',   loc: 'Sunamganj',   year: '2022' },
    { label: '04', title: 'The Copper Mosque',    loc: 'Tangail',     year: '2020' },
    { label: '05', title: 'Salt & Tide',          loc: "Cox's Bazar", year: '2021' },
  ].map((s, i) => ({ ...s, img: mk(i, s.title, s.label + ' · ' + s.loc) }));

  const TAGS = ['All','Residential','Interior Design','Masterplanning','Heritage Conservation','Institutional','Cultural','Consulting'];

  const STATS = [
    { num: '18',  sup: '',  label: 'Years in Practice',    desc: 'Independent studio since 2008, based in Khulna.' },
    { num: '124', sup: '+', label: 'Built Works',          desc: 'Across residential, interior, heritage and planning.' },
    { num: '09',  sup: '',  label: 'Countries',            desc: 'Bangladesh, India, Oman, Singapore and beyond.' },
    { num: '38',  sup: '',  label: 'Awards & Mentions',    desc: 'Aga Khan nomination (2022), Berger Award (2021 & 2014).' },
  ];

  window.KZA = { PROJECTS, HERO_SLIDES, TAGS, STATS, placeholder };
})();
