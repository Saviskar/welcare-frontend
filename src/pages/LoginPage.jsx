import { useState } from "react";
import { useNavigate } from "react-router";
import FormInput from "../components/FormInput/FormInput";
import { useLoginUserMutation } from "../api/welcareAPI";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice.js";

function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginUser, { isLoading, isUpdating }] = useLoginUserMutation();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  //The "mutation trigger" is a function that when called, will fire off the mutation request for that endpoint.
  //Calling the "mutation trigger" returns a promise with an unwrap property,
  //which can be called to unwrap the mutation call and provide the raw response/error.

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await loginUser(credentials).unwrap();
      dispatch(login(user));
      navigate("/");
    } catch (error) {
      console.error("Login Failed", error);
      //show error
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-800 to-blue-900 flex flex-col items-center justify-center px-4">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-sm">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <FormInput
              label="User Name"
              id="username"
              type="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Enter your Username"
            />
          </div>
          <div className="mb-6">
            <FormInput
              label="Password"
              id="password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-md transition duration-200"
          >
            Log In
          </button>
        </form>
      </div>

      {/* Developer identity footer */}
      <p className="mt-6 text-sm text-white opacity-70 text-center px-4">
        © {new Date().getFullYear()} | Built with ❤️ by Saviskar Thiruchelvam
      </p>
    </div>
  );
}

export default LoginPage;
