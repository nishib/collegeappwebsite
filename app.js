import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 
"@/components/ui/card"
import { GraduationCap, BookOpen, Users, CheckCircle, Star, PlusCircle } 
from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home')

  const packages = [
    {
      title: "Foundational Success Package",
      subtitle: "Middle School / Early High School",
      icon: BookOpen,
      features: [
        "Introduction to high school course planning",
        "Extracurricular selection and building early leadership skills",
        "Goal-setting and time management strategies",
        "Overview of high school milestones and college prep timeline",
        "Custom roadmap based on individual strengths and interests"
      ]
    },
    {
      title: "High School Prep Package",
      subtitle: "Grades 9-10",
      icon: Users,
      features: [
        "Academic guidance and AP/IB course planning",
        "Building a balanced, standout extracurricular profile",
        "Exploring summer opportunities (internships, camps, or 
volunteering)",
        "Early college research and list-building",
        "Monthly goal tracking and planning"
      ]
    },
    {
      title: "College Ready Package",
      subtitle: "Grades 11-12 Sessions",
      icon: CheckCircle,
      features: [
        "In-depth academic and extracurricular guidance",
        "Personalized college list building and application timeline",
        "Essay brainstorming, drafting, and editing for personal and 
supplemental statements",
        "Scholarship and financial aid guidance",
        "Interview practice and personalized feedback"
      ]
    },
    {
      title: "Ultimate Admissions Package",
      subtitle: "Grade 12 Intensive",
      icon: Star,
      features: [
        "Comprehensive support for each step of the application process",
        "Intensive essay support, including personal statements and 
multiple supplementals",
        "Strategic advice for early decision/action vs. regular decision 
applications",
        "Mock interview practice and feedback sessions",
        "Ongoing support for scholarship applications and college-specific 
questions"
      ]
    }
  ]

  const addOns = [
    { title: "Essay Boost", description: "Additional sessions for 
supplemental essay work" },
    { title: "Scholarship Support", description: "Sessions focused on 
financial aid and scholarship applications" },
    { title: "Interview Coaching", description: "Sessions with practice 
interviews and feedback" }
  ]

  const schools = [
    { name: "Stanford", logo: 
"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dXyJsVOepce5z3svTc8RCv66Ev6Wr2.png" 
},
    { name: "Carnegie Mellon", logo: 
"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9L0PONZkAM886LFXCvh1gPvZ8eSav1.png" 
},
    { name: "Cornell", logo: 
"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1cYhsUZR9ZlGd9onEqdPnLtqZ9Qm6l.png" 
},
    { name: "USC", logo: 
"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7OEdhdJHfQez5tPai4a5kdEFE8QjOF.png" 
},
    { name: "UC Schools", logo: 
"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DmrNfESqYUkC1gV21FNndy7fy4GziK.png" 
}
  ]

  return (
    <div className="min-h-screen bg-[#0C4767] text-white">
      <header className="border-b bg-[#8E9DCC]">
        <div className="container mx-auto px-4 py-4 flex justify-between 
items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-[#DBF4A7]" />
            <span className="text-2xl font-bold text-white">EduPath 
Counseling</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className={`text-white 
hover:text-[#DBF4A7] ${activeSection === 'home' ? 'underline' : ''}`} 
onClick={() => setActiveSection('home')}>Home</a></li>
              <li><a href="#services" className={`text-white 
hover:text-[#DBF4A7] ${activeSection === 'services' ? 'underline' : ''}`} 
onClick={() => setActiveSection('services')}>Services</a></li>
              <li><a href="#results" className={`text-white 
hover:text-[#DBF4A7] ${activeSection === 'results' ? 'underline' : ''}`} 
onClick={() => setActiveSection('results')}>Results</a></li>
              <li><a href="#about" className={`text-white 
hover:text-[#DBF4A7] ${activeSection === 'about' ? 'underline' : ''}`} 
onClick={() => setActiveSection('about')}>About Us</a></li>
              <li><a href="#contact" className={`text-white 
hover:text-[#DBF4A7] ${activeSection === 'contact' ? 'underline' : ''}`} 
onClick={() => setActiveSection('contact')}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 text-center bg-[#8E9DCC] 
text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Personalized College 
Counseling for Your Success</h1>
            <p className="text-xl mb-8">Guiding students from middle 
school through high school to achieve their college dreams</p>
            <div className="space-x-4">
              <Button size="lg" className="bg-[#DBF4A7] text-[#8E9DCC] 
hover:bg-[#DBF4A7]/90">Get Started Today</Button>
              <Button size="lg" className="bg-[#8E9DCC] text-white 
hover:bg-[#8E9DCC]/90" asChild>
                <a href="#about" onClick={() => 
setActiveSection('about')}>About Us</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 
text-[#8E9DCC]">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="bg-[#D9DBF1] 
border-[#8E9DCC]">
                  <CardHeader>
                    <CardTitle className="flex items-center 
text-[#8E9DCC]">
                      <pkg.icon className="mr-2" />
                      {pkg.title}
                    </CardTitle>
                    <CardDescription>{pkg.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-6 
text-[#8E9DCC]">Add-Ons</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {addOns.map((addon, index) => (
                  <Card key={index} className="bg-[#D9DBF1] 
border-[#8E9DCC]">
                    <CardHeader>
                      <CardTitle className="flex items-center 
text-[#8E9DCC]">
                        <PlusCircle className="mr-2" />
                        {addon.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      
<CardDescription>{addon.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="py-20 bg-[#8E9DCC]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 
text-white">Our Students' Success</h2>
            <div className="flex flex-wrap justify-center items-center 
gap-8">
              {schools.map((school) => (
                <div key={school.name} className="text-center">
                  {school.name === "UC Schools" ? (
                    <div className="w-[200px] h-[200px] relative">
                      <Image 
                        src={school.logo} 
                        alt="UC Schools logos" 
                        layout="fill" 
                        objectFit="contain"
                        className="mx-auto mb-2"
                      />
                    </div>
                  ) : (
                    <Image 
                      src={school.logo} 
                      alt={`${school.name} logo`} 
                      width={100} 
                      height={100} 
                      className="mx-auto mb-2" 
                    />
                  )}
                  <p className="font-semibold 
text-white">{school.name}</p>
                  {school.name === "UC Schools" && (
                    <p className="text-sm text-white mt-1">Berkeley, Los 
Angeles, San Diego, and more</p>
                  )}
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-lg text-white">
              Our students have successfully gained admission to these top 
universities and many more!
            </p>
          </div>
        </section>

        <section id="about" className="py-20 bg-[#8E9DCC]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 
text-white">About Nishi Bhagat</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <Image
                
src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zcj8KBQOb4OdB6bbP8ATbRQ3ohFkBa.png"
                alt="Nishi Bhagat"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="flex-1 space-y-4">
                <p>
                  Nishi Bhagat is an accomplished college admissions 
counselor and a shining example of determination and academic excellence. 
Graduating from the University of California, Davis, in just three years 
as a merit scholarship student, Nishi balanced a full academic course load 
with cognitive and computer science while excelling in research, 
internships, and leadership.
                </p>
                <p>
                  Nishi was also chosen as the Commencement Speaker for 
her graduating class, a testament to her ability to cultivate success not 
only leading up to college but throughout college as well. Her speech 
highlighted the value of persistence, purpose, and the power of community, 
which resonated with the graduating class and left a lasting impact.
                </p>
                <p>
                  With her deep understanding of the college admissions 
landscape, Nishi is passionate about easing the stress of high school and 
college applications for students. She works closely with each student to 
provide both strategic advice and personal mentorship, guiding them in 
building extracurricular profiles, writing impactful essays, and 
navigating each step of the admissions journey.
                </p>
                <p>
                  Many of Nishi's students have successfully gained 
admission to top institutions, including Stanford, Carnegie Mellon, UC 
Berkeley, Cornell, and USC. She is committed to helping students reach 
their dreams and invites families to reach out for personalized support at 
any stage of the application process.
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <a href="https://www.youtube.com/watch?v=xlHHUhqZMk8" 
target="_blank" rel="noopener noreferrer">
                      Watch Nishi's Commencement Speech
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-[#DBF4A7]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#8E9DCC]">Ready 
to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-[#8E9DCC]">Contact us today to 
schedule a personalized consultation and take the first step towards your 
dream college.</p>
            <Button size="lg" className="bg-[#8E9DCC] text-white 
hover:bg-[#8E9DCC]/90">
              <a href="https://calendly.com/nishibhagat19" target="_blank" 
rel="noopener noreferrer">
                Schedule a Consultation
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-[#8E9DCC] text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} EduPath Counseling. All 
rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


