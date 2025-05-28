"use client"

import React from "react"

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b shadow-sm bg-white sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src="/public/file.svg" alt="Airbnb Logo" className="h-8 w-auto" />
        <span className="font-bold text-xl text-red-600">airbnb</span>
      </div>
      <div className="flex-1 max-w-lg mx-6">
        <input
          type="text"
          placeholder="Start your search"
          className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <div className="flex items-center space-x-4 text-sm text-gray-700">
        <button className="hover:underline">Become a host</button>
        <button className="hover:underline">🌐</button>
        <button className="flex items-center space-x-2 border rounded-full px-3 py-1 hover:shadow-md">
          <span>☰</span>
          <span>👤</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
