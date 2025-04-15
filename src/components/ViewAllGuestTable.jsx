import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewAllGuest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/residents")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-full p-4">
      <div className="overflow-x-auto shadow-md rounded-2xl border border-violet-200">
        <table className="table-auto w-full text-left text-sm text-violet-900">
          <thead className="bg-violet-100 text-violet-800 font-semibold">
            <tr className="text-center">
              <th className="px-4 py-3">Surname</th>
              <th className="px-4 py-3">Given Name</th>
              <th className="px-4 py-3">Preferred Names</th>
              <th className="px-4 py-3">Age</th>
              <th className="px-4 py-3">Marital Status</th>
              <th className="px-4 py-3">Telephone</th>
              <th className="px-4 py-3">Post Code</th>
              <th className="px-4 py-3">Religion</th>
              <th className="px-4 py-3">Country of Birth</th>
              <th className="px-4 py-3">Preferred Language</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((resident) => (
              <tr
                key={resident.residentId}
                className="text-center hover:bg-violet-100 transition-colors"
              >
                <td className="px-4 py-3">{resident.surname}</td>
                <td className="px-4 py-3">{resident.givenName}</td>
                <td className="px-4 py-3">{resident.preferredNames}</td>
                <td className="px-4 py-3">{resident.age}</td>
                <td className="px-4 py-3">{resident.maritalStatus}</td>
                <td className="px-4 py-3">{resident.telephone}</td>
                <td className="px-4 py-3">{resident.postCode}</td>
                <td className="px-4 py-3">{resident.religion}</td>
                <td className="px-4 py-3">{resident.countryOfBirth}</td>
                <td className="px-4 py-3">{resident.preferredLanguage}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    <Link
                      to={`/contactDetails/${resident.residentId}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-xl text-xs cursor-pointer"
                    >
                      View
                    </Link>
                    <button className="bg-violet-500 hover:bg-violet-600 text-white px-3 py-1 rounded-xl text-xs cursor-pointer">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-xl text-xs cursor-pointer">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td
                  colSpan="11"
                  className="text-center text-gray-500 py-6 font-medium"
                >
                  No resident data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAllGuest;
