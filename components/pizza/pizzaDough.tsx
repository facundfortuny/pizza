"use client";
import { useEffect, useState } from "react";

export default function PizzaDough() {
  const [flour, setFlour] = useState<number>(330);
  const [starter, setStarter] = useState<number>(75);
  const [waterPerc, setWaterPer] = useState<number>(66);
  const [salt, setSalt] = useState<number>(2.5);
  const [total, setTotal] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const sourdough = starter / 2;
    const totalFlour = flour + sourdough;
    const waterNeeded = totalFlour * (waterPerc / 100);
    const total = waterNeeded - sourdough;
    const totalAmount = totalFlour + waterNeeded + sourdough;

    setTotal(total);
    setTotalAmount(totalAmount);
  }, [flour, starter, waterPerc, salt]);

  const getWeightBall = (numBalls: number) => {
    return (totalAmount / numBalls).toFixed(1);
  };

  const starterPerc = () => {
    return ((starter / flour) * 100).toFixed(1);
  };

  return (
    <div className="bg-white mt-2 py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
        Pizza Dough
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
                value={flour}
                onChange={(e) => setFlour(parseInt(e.target.value))}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="pt-2 pb-2">
            <label
              htmlFor="starter"
              className="block text-sm font-medium text-gray-700"
            >
              Starter(g):
            </label>
            <div className="mt-1">
              <input
                id="starter"
                name="starter"
                type="number"
                autoComplete="starter"
                required
                value={starter}
                onChange={(e) => setStarter(parseInt(e.target.value))}
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
                value={waterPerc}
                onChange={(e) => setWaterPer(parseInt(e.target.value))}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="pt-2 pb-2">
            <label
              htmlFor="salt"
              className="block text-sm font-medium text-gray-700"
            >
              Salt (%):
            </label>
            <div className="mt-1">
              <input
                id="salt"
                name="salt"
                type="number"
                autoComplete="salt"
                required
                value={salt}
                onChange={(e) => setSalt(parseInt(e.target.value))}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-lg shadow">
          <div className="flex w-full items-center space-x-6 p-6 rounded-t-lg bg-customYellow">
            <div className="flex items-center space-x-3">
              <span className="">Ingredients</span>
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
                  <span className="ml-3">{total.toFixed(2)}g</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col divide-y divide-gray-200 rounded-b-lg border-t-2 border-gray-200 bg-white text-center ">
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                  <span className="ml-3 text-gray-400">Salt:</span>
                  <span className="ml-3">{flour * (salt / 100)}g</span>
                </div>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <div className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                  <span className="ml-3 text-gray-400">Starter:</span>
                  <span className="ml-3">{starter}g</span>
                  <span className="ml-3">{starterPerc()}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {totalAmount > 0 && (
          <div className="flex flex-col rounded-lg shadow">
            <div className="flex w-full items-center space-x-6 p-6 rounded-t-lg bg-customYellow">
              <div className="flex items-center space-x-3">
                <span>Total dough: </span>
                <span className="ml-3">{totalAmount}g</span>
              </div>
            </div>
            <div className="flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center ">
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-2 text-sm font-medium text-gray-700 hover:text-gray-500">
                    <span className="ml-3 text-gray-400">2 Balls:</span>
                    <span className="ml-3">{getWeightBall(2)}g</span>
                  </div>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <div className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                    <span className="ml-3 text-gray-400">3 Balls:</span>
                    <span className="ml-3">{getWeightBall(3)}g</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col divide-y divide-gray-200 rounded-b-lg border-t-2 border-gray-200 bg-white text-center ">
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                    <span className="ml-3 text-gray-400">4 Balls:</span>
                    <span className="ml-3">{getWeightBall(4)}g</span>
                  </div>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <div className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                    <span className="ml-3 text-gray-400">5 Balls:</span>
                    <span className="ml-3">{getWeightBall(5)}g</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
