"use client";
import { useEffect, useState } from "react";

export default function BigaTemp() {
  const [homeTemp, setHomeTemp] = useState<number>(0);
  const [flourTemp, setFlourTemp] = useState<number>(0);
  const [waterTemp, setWaterTemp] = useState<number>(0);
  const finalTemp = 55;

  useEffect(() => {
    setWaterTemp(finalTemp - homeTemp - flourTemp);
  }, [homeTemp, flourTemp]);

  return (
    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <h2 className="mt-1 text-center text-3xl font-bold tracking-tight text-gray-900">
          Biga Temp
        </h2>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-2">
            <div className="pt-2 pb-2">
              <label
                htmlFor="home"
                className="block text-sm font-medium text-gray-700"
              >
                Home Temp:
              </label>
              <div className="mt-1">
                <input
                  id="home"
                  name="home"
                  type="number"
                  autoComplete="home"
                  required
                  placeholder="0"
                  value={homeTemp}
                  onChange={(e) => setHomeTemp(parseInt(e.target.value))}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="pt-2 pb-2">
              <label
                htmlFor="flour"
                className="block text-sm font-medium text-gray-700"
              >
                Flour Temp:
              </label>
              <div className="mt-1">
                <input
                  id="flour"
                  name="flour"
                  type="number"
                  autoComplete="flour"
                  required
                  placeholder="0"
                  value={flourTemp}
                  onChange={(e) => setFlourTemp(parseInt(e.target.value))}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center space-x-6 p-6 rounded-lg bg-sky-700">
            <div className="flex items-center space-x-3">
              <span className="ml-1 text-white">Temp Water: </span>
              <span className="ml-1 text-white">{waterTemp} °C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
