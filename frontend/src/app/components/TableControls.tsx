import { RefreshIcon } from "./icons";
import { Pagination } from "./Pagination";

export default function TableControls({
  togglePopover,
  candidates,
}: {
  togglePopover: ({ targetId }: { targetId: string }) => void;
  candidates: Record<any, any>[];
}) {
  return (
    <div className="mt-5 flex items-center justify-between">
      <div className="flex items-center justify-evenly gap-3">
        <button className="flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-white">
          Refresh Candidates
          <RefreshIcon />
        </button>
        <button
          className="text-black"
          onClick={() => {
            console.log("clicked");
            togglePopover({ targetId: "transaction-modal" });
          }}
        >
          Nominate a Candidate
        </button>
      </div>

      <div className="">
        <Pagination count={candidates.length} />
      </div>
    </div>
  );
}
