import { Link } from "react-router-dom";
import {
  useGetGuestsQuery,
  useDeleteGuestMutation,
} from "../api/endpoints/ResidentEndpoint";

function ViewGuest() {
  // isLoading & isError is added so that we can show loading message and error message if we want to
  const { data = [], isLoading, isError, refetch } = useGetGuestsQuery();
  const [deleteGuest] = useDeleteGuestMutation();

  console.log(data);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this guest?"
    );
    if (!confirm) return;

    try {
      await deleteGuest(id).unwrap();
      refetch();
    } catch (err) {
      console.log("Delete failed:", err);
    }
  };

  return (
    <div className="h-full p-4">
      <div className="overflow-x-auto shadow-md rounded-2xl border border-violet-200">
        <table className="table-auto w-full text-left text-sm text-violet-900">
          <thead className="bg-violet-100 text-violet-800 font-semibold">
            <tr className="text-center">
              <th className="px-4 py-3">ID</th>
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
            {data.map((resident, index) => (
              <tr
                key={index}
                className="text-center hover:bg-violet-100 transition-colors"
              >
                <td className="px-4 py-3">{resident.residentId}</td>
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
                      to={`/contact/${resident.residentId}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-xl text-xs cursor-pointer"
                    >
                      View
                    </Link>
                    <button className="bg-violet-500 hover:bg-violet-600 text-white px-3 py-1 rounded-xl text-xs cursor-pointer">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(resident.residentId)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-xl text-xs cursor-pointer"
                    >
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

export default ViewGuest;
