import { Link, useParams } from "react-router-dom"

function ServiceDetailsRoute({ services }) {
  const { serviceId } = useParams()
  const service = services.find((item) => item.id === serviceId)

  if (!service) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h1 className="text-2xl font-bold text-slate-900">Service not found</h1>
            <p className="mt-2 text-gray-700">
              The service you selected does not exist.
            </p>
            <Link
              to="/services"
              className="mt-4 inline-flex rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-white"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-6">
          <Link
            to="/services"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            ← Back to Services
          </Link>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50">
            {service.icon}
          </div>

          <h1 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
            {service.title}
          </h1>

          <p className="mb-6 text-lg text-gray-600">{service.desc}</p>

          <div className="mb-8 rounded-2xl bg-stone-50 p-5">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">About this service</h2>
            <p className="leading-7 text-gray-700">
              {service.longDesc || "More details about this service will be added soon."}
            </p>
          </div>

          {service.benefits && (
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="mb-3 font-semibold text-slate-900">Benefits</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {service.benefits.map((benefit) => (
                  <li key={benefit}>• {benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ServiceDetailsRoute;