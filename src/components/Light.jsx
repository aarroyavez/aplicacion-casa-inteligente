// import React, { useContext } from "react";
// import { SmartHomeContext } from "../SmartHomeContext";
// export function Light({ id, isOn }) {
//   const { dispatch } = useContext(SmartHomeContext);
//   const handleOnToggle = () => {
//     dispatch({ type: "toggle", payload: id });
//   };
//   return (
//     <div className="light">
//       <div className={`light__bulb ${isOn ? "on" : "off"}`} onClick={handleOnToggle} style={{
//       border: "solid 1px gray",
//       padding: "2rem",
//       fontSize: "3rem",
//       background: isOn ? "#eee" : "#444",
//     }}>
//         {isOn ? "💡" : "⚫️"}
//       </div>
//       <div className="light__id">{id}</div>
//     </div>
//   );
// }

// import React, { useContext } from "react";
// import { SmartHomeContext } from "../SmartHomeContext";

// export function Light({ id }) {
//   const { lights, dispatch } = useContext(SmartHomeContext);

//   const isOn = lights[id];

//   const handleOnToggle = () => {
//     dispatch({ type: "toggle", payload: id });
//   };

//   return (
//     <div className="light">
//       <div
//         className={`light__bulb ${isOn ? "on" : "off"}`}
//         onClick={handleOnToggle}
//         style={{
//           border: "solid 1px gray",
//           padding: "2rem",
//           fontSize: "3rem",
//           background: isOn ? "#eee" : "#444"
//         }}
//       >
//         {isOn ? "💡" : "⚫️"}
//       </div>
//       <div className="light__id">{id}</div>
//     </div>
//   );
// }


// import React, { useContext } from "react";
// import { SmartHomeContext } from "../SmartHomeContext";

// export function Light({ id }) {
//   const { lights, dispatch } = useContext(SmartHomeContext);
//   const isOn = lights[id];

//   const handleOnToggle = () => {
//     console.log(`Toggle light ${id}`);
//     dispatch({ type: "toggle", payload: id });
//   };

//   return (
//     <div className="light">
//       <div
//         className={`light__bulb ${isOn ? "on" : "off"}`}
//         onClick={handleOnToggle}
//         style={{
//           border: "solid 1px gray",
//           padding: "2rem",
//           fontSize: "3rem",
//           background: isOn ? "#eee" : "#444",
//         }}
//       >
//         {isOn ? "💡" : "⚫️"}
//       </div>
//       <div className="light__id">{id}</div>
//     </div>
//   );
// }
  
import React, { useContext } from "react";
import { SmartHomeContext } from "../SmartHomeContext";

export function Light({ id }) {
  const { lights, dispatch } = useContext(SmartHomeContext);
  const isOn = lights[id];

  const handleOnToggle = () => {
    console.log(`Toggle light ${id}`);
    dispatch({ type: "toggle", payload: id });
  };

  return (
    <div className="light">
      <div
        className={`light__bulb ${isOn ? "on" : "off"}`}
        onClick={handleOnToggle}
        style={{
          border: "solid 1px gray",
          padding: "2rem",
          fontSize: "3rem",
          background: isOn ? "#eee" : "#444",
        }}
      >
        {isOn ? "💡" : "⚫️"}
      </div>
      <div className="light__id">{id}</div>
    </div>
  );
}





