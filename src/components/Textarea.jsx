
import { useState } from "react";

const Textarea = (props) => {
  const [text, setText] = useState("");

  const settextUperCase = () => {
    setText(text.toUpperCase());
  };

  const settextLOCase = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Better word count
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-700 to-indigo-950 px-4 py-10 sm:px-6 lg:px-8">
      
      {/* Main Container */}
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm">
            ✨ Text Analyzer
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {props.h1 || "Text Converter"}
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            Write, analyze and transform your text with a simple and modern
            interface.
          </p>
        </div>

        {/* Editor Card */}
        <div className="overflow-hidden rounded-3xl border border-white/5 bg-white/3 shadow-2xl shadow-black/15 backdrop-blur-xl">

          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div>
              <h2 className="font-semibold text-white">
                Write Your Text
              </h2>
              <p className="text-sm text-gray-400">
                Enter text below to transform it
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              Ready
            </div>
          </div>

          {/* Textarea */}
          <div className="p-6">
            <textarea
              id="text-area"
              value={text}
              onChange={handleOnChange}
              name="text-area"
              rows="10"
              placeholder="Start writing something here..."
              className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-base leading-7 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
            ></textarea>

            {/* Buttons */}
            <div className="mt-5 flex flex-wrap gap-3">

              {/* Uppercase */}
              <button
                onClick={settextUperCase}
                className="group rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/30 active:scale-95"
              >
                <span className="mr-2">🔠</span>
                Uppercase
              </button>

              {/* Lowercase */}
              <button
                onClick={settextLOCase}
                className="group rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 active:scale-95"
              >
                <span className="mr-2">🔡</span>
                Lowercase
              </button>

              {/* Clear */}
              <button
                onClick={() => setText("")}
                className="rounded-xl border border-red-400/20 bg-red-500/10 px-5 py-3 font-semibold text-red-400 transition-all duration-300 hover:bg-red-500/20 active:scale-95"
              >
                🗑️ Clear
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Words */}
          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition hover:bg-white/[0.15]">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-xl">
              📝
            </div>

            <p className="text-sm text-gray-100">Words</p>

            <h3 className="mt-1 text-3xl font-bold text-white">
              {wordCount}
            </h3>
          </div>

          {/* Characters */}
          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition hover:bg-white/[0.15]">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-xl">
              🔤
            </div>

            <p className="text-sm text-gray-100">Characters</p>

            <h3 className="mt-1 text-3xl font-bold text-white">
              {text.length}
            </h3>
          </div>

          {/* Reading Time */}
          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition hover:bg-white/[0.15]">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/20 text-xl">
              ⏱️
            </div>

            <p className="text-sm text-gray-100">Reading Time</p>

            <h3 className="mt-1 text-3xl font-bold text-white">
              {Math.ceil(wordCount / 200)} min
            </h3>
          </div>

        </div>

        {/* Preview */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-xl">

          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">
                Preview
              </h2>

              <p className="text-sm text-gray-200">
                Your processed text will appear here
              </p>
            </div>

            <span className="rounded-lg bg-blue-500/30 px-3 py-1 text-xs font-medium text-blue-100">
              Live
            </span>
          </div>

          <div className="min-h-[150px] rounded-2xl border border-white/10 bg-slate-950/50 p-5 leading-7 text-gray-100">
            {text ? (
              text
            ) : (
              <span className="italic text-gray-200">
                Your text preview will appear here...
              </span>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-100">
          Built with{" "}
          <span className="font-semibold text-blue-100">
            React
          </span>{" "}
          +{" "}
          <span className="font-semibold text-cyan-100">
            Tailwind CSS
          </span>
        </div>

      </div>
    </div>
  );
};

export default Textarea;

