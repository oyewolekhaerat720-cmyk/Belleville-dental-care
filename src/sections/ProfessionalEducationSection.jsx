import { useMemo, useState } from "react"
import {
  FaCertificate,
  FaCheckCircle,
  FaGraduationCap,
  FaFileAlt,
  FaUserGraduate,
  FaBriefcaseMedical,
  FaChalkboardTeacher,
  FaTimes,
} from "react-icons/fa"
import { MdMedicalServices } from "react-icons/md"

const helpDocuments = [
  "Clinical procedure handbook",
  "Dental materials quick reference",
  "Infection prevention checklist",
  "Radiography safety guide",
]

const facultyResources = [
  "Lecture slides and teaching notes",
  "Clinical supervision rubrics",
  "Faculty mentoring toolkit",
  "Seminar delivery resources",
]

const studentResources = [
  "Study guides for oral pathology",
  "Laboratory preparation notes",
  "Clinical placement support materials",
  "Exam revision resources",
]

const caseStudies = [
  {
    title: "Early Childhood Caries Management",
    text: "A case study showing diagnosis, preventive planning and restorative care for children.",
  },
  {
    title: "Periodontal Care Review",
    text: "A professional case review covering treatment planning and long-term gum health management.",
  },
  {
    title: "Cosmetic Smile Rehabilitation",
    text: "A case study focusing on aesthetic treatment planning and conservative smile enhancement.",
  },
]

