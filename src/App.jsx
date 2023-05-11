import React, { useReducer } from "react";
import { SmartHomeContext } from "./SmartHomeContext";
import { smartDevicesReducer } from "./reducers/smartDevicesReducer";
import {SmartHome} from "./components/SmartHome";
import { Light } from "./components/Light";

export function App() {
  const [{ lights }, dispatch] = useReducer(smartDevicesReducer, {
    lights: [false, false, true],
  });

  return (
    <div>
      <SmartHomeContext.Provider value={{ lights, dispatch }}>
        <SmartHome />
      </SmartHomeContext.Provider>
    </div>
  );
}




