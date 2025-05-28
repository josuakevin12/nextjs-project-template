"use client"

import React, { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import SearchBar from "@/components/SearchBar"
import HomeCard from "@/components/HomeCard"

interface Listing {
  id: number
  title: string
  image: string
  price: number
  rating: number
  location: string
}

const HomePage: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([])

  useEffect(() => {
    async function fetchListings() {
      try {
        const res = await fetch("/api/listings")
        const data = await res.json()
        setListings(data)
      } catch (error) {
        console.error("Failed to fetch listings", error)
      }
    }
    fetchListings()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SearchBar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Homes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <HomeCard
              key={listing.id}
              title={listing.title}
              image={listing.image}
              price={listing.price}
              rating={listing.rating}
              location={listing.location}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default HomePage
