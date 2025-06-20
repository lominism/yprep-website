"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      test: "SAT",
      score: "1550/1600",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "I improved my SAT score by 250 points after just 2 months of using TestPrep Pro. The practice tests were incredibly similar to the actual exam, and the personalized study plan helped me focus on my weak areas.",
    },
    {
      id: 2,
      name: "Sophia Chen",
      test: "TOEFL",
      score: "112/120",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "As a non-native English speaker, I was worried about the TOEFL. TestPrep Pro's speaking practice and feedback from real instructors made all the difference. I exceeded my target score!",
    },
    {
      id: 3,
      name: "Marcus Williams",
      test: "GMAT",
      score: "730/800",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The GMAT quantitative section was my biggest challenge. TestPrep Pro's detailed video explanations and adaptive question bank helped me master even the most difficult concepts.",
    },
    {
      id: 4,
      name: "Priya Patel",
      test: "ACT",
      score: "34/36",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "I tried several test prep services before finding TestPrep Pro. Their strategies for time management and approach to the science section were game-changers for me.",
    },
    {
      id: 5,
      name: "David Kim",
      test: "IELTS",
      score: "8.5/9",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The writing feedback system on TestPrep Pro is exceptional. I received detailed comments on every practice essay, which helped me understand exactly what the examiners are looking for.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="min-w-full border-none shadow-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-6 text-lg italic">"{testimonial.content}"</blockquote>
                <div className="flex flex-col items-center">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mb-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.test} Score: {testimonial.score}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 p-0 rounded-full ${currentIndex === index ? "bg-orange-500" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
