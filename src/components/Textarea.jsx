import { useEffect, useRef, useState } from "react";

const Textarea = (props) => {
  const [text, setText] = useState("");
  const [copyStatus, setCopyStatus] = useState("Copy");

  // Notification state
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    icon: "✓",
  });

  // Notification timer
  const notificationTimer = useRef(null);

  // Show notification
  const showNotification = (message, icon = "✓") => {
    // Clear previous timer
    if (notificationTimer.current) {
      clearTimeout(notificationTimer.current);
    }

    setNotification({
      show: true,
      message,
      icon,
    });

    notificationTimer.current = setTimeout(() => {
      setNotification({
        show: false,
        message: "",
        icon: "",
      });
    }, 2000);
  };

  // Cleanup timer
  useEffect(() => {
    return () => {
      if (notificationTimer.current) {
        clearTimeout(notificationTimer.current);
      }
    };
  }, []);

  // Uppercase
  const settextUperCase = () => {
    if (!text) {
      showNotification("Please enter some text first", "⚠️");
      return;
    }

    setText(text.toUpperCase());

    showNotification("Text converted to uppercase", "🔠");
  };

  // Lowercase
  const settextLOCase = () => {
    if (!text) {
      showNotification("Please enter some text first", "⚠️");
      return;
    }

    setText(text.toLowerCase());

    showNotification("Text converted to lowercase", "🔡");
  };

  // Capitalize Every Word
  const capitalizeWords = () => {
    if (!text) {
      showNotification("Please enter some text first", "⚠️");
      return;
    }

    setText(
      text
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase())
    );

    showNotification("Every word capitalized", "✨");
  };

  // Remove Extra Spaces
  const removeExtraSpaces = () => {
    if (!text) {
      showNotification("Please enter some text first", "⚠️");
      return;
    }

    setText(text.replace(/\s+/g, " ").trim());

    showNotification("Extra spaces removed", "🧹");
  };

  // Trim Start and End
  const trimText = () => {
    if (!text) {
      showNotification("Please enter some text first", "⚠️");
      return;
    }

    setText(text.trim());

    showNotification("Spaces at start and end removed", "✂️");
  };

  // Reverse Text
  const reverseText = () => {
    if (!text) {
      showNotification("Please enter some text first", "⚠️");
      return;
    }

    setText(text.split("").reverse().join(""));

    showNotification("Text reversed successfully", "🔄");
  };

  // Remove Numbers
  const removeNumbers = () => {
    if (!text) {
      showNotification("Please enter some text first", "⚠️");
      return;
    }

    setText(text.replace(/[0-9]/g, ""));

    showNotification("Numbers removed", "🔢");
  };

  // Remove Special Characters
  const removeSpecialCharacters = () => {
    if (!text) {
      showNotification("Please enter some text first", "⚠️");
      return;
    }

    setText(text.replace(/[^a-zA-Z0-9\s]/g, ""));

    showNotification("Special characters removed", "🧽");
  };

  // Remove Line Breaks
  const removeLineBreaks = () => {
    if (!text) {
      showNotification("Please enter some text first", "⚠️");
      return;
    }

    setText(text.replace(/\r?\n|\r/g, " "));

    showNotification("Line breaks removed", "📄");
  };

  // Copy Text
  const copyText = async () => {
    if (!text) {
      showNotification("There is no text to copy", "⚠️");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);

      setCopyStatus("Copied!");

      showNotification("Text copied to clipboard", "📋");

      setTimeout(() => {
        setCopyStatus("Copy");
      }, 1500);
    } catch (error) {
      console.error("Failed to copy text:", error);

      showNotification("Could not copy the text", "❌");
    }
  };

  // Clear Text
  const clearText = () => {
    if (!text) {
      showNotification("Text area is already empty", "⚠️");
      return;
    }

    setText("");

    showNotification("Text cleared successfully", "🗑️");
  };

  // Handle Text Change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Statistics
  const wordCount =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const characterCount = text.length;

  const charactersWithoutSpaces = text.replace(/\s/g, "").length;

  const sentenceCount =
    text.trim() === ""
      ? 0
      : text
          .split(/[.!?]+/)
          .filter((sentence) => sentence.trim()).length;

  // Reading time
  const readingTime =
    wordCount === 0 ? 0 : Math.ceil(wordCount / 200);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-4 py-10 text-white sm:px-6 lg:px-8">

      {/* ================= NOTIFICATION ================= */}

      <div
        className={`fixed right-4 top-24 z-[9999] transition-all duration-500 sm:right-6 ${
          notification.show
            ? "translate-x-0 scale-100 opacity-100"
            : "pointer-events-none translate-x-10 scale-95 opacity-0"
        }`}
      >
        <div className="relative w-[calc(100vw-2rem)] max-w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-2xl">

          {/* Glow */}
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative flex items-center gap-3">

            {/* Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-lg shadow-lg shadow-blue-500/30">
              {notification.icon}
            </div>

            {/* Message */}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white">
                Action Completed
              </p>

              <p className="mt-1 truncate text-xs text-gray-400">
                {notification.message}
              </p>
            </div>

            {/* Close */}
            <button
              onClick={() =>
                setNotification({
                  show: false,
                  message: "",
                  icon: "",
                })
              }
              className="text-gray-500 transition hover:text-white"
              aria-label="Close notification"
            >
              ✕
            </button>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 h-[3px] w-full overflow-hidden bg-white/5">
            <div
              key={notification.message}
              className="h-full w-full origin-left animate-[shrink_2s_linear_forwards] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
            />
          </div>
        </div>
      </div>

      {/* ================= MAIN ================= */}

      <div className="mx-auto max-w-5xl">

        {/* Header */}

        <div className="mb-8 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-xl">
            <span>✦</span>
            Smart Text Analyzer
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {props.title || "Text Converter"}
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Transform, clean and analyze your text with powerful
            text-processing tools.
          </p>
        </div>

        {/* ================= TEXTAREA CARD ================= */}

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur-xl">

          {/* Card Header */}

          <div className="border-b border-white/10 bg-white/[0.03] px-5 py-4 sm:px-6">

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h2 className="font-semibold text-white">
                  Your Text
                </h2>

                <p className="text-xs text-gray-500">
                  Enter or paste your content below
                </p>
              </div>

              <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-400">
                {characterCount} characters
              </div>

            </div>
          </div>

          {/* Textarea */}

          <div className="p-5 sm:p-6">

            <textarea
              value={text}
              onChange={handleOnChange}
              placeholder="Write or paste your text here..."
              className="min-h-[260px] w-full resize-y rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm leading-7 text-gray-100 outline-none transition placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10"
            />

            {/* ================= BUTTONS ================= */}

            <div className="mt-6">

              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <h3 className="text-sm font-semibold text-gray-300">
                  Text Tools
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {/* Uppercase */}

                <button
                  onClick={settextUperCase}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 active:scale-95"
                >
                  🔠 Uppercase
                </button>

                {/* Lowercase */}

                <button
                  onClick={settextLOCase}
                  className="rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 font-semibold text-gray-200 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.1] active:scale-95"
                >
                  🔡 Lowercase
                </button>

                {/* Capitalize */}

                <button
                  onClick={capitalizeWords}
                  className="rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 font-semibold text-gray-200 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.1] active:scale-95"
                >
                  ✨ Capitalize Words
                </button>

                {/* Remove Spaces */}

                <button
                  onClick={removeExtraSpaces}
                  className="rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:-translate-y-0.5 hover:from-cyan-500 hover:to-blue-500 active:scale-95"
                >
                  🧹 Remove Extra Spaces
                </button>

                {/* Trim */}

                <button
                  onClick={trimText}
                  className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 font-semibold text-white shadow-lg shadow-purple-600/20 transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-fuchsia-500 active:scale-95"
                >
                  ✂️ Trim Text
                </button>

                {/* Reverse */}

                <button
                  onClick={reverseText}
                  className="rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 px-5 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:from-yellow-400 hover:to-orange-400 active:scale-95"
                >
                  🔄 Reverse
                </button>

                {/* Remove Numbers */}

                <button
                  onClick={removeNumbers}
                  className="rounded-xl bg-gradient-to-r from-orange-600 to-red-500 px-5 py-3 font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:-translate-y-0.5 hover:from-orange-500 hover:to-red-400 active:scale-95"
                >
                  🔢 Remove Numbers
                </button>

                {/* Remove Symbols */}

                <button
                  onClick={removeSpecialCharacters}
                  className="rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 px-5 py-3 font-semibold text-white shadow-lg shadow-pink-600/20 transition hover:-translate-y-0.5 hover:from-pink-500 hover:to-rose-500 active:scale-95"
                >
                  🧽 Remove Symbols
                </button>

                {/* Remove Lines */}

                <button
                  onClick={removeLineBreaks}
                  className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:from-indigo-500 hover:to-violet-500 active:scale-95"
                >
                  📄 Remove Line Breaks
                </button>

                {/* Copy */}

                <button
                  onClick={copyText}
                  className="rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-5 py-3 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5 hover:from-emerald-500 hover:to-green-500 active:scale-95"
                >
                  📋 {copyStatus}
                </button>

                {/* Clear */}

                <button
                  onClick={clearText}
                  className="rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:from-red-500 hover:to-rose-500 active:scale-95"
                >
                  🗑️ Clear Text
                </button>

              </div>
            </div>

            {/* ================= STATISTICS ================= */}

            <div className="mt-8">

              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500" />

                <h3 className="text-sm font-semibold text-gray-300">
                  Text Statistics
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

                {/* Words */}

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-gray-500">
                    Words
                  </p>

                  <p className="mt-2 text-2xl font-bold text-white">
                    {wordCount}
                  </p>
                </div>

                {/* Characters */}

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-gray-500">
                    Characters
                  </p>

                  <p className="mt-2 text-2xl font-bold text-white">
                    {characterCount}
                  </p>
                </div>

                {/* Characters without spaces */}

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-gray-500">
                    Without Spaces
                  </p>

                  <p className="mt-2 text-2xl font-bold text-white">
                    {charactersWithoutSpaces}
                  </p>
                </div>

                {/* Sentences */}

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-gray-500">
                    Sentences
                  </p>

                  <p className="mt-2 text-2xl font-bold text-white">
                    {sentenceCount}
                  </p>
                </div>

              </div>
            </div>

            {/* ================= READING TIME ================= */}

            <div className="mt-4 flex items-center justify-between rounded-2xl border border-blue-500/10 bg-blue-500/5 px-5 py-4">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                  📖
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Reading Time
                  </p>

                  <p className="text-xs text-gray-500">
                    Estimated at 200 words/minute
                  </p>
                </div>
              </div>

              <span className="text-lg font-bold text-blue-400">
                {readingTime} min
              </span>

            </div>

            {/* ================= LIVE PREVIEW ================= */}

            <div className="mt-8">

              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <h3 className="text-sm font-semibold text-gray-300">
                  Live Preview
                </h3>
              </div>

              <div className="min-h-[140px] rounded-2xl border border-white/10 bg-slate-950/60 p-5">

                {text ? (
                  <p className="whitespace-pre-wrap break-words text-sm leading-7 text-gray-300">
                    {text}
                  </p>
                ) : (
                  <p className="text-sm italic text-gray-600">
                    Your text preview will appear here...
                  </p>
                )}

              </div>
            </div>

          </div>
        </div>

        {/* ================= FOOTER ================= */}

        <div className="mt-8 text-center">

          <p className="text-xs text-gray-600">
            Built with React & Tailwind CSS
          </p>

          <p className="mt-1 text-xs text-gray-700">
            Smart Text Analyzer • Fast • Simple • Powerful
          </p>

        </div>

      </div>
    </div>
  );
};

export default Textarea;