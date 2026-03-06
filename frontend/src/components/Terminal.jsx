import React, { useRef, useEffect } from "react";
import { Terminal as TerminalIcon, ChevronDown } from "lucide-react";

const Terminal = ({
  terminalOpen,
  setTerminalOpen,
  terminalHistory,
  terminalInput,
  setTerminalInput,
  handleTerminalSubmit,
}) => {
  const terminalEndRef = useRef(null);

  // Scroll automatisch ans Ende bei neuen Zeilen
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory, terminalOpen]);

  return (
    <>
      {/* Terminal Panel */}
      <div
        className={`fixed right-6 z-50 transition-all duration-300 ease-in-out ${
          terminalOpen ? "bottom-6" : "-bottom-96"
        } w-full max-w-sm hidden md:block`}
      >
        <div className="bg-black border border-emerald-900 shadow-[0_0_20px_rgba(16,185,129,0.2)] rounded-t-lg overflow-hidden flex flex-col h-80">
          
          {/* Header */}
          <div
            className="bg-emerald-950/50 border-b border-emerald-900 px-4 py-2 flex justify-between items-center cursor-pointer"
            onClick={() => setTerminalOpen(!terminalOpen)}
          >
            <span className="text-xs font-mono text-emerald-500 flex items-center gap-2">
              <TerminalIcon size={14} /> bash --portfolio
            </span>
            <button
              aria-label="Minimize terminal"
              onClick={(e) => {
                e.stopPropagation();
                setTerminalOpen(false);
              }}
              className="text-emerald-500 hover:text-white"
            >
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Terminal Body */}
          <div className="flex-grow p-4 font-mono text-xs overflow-y-auto bg-black text-gray-300">
            {terminalHistory.map((line, i) => (
              <div
                key={i}
                className="mb-1 leading-relaxed break-words whitespace-pre-wrap"
              >
                {line}
              </div>
            ))}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-emerald-500">~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                onKeyDown={handleTerminalSubmit}
                className="flex-grow bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                autoFocus={terminalOpen}
                spellCheck="false"
                aria-label="Terminal Input"
              />
            </div>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>

      {/* Terminal Öffnen Button */}
      {!terminalOpen && (
        <button
          aria-label="Open terminal"
          onClick={() => setTerminalOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-emerald-950/80 backdrop-blur border border-emerald-900 text-emerald-500 p-3 rounded hover:bg-emerald-900 hover:text-white transition-all hidden md:block shadow-[0_0_15px_rgba(16,185,129,0.2)]"
        >
          <TerminalIcon size={20} />
        </button>
      )}
    </>
  );
};

export default Terminal;