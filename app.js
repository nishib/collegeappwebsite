import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen, Users, CheckCircle, Star, PlusCircle } from "lucide-react"

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
      "Exploring summer opportunities (internships, camps, or volunteering)",
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
      "Essay brainstorming, drafting, and editing for personal and supplemental statements",
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
      "Intensive essay support, including personal statements and multiple supplementals",
      "Strategic advice for early decision/action vs. regular decision applications",
      "Mock interview practice and feedback sessions",
      "Ongoing support for scholarship applications and college-specific questions"
    ]
  }
]

const addOns = [
  { 
    title: "Essay Boost", 
    description: "Additional sessions for supplemental essay work" 
  },
  { 
    title: "Scholarship Support", 
    description: "Sessions focused on financial aid and scholarship applications" 
  },
  { 
    title: "Interview Coaching", 
    description: "Sessions with practice interviews and feedback" 
  }
]

const schools = [
  { 
    name: "Stanford", 
    logo: "/api/placeholder/100/100"
  },
  { 
    name: "Carnegie Mellon", 
    logo: "/api/placeholder/100/100"
  },
  { 
    name: "Cornell", 
    logo: "/api/placeholder/100/100"
  },
  { 
    name: "USC", 
    logo: "/api/placeholder/100/100"
  },
  { 
    name: "UC Schools", 
    logo: "/api/placeholder/200/200",
    description: "Berkeley, Los Angeles, San Diego, and more"
  }
]

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home')

  const handleNavClick = (section) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'results', label: 'Results' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900">EduPath Counseling</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`text-slate-600 hover:text-blue-600 transition-colors ${
                      activeSection === item.id ? 'text-blue-600 font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Personalized College Counseling for Your Success
            </h1>
            <p className="text-xl mb-8 text-slate-600">
              Guiding students from middle school through high school to achieve their college dreams
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Get Started Today
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => handleNavClick('about')}
              >
                About Us
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-900">
                      <pkg.icon className="mr-2 h-5 w-5 text-blue-600" />
                      {pkg.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">{pkg.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-slate-900">Add-On Services</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {addOns.map((addon, index) => (
                  <Card key={index} className="transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center text-slate-900">
                        <PlusCircle className="mr-2 h-5 w-5 text-blue-600" />
                        {addon.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600">{addon.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Students' Success</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {schools.map((school) => (
                <div key={school.name} className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src={school.logo}
                      alt={`${school.name} logo`}
                      className="mx-auto"
                      style={{
                        width: school.name === "UC Schools" ? '200px' : '100px',
                        height: school.name === "UC Schools" ? '200px' : '100px',
                      }}
                    />
                  </div>
                  <p className="font-semibold text-slate-900">{school.name}</p>
                  {school.description && (
                    <p className="text-sm text-slate-600 mt-1">{school.description}</p>
                  )}
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-lg text-slate-700">
              Our students have successfully gained admission to these top universities and many more!
            </p>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">About Nishi Bhagat</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <img
                  src="/api/placeholder/300/300"
                  alt="Nishi Bhagat"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="md:w-2/3 space-y-6">
                <div className="prose max-w-none text-slate-700">
                  <p>
                    Nishi Bhagat is an accomplished college admissions counselor and a shining example of determination and academic excellence. Graduating from the University of California, Davis, in just three years as a merit scholarship student, Nishi balanced a full academic course load with cognitive and computer science while excelling in research, internships, and leadership.
                  </p>
                  <p>
                    Nishi was also chosen as the Commencement Speaker for her graduating class, a testament to her ability to cultivate success not only leading up to college but throughout college as well. Her speech highlighted the value of persistence, purpose, and the power of community, which resonated with the graduating class and left a lasting impact.
                  </p>
                  <p>
                    With her deep understanding of the college admissions landscape, Nishi is passionate about easing the stress of high school and college applications for students. She works closely with each student to provide both strategic advice and personal mentorship, guiding them in building extracurricular profiles, writing impactful essays, and navigating each step of the admissions journey.
                  </p>
                  <p>
                    Many of Nishi's students have successfully gained admission to top institutions, including Stanford, Carnegie Mellon, UC Berkeley, Cornell, and USC. She is committed to helping students reach their dreams and invites families to reach out for personalized support at any stage of the application process.
                  </p>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <a 
                      href="https://www.youtube.com/watch?v=xlHHUhqZMk8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      Watch Nishi's Commencement Speech
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-slate-600">
              Contact us today to schedule a personalized consultation and take the first step towards your dream college.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              asChild
            >
              <a 
                href="https://calendly.com/nishibhagat19" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Schedule a Consultation
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} EduPath Counseling. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
