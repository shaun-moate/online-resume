'use client'

import { useRef, useEffect, useCallback } from "react"

import { CommandHistory } from "@/components/command-history";
import { useHistory } from "@/hooks/history";
import { neofetch } from "@/utils/bin/index";
import { CommandInput } from "@/components/command-input";

export default function IndexPage() {
  const containerRef = useRef<HTMLInputElement | null>(null);
  const inputElement = useRef<HTMLInputElement | null>(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = useCallback(() => setHistory(neofetch()), []);

  useEffect(() => {
    init();
  }, [init]);

  const onClickAnywhere = () => {
    inputElement.current.focus();
  };

  return (
    <div
      className="font-mono overflow-hidden p-8 min-h-screen border-2 rounded border-dark-yellow"
      onClick={onClickAnywhere}
    >
      <div ref={containerRef} className="overflow-y-auto h-full">
        <CommandHistory history={history} />
        <CommandInput
            inputRef={inputElement}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
      </div>
    </div>
  )
}
