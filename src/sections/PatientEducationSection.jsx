import { useMemo, useState } from "react"
import {
  FaPlayCircle,
  FaUserMd,
  FaTimes,
  FaTooth,
  FaCheckCircle,
} from "react-icons/fa"

const symptomQuestions = [
  {
    id: "pain",
    question: "Do you currently have tooth pain or persistent discomfort?",
  },
  {
    id: "bleeding",
    question: "Do your gums bleed when brushing or flossing?",
  },
  {
    id: "swelling",
    question: "Do you have swelling in your gums, face or jaw?",
  },
  {
    id: "sensitivity",
    question: "Do you feel strong sensitivity to hot, cold or sweet foods?",
  },
  {
    id: "injury",
    question: "Have you had a recent dental injury, broken tooth or loose filling?",
  },
]

const brushingSteps = [
  "Hold your toothbrush at a 45-degree angle to the gum line.",
  "Use gentle circular motions instead of hard back-and-forth scrubbing.",
  "Brush the outer, inner and chewing surfaces of every tooth.",
  "Brush your tongue gently to help reduce bacteria and bad breath.",
  "Brush for at least 2 minutes, twice every day.",
  "Replace your toothbrush or brush head every 3 months or sooner if bristles spread out.",
]

const brushingMistakes = [
  "Brushing too hard",
  "Using a worn-out toothbrush",
  "Skipping the gum line",
  "Brushing for less than 2 minutes",
  "Ignoring the tongue",
]

const brushingVideoUrl = "https://www.youtube-nocookie.com/embed/xm9c5HAUBpY"

