"use client";
import { useState } from "react";

export default function DoughSelector({
  onClick,
}: {
  onClick: (name: string) => void;
}) {
  return (
    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md grid grid-cols-2">
      <div className="p-2">
        <button
          type="submit"
          onClick={() => onClick("pizza")}
          className="flex w-full justify-center rounded-md border border-transparent bg-customYellow py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-customYellow focus:outline-none focus:ring-2 focus:ring-customYellow focus:ring-offset-2"
        >
          Pizza
        </button>
      </div>
      <div className="p-2">
        <button
          type="submit"
          onClick={() => onClick("biga")}
          className="flex w-full justify-center rounded-md border border-transparent bg-sky-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2"
        >
          Biga
        </button>
      </div>
    </div>
  );
}
