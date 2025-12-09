import React from "react";
import {
  CastVote,
  CountVotes,
  EndElection,
  NominateCandidate,
  RemoveVote,
  StarknetSvg,
  StartElection,
} from "./icons";
import { clsx } from "clsx";
import { SideBarOptions } from "../common/data";

export const Sidebar: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <div
      className={clsx(
        "flex h-full flex-col gap-40 bg-[#0009ab] px-10 py-10 text-l text-white",
      )}
    >
      <div>
        <StarknetSvg />
      </div>

      <div className="mt-10 flex flex-col justify-center gap-6">
        {SideBarOptions.map((opt, i) => {
          const Icon = opt.icon;
          return (
            <div
              role="button"
              key={opt.id}
              className="flex items-center justify-normal gap-2 rounded-md px-4 py-2 hover:bg-blue-400 hover:text-[#0009ab]"
            >
              {Icon}
              <span>{opt.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
