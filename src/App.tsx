import { useState, useEffect } from "react";
import "./App.scss";
import * as content from "./assets/content/content.txt";

function App() {
  const [contents, setContents] = useState<string[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(content.default);
        const text = await response.text();
        const lines = text.split("\n").map(line => line.trim().replace(/^- /, ""));
        setContents(lines);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    fetchContent();
  }, []);

  const nextContent = () => {
    console.log("Next Content Clicked.");
  }

  return (
    <>
      <header>
        <h1>Save State Demo for Visual Novel</h1>
      </header>
      <section id="content" onClick={nextContent}>
        <h3 className="contentText">{contents[0]}</h3>
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
