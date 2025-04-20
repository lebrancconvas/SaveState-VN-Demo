import { useContext, useState, useEffect } from "react";
import "./styles/App.scss";
import * as content from "./assets/content/content.txt";

import SaveStateContext from "./context/context";

import SaveStateModal from "./components/SaveStateModal";

function App() {
  const [contents, setContents] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const saveState = useContext(SaveStateContext);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(content.default);
        const text = await response.text();
        const lines = text.split("\n").map(line => line.trim().replace(/^- /, ""));
        setContents(lines);
        setCurrentLine(lines[0]);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    fetchContent();
  }, []);

  const nextContent = () => {
    if (currentIndex < contents.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentLine(contents[currentIndex]);
    } else {
      alert("Content finished.");
    }
  }

  return (
    <>
      <header>
        <h1>Save State Demo for Visual Novel</h1>
      </header>
      <section id="content" onClick={nextContent}>
        <h3 className="contentText">{currentLine}</h3>
      </section>
      <section id="control">
        <section id="save">
          <button><b>Save</b></button>
        </section>
        <section id="load">
          <button><b>Load</b></button>
        </section>
      </section>
      <section id="saveStateModal">
        <SaveStateModal />
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
