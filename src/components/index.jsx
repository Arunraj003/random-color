import React, { useEffect, useState } from "react";
import "./index.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  function handleCopy() {
    navigator.clipboard.writeText(color).then(() => {
      alert("Color copied to clipboard!");
    });
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div className="container" style={{ background: color }}>
      <div className="button-container">
        <button
          onClick={() => {
            setTypeOfColor("hex");
            handleCreateRandomHexColor();
          }}
        >
          Create HEX Color
        </button>
        <button
          onClick={() => {
            setTypeOfColor("rgb");
            handleCreateRandomRgbColor();
          }}
        >
          Create RGB Color
        </button>
        <button
          onClick={() => {
            if (typeOfColor === "hex") {
              handleCreateRandomHexColor();
            } else {
              handleCreateRandomRgbColor();
            }
          }}
        >
          Create Random Color
        </button>
      </div>
      <div className="color-info">
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
      <button className="copy-button" onClick={handleCopy}>
        Copy {typeOfColor.toUpperCase()} Color
      </button>

      <p className="credits">Created By <span>Arun Raj R</span></p>
    </div>
  );
}
