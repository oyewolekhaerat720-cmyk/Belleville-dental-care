import React, { useState, useEffect } from "react"
import {
  FaPlayCircle,
  FaPhotoVideo,
  FaDownload,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa"

const mediaLibrary = [
  {
    id: 1,
    title: "Preventive Dentistry Webinar",
    type: "Webinar",
    description:
      "A recorded session on prevention strategies, oral hygiene and long-term dental care.",
    action: "Watch Now",
    icon: <FaPlayCircle className="text-xl" />,
    panelTitle: "Preventive Dentistry Webinar",
    panelSubtitle: "Featured recorded session",
    details:
      "This webinar focuses on preventive dentistry principles, daily oral hygiene habits and strategies for reducing long-term dental complications.",
    points: [
      "Importance of routine checkups and professional cleaning",
      "How brushing and flossing habits affect long-term oral health",
      "Early signs of gum disease and tooth decay",
      "Practical prevention strategies for families and children",
    ],
  },
  {
    id: 2,
    title: "Dental Care Infographics",
    type: "Infographics",
    description:
      "Patient-friendly visual materials covering brushing, flossing and gum care.",
    action: "View Library",
    icon: <FaPhotoVideo className="text-xl" />,
    panelTitle: "Dental Care Infographics Library",
    panelSubtitle: "Visual patient education resources",
    details:
      "This library presents easy-to-understand infographic resources designed to support patient education and improve daily oral care habits.",
    points: [
      "Correct brushing technique infographic",
      "Daily flossing steps and common mistakes",
      "Signs of gum disease visual guide",
      "Healthy foods for stronger teeth and gums",
    ],
  },
  {
    id: 3,
    title: "Clinical Research Downloads",
    type: "Articles",
    description:
      "Downloadable materials, journal summaries and clinical learning resources.",
    action: "Download",
    icon: <FaDownload className="text-xl" />,
    panelTitle: "Clinical Research Downloads",
    panelSubtitle: "Research summaries and learning resources",
    details:
      "Access article summaries, research notes and extended learning materials related to clinical dentistry and oral health improvement.",
    points: [
      "Clinical paper summary collection",
      "Research interpretation notes for learners",
      "Evidence-based oral care reference sheets",
      "Downloadable academic reading materials",
    ],
  },
]

const ResearchSection = ({ researchPapers = [] }) => {
  const [selectedPaper, setSelectedPaper] = useState(null)
  const [selectedMedia, setSelectedMedia] = useState(null)

  const openModal = (paper) => {
    setSelectedPaper(paper)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedPaper(null)
    document.body.style.overflow = "unset"
  }

  const openMedia = (item) => {
    setSelectedMedia(item)

    setTimeout(() => {
      document.getElementById("media-library-panel")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }

  const closeMedia = () => {
    setSelectedMedia(null)
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal()
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      <section className="research-section bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
              Research
            </p>
            <h2 className="mb-4 text-3xl font-bold text-center text-slate-900 md:text-4xl">
              Latest Research
            </h2>
            <p className="mx-auto max-w-2xl text-center text-gray-600">
              Explore the latest clinical studies, scientific contributions and educational media
              resources from the Belleville Dental team.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {researchPapers.map((paper) => (
              <div
                key={paper.id}
                className="flex h-full flex-col rounded-lg bg-gray-50 p-6 shadow transition-shadow hover:shadow-lg"
              >
                <h3 className="mb-2 text-xl font-semibold">{paper.title}</h3>
                <p className="mb-2 text-sm text-gray-600">{paper.authors}</p>
                <p className="mb-4 text-sm text-gray-500">
                  {paper.journal}, {paper.year} | {paper.volume} | {paper.pages}
                </p>
                <p className="mb-4 flex-grow text-gray-700">{paper.abstract}</p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-gray-400">DOI: {paper.doi}</span>
                  <button
                    onClick={() => openModal(paper)}
                    className="inline-flex items-center rounded bg-teal-600 px-4 py-2 text-sm text-white transition hover:bg-teal-700"
                  >
                    Read Full Paper
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900">Media Library</h3>
              <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                Access webinars, visual learning materials and downloadable articles for extended
                dental education.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mediaLibrary.map((item) => {
                const isActive = selectedMedia?.id === item.id

                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border p-6 transition ${isActive
                      ? "border-2 border-teal-400 bg-teal-50 shadow-md ring-2 ring-teal-100"
                      : "border-gray-200 bg-stone-50 hover:border-teal-300 hover:shadow-md"
                      }`}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-teal-600 shadow-sm">
                      {item.icon}
                    </div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-teal-700">
                      {item.type}
                    </p>
                    <h4 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h4>
                    <p className="mb-4 text-sm leading-6 text-gray-600">{item.description}</p>
                    <button
                      type="button"
                      onClick={() => openMedia(item)}
                      className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                      {isActive ? "Opened Below" : item.action}
                    </button>
                  </div>
                )
              })}
            </div>

            {selectedMedia && (
              <div
                id="media-library-panel"
                className="mt-10 animate-[fadeSlideIn_.45s_ease-out] rounded-3xl border border-gray-200 bg-white p-6 shadow-lg md:p-8"
              >
                <div className="flex flex-col gap-4 border-b border-gray-200 pb-5 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 shadow-sm">
                      {selectedMedia.icon}
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-teal-600">
                        {selectedMedia.type}
                      </p>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {selectedMedia.panelTitle}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        {selectedMedia.panelSubtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={closeMedia}
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-gray-50"
                  >
                    <FaTimes className="text-xs" />
                    Close Media
                  </button>
                </div>

                <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <div className="flex min-h-[260px] items-center justify-center rounded-3xl bg-slate-900 p-8 text-center text-white shadow-sm">
                      <div>
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
                          {selectedMedia.icon}
                        </div>
                        <h4 className="text-xl font-bold">{selectedMedia.panelTitle}</h4>
                        <p className="mt-3 text-sm leading-7 text-gray-300">
                          Featured media preview coming soon. Use the learning points beside this
                          panel for now.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 text-lg font-bold text-slate-900">Overview</h4>
                    <p className="mb-6 text-sm leading-7 text-gray-700">
                      {selectedMedia.details}
                    </p>

                    <h4 className="mb-3 text-lg font-bold text-slate-900">Included Topics</h4>
                    <div className="space-y-3">
                      {selectedMedia.points.map((point, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 rounded-2xl bg-stone-50 p-4 text-sm text-gray-700"
                        >
                          <FaCheckCircle className="mt-1 shrink-0 text-emerald-600" />
                          <p className="leading-7">{point}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={closeMedia}
                        className="rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                      >
                        Done Viewing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedPaper && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={closeModal}
        >
          <div
            className="absolute inset-0 backdrop-blur-md"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          ></div>

          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-2xl leading-none text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            <h3 className="mb-2 text-2xl font-bold">{selectedPaper.title}</h3>
            <p className="mb-1 text-gray-700">{selectedPaper.authors}</p>
            <p className="mb-4 text-gray-600">
              {selectedPaper.journal}, {selectedPaper.year} | Volume {selectedPaper.volume} |
              Pages {selectedPaper.pages}
            </p>

            <div className="mb-6">
              <h4 className="mb-2 text-lg font-semibold">Abstract</h4>
              <p className="text-gray-700">{selectedPaper.abstract}</p>
            </div>

            {selectedPaper.methodology && (
              <div className="mb-6">
                <h4 className="mb-2 text-lg font-semibold">Methodology</h4>
                <p className="text-gray-700">{selectedPaper.methodology}</p>
              </div>
            )}

            {selectedPaper.keyFindings && (
              <div className="mb-6">
                <h4 className="mb-2 text-lg font-semibold">Key Findings</h4>
                <p className="text-gray-700">{selectedPaper.keyFindings}</p>
              </div>
            )}

            {selectedPaper.conclusion && (
              <div className="mb-6">
                <h4 className="mb-2 text-lg font-semibold">Conclusion</h4>
                <p className="text-gray-700">{selectedPaper.conclusion}</p>
              </div>
            )}

            {selectedPaper.funding && (
              <div className="mb-6">
                <h4 className="mb-2 text-lg font-semibold">Funding</h4>
                <p className="text-gray-700">{selectedPaper.funding}</p>
              </div>
            )}

            {selectedPaper.conflictOfInterest && (
              <div className="mb-6">
                <h4 className="mb-2 text-lg font-semibold">Conflict of Interest</h4>
                <p className="text-gray-700">{selectedPaper.conflictOfInterest}</p>
              </div>
            )}

            <div className="mb-4">
              <p className="text-sm text-gray-500">
                <span className="font-medium">DOI:</span> {selectedPaper.doi}
              </p>
            </div>

            <div className="text-right">
              <button
                onClick={closeModal}
                className="rounded bg-gray-200 px-6 py-2 text-gray-800 transition hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
    </>
  )
}

export default ResearchSection;