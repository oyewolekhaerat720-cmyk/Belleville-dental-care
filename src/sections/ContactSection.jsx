import { useState } from "react"
import { FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    service: "",
    message: ""
  })

  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  const validate = () => {
    let newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email"
    }

    if (!formData.date) {
      newErrors.date = "Please select a date"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) return

    setShowSuccess(true)

    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      service: "",
      message: ""
    })

    setTimeout(() => {
      setShowSuccess(false)
    }, 4000)
  }

  return (
    <section id="contact" className="bg-amber-50 py-20">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Book your appointment today
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">

          {/* CONTACT INFO */}
          <div className="space-y-6">

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-4 text-gray-700">

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-slate-700" />
                  <p>
                    <span className="font-semibold text-slate-800">Address:</span>
                    13 Ogunmodede Street, Sango Ota, Nigeria
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="mt-1 shrink-0 text-slate-700" />
                  <p>
                    <span className="font-semibold text-slate-800">Phone:</span>{" "}
                    <a href="tel:+2348100666964" className="hover:underline">
                      +234 810 066 6964
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 shrink-0 text-slate-700" />
                  <p>
                    <span className="font-semibold text-slate-800">Email:</span>{" "}
                    <a href="mailto:bellevilledental@gmail.com" className="hover:underline">
                      bellevilledental@gmail.com
                    </a>
                  </p>
                </div>

              </div>

              {/* GOOGLE MAP */}
              <div className="mt-6 rounded-2xl border border-gray-200 bg-stone-50 p-4">
                <div className="relative overflow-hidden" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.657924734612!2d3.220138774984251!3d6.702812693273767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9b4716b9b3e1%3A0x6d9f7e597c458e0a!2sOgunmodede%20St%2C%20Sango%20Ota!5e0!3m2!1sen!2sng!4v1709280000000!5m2!1sen!2sng"
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

            </div>

            {/* EMERGENCY */}
            <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
              <h3 className="mb-2 text-lg font-semibold">Need urgent help?</h3>
              <p className="mb-4 text-sm text-gray-300">
                Call our emergency line for immediate assistance.
              </p>

              <a
                href="tel:+2348100666964"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-gray-100"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>

          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">

            <h3 className="text-xl font-semibold text-slate-900">
              Appointment Request Form
            </h3>

            <p className="mt-1 mb-6 text-sm text-gray-600">
              Fill in your details and we will contact you to confirm your appointment.
            </p>

            {/* SUCCESS MESSAGE */}
            {showSuccess && (
              <div className="mb-5 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-700 animate-pulse">
                <FaCheckCircle />
                Appointment request submitted successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid gap-4 md:grid-cols-2">

                <div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm"
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

              </div>

              <div className="grid gap-4 md:grid-cols-2">

                <div>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <input
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    type="date"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm"
                  />
                  {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
                </div>

              </div>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm"
              >
                <option value="">Choose Service (Optional)</option>
                <option>General Checkup</option>
                <option>Teeth Cleaning</option>
                <option>Teeth Whitening</option>
                <option>Fillings</option>
                <option>Root Canal</option>
                <option>Orthodontics</option>
                <option>Emergency Dental Care</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Message"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-800 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
              >
                Submit Request
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;