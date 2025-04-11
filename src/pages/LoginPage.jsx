import React from "react";
import FormInput from "../components/FormInput";

function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-800 to-blue-900 flex flex-col items-center justify-center px-4">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-sm">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <FormInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <FormInput
              label="Password"
              id="password"
              type="password"
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
