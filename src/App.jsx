import { useEffect, useState } from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
// Images
import clinicImage from "./assets/clinic.jpg"
import waitingImage from "./assets/waiting.jpg"
import ConsultationroomImage from "./assets/Consultationroom.jpg"
import treatmentImage from "./assets/treatment.jpg"
import SterilizationbayImage from "./assets/Sterilizationbay.jpg"
import receptionImage from "./assets/reception.jpg"
import DentalproceduresetupImage from "./assets/Dentalproceduresetup.jpg"
import DentalteamcollaborationImage from "./assets/Dentalteamcollaboration.jpg"
import WaitingareaImage from "./assets/Waitingarea.jpg"
import team1Image from "./assets/team1.jpg"
import team2Image from "./assets/team2.jpg"
import FrontdeskImage from "./assets/Frontdesk.jpg"

// Components
import TopInfoBar from "./components/TopInfoBar.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import BottomTicker from "./components/BottomTicker.jsx"

// Sections
import HeroSection from "./sections/HeroSection.jsx"
import AboutSection from "./sections/AboutSection.jsx"
import ContactSection from "./sections/ContactSection.jsx"
import HoursSection from "./sections/HoursSection.jsx"
import GallerySection from "./sections/GallerySections.jsx"
import TestimonialsSection from "./sections/TestimonialsSection.jsx"
import PatientEducationSection from "./sections/PatientEducationSection.jsx"
import ProfessionalEducationSection from "./sections/ProfessionalEducationSection.jsx"
import ProductsSection from "./sections/ProductsSection.jsx"
import ResearchSection from "./sections/ResearchSection.jsx"
import RatingSection from "./sections/RatingSection.jsx"
import QueriesSection from "./sections/QueriesSections.jsx"
import SiteMapSection from "./sections/SiteMapSection.jsx"

// route-only components 
import ServicesRoute from "./sections/ServiceRoute.jsx"
import ServiceDetailsRoute from "./sections/ServiceDetailsRoute.jsx"

import {
  services,
  testimonials,
  products,
  researchPapers,
  patientGuides,
  professionalCourses,
} from "./data/siteData.jsx"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  return null
}

function HomeRoute({ showSuccess, handleSubmit, onBookClick }) {
  return (
    <>
      <HeroSection
        clinicImage={clinicImage}
        waitingImage={waitingImage}
        treatmentImage={treatmentImage}
      />
      <AboutSection onBookClick={onBookClick} />
      <RatingSection />
      <HoursSection />
      <ContactSection showSuccess={showSuccess} handleSubmit={handleSubmit} />
    </>
  )
}

function AboutRoute({ onBookClick }) {
  return (
    <>
      <AboutSection onBookClick={onBookClick} />
      <HoursSection />
    </>
  )
}

function App() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [activeProduct, setActiveProduct] = useState("whitening")

  const navigate = useNavigate()
  const location = useLocation()

  const galleryImages = [

    { id: 1, src: clinicImage, alt: "Modern Dental Clinic Reception", category: "Facility" },
    { id: 2, src: WaitingareaImage, alt: "Comfortable Waiting Lounge", category: "Facility" },
    { id: 3, src: ConsultationroomImage, alt: "Consultation room", category: "Facility" },
    { id: 4, src: receptionImage, alt: "Reception and Welcome Desk", category: "Facility" },


    { id: 5, src: team1Image, alt: "Lead Dental Team Member", category: "Team" },
    { id: 6, src: team2Image, alt: "Patient Support Staff", category: "Team" },
    { id: 7, src: DentalteamcollaborationImage, alt: "Clinical Team Collaboration", category: "Team" },
    { id: 8, src: FrontdeskImage, alt: "Front Desk and Patient Care", category: "Team" },


    { id: 9, src: treatmentImage, alt: "Modern Treatment Room", category: "Technology" },
    { id: 10, src: SterilizationbayImage, alt: "Sterilization and Equipment Area", category: "Technology" },
    { id: 11, src: DentalproceduresetupImage, alt: "Advanced Dental Procedure Setup", category: "Technology" },
    { id: 12, src: waitingImage, alt: "Digital Patient Consultation Space", category: "Technology" },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
    e.target.reset()
  }

  const handleBookClick = () => {
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      }, 120)
      return
    }

    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white pb-16 text-gray-800 antialiased">
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <ScrollToTop />
      <TopInfoBar />
      <Navbar services={services} onBookClick={handleBookClick} />

      <Routes>
        <Route
          path="/"
          element={
            <HomeRoute
              showSuccess={showSuccess}
              handleSubmit={handleSubmit}
              onBookClick={handleBookClick}
            />
          }
        />

        <Route
          path="/about"
          element={<AboutRoute onBookClick={handleBookClick} />}
        />
        <Route
          path="/contact"
          element={<ContactSection showSuccess={showSuccess} handleSubmit={handleSubmit} />}
        />

        <Route
          path="/gallery"
          element={<GallerySection galleryImages={galleryImages} />}
        />

        <Route
          path="/testimonials"
          element={<TestimonialsSection testimonials={testimonials} />}
        />

        <Route path="/services" element={<ServicesRoute services={services} />} />

        <Route
          path="/services/:serviceId"
          element={<ServiceDetailsRoute services={services} />}
        />

        <Route
          path="/patient-education"
          element={
            <PatientEducationSection
              patientGuides={patientGuides}
              treatmentImage={treatmentImage}
            />
          }
        />

        <Route
          path="/professional-education"
          element={
            <ProfessionalEducationSection
              professionalCourses={professionalCourses}
            />
          }
        />

        <Route
          path="/products"
          element={
            <ProductsSection
              products={products}
              activeProduct={activeProduct}
              setActiveProduct={setActiveProduct}
            />
          }
        />

        <Route
          path="/research"
          element={<ResearchSection researchPapers={researchPapers} />}
        />

        <Route path="/queries" element={<QueriesSection />} />
        <Route path="/site-map" element={<SiteMapSection />} />
      </Routes>

      <BottomTicker />
      <Footer />
    </div>
  )
}

export default App;