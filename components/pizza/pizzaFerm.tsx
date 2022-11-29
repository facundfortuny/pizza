export default function PizzaFerm() {
  return (
    <div className="bg-white mt-2 py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <h2 className="mt-1 text-center text-3xl font-bold tracking-tight text-gray-900">
        Fermentation
      </h2>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      W
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Hidr.
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Home
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Fridge
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      90-130 / 00
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      50-55%
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      2-4h
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      24h
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      130-180 / 0
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      50-55%
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      2-4h
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      24h
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      180-230 / 1
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      55-70%
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      8-12h
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      36h
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      230-280 / 1
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      55-70%
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      8-12h
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      36h
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      280-340 / 2
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      75-90%
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      24h
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      48-72h
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      340-400 / 2
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      100%
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      36h
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      120h
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
