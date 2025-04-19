import "./App.scss";

function App() {
  return (
    <>
      <header>
        <h1>Save State Demo for Visual Novel</h1>
      </header>
      <section id="content">
        Content of Visual Novel
      </section>
      <section id="control">
        <section id="save">
          <button>Save</button>
        </section>
        <section id="load">
          <button>Load</button>
        </section>
      </section>
      <footer className="footer">
        <p>Save State Demo for Visual Novel</p>
        <p>Version 0.1.0</p>
        <p>Author: Poom Yimyuean (@lebrancconvas)</p>
      </footer>
    </>
  )
}

export default App;
