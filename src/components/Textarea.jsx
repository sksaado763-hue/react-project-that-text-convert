
import { useState } from "react";

const Textarea = (props) => {
  const [text, setText] = useState("");

  const settextUperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {props.h1}
        </h1>

        

        {/* Textarea */}
        <textarea
          id="text-area"
          value={text}
          onChange={handleOnChange}
          name="text-area"
          rows="8"
          placeholder="Write something here..."
          className="w-full border border-gray-300 rounded-lg p-4 text-gray-800 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 resize-none transition duration-200"
        ></textarea>

        {/* Button */}
        <button
          className="mt-4 bg-black text-white px-6 py-3 rounded-lg 
                     font-semibold hover:bg-gray-800 
                     active:scale-95 transition duration-200" onClick={settextUperCase}
        >
          Convert to UpperCase
        </button>

      </div>
    </div>
  );
};

export default Textarea;

