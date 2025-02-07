import React, { useState } from "react";

export default function ColorGenerator() {
  const [color, setColor] = useState("#ffffff");

  const generateColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundColor: color }}>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <p className="text-xl font-semibold text-gray-800">Couleur actuelle : {color}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={generateColor}
        >
          Générer une couleur
        </button>
      </div>
    </div>
  );
}
