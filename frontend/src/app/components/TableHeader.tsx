import { useAccount } from "@starknet-react/core";
import AddressBar from "./lib/AddressBar";
import ConnectButton from "./lib/Connect";

export default function TableHeader({
  candidates,
}: {
  candidates: Record<string, any>[];
}) {
  const { address } = useAccount();

  return (
    <div>
      <div className="flex w-full justify-between">
        <p className="text-xl font-semibold text-black">Vote Dashboard</p>
        {address ? <AddressBar /> : <ConnectButton />}
      </div>

      <div className="mt-10 flex w-full items-center justify-between">
        <p>
          <span className="text-l font-bold">Candidates: </span>{" "}
          {candidates.length} Total
        </p>
        <div className="">
          <input
            type="text"
            placeholder="Search by name"
            className="rounded-full bg-gray-200 px-10 py-5 text-black outline-none"
          />
        </div>
      </div>
    </div>
  );
}
