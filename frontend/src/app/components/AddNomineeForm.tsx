import { FormEvent, FormEventHandler, useState } from "react";
import GenericModal from "./internal/util/GenericModal";

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

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    togglePopover({ targetId: "add-nominee-popover" });
    console.log(candidateFirstname, candidateLastname);
  };

  return (
    <form
      action=""
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
          onClick={() => handleSubmit}
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-white"
          type="submit"
        >
          Add Nominee
        </button>
      </div>
    </form>
  );
}
