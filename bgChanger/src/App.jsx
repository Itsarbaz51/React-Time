import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div
      className="w-full h-screen duration-200 flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div
        className="bg-slate-300 flex flex-wrap 
      justify-center gap-3 rounded-3xl py-1 w-5/6 absolute bottom-8"
      >
        <button
          className="bg-red-600 text-gray-300 rounded-2xl
        px-3 py-1"
          onClick={() => setColor("red")}
          style={{}}
        >
          black
        </button>
        <button
          className="bg-yellow-600 text-gray-300 rounded-2xl
        px-3 py-1"
          onClick={() => setColor("yellow")}
          style={{}}
        >
          yellow
        </button>
        <button
          className="bg-white text-black rounded-2xl
        px-3 py-1"
          onClick={() => setColor("red")}
          style={{}}
        >
          white
        </button>
        <button
          className="bg-blue-600 text-gray-300 rounded-2xl
        px-3 py-1"
          onClick={() => setColor("blue")}
          style={{}}
        >
          blue
        </button>
        <button
          className="bg-gray-600 text-white rounded-2xl
        px-3 py-1"
          onClick={() => setColor("gray")}
          style={{}}
        >
          gray
        </button>
        <button
          className="bg-pink-600 text-black rounded-2xl
        px-3 py-1"
          onClick={() => setColor("pink")}
          style={{ backgroundColor: "pink" }}
        >
          pink
        </button>
        <button
          className="bg-black text-gray-300 rounded-2xl
        px-3 py-1"
          onClick={() => setColor("black")}
          style={{ backgroundColor: "black" }}
        >
          black
        </button>
      </div>
    </div>
  );
}

export default App;
