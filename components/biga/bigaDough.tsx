"use client";
import { useEffect, useState } from "react";

export default function BigaDough() {
  const [flour, setFlour] = useState<number>(200);
  const [waterPerc, setWaterPer] = useState<number>(44);
  const [yeastPerc, setYeastPerc] = useState<number>(1);
  const [totalWater, setTotalWater] = useState<number>(0);

  useEffect(() => {
    const waterNeeded = flour * (waterPerc / 100);
    setTotalWater(waterNeeded);
  }, [flour, yeastPerc, waterPerc]);

  const getYeastValue = () => {
    return (flour * (yeastPerc / 100)).toFixed(1);
  };

  return (
    <div className="bg-white mt-2 py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
        Biga Dough
      </h2>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-2">
          <div className="pt-2 pb-2">
            <label
              htmlFor="flour"
              className="block text-sm font-medium text-gray-700"
            >
              Flour(g):
            </label>
            <div className="mt-1">
              <input
                id="flour"
                name="flour"
                type="number"
                autoComplete="flour"
                required
                placeholder="0"
                value={flour || ""}
                onChange={(e) => setFlour(parseInt(e.target.value))}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="pt-2 pb-2">
            <label
              htmlFor="waterPerc"
              className="block text-sm font-medium text-gray-700"
            >
              Amount of water (%):
            </label>
            <div className="mt-1">
              <input
                id="waterPerc"
                name="waterPerc"
                type="number"
                autoComplete="waterPerc"
                required
                placeholder="65"
                value={waterPerc}
                onChange={(e) => setWaterPer(parseInt(e.target.value))}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="pt-2 pb-2">
            <label
              htmlFor="starter"
              className="block text-sm font-medium text-gray-700"
            >
              Yeast(%):
            </label>
            <div className="mt-1">
              <input
                id="starter"
                name="starter"
                type="number"
                autoComplete="starter"
                required
                placeholder="0"
                value={yeastPerc}
                onChange={(e) => setYeastPerc(parseInt(e.target.value))}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-lg shadow">
        <div className="flex w-full items-center space-x-6 p-6 rounded-t-lg bg-sky-700">
          <div className="flex items-center space-x-3">
            <span className="text-white">Ingredients</span>
          </div>
        </div>
        <div className="flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center ">
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-2 text-sm font-medium text-gray-700 hover:text-gray-500">
                <span className="ml-3 text-gray-400">Flour:</span>
                <span className="ml-3">{flour}g</span>
              </div>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <div className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                <span className="ml-3 text-gray-400">Water:</span>
                <span className="ml-3">{totalWater.toFixed(2)}g</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col divide-y divide-gray-200 rounded-b-lg border-t-2 border-gray-200 bg-white text-center ">
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                <span className="ml-3 text-gray-400">Yeast:</span>
                <span className="ml-3">{getYeastValue()}g</span>
              </div>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <div className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                <span className="ml-3 text-gray-400">Total:</span>
                <span className="ml-3">
                  {flour + totalWater + getYeastValue()}g
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
