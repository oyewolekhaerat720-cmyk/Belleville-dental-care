import { Link } from "react-router-dom"

function ServicesSection({ services }) {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
              Services
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Our Dental Services
            </h2>
          </div>
          <p className="max-w-2xl text-gray-600">
            Comprehensive care tailored to your needs. Click any service to view more details.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.id || service.title}
              to={`/services/${service.id}`}
              className="group relative min-h-[320px] rounded-2xl border border-gray-200 bg-white p-6 pb-20 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50">
                {service.icon}
              </div>

              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="text-sm leading-8 text-gray-600">
                {service.desc}
              </p>

              <div className="absolute bottom-6 left-6 text-sm font-semibold text-slate-500 transition group-hover:text-slate-900">
                View service →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection;