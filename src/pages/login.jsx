import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 sm:p-10">

        {/* Logo */}
        <div className="text-center mb-8">
          <a
            href="/"
            className="text-3xl font-bold tracking-tight text-blue-600"
          >
            STORE<span className="text-gray-900">NAME</span>
          </a>

          <p className="text-gray-500 mt-3 text-sm">
            Welcome back! Please login to continue.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Email
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-3.5 text-gray-400"
              />

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-gray-100 border border-transparent focus:border-blue-500 focus:bg-white rounded-xl py-3 pl-11 pr-4 outline-none transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <a
                href="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Forgot?
              </a>
            </div>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-3.5 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full bg-gray-100 border border-transparent focus:border-blue-500 focus:bg-white rounded-xl py-3 pl-11 pr-11 outline-none transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="border-t border-gray-200"></div>

          <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-sm text-gray-400">
            OR
          </span>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">

          <button className="w-full border border-gray-300 hover:bg-gray-50 py-3 rounded-xl font-medium transition">
            Continue with Google
          </button>

          <button className="w-full border border-gray-300 hover:bg-gray-50 py-3 rounded-xl font-medium transition">
            Continue with Apple
          </button>
        </div>

        {/* Register */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;