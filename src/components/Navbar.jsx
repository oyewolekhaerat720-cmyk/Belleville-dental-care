import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"
import VisitorCounter from "./VisitorCounter"
import logo from "../assets/Logo.png"

function Navbar({ services = [], onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  // Desktop dropdown states
  const [servicesOpen, setServicesOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobilePagesOpen(false)
    setMobileServicesOpen(false)
  }

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium whitespace-nowrap transition-colors duration-200 ${isActive ? "text-amber-600" : "text-gray-700 hover:text-amber-600"
    }`

  const dropdownLinkClass = ({ isActive }) =>
    `block rounded-xl px-3 py-2 text-sm transition-colors ${isActive
      ? "bg-amber-50 text-amber-600"
      : "text-gray-700 hover:bg-stone-50 hover:text-amber-600"
    }`

  const dropdownPrimaryLinkClass = ({ isActive }) =>
    `mb-1 block rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${isActive
      ? "bg-amber-50 text-amber-600"
      : "text-slate-800 hover:bg-stone-50 hover:text-amber-600"
    }`

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive
      ? "bg-amber-50 text-amber-600"
      : "text-gray-700 hover:bg-stone-50 hover:text-amber-600"
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
        <Link to="/" className="shrink-0 flex items-center gap-3" onClick={closeMobileMenu}>
          <div className="flex items-center">
            <div className="h-11 w-11 overflow-hidden rounded-2xl bg-slate-800 shadow-sm ring-1 ring-slate-700/30">
              <img
                src={logo}
                alt="Belleville Dental logo"
                className="h-full w-full object-contain p-1.5"
              />
            </div>
          </div>

          <div className="leading-tight">
            <p className="text-lg font-bold text-slate-900">Belleville Dental</p>
            <p className="text-xs text-gray-500">Family & Cosmetic Dentistry</p>
          </div>
        </Link>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-6">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          {/* Services Dropdown with useState */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex items-center gap-1">
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="inline-flex items-center text-xs text-gray-600 transition hover:text-amber-600"
                aria-label="Open services menu"
              >
                <FaChevronDown className={`transition ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div
              className={`absolute left-0 top-full mt-3 w-72 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl transition-all duration-200 ${servicesOpen
                ? 'visible translate-y-0 opacity-100'
                : 'invisible translate-y-2 opacity-0'
                }`}
            >
              <div className="mb-1 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Our Services
              </div>

              <NavLink to="/services" className={dropdownPrimaryLinkClass}>
                View All Services
              </NavLink>

              <div className="my-1 border-t border-gray-100" />

              {services.map((service) => (
                <NavLink
                  key={service.id}
                  to={`/services/${service.id}`}
                  className={dropdownLinkClass}
                >
                  {service.title}
                </NavLink>
              ))}
            </div>
          </li>

          <li>
            <NavLink to="/patient-education" className={navLinkClass}>
              Patient Education
            </NavLink>
          </li>

          <li>
            <NavLink to="/professional-education" className={navLinkClass}>
              Pro Education
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/research" className={navLinkClass}>
              Research
            </NavLink>
          </li>

          {/* Pages Dropdown with useState */}
          <li
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setPagesOpen(!pagesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-amber-600"
              aria-label="Open pages menu"
            >
              Pages
              <FaChevronDown className={`text-xs transition ${pagesOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`absolute left-0 top-full mt-3 w-56 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl transition-all duration-200 ${pagesOpen
                ? 'visible translate-y-0 opacity-100'
                : 'invisible translate-y-2 opacity-0'
                }`}
            >
              <NavLink to="/about" className={dropdownLinkClass}>
                About
              </NavLink>

              <NavLink to="/gallery" className={dropdownLinkClass}>
                Gallery
              </NavLink>

              <NavLink to="/queries" className={dropdownLinkClass}>
                Queries
              </NavLink>

              <NavLink to="/site-map" className={dropdownLinkClass}>
                Site Map
              </NavLink>

              <NavLink to="/testimonials" className={dropdownLinkClass}>
                Testimonials
              </NavLink>

              <NavLink to="/contact" className={dropdownLinkClass}>
                Contact Us
              </NavLink>
            </div>
          </li>
        </ul>

        <div className="shrink-0 flex items-center gap-3">
          <button
            type="button"
            onClick={onBookClick}
            className="hidden rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 md:inline-flex"
          >
            Book Appointment
          </button>

          <div className="hidden md:block">
            <VisitorCounter />
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-slate-800 shadow-sm lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-2">

            <NavLink to="/" className={mobileLinkClass} onClick={closeMobileMenu}>
              Home
            </NavLink>

            {/* Services Mobile Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-stone-50"
              >
                Services
                <FaChevronDown
                  className={`transition ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <NavLink
                    to="/services"
                    className={mobileLinkClass}
                    onClick={closeMobileMenu}
                  >
                    View All Services
                  </NavLink>

                  {services.map((service) => (
                    <NavLink
                      key={service.id}
                      to={`/services/${service.id}`}
                      className={mobileLinkClass}
                      onClick={closeMobileMenu}
                    >
                      {service.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/patient-education"
              className={mobileLinkClass}
              onClick={closeMobileMenu}
            >
              Patient Education
            </NavLink>

            <NavLink
              to="/professional-education"
              className={mobileLinkClass}
              onClick={closeMobileMenu}
            >
              Pro Education
            </NavLink>

            <NavLink
              to="/products"
              className={mobileLinkClass}
              onClick={closeMobileMenu}
            >
              Products
            </NavLink>

            <NavLink
              to="/research"
              className={mobileLinkClass}
              onClick={closeMobileMenu}
            >
              Research
            </NavLink>

            {/* Pages Dropdown */}
            <div>
              <button
                onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-stone-50"
              >
                Pages
                <FaChevronDown
                  className={`transition ${mobilePagesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobilePagesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <NavLink to="/about" className={mobileLinkClass} onClick={closeMobileMenu}>About</NavLink>
                  <NavLink to="/gallery" className={mobileLinkClass} onClick={closeMobileMenu}>Gallery</NavLink>
                  <NavLink to="/queries" className={mobileLinkClass} onClick={closeMobileMenu}>Queries</NavLink>
                  <NavLink to="/site-map" className={mobileLinkClass} onClick={closeMobileMenu}>Site Map</NavLink>
                  <NavLink to="/testimonials" className={mobileLinkClass} onClick={closeMobileMenu}>Testimonials</NavLink>
                  <NavLink to="/contact" className={mobileLinkClass} onClick={closeMobileMenu}>Contact</NavLink>
                </div>
              )}
            </div>

            {/* Mobile Button */}
            <button
              onClick={onBookClick}
              className="w-full rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Book Appointment
            </button>

            <div className="pt-3">
              <VisitorCounter />
            </div>

          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar;