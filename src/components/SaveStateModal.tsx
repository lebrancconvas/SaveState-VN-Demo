import "../styles/SaveStateModal.scss";
import type { SaveData } from "../@types";
import { useContext, useEffect, useState } from "react";
import SaveStateContext from "../context/context";
import { MAXIMUM_SAVE_SLOTS } from "../constants";

type SaveStateModalProps = {
  isOpen: boolean;
}

function SaveStateModal({ isOpen }: SaveStateModalProps) {
  const saveStates = useContext(SaveStateContext);
  const [saveDataCollection, setSaveDataCollection] = useState<SaveData[]>([]);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState<boolean>(true);

  useEffect(() => {
    setIsSaveModalOpen(isOpen);
  }, [isOpen]);

  const save = () => {
    const saveDataMock: SaveData = {
      id: 1,
      save_date: new Date().toLocaleString(),
      content_index: 0, // Mock content index
    }
    if(saveStates.length < MAXIMUM_SAVE_SLOTS) {
      saveStates.push(saveDataMock);
      setSaveDataCollection([...saveStates]);
    } else {
      alert("You have reached the maximum number of saves.");
    }
  };

  const closeModal = () => {
    setIsSaveModalOpen(false);
  };

  if(isSaveModalOpen) {
    return (
      <div className="saveStateModal">
        <div id="save-action">
          <button onClick={save}>+ New Save</button>
          <button onClick={closeModal}>Close</button>
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
  }
};

export default SaveStateModal;
