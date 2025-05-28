"use client"

import React from "react"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.push("/admin/login")
    }
  }, [user, router])

  if (!user || user.role !== "admin") {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">Admin Dashboard Header</header>
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">Admin Dashboard Footer</footer>
    </div>
  )
}
