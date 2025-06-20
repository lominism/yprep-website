"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Basic",
      description: "Perfect for self-study and occasional practice",
      priceMonthly: 19.99,
      priceAnnual: 14.99,
      features: [
        "Access to one test type",
        "5 practice tests",
        "1,000+ practice questions",
        "Basic performance analytics",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Premium",
      description: "Our most popular plan for serious test-takers",
      priceMonthly: 39.99,
      priceAnnual: 29.99,
      features: [
        "Access to all test types",
        "Unlimited practice tests",
        "5,000+ practice questions",
        "Advanced performance analytics",
        "Personalized study plan",
        "Video lessons and tutorials",
        "Email support",
      ],
      popular: true,
    },
    {
      name: "Ultimate",
      description: "Comprehensive preparation with personal coaching",
      priceMonthly: 79.99,
      priceAnnual: 59.99,
      features: [
        "Everything in Premium",
        "1-on-1 tutoring (2 hours/month)",
        "Essay grading and feedback",
        "Priority support",
        "Score improvement guarantee",
        "College/University application tips",
        "Mock interviews",
      ],
      popular: false,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div className="inline-flex items-center rounded-full border p-1 bg-muted">
          <Button
            variant={isAnnual ? "default" : "ghost"}
            size="sm"
            onClick={() => setIsAnnual(true)}
            className={isAnnual ? "bg-orange-400 hover:bg-orange-500" : ""}
          >
            Annual (Save 25%)
          </Button>
          <Button
            variant={!isAnnual ? "default" : "ghost"}
            size="sm"
            onClick={() => setIsAnnual(false)}
            className={!isAnnual ? "bg-orange-400 hover:bg-orange-500" : ""}
          >
            Monthly
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-orange-500 shadow-lg" : ""}`}>
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-4xl font-bold">${isAnnual ? plan.priceAnnual : plan.priceMonthly}</span>
                <span className="text-muted-foreground">/month</span>
                {isAnnual && (
                  <div className="text-sm text-muted-foreground mt-1">
                    Billed annually (${(plan.priceAnnual * 12).toFixed(2)})
                  </div>
                )}
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className={`w-full ${plan.popular ? "bg-orange-400 hover:bg-orange-500" : ""}`}>
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center text-sm text-muted-foreground">
        All plans include a 7-day free trial. No credit card required.
      </div>
    </div>
  )
}
