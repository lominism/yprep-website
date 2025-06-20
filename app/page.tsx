import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, CheckCircle, GraduationCap, BarChart, Globe, Users, Clock } from "lucide-react"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import PricingTable from "@/components/pricing-table"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Ace Your Standardized Tests with Confidence
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Expert-designed prep courses for SAT, ACT, GMAT, TOEFL, and IELTS. Personalized learning paths to
                    help you achieve your highest score.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-orange-400 hover:bg-orange-500">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" size="lg">
                    Explore Courses
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-orange-500" />
                    <span>7-day free trial</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-orange-500" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Students studying"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 border-y bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-3xl font-bold sm:text-4xl">98%</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Score Improvement</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-3xl font-bold sm:text-4xl">50K+</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Students Helped</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-3xl font-bold sm:text-4xl">5</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Test Types</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-3xl font-bold sm:text-4xl">24/7</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Test Types Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Test Preparation</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose from our expert-designed courses for all major standardized tests
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12">
              <Tabs defaultValue="sat" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                  <TabsTrigger value="sat">SAT</TabsTrigger>
                  <TabsTrigger value="act">ACT</TabsTrigger>
                  <TabsTrigger value="gmat">GMAT</TabsTrigger>
                  <TabsTrigger value="toefl">TOEFL</TabsTrigger>
                  <TabsTrigger value="ielts">IELTS</TabsTrigger>
                </TabsList>
                <TabsContent value="sat" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>SAT Preparation</CardTitle>
                      <CardDescription>Comprehensive preparation for the Scholastic Assessment Test</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="text-lg font-medium">What You'll Learn</h3>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Evidence-Based Reading and Writing</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Math - Algebra and Problem Solving</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Essay Writing Strategies (Optional)</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Time Management Techniques</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">Course Features</h3>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>10 Full-Length Practice Tests</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>3,000+ Practice Questions</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Video Lessons & Tutorials</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Personalized Study Plan</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-orange-400 hover:bg-orange-500">Explore SAT Prep</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="act" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>ACT Preparation</CardTitle>
                      <CardDescription>Complete preparation for the American College Testing exam</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="text-lg font-medium">What You'll Learn</h3>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>English Grammar & Usage</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Math & Scientific Reasoning</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Reading Comprehension</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Essay Writing (Optional)</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">Course Features</h3>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>8 Full-Length Practice Tests</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>2,500+ Practice Questions</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Section-Specific Strategies</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Score Improvement Guarantee</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-orange-400 hover:bg-orange-500">Explore ACT Prep</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="gmat" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>GMAT Preparation</CardTitle>
                      <CardDescription>Advanced preparation for the Graduate Management Admission Test</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="text-lg font-medium">What You'll Learn</h3>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Quantitative Reasoning</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Verbal Reasoning</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Integrated Reasoning</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Analytical Writing Assessment</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">Course Features</h3>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>6 Full-Length Practice Tests</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>1,500+ Practice Questions</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Business School Application Tips</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>1-on-1 Tutoring Available</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-orange-400 hover:bg-orange-500">Explore GMAT Prep</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="toefl" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>TOEFL Preparation</CardTitle>
                      <CardDescription>
                        Specialized preparation for the Test of English as a Foreign Language
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="text-lg font-medium">What You'll Learn</h3>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Reading Comprehension</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Listening Skills</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Speaking Practice</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Academic Writing</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">Course Features</h3>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>5 Full-Length Practice Tests</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Pronunciation Training</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Vocabulary Building Tools</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Speaking Assessment</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-orange-400 hover:bg-orange-500">Explore TOEFL Prep</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="ielts" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>IELTS Preparation</CardTitle>
                      <CardDescription>
                        Complete preparation for the International English Language Testing System
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="text-lg font-medium">What You'll Learn</h3>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Academic Reading & Writing</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Listening Comprehension</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Speaking Interview Techniques</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>General vs. Academic Training</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">Course Features</h3>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>6 Full-Length Practice Tests</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Band Score Improvement Tips</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Mock Speaking Interviews</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Writing Feedback & Scoring</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-orange-400 hover:bg-orange-500">Explore IELTS Prep</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Our Test Prep</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our comprehensive approach helps you achieve your highest possible score
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Comprehensive Materials</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Access thousands of practice questions, full-length tests, and detailed explanations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Expert Instructors</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Learn from instructors who scored in the top percentiles and have years of teaching experience.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <BarChart className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Performance Analytics</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Track your progress with detailed analytics and personalized recommendations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <Globe className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Accessible Anywhere</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Study on any device, anytime, with our mobile-friendly platform and offline access.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Community Support</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Join study groups, forums, and live Q&A sessions with other test-takers.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Flexible Scheduling</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Create a personalized study plan that fits your timeline and learning style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from students who achieved their target scores with our test prep
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that fits your needs and budget
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <PricingTable />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-500 text-white">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to achieve your highest score?
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your 7-day free trial today. No credit card required.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button size="lg" variant="secondary">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-orange-500"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
