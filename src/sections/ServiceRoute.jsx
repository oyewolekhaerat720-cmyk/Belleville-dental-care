import { Link } from "react-router-dom"

function ServicesRoute({ services }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
              Services
            </p>
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Our Dental Services
            </h1>
          </div>
          <p className="max-w-2xl text-gray-600">
            Comprehensive care tailored to your needs. Click any service to view more details.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                {service.icon}
              </div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">{service.title}</h2>
              <p className="text-sm leading-6 text-gray-600">{service.desc}</p>
              <div className="mt-4 text-sm font-medium text-slate-800 opacity-70 transition group-hover:opacity-100">
                View service →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesRoute