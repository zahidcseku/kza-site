// src/tweaks.jsx — in-page Tweaks panel wired to host edit-mode protocol
function Tweaks({ state, setState }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setOpen(true);
      if (d.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const update = (patch) => {
    setState(s => ({ ...s, ...patch }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
  };

  const palettes = [
    { id: 'sand',  bg: '#F2EEE7', ink: '#141311', ac: '#8A6B47' },
    { id: 'bone',  bg: '#FFFFFF', ink: '#0A0A0A', ac: '#1F1F1F' },
    { id: 'ink',   bg: '#0E0D0B', ink: '#F2EEE7', ac: '#C9A961' },
    { id: 'terra', bg: '#EDE6D9', ink: '#2B241A', ac: '#C44828' },
  ];

  return (
    <div className={'tweaks-panel' + (open ? ' open' : '')}>
      <h4>Tweaks · KZA</h4>

      <div className="tweaks-group">
        <label>Palette</label>
        <div className="tweaks-swatches">
          {palettes.map(p => (
            <button key={p.id}
              aria-label={p.id}
              title={p.id}
              className={state.palette === p.id ? 'active' : ''}
              onClick={() => update({ palette: p.id })}
              style={{ background: `linear-gradient(135deg, ${p.bg} 0 50%, ${p.ac} 50% 100%)` }}
            />
          ))}
        </div>
      </div>

      <div className="tweaks-group">
        <label>Projects grid</label>
        <div className="tweaks-segment">
          <button className={state.gridStyle === 'uniform' ? 'active' : ''} onClick={() => update({ gridStyle: 'uniform' })}>Uniform</button>
          <button className={state.gridStyle === 'editorial' ? 'active' : ''} onClick={() => update({ gridStyle: 'editorial' })}>Editorial</button>
        </div>
      </div>

      <div className="tweaks-group">
        <label>Hero style</label>
        <div className="tweaks-segment">
          <button className={state.heroMode === 'panels' ? 'active' : ''} onClick={() => update({ heroMode: 'panels' })}>Panels</button>
          <button className={state.heroMode === 'kinetic' ? 'active' : ''} onClick={() => update({ heroMode: 'kinetic' })}>Kinetic</button>
        </div>
      </div>

      <div className={'tweaks-toggle' + (state.showPhilosophy ? ' on' : '')} onClick={() => update({ showPhilosophy: !state.showPhilosophy })}>
        <span style={{fontFamily:'var(--mono)', fontSize:'10.5px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--muted)'}}>Philosophy block</span>
        <span className="switch"/>
      </div>
    </div>
  );
}
window.Tweaks = Tweaks;
