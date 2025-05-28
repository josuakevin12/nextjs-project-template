"use client"

import React, { useState } from "react"

const SearchBar: React.FC = () => {
  const [location, setLocation] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [guests, setGuests] = useState(1)

  return (
    <div className="flex items-center space-x-4 bg-white rounded-full shadow-md p-4 max-w-4xl mx-auto mt-6">
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1 border-r border-gray-300 px-4 py-2 rounded-l-full focus:outline-none"
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border-r border-gray-300 px-4 py-2 focus:outline-none"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border-r border-gray-300 px-4 py-2 focus:outline-none"
      />
      <input
        type="number"
        min={1}
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        className="w-16 px-4 py-2 focus:outline-none"
      />
      <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
        Search
      </button>
    </div>
  )
}

export default SearchBar
