import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form className="space-y-4">
          {/* Username or Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username or Email
            </label>
            <input
              type="text"
              placeholder="Enter your username or email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-clay focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-clay focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-brand-clay text-white font-semibold rounded-lg hover:bg-brand-secondary transition"
          >
            Login
          </button>
        </form>

        {/* Extra links */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-brand-clay font-medium hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
