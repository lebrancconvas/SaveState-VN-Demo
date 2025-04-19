import "./App.scss";

function App() {
  return (
    <>
      <header>
        <h1>Save State Demo for Visual Novel</h1>
      </header>
      <section id="content">
        <h3>Content for Visual Novel</h3>
      </section>
      <section id="control">
        <section id="save">
          <button><b>Save</b></button>
        </section>
        <section id="load">
          <button><b>Load</b></button>
        </section>
      </section>
      <footer className="footer">
        <p>Save State Demo for Visual Novel</p>
        <p>Version 0.1.0</p>
        <p>Author: <a href="https://github.com/lebrancconvas" target="_blank">Poom Yimyuean (@lebrancconvas)</a></p>
      </footer>
    </>
  )
}

export default App;
