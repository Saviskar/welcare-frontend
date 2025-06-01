import { useGetContactsQuery } from "../api/endpoints/ContactDetailsEndpoint";
import { useGetGuestQuery } from "../api/endpoints/ResidentEndpoint";
import { useGetGuardianQuery } from "../api/endpoints/GuardianEndpoint";
import { useParams } from "react-router-dom";

function ContactDetailsTables() {
  const { id } = useParams();

  const {
    data: contactData,
    isLoading: contactLoading,
    isError: contactError,
  } = useGetContactsQuery(id);
  const {
    data: residentData,
    isLoading: residentLoading,
    isError: residentError,
  } = useGetGuestQuery(id);
  const {
    data: guardianData,
    isLoading: guardianLoading,
    isError: guardianError,
  } = useGetGuardianQuery(id);

  console.log(guardianData);

  if (contactLoading || residentLoading) return <p>Loading...</p>;
  if (contactError || residentError)
    return <p className="text-red-600">Error loading data.</p>;

  // console.log(data);

  return (
    <div className="h-full p-6 space-y-10">
      {/* Resident Details */}
      <div>
        <h3 className="text-2xl font-bold text-violet-800 mb-4">
          Resident Details
        </h3>
        <div className="overflow-x-auto border border-violet-200 rounded-2xl shadow-md">
          <table className="table-auto w-full text-sm text-violet-900">
            <thead className="bg-violet-100 text-violet-800 font-semibold text-center">
              <tr>
                <th className="px-4 py-3">Surname</th>
                <th className="px-4 py-3">Given Name</th>
                <th className="px-4 py-3">Preferred Names</th>
                <th className="px-4 py-3">Age</th>
                <th className="px-4 py-3">Marital Status</th>
                <th className="px-4 py-3">Telephone</th>
                <th className="px-4 py-3">Postcode</th>
                <th className="px-4 py-3">Religion</th>
                <th className="px-4 py-3">Country of Birth</th>
                <th className="px-4 py-3">Preferred Language</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center hover:bg-violet-50 transition-colors">
                <td className="px-4 py-3">{residentData.surname}</td>
                <td className="px-4 py-3">{residentData.givenName}</td>
                <td className="px-4 py-3">{residentData.preferredNames}</td>
                <td className="px-4 py-3">{residentData.age}</td>
                <td className="px-4 py-3">{residentData.maritalStatus}</td>
                <td className="px-4 py-3">{residentData.telephone}</td>
                <td className="px-4 py-3">{residentData.postCode}</td>
                <td className="px-4 py-3">{residentData.religion}</td>
                <td className="px-4 py-3">{residentData.countryOfBirth}</td>
                <td className="px-4 py-3">{residentData.preferredLanguage}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Family Contact Details */}
      <div>
        <h2 className="text-2xl font-bold text-violet-800 mb-4">
          Family Contact Details
        </h2>

        {/* First Contact */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-violet-700 mb-2">
            First Contact
          </h3>
          <div className="overflow-x-auto border border-violet-200 rounded-2xl shadow-md">
            <table className="table-auto w-full text-sm text-violet-900">
              <thead className="bg-violet-100 text-violet-800 font-semibold text-center">
                <tr>
                  <th className="px-4 py-3">Surname</th>
                  <th className="px-4 py-3">Given Name</th>
                  <th className="px-4 py-3">Address</th>
                  <th className="px-4 py-3">Postcode</th>
                  <th className="px-4 py-3">Telephone (Daily)</th>
                  <th className="px-4 py-3">Telephone (After Hours)</th>
                  <th className="px-4 py-3">Relationship</th>
                  <th className="px-4 py-3">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center hover:bg-violet-50 transition-colors">
                  <td className="px-4 py-3">
                    {contactData.firstContactSurname}
                  </td>
                  <td className="px-4 py-3">
                    {contactData.firstContactGivenName}
                  </td>
                  <td className="px-4 py-3">
                    {contactData.firstContactAddress}
                  </td>
                  <td className="px-4 py-3">
                    {contactData.firstContactPostcode}
                  </td>
                  <td className="px-4 py-3">
                    {contactData.firstContactTelephoneDaily}
                  </td>
                  <td className="px-4 py-3">
                    {contactData.firstContactTelephoneAfterhours}
                  </td>
                  <td className="px-4 py-3">
                    {contactData.firstContactRelationship}
                  </td>
                  <td className="px-4 py-3">{contactData.firstContactEmail}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Second Contact */}
        <div>
          <h3 className="text-lg font-semibold text-violet-700 mb-2">
            Second Contact
          </h3>
          <div className="overflow-x-auto border border-violet-200 rounded-2xl shadow-md">
            <table className="table-auto w-full text-sm text-violet-900">
              <thead className="bg-violet-100 text-violet-800 font-semibold text-center">
                <tr>
                  <th className="px-4 py-3">Surname</th>
                  <th className="px-4 py-3">Given Name</th>
                  <th className="px-4 py-3">Address</th>
                  <th className="px-4 py-3">Postcode</th>
                  <th className="px-4 py-3">Telephone (Daily)</th>
                  <th className="px-4 py-3">Telephone (After Hours)</th>
                  <th className="px-4 py-3">Relationship</th>
                  <th className="px-4 py-3">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center hover:bg-violet-50 transition-colors">
                  <td className="px-4 py-3">
                    {contactData.secondContactSurname}
                  </td>
                  <td className="px-4 py-3">
                    {contactData.secondContactGivenName}
                  </td>
                  <td className="px-4 py-3">
                    {contactData.secondContactAddress}
                  </td>
                  <td className="px-4 py-3">
                    {contactData.secondContactPostcode}
                  </td>
                  <td className="px-4 py-3">
                    {contactData.secondContactTelephoneDaily}
                  </td>
                  <td className="px-4 py-3">
                    {contactData.secondContactTelephoneAfterhours}
                  </td>
                  <td className="px-4 py-3">
                    {contactData.secondContactRelationship}
                  </td>
                  <td className="px-4 py-3">
                    {contactData.secondContactEmail}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Guardian Section */}
      <div>
        <h2 className="text-2xl font-bold text-violet-800 mb-4">
          Guardian Information
        </h2>
        <div className="overflow-x-auto border border-violet-200 rounded-2xl shadow-md">
          <table className="table-auto w-full text-sm text-violet-900">
            <thead className="bg-violet-100 text-violet-800 font-semibold text-center">
              <tr>
                <th className="px-4 py-3">Surname</th>
                <th className="px-4 py-3">Given Name</th>
                <th className="px-4 py-3">Address</th>
                <th className="px-4 py-3">Postcode</th>
                <th className="px-4 py-3">Mobile</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Relationship to Guest</th>
              </tr>
            </thead>
            <tbody>
              {guardianData?.map((guardian) => (
                <tr
                  key={guardian.guardianId}
                  className="text-center hover:bg-violet-50 transition-colors"
                >
                  <td className="px-4 py-3">{guardian.guardianSurname}</td>
                  <td className="px-4 py-3">{guardian.guardianGivenName}</td>
                  <td className="px-4 py-3">{guardian.guardianAddress}</td>
                  <td className="px-4 py-3">{guardian.guardianPostcode}</td>
                  <td className="px-4 py-3">{guardian.guardianMobile}</td>
                  <td className="px-4 py-3">{guardian.guardianEmail}</td>
                  <td className="px-4 py-3">
                    {guardian.guardianRelationshipToGuest}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ContactDetailsTables;
