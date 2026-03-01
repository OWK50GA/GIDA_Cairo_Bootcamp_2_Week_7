import { FormEvent, FormEventHandler, useMemo, useState } from "react";
import GenericModal from "./internal/util/GenericModal";
import { useContract, useSendTransaction } from "@starknet-react/core";
import { VOTING_CONTRACT_ABI, VOTING_CONTRACT_ADDRESS } from "public/abi/votingCotntractAbi";

export default function AddNominee() {
  const togglePopover = ({ targetId }: { targetId: string }) => {
    const popover = document.getElementById(targetId);
    // @ts-ignore
    popover.togglePopover();
    if (popover) {
      popover.addEventListener("toggle", () => {
        if (popover.matches(":popover-open")) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      });
    }
  };

  const [candidateFirstname, setCandidateFirstName] = useState("");
  const [candidateLastname, setCandidateLastName] = useState("");

  const { contract } = useContract({
    abi: VOTING_CONTRACT_ABI,
    address: VOTING_CONTRACT_ADDRESS
  })

  const transaction = useMemo(() => {
    if (!contract) return;
    if (candidateFirstname.length === 0 || candidateLastname.length === 0) return;

    return [contract.populate("nominate", [candidateFirstname, candidateLastname])];
  }, [candidateFirstname, candidateLastname]);

  const { sendAsync, isError, isPending, isSuccess } = useSendTransaction(transaction ? {
    calls: transaction
  } : ({} as any))

  const handleSubmit = async () => {



    await sendAsync();
    console.log(candidateFirstname, candidateLastname);
  };

  return (
    <div
      className="rounded-lg border border-gray-200 px-16 py-8"
      // onSubmit={}
    >
      <h2 className="text-xl">Add Nominee Form</h2>

      <div className="mt-5 flex flex-col justify-center gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="">
            Candidate FirstName
          </label>
          <span className="rounded-md border border-gray-500 px-4 py-2">
            <input
              type="text"
              className="outline-none"
              value={candidateFirstname}
              onChange={(e) => {
                setCandidateFirstName(e.target.value);
              }}
            />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="">
            Candidate LastName
          </label>
          <span className="rounded-md border border-gray-500 px-4 py-2">
            <input
              type="text"
              className="outline-none"
              value={candidateLastname}
              onChange={(e) => {
                setCandidateLastName(e.target.value);
              }}
            />
          </span>
        </div>
      </div>

      <div className="mx-auto mt-5 w-[100%]">
        <button
          onClick={handleSubmit}
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-white"
          type="submit"
        >
          Add Nominee
        </button>
      </div>
    </div>
  );
}
