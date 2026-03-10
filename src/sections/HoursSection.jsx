import { FaPhoneAlt } from "react-icons/fa"

function HoursSection() {
  const hours = [
    ["Monday - Friday", "8:00 AM - 6:00 PM"],
    ["Saturday", "9:00 AM - 3:00 PM"],
    ["Sunday", "Closed"],
  ]

  const reasons = [
    {
      title: "Personalized Treatment Plans",
      text: "Every patient receives care recommendations based on their needs and goals.",
    },
    {
      title: "Comfort-Focused Dentistry",
      text: "We prioritize a gentle experience and clear communication during treatment.",
    },
    {
      title: "Modern and Clean Clinic",
      text: "A professional environment built around safety, hygiene and comfort.",
    },
  ]

  return (
    <section id="hours" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
            Opening Hours
          </p>

          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-50 text-slate-800">
              <FaPhoneAlt />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">We are available</h2>
          </div>

          <div className="space-y-3">
            {hours.map(([day, time]) => (
              <div
                key={day}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-stone-50 px-4 py-3"
              >
                <span className="text-gray-700">{day}</span>
                <span className={`font-semibold ${time === "Closed" ? "text-red-600" : "text-slate-900"}`}>
                  {time}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-stone-50 p-4 text-sm text-gray-600">
            Walk-ins are welcome based on availability. For faster service, please book ahead.
          </div>
        </div>

        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm md:p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
            Why Choose Belleville Dental
          </p>
          <h2 className="mb-6 text-3xl font-bold text-slate-900">Premium care, warm experience</h2>

          <div className="space-y-4">
            {reasons.map((item) => (
              <div key={item.title} className="rounded-2xl border border-amber-200 bg-white p-4">
                <h3 className="mb-1 font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-6 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HoursSection;
