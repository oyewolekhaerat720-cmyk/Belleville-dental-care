import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

function HeroSection({ clinicImage, waitingImage, treatmentImage }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/70 to-white" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm">
            <FaCheckCircle className="text-emerald-500" />
            Trusted Dental Care
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Premium dental care for your healthiest smile
          </h1>

          <p className="mb-8 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
            Belleville Dental provides modern, compassionate and professional care for families,
            children and adults. From routine checkups to cosmetic treatments, your comfort comes
            first.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-slate-800 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
            >
              Book Appointment
            </a>
            <Link
              to="/services"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-stone-50"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-slate-900">10+</p>
              <p className="text-sm text-gray-600">Years of care</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-slate-900">1,500+</p>
              <p className="text-sm text-gray-600">Happy patients</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-slate-900">24/7</p>
              <p className="text-sm text-gray-600">Emergency support</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded-2xl bg-amber-100 blur-2xl" />
          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-slate-200 blur-2xl" />

          <div className="relative rounded-3xl border border-amber-200 bg-amber-50 p-4 shadow-xl">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-dashed border-amber-300 bg-white p-6">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-semibold text-slate-900">Clinic Preview</p>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                    Open Today
                  </span>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-xl bg-stone-50 p-4 text-sm text-gray-600">
                    <img
                      src={clinicImage}
                      alt="Clinic preview"
                      className="h-40 w-full rounded-xl object-cover md:h-48"
                      loading="lazy"
                    />
                  </div>
                  <div className="rounded-xl bg-stone-50 p-4 text-sm text-gray-600">
                    <img
                      src={waitingImage}
                      alt="Waiting area"
                      className="h-40 w-full rounded-xl object-cover md:h-48"
                      loading="lazy"
                    />
                  </div>
                  <div className="rounded-xl bg-stone-50 p-4 text-sm text-gray-600">
                    <img
                      src={treatmentImage}
                      alt="Treatment room"
                      className="h-40 w-full rounded-xl object-cover md:h-48"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="mb-1 text-sm text-gray-500">Next Available</p>
                  <p className="text-lg font-semibold text-slate-900">Today, 4:30 PM</p>
                  <p className="mt-2 text-sm text-gray-600">Call to confirm your appointment.</p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="mb-2 text-sm font-semibold text-slate-800">Why patients choose us</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Gentle and patient-focused care</li>
                    <li>• Modern equipment and clean facility</li>
                    <li>• Flexible appointment scheduling</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-900 p-5 text-white shadow-sm">
                  <p className="text-sm text-gray-300">Emergency line</p>
                  <p className="mt-1 text-lg font-semibold">+234 810 066 6964</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;