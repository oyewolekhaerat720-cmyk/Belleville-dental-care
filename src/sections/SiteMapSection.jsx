import { Link } from "react-router-dom"
import { FaChevronRight, FaSitemap } from "react-icons/fa"

const mainNavigation = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Patient Education", path: "/patient-education" },
  { name: "Pro Education", path: "/professional-education" },
  { name: "Products", path: "/products" },
  { name: "Research", path: "/research" },
]

const pagesNavigation = [
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Queries", path: "/queries" },
  { name: "Site Map", path: "/site-map" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact Us", path: "/contact" },
]

function SiteMapSection() {
  return (
    <section id="site-map" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-white shadow-sm">
            <FaSitemap className="text-xl" />
          </div>

          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
            Navigation
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Site Map</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Browse all the main sections and pages available on the Belleville Dental website.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Main Navigation */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">Main Navigation</h3>

            <div className="space-y-3">
              {mainNavigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center justify-between rounded-2xl bg-stone-50 px-5 py-4 text-slate-800 transition hover:bg-stone-100"
                >
                  <span className="font-medium">{item.name}</span>
                  <FaChevronRight className="text-sm text-slate-500" />
                </Link>
              ))}
            </div>
          </div>

          {/* Pages Dropdown Links */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">Pages</h3>

            <div className="space-y-3">
              {pagesNavigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center justify-between rounded-2xl bg-stone-50 px-5 py-4 text-slate-800 transition hover:bg-stone-100"
                >
                  <span className="font-medium">{item.name}</span>
                  <FaChevronRight className="text-sm text-slate-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white">
          <h3 className="mb-4 text-2xl font-bold">Quick Access</h3>
          <p className="max-w-3xl text-gray-300">
            Use this site map to quickly navigate through services, educational resources,
            products, research materials and contact information across the website.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SiteMapSection;