import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ContactDetailsTables() {
  const { id } = useParams();

  const [contactData, setContactData] = useState([]);
  const [guardianData, setGuardianData] = useState([]);
  const [residentData, setResidentData] = useState([]);

  useEffect(() => {
    fetchContactData();
    fetchGuardianData();
  }, []);

  const fetchContactData = () => {
    axios
      .get(`http://localhost:3000/residentContacts/${id}`)
      .then((res) => setContactData(res.data))
      .catch((err) => console.log(err));
  };

  const fetchGuardianData = () => {
    axios
      .get(`http://localhost:3000/guardians/${id}`)
      .then((res) => setGuardianData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-full p-6 space-y-10">
      {/* Contact Section */}
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
                {contactData.map((contact, index) => (
                  <tr
                    key={index}
                    className="text-center hover:bg-violet-50 transition-colors"
                  >
                    <td className="px-4 py-3">{contact.firstContactSurname}</td>
                    <td className="px-4 py-3">
                      {contact.firstContactGivenName}
                    </td>
                    <td className="px-4 py-3">{contact.firstContactAddress}</td>
                    <td className="px-4 py-3">
                      {contact.firstContactPostcode}
                    </td>
                    <td className="px-4 py-3">
                      {contact.firstContactTelephoneDaily}
                    </td>
                    <td className="px-4 py-3">
                      {contact.firstContactTelephoneAfterhours}
                    </td>
                    <td className="px-4 py-3">
                      {contact.firstContactRelationship}
                    </td>
                    <td className="px-4 py-3">{contact.firstContactEmail}</td>
                  </tr>
                ))}
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
                {contactData.map((contact, index) => (
                  <tr
                    key={index}
                    className="text-center hover:bg-violet-50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      {contact.secondContactSurname}
                    </td>
                    <td className="px-4 py-3">
                      {contact.secondContactGivenName}
                    </td>
                    <td className="px-4 py-3">
                      {contact.secondContactAddress}
                    </td>
                    <td className="px-4 py-3">
                      {contact.secondContactPostcode}
                    </td>
                    <td className="px-4 py-3">
                      {contact.secondContactTelephoneDaily}
                    </td>
                    <td className="px-4 py-3">
                      {contact.secondContactTelephoneAfterhours}
                    </td>
                    <td className="px-4 py-3">
                      {contact.secondContactRelationship}
                    </td>
                    <td className="px-4 py-3">{contact.secondContactEmail}</td>
                  </tr>
                ))}
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
              {guardianData.map((guardian, index) => (
                <tr
                  key={index}
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
