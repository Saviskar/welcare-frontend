import React from "react";

function Registerguests() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Register Guests
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Row 1 */}
        <div>
          <label
            htmlFor="surname"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Surname
          </label>
          <input
            type="text"
            id="surname"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
            placeholder="Enter surname"
          />
        </div>

        <div>
          <label
            htmlFor="givenNames"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Given Names
          </label>
          <input
            type="text"
            id="givenNames"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter given names"
          />
        </div>

        {/* Row 2 */}
        <div>
          <label
            htmlFor="preferredNames"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Preferred Names
          </label>
          <input
            type="text"
            id="preferredNames"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter preferred names"
          />
        </div>

        <div>
          <label
            htmlFor="age"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter age"
          />
        </div>

        {/* Row 3 */}
        <div>
          <label
            htmlFor="maritalStatus"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Marital Status
          </label>
          <input
            type="text"
            id="maritalStatus"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter marital status"
          />
        </div>

        <div>
          <label
            htmlFor="currentLocation"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Current Location
          </label>
          <input
            type="text"
            id="currentLocation"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter location"
          />
        </div>

        {/* Row 4 */}
        <div>
          <label
            htmlFor="postcode"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Postcode
          </label>
          <input
            type="text"
            id="postcode"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter postcode"
          />
        </div>

        <div>
          <label
            htmlFor="telephone"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Telephone
          </label>
          <input
            type="tel"
            id="telephone"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter telephone number"
          />
        </div>

        {/* Row 5 */}
        <div>
          <label
            htmlFor="religion"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Religion
          </label>
          <input
            type="text"
            id="religion"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter religion"
          />
        </div>

        <div>
          <label
            htmlFor="countryOfBirth"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Country of Birth
          </label>
          <input
            type="text"
            id="countryOfBirth"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter country"
          />
        </div>

        {/* Row 6 */}
        <div>
          <label
            htmlFor="preferredLanguage"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Preferred Language
          </label>
          <input
            type="text"
            id="preferredLanguage"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter language"
          />
        </div>

        <div>
          <label
            htmlFor="electoralRollStatus"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Electoral Roll Status
          </label>
          <input
            type="text"
            id="electoralRollStatus"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter status"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-right mt-2">
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md font-medium transition"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Registerguests;
