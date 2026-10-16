import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";
import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
export const BrowserTerminal = () => {
  const socket = useRef(null);
  const terminalRef = useRef(null);

  const {projectId:projectIdFromUrl} = useParams();

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
    socket.current = io(`${import.meta.env.VITE_BACKEND_URL}/terminal`, {
      query: {
        projectId: projectIdFromUrl,
      },
    });
    socket.current.on("shell-output", (data) => {
      term.write(data);
    });

    term.onData((data) => {
      console.log(data);
      socket.current.emit("shell-input", data);
    });

    return () => {
      term.dispose();
      socket.current.disconnect();
    };
  }, []);

  return (
    <div
      ref={terminalRef}
      style={{
        height: "25vh",
        overflow: "auto",
      }}
      className="terminal"
      id="terminal-container"
    ></div>
  );
};