function ProfessionalEducationSection({ professionalCourses = [] }) {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [showCurriculum, setShowCurriculum] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    profession: "",
    format: "",
  })

  const openRegistration = (course) => {
    setSelectedCourse(course)
    setSubmitted(false)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      profession: "",
      format: course.format || "",
    })

    setTimeout(() => {
      document.getElementById("course-registration-panel")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }

  const closeRegistration = () => {
    setSelectedCourse(null)
    setSubmitted(false)
  }

  const openCurriculum = () => {
    setShowCurriculum(true)

    setTimeout(() => {
      document.getElementById("curriculum-overview-panel")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }

  const closeCurriculum = () => {
    setShowCurriculum(false)
  }

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

    setTimeout(() => {
      document.getElementById("course-registration-panel")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }

  const curriculumAreas = useMemo(
    () => [
      "Endodontics and root canal treatment",
      "Digital smile design and esthetic planning",
      "Infection control and clinical safety",
      "Pediatric dentistry and behavior guidance",
      "Dental implantology and restorative workflow",
      "Medical emergencies in dental practice",
      "Laser dentistry fundamentals and applications",
    ],
    []
  )

  const learningFormats = useMemo(
    () => [
      "In-person workshops",
      "Live online classes",
      "Self-paced modules",
      "Hybrid practical sessions",
    ],
    []
  )

  const professionalOutcomes = useMemo(
    () => [
      "Accredited CPD/CME learning",
      "Improved clinical confidence",
      "Updated evidence-based knowledge",
      "Hands-on practical exposure",
      "Better patient care delivery",
    ],
    []
  )

  return (
    <section id="professional-education" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
            For Dentists
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Professional Education</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Continuing education resources for students and practitioners, including related
            courses, help documents, faculty resources, student resources and case studies.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {professionalCourses.map((course) => {
              const isSelected = selectedCourse?.id === course.id

              return (
                <div
                  key={course.title}
                  className={`flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between ${isSelected ? "border-amber-400 ring-2 ring-amber-200/70" : "border-gray-200"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-700">
                      <FaGraduationCap className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{course.title}</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MdMedicalServices className="text-xs" /> {course.level}
                        </span>
                        <span>•</span>
                        <span>{course.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <span
                      className={`text-xs font-semibold ${course.spots === "4 spots left" ? "text-red-500" : "text-emerald-600"
                        }`}
                    >
                      {course.spots}
                    </span>

                    <button
                      type="button"
                      onClick={() => openRegistration(course)}
                      className="rounded-lg bg-slate-800 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
                    >
                      {isSelected ? "Opened Below" : "Register"}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <div
            className={`rounded-3xl p-8 text-white transition-all duration-300 ${showCurriculum
                ? "bg-amber-600 shadow-lg ring-2 ring-amber-200/70"
                : "bg-slate-900"
              }`}
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-slate-900">
              <FaCertificate className="text-xl" />
            </div>
            <h3 className="mb-4 text-2xl font-bold">Accredited CME</h3>
            <p className="mb-6 leading-relaxed text-gray-100">
              All our courses are accredited by the Medical and Dental Council of Nigeria (MDCN).
              Earn credits while learning current techniques and professional practices.
            </p>
            <ul className="mb-8 space-y-3 text-sm text-gray-100">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-white" /> Hands-on Workshops
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-white" /> Digital Resource Library
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-white" /> Networking Events
              </li>
            </ul>
            <button
              type="button"
              onClick={openCurriculum}
              className={`w-full rounded-xl py-3 text-sm font-bold transition ${showCurriculum
                  ? "bg-white text-amber-700 hover:bg-amber-50"
                  : "bg-white text-slate-900 hover:bg-gray-100"
                }`}
            >
              {showCurriculum ? "Curriculum Opened Below" : "View Curriculum"}
            </button>
          </div>
        </div>

        {showCurriculum && (
          <div
            id="curriculum-overview-panel"
            className="mt-10 animate-[fadeSlideIn_.45s_ease-out] rounded-3xl border border-gray-200 bg-white p-6 shadow-lg md:p-8"
          >
            <div className="flex flex-col gap-4 border-b border-gray-200 pb-5 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-amber-600 shadow-sm">
                  <FaCertificate className="text-xl" />
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-600">
                    Program Overview
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">Professional Curriculum</h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Explore the main curriculum structure, learning formats and outcomes across our
                    professional education programs.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeCurriculum}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-gray-50"
              >
                <FaTimes className="text-xs" />
                Close Curriculum
              </button>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl bg-stone-50 p-5">
                <h4 className="mb-4 text-lg font-bold text-slate-900">Core Learning Areas</h4>
                <div className="space-y-3">
                  {curriculumAreas.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <FaCheckCircle className="mt-1 shrink-0 text-emerald-600" />
                      <p className="leading-7">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-stone-50 p-5">
                <h4 className="mb-4 text-lg font-bold text-slate-900">Learning Formats</h4>
                <div className="space-y-3">
                  {learningFormats.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <FaCheckCircle className="mt-1 shrink-0 text-emerald-600" />
                      <p className="leading-7">{item}</p>
                    </div>
                  ))}
                </div>

                <h4 className="mb-4 mt-6 text-lg font-bold text-slate-900">Professional Outcomes</h4>
                <div className="space-y-3">
                  {professionalOutcomes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <FaCheckCircle className="mt-1 shrink-0 text-emerald-600" />
                      <p className="leading-7">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-stone-50 p-5">
                <h4 className="mb-4 text-lg font-bold text-slate-900">Sample Curriculum Path</h4>

                <div className="space-y-4">
                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                      Beginner
                    </p>
                    <p className="mt-2 text-sm leading-7 text-gray-700">
                      Start with infection control, pediatric behavior guidance and laser
                      dentistry fundamentals.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                      Intermediate
                    </p>
                    <p className="mt-2 text-sm leading-7 text-gray-700">
                      Progress into endodontics, implantology and medical emergencies in practice.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                      Advanced
                    </p>
                    <p className="mt-2 text-sm leading-7 text-gray-700">
                      Move into full mouth rehabilitation and digital smile design masterclass.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeCurriculum}
                  className="mt-6 rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Done Viewing
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedCourse && (
          <div
            id="course-registration-panel"
            className="mt-10 animate-[fadeSlideIn_.45s_ease-out] rounded-3xl border border-gray-200 bg-white p-6 shadow-lg md:p-8"
          >
            <div className="flex flex-col gap-4 border-b border-gray-200 pb-5 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-amber-600 shadow-sm">
                  <FaGraduationCap className="text-xl" />
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-600">
                    Course Registration
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">{selectedCourse.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {selectedCourse.level} • {selectedCourse.date}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeRegistration}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-gray-50"
              >
                <FaTimes className="text-xs" />
                Close
              </button>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
              <div className="space-y-4">
                <div className="rounded-2xl bg-stone-50 p-5">
                  <h4 className="mb-3 text-lg font-bold text-slate-900">Course Overview</h4>
                  <p className="text-sm leading-7 text-gray-700">{selectedCourse.description}</p>
                </div>

                <div className="rounded-2xl bg-stone-50 p-5">
                  <h4 className="mb-3 text-lg font-bold text-slate-900">Course Details</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><span className="font-semibold text-slate-900">Instructor:</span> {selectedCourse.instructor}</p>
                    <p><span className="font-semibold text-slate-900">Credits:</span> {selectedCourse.credits}</p>
                    <p><span className="font-semibold text-slate-900">Duration:</span> {selectedCourse.duration}</p>
                    <p><span className="font-semibold text-slate-900">Format:</span> {selectedCourse.format}</p>
                    <p><span className="font-semibold text-slate-900">Price:</span> {selectedCourse.price}</p>
                    <p><span className="font-semibold text-slate-900">Availability:</span> {selectedCourse.spots}</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-stone-50 p-5">
                  <h4 className="mb-3 text-lg font-bold text-slate-900">Curriculum</h4>
                  <div className="space-y-3">
                    {selectedCourse.curriculum?.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm text-gray-700">
                        <FaCheckCircle className="mt-1 shrink-0 text-emerald-600" />
                        <p className="leading-7">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h4 className="mb-4 text-lg font-bold text-slate-900">Register for this Course</h4>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-800">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-slate-500"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-800">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-slate-500"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-800">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-slate-500"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-800">
                        Profession
                      </label>
                      <input
                        type="text"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-slate-500"
                        placeholder="Dentist, student, clinician, etc."
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-800">
                        Preferred Format
                      </label>
                      <input
                        type="text"
                        name="format"
                        value={formData.format}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-slate-500"
                        placeholder="Preferred course format"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-slate-800 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                      Submit Registration
                    </button>
                  </form>

                  {submitted && (
                    <div className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                      Registration submitted successfully for <strong>{selectedCourse.title}</strong>.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-slate-700">
                <FaFileAlt />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Help Documents</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              {helpDocuments.map((item) => (
                <li key={item} className="rounded-xl bg-stone-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-slate-700">
                <FaChalkboardTeacher />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Faculty Resources</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              {facultyResources.map((item) => (
                <li key={item} className="rounded-xl bg-stone-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-slate-700">
                <FaUserGraduate />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Student Resources</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              {studentResources.map((item) => (
                <li key={item} className="rounded-xl bg-stone-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-slate-700">
                <FaBriefcaseMedical />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Case Studies</h3>
            </div>
            <div className="space-y-4">
              {caseStudies.map((item) => (
                <div key={item.title} className="rounded-xl bg-stone-50 px-4 py-4">
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default ProfessionalEducationSection;