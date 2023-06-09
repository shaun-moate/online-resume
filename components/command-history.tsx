import { Ps1 } from "./ps1"

import { History } from "@/types/history"

export const CommandHistory: React.FC<{ history: Array<History> }> = ({
  history,
}) => {
  return (
    <>
      {history.map((entry: History, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <Ps1/>
          <div className="grow">
            {entry.command}
          </div>
          </div>
          <p className="mb-2 whitespace-pre-wrap"
             style={{ lineHeight: 'normal' }}
             dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </>
  );
};
