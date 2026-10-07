import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";
import { useEffect, useRef } from "react";
export const BrowserTerminal = () => {
  const socket = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: "ubuntu mono, monospace",
      theme: {
        background: "#1e1e1e",
        foreground: "#ffffff",
      },
      convertEol: true, // convert CRLF to LF
    });
    term.open(terminalRef.current);
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    return () => {
      term.dispose();
      socket.current.disconnect();
    };
  }, []);

  return (
    <div
    ref = {terminalRef}
      style={{
        height: "25vh",
        overflow: "auto",
      }}
      className="terminal"
      id="terminal-container"
    ></div>
  );
};
