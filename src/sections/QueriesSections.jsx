import { useState } from "react"

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "Most patients should visit every six months for routine checkups and professional cleaning.",
  },
  {
    question: "What should I do during a dental emergency?",
    answer:
      "Call the clinic immediately. For severe pain, bleeding or a broken tooth, seek urgent dental care as soon as possible.",
  },
  {
    question: "Are electric toothbrushes better than manual ones?",
    answer:
      "Electric toothbrushes can improve cleaning for many people, especially children, older adults and patients with limited hand movement.",
  },
  {
    question: "How can I prevent cavities?",
    answer:
      "Brush twice daily with fluoride toothpaste, floss regularly, reduce sugary foods and schedule regular dental checkups.",
  },
]

function QueriesSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    setFormData({
      name: "",
      email: "",
      question: "",
    })

    setTimeout(() => {
      setSubmitted(false)
    }, 4000)
  }

  return (
    <section className="bg-stone-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
            Queries
          </p>
          <h1 className="text-4xl font-bold text-slate-900">Questions and Patient Support</h1>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Find quick answers to common dental questions or send us your own query.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>

            <div className="mt-6 space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-2xl border border-gray-200 p-5">
                  <h3 className="text-lg font-semibold text-slate-800">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold text-slate-900">Send a Query</h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              Fill in your details and your question below.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-800">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-slate-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-800">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-slate-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="question"
                  className="mb-2 block text-sm font-medium text-slate-800"
                >
                  Your Question
                </label>
                <textarea
                  id="question"
                  name="question"
                  rows="5"
                  value={formData.question}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-slate-500"
                  placeholder="Type your question here"
                />
              </div>

              <button
                type="submit"
                className="inline-flex rounded-xl bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Submit Query
              </button>

              {submitted && (
                <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  Your query has been submitted successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QueriesSection;