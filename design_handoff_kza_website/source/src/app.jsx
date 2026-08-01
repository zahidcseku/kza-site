// src/app.jsx — root composition
function App() {
  const [state, setState] = React.useState(window.TWEAKS || {
    palette: 'sand', heroMode: 'panels', gridStyle: 'uniform', showPhilosophy: true, accent: '#8A6B47'
  });

  React.useEffect(() => {
    document.documentElement.setAttribute('data-palette', state.palette);
  }, [state.palette]);

  return (
    <>
      <Nav/>
      <Hero mode={state.heroMode}/>
      <Ribbon/>
      {state.showPhilosophy && <Philosophy/>}
      <Projects gridStyle={state.gridStyle}/>
      <Footer/>
      <Tweaks state={state} setState={setState}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
