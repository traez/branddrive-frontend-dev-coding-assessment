"use client";
import { useContext } from "react";
import { StateContext } from "@/lib/StateProvider";

const Sandbox = () => {
  const { toggleModalOne } = useContext(StateContext)!;

  return (
    <div className="p-4">
      <button
        onClick={toggleModalOne}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Toggle Modal
      </button>
    </div>
  );
};

export default Sandbox;
