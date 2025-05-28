"use client"

import React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

interface HomeCardProps {
  title: string
  image: string
  price: number
  rating: number
  location: string
}

const HomeCard: React.FC<HomeCardProps> = ({ title, image, price, rating, location }) => {
  return (
    <Card className="max-w-xs">
      <img src={image} alt={title} className="h-48 w-full object-cover rounded-t-xl" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{location}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-semibold">${price.toFixed(2)}</span>
        <span className="text-sm text-yellow-500">⭐ {rating.toFixed(2)}</span>
      </CardFooter>
    </Card>
  )
}

export default HomeCard
