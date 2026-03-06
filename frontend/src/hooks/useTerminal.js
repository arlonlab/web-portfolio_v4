import { useState, useRef, useEffect } from "react";

export const useTerminal = (t) => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState([
    "portfolio@server:~$ System initialized.",
    'Type "help" to see commands.'
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if(terminalEndRef.current) terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory, terminalOpen]);

  const handleTerminalSubmit = e => {
    if(e.key !== "Enter") return;
    const cmd = terminalInput.trim().toLowerCase();
    let response = "";

    const commands = {
      help: t.terminal.help,
      whoami: t.terminal.whoami,
      ls: "drwxr-xr-x  home\ndrwxr-xr-x  about\ndrwxr-xr-x  work\ndrwxr-xr-x  contact\n-rw-r--r--  application.yml",
      sudo: t.terminal.sudo
    };

    if(cmd === "clear"){
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    }

    response = commands[cmd] ?? (cmd === "" ? "" : `bash: ${cmd}: ${t.terminal.notFound}`);

    setTerminalHistory(prev => [...prev, `portfolio@server:~$ ${cmd}`, ...(response ? response.split("\n") : [])]);
    setTerminalInput("");
  };

  return { terminalOpen, setTerminalOpen, terminalHistory, terminalInput, setTerminalInput, handleTerminalSubmit, terminalEndRef };
};