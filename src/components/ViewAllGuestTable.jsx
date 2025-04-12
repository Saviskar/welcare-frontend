import React from "react";

function ViewAllGuest() {
  return (
    <div className="min-h-screen">
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
            <tr className="hover:bg-violet-100 transition-colors">
              <td className="px-4 py-3">Smith</td>
              <td className="px-4 py-3">John</td>
              <td className="px-4 py-3">Johnny</td>
              <td className="px-4 py-3">72</td>
              <td className="px-4 py-3">Married</td>
              <td className="px-4 py-3">(555) 123-4567</td>
              <td className="px-4 py-3">2000</td>
              <td className="px-4 py-3">Christianity</td>
              <td className="px-4 py-3">Australia</td>
              <td className="px-4 py-3">English</td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-xl text-xs cursor-pointer">
                    View
                  </button>
                  <button className="bg-violet-500 hover:bg-violet-600 text-white px-3 py-1 rounded-xl text-xs cursor-pointer">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-xl text-xs cursor-pointer">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAllGuest;
