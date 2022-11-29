"use client";
import { useEffect, useState } from "react";

export default function PizzaTemp() {
  const [finalTemp, setFinalTemp] = useState<number>(25);
  const [homeTemp, setHomeTemp] = useState<number>(20);
  const [flourTemp, setFlourTemp] = useState<number>(20);
  const [starterTemp, setStarterTemp] = useState<number>(20);
  const [mixerTemp, setMixerTemp] = useState<number>(9);
  const [waterTemp, setWaterTemp] = useState<number>(0);

  useEffect(() => {
    setWaterTemp(
      finalTemp * 4 - homeTemp - flourTemp - starterTemp - mixerTemp
    );
  }, [finalTemp, homeTemp, flourTemp, starterTemp, mixerTemp]);

  return (
    <div className="bg-white mt-2 py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <h2 className="mt-1 text-center text-3xl font-bold tracking-tight text-gray-900">
        Temperature
      </h2>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-2">
          <div className="pt-2 pb-2">
            <label
              htmlFor="final"
              className="block text-sm font-medium text-gray-700"
            >
              Final Temp:
            </label>
            <div className="mt-1">
              <input
                id="final"
                name="final"
                type="number"
                autoComplete="final"
                required
                value={finalTemp}
                onChange={(e) => setFinalTemp(parseInt(e.target.value))}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

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

          <div className="pt-2 pb-2">
            <label
              htmlFor="starter"
              className="block text-sm font-medium text-gray-700"
            >
              Starter Temp:
            </label>
            <div className="mt-1">
              <input
                id="starter"
                name="starter"
                type="number"
                autoComplete="starter"
                required
                value={starterTemp}
                onChange={(e) => setStarterTemp(parseInt(e.target.value))}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="pt-2 pb-2 col-span-2">
            <label
              htmlFor="mixer"
              className="block text-sm font-medium text-gray-700"
            >
              Mixer Temp:
            </label>
            <div className="mt-1">
              <input
                id="mixer"
                name="mixer"
                type="number"
                autoComplete="mixer"
                required
                value={mixerTemp}
                onChange={(e) => setMixerTemp(parseInt(e.target.value))}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <span className="text-xs text-gray-500">
                Tipo Amassadora: Esprial 9, Manual: 1-3, Robot de casa 12
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center space-x-6 p-6 rounded-lg bg-customYellow">
          <div className="flex items-center space-x-3">
            <span className="ml-1">Temp Water: </span>
            <span className="ml-1">{waterTemp} °C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
