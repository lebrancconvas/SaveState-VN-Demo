import { createContext } from "react";
import type { SaveData } from "../@types";

const SaveStateContext = createContext<SaveData[]>([]);

export default SaveStateContext;
