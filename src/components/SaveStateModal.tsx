import "../styles/SaveStateModal.scss";
import type { SaveData } from "../@types";
import { useContext, useState } from "react";
import SaveStateContext from "../context/context";

function SaveStateModal() {
  const saveStates = useContext(SaveStateContext);
  const [saveDataCollection, setSaveDataCollection] = useState<SaveData[]>([]);

  const save = () => {
    const saveDataMock: SaveData = {
      id: 1,
      save_date: new Date().toLocaleString(),
      content_index: 0, // Mock content index
    }
    saveStates.push(saveDataMock);
    setSaveDataCollection([...saveStates]);
  };

  return (
    <div className="saveStateModal">
      <div id="save-action">
        <button onClick={save}>+ New Save</button>
      </div>
      <div id="save-content">
        {saveDataCollection.map((save) => (
          <div className="save-item" key={save.id}>
            <div className="save-date">{save.save_date}</div>
            <div className="save-index">Section {save.content_index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default SaveStateModal;
