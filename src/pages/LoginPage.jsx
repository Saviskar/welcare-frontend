import React from "react";

function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-800 to-blue-900 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-2 text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
             focus:outline-none focus:ring-2 focus:ring-purple-500 
             transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm mb-2 text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
             focus:outline-none focus:ring-2 focus:ring-purple-500 
             transition-all duration-200"
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
      <p className="mt-6 text-sm text-white opacity-70">
        © {new Date().getFullYear()} | Built with ❤️ by Saviskar Thiruchelvam
      </p>
    </div>
  );
}

export default LoginPage;
