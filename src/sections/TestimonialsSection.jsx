import { FaStar } from "react-icons/fa"

function TestimonialsSection({ testimonials = [] }) {
  return (
    <section id="testimonials" className="bg-[#f3f3f3] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-600">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Real experiences from patients who have trusted Belleville Dental with their care.
          </p>
        </div>

        <div className="columns-1 gap-8 md:columns-2 xl:columns-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="mb-6 break-inside-avoid rounded-lg bg-[#ededed] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className={`text-lg ${index < testimonial.rating ? "text-amber-400" : "text-gray-300"
                      }`}
                  />
                ))}
              </div>

              <p className="text-[15px] leading-8 text-slate-500 md:text-[16px]">
                {testimonial.quote}
              </p>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {testimonial.name}
                </h3>
                <p className="mt-1 text-xs text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection;