import React from "react";
import {MainControls} from "./MainControls";
import {Light} from "./Light";
import { SmartHomeContext } from "../SmartHomeContext";

export function SmartHome() {
  const { lights } = React.useContext(SmartHomeContext);

  return (
    <div>
      <MainControls />
      {lights.map((light, index) => (
        <Light key={index} id={index} isOn={light} />
      ))}
    </div>
  );
}


