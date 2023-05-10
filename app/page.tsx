'use client'

import { useRef, useEffect, useCallback } from "react"

import { CommandHistory } from "@/components/command-history";
import { useHistory } from "@/hooks/history";
import { banner } from "@/lib/bin/index";
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const init = useCallback(() => setHistory(banner()), []);

  useEffect(() => {
    init();
  }, [init]);

  const onClickAnywhere = () => {
    inputElement.current!.focus();
  };

  return (
    <div
      className="min-h-screen overflow-hidden rounded border-2 border-dark-yellow p-8 font-mono"
      onClick={onClickAnywhere}
    >
      <div ref={containerRef} className="h-full overflow-y-auto">
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
