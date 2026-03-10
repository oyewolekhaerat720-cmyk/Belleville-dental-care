import { Link } from "react-router-dom"
import { FaTooth, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-slate-900">
                <FaTooth className="text-lg" />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">Belleville Dental</p>
                <p className="text-sm text-gray-400">Family & Cosmetic Dentistry</p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Professional dental care with a focus on comfort, prevention and long-term oral
              health for individuals and families.
            </p>
          </div>

          {/* Main Links */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white">Main Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-400 transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 transition hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 transition hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 transition hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 transition hover:text-white">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/patient-education" className="text-gray-400 transition hover:text-white">
                  Patient Education
                </Link>
              </li>
              <li>
                <Link
                  to="/professional-education"
                  className="text-gray-400 transition hover:text-white"
                >
                  Pro Education
                </Link>
              </li>
              <li>
                <Link to="/queries" className="text-gray-400 transition hover:text-white">
                  Queries
                </Link>
              </li>
              <li>
                <Link to="/site-map" className="text-gray-400 transition hover:text-white">
                  Site Map
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 transition hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 transition hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-gray-500" />
                <span>13 Ogunmodede Street, Sango Ota, Ogun State</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-gray-500" />
                <span>+234 810 066 6964</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-gray-500" />
                <span>bellevilledental@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500"></span>
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-2 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Belleville Dental. All rights reserved.</p>
            <p>Designed for patient education, research and oral care access.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;