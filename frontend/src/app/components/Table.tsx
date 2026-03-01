"use client";

import { useSearchParams } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import GenericModal from "./internal/util/GenericModal";
import AddNominee from "./AddNomineeForm";
import { Candidates } from "../common/data";
import TableHeader from "./TableHeader";
import TableControls from "./TableControls";
import { useAccount, useContract, useReadContract } from "@starknet-react/core";
import { VOTING_CONTRACT_ABI, VOTING_CONTRACT_ADDRESS } from "public/abi/votingCotntractAbi";
import { felt252ToString } from "./internal/helpers";

export default function Table() {
  const searchParams = useSearchParams();

  // TODO - Implement Search Functionality
  const page = searchParams.get("page") || 1;

  const from = (Number(page) - 1) * 5; // 5 is the page size
  const to = Number(page) * 5;

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

  const { data: onchainCandidates, error } = useReadContract({
    abi: VOTING_CONTRACT_ABI,
    address: VOTING_CONTRACT_ADDRESS,
    functionName: "get_all_candidates",
    args: [],
    watch: true
  });

  console.log(onchainCandidates);

  const normalizedCandidates = onchainCandidates?.map((c, i) => {
    return {
      id: felt252ToString(c.id),
      surname: felt252ToString(c.lname),
      firstname: felt252ToString(c.fname),
      noOfVotes: c.no_of_votes.toString(),
      qualified: c.qualified,
      index: c.index.toString(),
    }
  })

  console.log("Normalized candidates: ", normalizedCandidates)

  return (
    <div className="mx-auto w-full px-12 py-12">
      <TableHeader candidates={normalizedCandidates || []} />

      <div className="mt-10 overflow-x-auto rounded-lg">
        <table className="min-w-full table-auto rounded-lg">
          <thead className="bg-gray-300 font-medium text-gray-700">
            <tr className="font-bold">
              <td className="px-4 py-4">S/N</td>
              <td className="whitespace-nowrap px-4 py-4 capitalize tracking-wider">
                Candidate Surname
              </td>
              <td className="whitespace-nowrap px-4 py-4 capitalize tracking-wider">
                Candidate Firstname
              </td>
              <td className="whitespace-nowrap px-4 py-4 capitalize tracking-wider">
                Number of Votes
              </td>
              <td className="whitespace-nowrap px-4 py-4 capitalize tracking-wider">
                Qualification Status
              </td>
              <td className="whitespace-nowrap px-4 py-4 capitalize tracking-wider">
                Vote
              </td>
              {/* <th className="py-4 px-4 tracking-wider whitespace-nowrap capitalize">Disqualify</th> */}
            </tr>
          </thead>
          <tbody className="bg-white">
            {normalizedCandidates?.slice(from, to).map((candidate, index) => {
              return (
                <tr key={index}>
                  <td className="px-4 py-4">{candidate.index}</td>
                  <td className="whitespace-nowrap px-4 py-4 capitalize tracking-wider">
                    {candidate.surname}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 capitalize tracking-wider">
                    {candidate.firstname}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 capitalize tracking-wider">
                    {candidate.noOfVotes}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 capitalize tracking-wider">
                    {candidate.qualified ? (
                      <div className="w-fit rounded-full bg-green-500 px-1 py-1 text-white">
                        <FaCheck />
                      </div>
                    ) : (
                      <div className="w-fit rounded-full bg-red-500 px-1 py-1 text-white">
                        <FaXmark />
                      </div>
                    )}
                  </td>
                  <td className="flex gap-4 whitespace-nowrap px-4 py-4 capitalize tracking-wider">
                    <button className="rounded-md bg-blue-400 px-4 py-2 font-extrabold text-white">
                      &#8593;
                    </button>
                    <button
                      className="rounded-md bg-blue-400 px-4 py-2 font-extrabold text-white disabled:bg-blue-300"
                      disabled
                    >
                      &#8595;
                    </button>
                  </td>
                  {/* <td className="py-4 px-4 capitalize tracking-wider whitespace-nowrap">
                                            <button className="bg-red-500 text-white rounded-md px-4 py-2 font-semibold">
                                                Disqualify
                                            </button>
                                        </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* TABLE CONTROLS */}
      <TableControls togglePopover={togglePopover} candidates={normalizedCandidates || []} />
      <GenericModal popoverId="transaction-modal" style="">
        <AddNominee />
      </GenericModal>
    </div>
  );
}