function PatientEducationSection({ patientGuides = [], treatmentImage }) {
  const [selectedGuide, setSelectedGuide] = useState(null)
  const [showAssessment, setShowAssessment] = useState(false)
  const [showMediaPanel, setShowMediaPanel] = useState(false)
  const [answers, setAnswers] = useState({})

  const handleOpenGuide = (guide) => {
    setSelectedGuide(guide)

    setTimeout(() => {
      document.getElementById("guide-details")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }

  const handleCloseGuide = () => {
    setSelectedGuide(null)
  }

  const handleOpenAssessment = () => {
    setShowAssessment(true)

    setTimeout(() => {
      document.getElementById("symptom-checker-panel")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }

  const handleCloseAssessment = () => {
    setShowAssessment(false)
  }

  const handleOpenMedia = () => {
    setShowMediaPanel(true)

    setTimeout(() => {
      document.getElementById("featured-media-panel")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }

  const handleCloseMedia = () => {
    setShowMediaPanel(false)
  }

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const yesCount = useMemo(() => {
    return Object.values(answers).filter((value) => value === "yes").length
  }, [answers])

  const answeredCount = useMemo(() => {
    return Object.keys(answers).length
  }, [answers])

  const assessmentResult = useMemo(() => {
    if (answeredCount === 0) return null

    if (answers.swelling === "yes" || answers.injury === "yes") {
      return {
        title: "Urgent dental attention advised",
        text: "Your answers suggest that you may need urgent dental assessment, especially if the symptoms are severe, sudden or getting worse.",
        style: "border-red-200 bg-red-50 text-red-800",
      }
    }

    if (yesCount >= 3) {
      return {
        title: "Book a dental appointment soon",
        text: "Your responses suggest that you should schedule a dental visit soon for proper examination and treatment guidance.",
        style: "border-amber-200 bg-amber-50 text-amber-800",
      }
    }

    if (yesCount >= 1) {
      return {
        title: "Routine dental checkup recommended",
        text: "Your responses suggest mild oral health concerns. A routine dental checkup is recommended for proper advice and early care.",
        style: "border-blue-200 bg-blue-50 text-blue-800",
      }
    }

    return {
      title: "Continue preventive care",
      text: "Your answers do not suggest immediate concern. Continue good brushing, flossing and regular dental checkups.",
      style: "border-emerald-200 bg-emerald-50 text-emerald-800",
    }
  }, [answers, answeredCount, yesCount])

  return (
    <section id="patient-education" className="border-t border-gray-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-600">
              Resources
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Patient Education</h2>
            <p className="mt-2 max-w-xl text-gray-600">
              Empowering you with knowledge to maintain optimal oral health between visits.
            </p>
          </div>


        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <button
              type="button"
              onClick={handleOpenMedia}
              className={`group relative h-full min-h-[300px] w-full overflow-hidden rounded-3xl bg-slate-900 text-left shadow-lg transition-all duration-300 ${showMediaPanel
                ? "ring-2 ring-amber-300 shadow-xl"
                : "hover:-translate-y-1 hover:shadow-xl"
                }`}
            >
              <img
                src={treatmentImage}
                alt="How to Brush Correctly"
                className="h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition group-hover:bg-amber-500">
                  <FaPlayCircle className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">How to Brush Correctly</h3>
                <p className="mt-1 text-sm text-gray-300">Watch our 2-minute guide</p>
              </div>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {patientGuides.map((guide) => {
              const isActive = selectedGuide?.id === guide.id

              return (
                <div
                  key={guide.title}
                  className={`flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 ${isActive
                    ? "border-2 border-amber-500 bg-amber-50 shadow-lg ring-2 ring-amber-200/70 -translate-y-1"
                    : "border border-gray-200 bg-stone-50 hover:border-amber-300 hover:shadow-md"
                    }`}
                >
                  <div>
                    <div
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg shadow-sm ${isActive ? "bg-amber-100 text-amber-700" : "bg-white text-amber-600"
                        }`}
                    >
                      {guide.icon}
                    </div>
                    <h3 className="mb-2 font-semibold text-slate-900">{guide.title}</h3>
                    <p className="mb-4 text-sm text-gray-600">{guide.desc}</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <span className="text-xs font-medium text-gray-500">{guide.readTime}</span>
                    <button
                      type="button"
                      onClick={() => handleOpenGuide(guide)}
                      className={`text-sm font-semibold transition ${isActive ? "text-amber-700" : "text-slate-800 hover:text-amber-600"
                        }`}
                    >
                      {isActive ? "Opened Below" : "Read Guide"}
                    </button>
                  </div>
                </div>
              )
            })}

            <div
              className={`sm:col-span-2 flex flex-col justify-center rounded-2xl p-6 text-white transition-all duration-300 ${showAssessment
                ? "bg-amber-600 shadow-lg ring-2 ring-amber-200/70"
                : "bg-slate-800"
                }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Symptom Checker</h3>
                  <p
                    className={`${showAssessment ? "text-amber-50" : "text-gray-300"} max-w-md text-sm`}
                  >
                    Not sure if you need to see a dentist? Use our interactive tool to assess your
                    symptoms.
                  </p>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 sm:flex">
                  <FaUserMd className="text-xl" />
                </div>
              </div>

              <button
                type="button"
                onClick={handleOpenAssessment}
                className={`mt-6 w-full rounded-xl py-2.5 text-sm font-semibold transition sm:w-auto sm:self-start sm:px-6 ${showAssessment
                  ? "bg-white text-amber-700 hover:bg-amber-50"
                  : "bg-white text-slate-900 hover:bg-gray-100"
                  }`}
              >
                {showAssessment ? "Assessment Opened Below" : "Start Assessment"}
              </button>
            </div>
          </div>
        </div>

        {showMediaPanel && (
          <div
            id="featured-media-panel"
            className="mt-10 animate-[fadeSlideIn_.45s_ease-out] rounded-3xl border border-gray-200 bg-white p-6 shadow-lg md:p-8"
          >
            <div className="flex flex-col gap-4 border-b border-gray-200 pb-5 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 shadow-sm">
                  <FaPlayCircle />
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-600">
                    Featured Media
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">How to Brush Correctly</h3>
                  <p className="mt-2 text-sm text-gray-500">2-minute video guide</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseMedia}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-gray-50"
              >
                <FaTimes className="text-xs" />
                Close Media
              </button>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-md">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={brushingVideoUrl}
                      title="How to Brush Correctly"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-stone-50 p-5">
                  <h4 className="mb-3 text-lg font-bold text-slate-900">Quick Brushing Steps</h4>
                  <div className="space-y-3">
                    {brushingSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm text-gray-700">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
                          {index + 1}
                        </div>
                        <p className="leading-7">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h4 className="mb-3 text-lg font-bold text-slate-900">Common Mistakes to Avoid</h4>
                  <div className="space-y-3">
                    {brushingMistakes.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm text-gray-700">
                        <FaTimes className="mt-1 shrink-0 text-red-500" />
                        <p className="leading-7">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-stone-50 p-5">
                  <h4 className="mb-3 text-lg font-bold text-slate-900">Recommended for Better Brushing</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm text-gray-700">
                      <FaCheckCircle className="mt-1 shrink-0 text-emerald-600" />
                      <p className="leading-7">Use a soft-bristle toothbrush</p>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-700">
                      <FaCheckCircle className="mt-1 shrink-0 text-emerald-600" />
                      <p className="leading-7">Choose fluoride toothpaste</p>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-700">
                      <FaCheckCircle className="mt-1 shrink-0 text-emerald-600" />
                      <p className="leading-7">Brush twice daily for at least 2 minutes</p>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-700">
                      <FaCheckCircle className="mt-1 shrink-0 text-emerald-600" />
                      <p className="leading-7">Replace your brush every 3 months</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-800 p-5 text-white">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-amber-300">
                      <FaTooth />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Healthy Brushing Reminder</h4>
                      <p className="mt-2 text-sm leading-7 text-gray-300">
                        Gentle and consistent brushing protects both your teeth and gums better than
                        brushing too hard.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCloseMedia}
                  className="rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Done Watching
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedGuide && (
          <div
            id="guide-details"
            className="mt-10 animate-[fadeSlideIn_.45s_ease-out] rounded-3xl border border-gray-200 bg-white p-6 shadow-lg md:p-8"
          >
            <div className="flex flex-col gap-4 border-b border-gray-200 pb-5 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 shadow-sm">
                  {selectedGuide.icon}
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-600">
                    {selectedGuide.category}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">{selectedGuide.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {selectedGuide.readTime}
                    {selectedGuide.fileSize ? ` • ${selectedGuide.fileSize}` : ""}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseGuide}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-gray-50"
              >
                <FaTimes className="text-xs" />
                Close Guide
              </button>
            </div>

            <div className="mt-6">
              <p className="mb-6 max-w-3xl text-base leading-7 text-gray-600">
                {selectedGuide.desc}
              </p>

              <div className="space-y-4">
                {selectedGuide.content?.map((item, index) => (
                  <div key={index} className="rounded-2xl bg-stone-50 p-5">
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
                      Point {index + 1}
                    </h4>
                    <p className="text-sm leading-7 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCloseGuide}
                  className="rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Done Reading
                </button>
              </div>
            </div>
          </div>
        )}

        {showAssessment && (
          <div
            id="symptom-checker-panel"
            className="mt-10 animate-[fadeSlideIn_.45s_ease-out] rounded-3xl border border-gray-200 bg-white p-6 shadow-lg md:p-8"
          >
            <div className="flex flex-col gap-4 border-b border-gray-200 pb-5 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 shadow-sm">
                  <FaUserMd />
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-600">
                    Quick Self-Check
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">Symptom Assessment</h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Answer a few quick questions to get a simple recommendation. This is only a
                    general guide and does not replace a dental examination.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseAssessment}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-gray-50"
              >
                <FaTimes className="text-xs" />
                Close Assessment
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {symptomQuestions.map((item, index) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-gray-200 bg-stone-50 p-5"
                >
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-600">
                    Question {index + 1}
                  </p>
                  <h4 className="text-base font-semibold text-slate-900">{item.question}</h4>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => handleAnswer(item.id, "yes")}
                      className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${answers[item.id] === "yes"
                        ? "bg-amber-500 text-white"
                        : "border border-gray-300 bg-white text-slate-800 hover:bg-amber-50"
                        }`}
                    >
                      Yes
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAnswer(item.id, "no")}
                      className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${answers[item.id] === "no"
                        ? "bg-slate-800 text-white"
                        : "border border-gray-300 bg-white text-slate-800 hover:bg-gray-50"
                        }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {assessmentResult && (
              <div className={`mt-6 rounded-2xl border p-5 ${assessmentResult.style}`}>
                <h4 className="text-lg font-bold">{assessmentResult.title}</h4>
                <p className="mt-2 text-sm leading-7">{assessmentResult.text}</p>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCloseAssessment}
                className="rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Done
              </button>

              <button
                type="button"
                onClick={() => setAnswers({})}
                className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-gray-50"
              >
                Reset Answers
              </button>
            </div>
          </div>
        )}
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

export default PatientEducationSection;